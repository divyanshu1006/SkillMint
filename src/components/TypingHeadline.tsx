/**
 * TypingHeadline
 * Reveals the Skill Mint hero headline character-by-character at 50ms per char.
 * Handles multi-segment text: plain, newlines, and styled spans (mint underline).
 *
 * Strategy: all characters are rendered at all times so the layout never shifts.
 * Invisible chars use opacity:0 — they still hold their space.
 * The special "Knew" segment's border-bottom appears once the whole word is visible.
 */
import { useEffect, useRef, useState } from 'react';

type Segment = {
  text: string;
  underline?: boolean;  // border-b-4 border-[#10B981]
  newline?: boolean;    // renders as <br />
};

interface TypingHeadlineProps {
  /** Segments that make up the headline, in order. */
  segments: Segment[];
  /** Milliseconds per character reveal (default 50ms). */
  charDelay?: number;
  /** Milliseconds before the first character appears. */
  startDelay?: number;
  /** Tailwind / style className applied to the wrapping <h1>. */
  className?: string;
  style?: React.CSSProperties;
  /** Optional callback fired once all characters are visible. */
  onComplete?: () => void;
}

export function TypingHeadline({
  segments,
  charDelay = 50,
  startDelay = 0,
  className = '',
  style,
  onComplete,
}: TypingHeadlineProps) {
  // Build a flat character count table: [segIdx, charIdx] for each position
  const totalChars = segments.reduce((acc, s) => acc + (s.newline ? 0 : s.text.length), 0);
  const [visibleCount, setVisibleCount] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setVisibleCount(0);
    let count = 0;
    let rafId = 0;
    let startTimer: ReturnType<typeof setTimeout>;

    startTimer = setTimeout(() => {
      const tick = () => {
        count++;
        setVisibleCount(count);
        if (count >= totalChars) {
          onCompleteRef.current?.();
          return;
        }
        rafId = window.setTimeout(tick, charDelay);
      };
      rafId = window.setTimeout(tick, charDelay);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(rafId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charDelay, startDelay, totalChars]);

  // Render
  let charsCounted = 0;
  const rendered = segments.map((seg, si) => {
    if (seg.newline) {
      return <br key={`br-${si}`} />;
    }

    const segStart = charsCounted;
    charsCounted += seg.text.length;
    const segEnd = charsCounted;

    // How many chars in THIS segment are visible?
    const segVisible = Math.max(0, Math.min(visibleCount - segStart, seg.text.length));
    const wordFullyVisible = segVisible === seg.text.length;

    // Render each character as its own span so we can control opacity individually
    const chars = seg.text.split('').map((ch, ci) => {
      const globalIdx = segStart + ci;
      const isVisible = globalIdx < visibleCount;
      return (
        <span
          key={ci}
          aria-hidden={!isVisible}
          style={{
            opacity: isVisible ? 1 : 0,
            // No transition — the 50ms timer already controls pacing
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      );
    });

    if (seg.underline) {
      return (
        <span
          key={si}
          className="inline-block relative"
          style={{
            borderBottom: wordFullyVisible ? '4px solid #10B981' : '4px solid transparent',
            paddingBottom: '2px',
            // Smooth underline reveal
            transition: 'border-color 0.25s ease',
          }}
        >
          {chars}
        </span>
      );
    }

    // Invisible: need segEnd for the key to avoid unused var warning
    void segEnd;
    return <span key={si}>{chars}</span>;
  });

  return (
    <h1 className={className} style={style}>
      {rendered}
    </h1>
  );
}
