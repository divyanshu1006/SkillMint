/**
 * FlipWord — Rolodex / slot-machine word switcher
 *
 * Physics:
 *  - Current word: rotateX(0°) → rotateX(-90°), transformOrigin TOP
 *    (card curls backward away from viewer at the top edge — like a Rolodex page lifting)
 *  - Incoming word: rotateX(90°) → rotateX(0°), transformOrigin BOTTOM
 *    (card flips up from below into the reading position)
 *
 * Layout rules (per spec):
 *  - inline-block so it lives inline with surrounding prose
 *  - text LEFT-ALIGNED inside the container — stays flush against preceding text
 *  - container width fixed to the longest word so no layout shift occurs
 *  - overflow: visible so the 3-D rotation isn't clipped
 *  - perspective + preserve-3d fully exposed
 */
import { useEffect, useRef, useState } from 'react';

interface FlipWordProps {
  /** Array of words / phrases to cycle through. */
  words: string[];
  /** Delay between flips in ms. Default 2600. */
  interval?: number;
  /** Duration of one flip transition in ms. Default 320. */
  duration?: number;
  /** Extra Tailwind classes applied to each word span (font, colour…). */
  wordClassName?: string;
}

export function FlipWord({
  words,
  interval = 2600,
  duration = 320,
  wordClassName = '',
}: FlipWordProps) {
  const [currIdx, setCurrIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1 % Math.max(words.length, 1));
  const [flipping, setFlipping] = useState(false);

  // Measure the longest word so we can pin the container width
  const longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b), '');
  const measureRef = useRef<HTMLSpanElement>(null);
  const [boxWidth, setBoxWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!measureRef.current) return;
    const ro = new ResizeObserver(() => {
      if (measureRef.current) setBoxWidth(measureRef.current.offsetWidth);
    });
    ro.observe(measureRef.current);
    setBoxWidth(measureRef.current.offsetWidth);
    return () => ro.disconnect();
  }, [longestWord]);

  useEffect(() => {
    if (words.length < 2) return;
    const handle = setInterval(() => {
      setFlipping(true);
      const reset = setTimeout(() => {
        setCurrIdx(i => (i + 1) % words.length);
        setNextIdx(i => (i + 2) % words.length);
        setFlipping(false);
      }, duration + 40);
      return () => clearTimeout(reset);
    }, interval);
    return () => clearInterval(handle);
  }, [words.length, interval, duration]);

  const ease   = `cubic-bezier(0.4, 0, 0.2, 1)`;
  const trans  = flipping ? `transform ${duration}ms ${ease}` : 'none';

  const sharedWordStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'left',
    whiteSpace: 'nowrap',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    transition: trans,
    willChange: 'transform',
  };

  return (
    <>
      {/* Ghost element — invisible, keeps the right width for the longest word */}
      <span
        ref={measureRef}
        aria-hidden="true"
        className={wordClassName}
        style={{
          visibility: 'hidden',
          position: 'absolute',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {longestWord}
      </span>

      {/* Flip stage */}
      <span
        aria-live="polite"
        aria-label={words[currIdx]}
        style={{
          display: 'inline-block',
          position: 'relative',
          width: boxWidth != null ? `${boxWidth}px` : `${longestWord.length * 0.58}em`,
          height: '1.1em',
          verticalAlign: 'baseline',
          perspective: '600px',
          perspectiveOrigin: '50% 50%',
          overflow: 'visible',    // never clip — 3D must breathe
        }}
      >
        {/* Current word — exits backward from the top */}
        <span
          aria-hidden="true"
          className={wordClassName}
          style={{
            ...sharedWordStyle,
            transform: flipping ? 'rotateX(-90deg)' : 'rotateX(0deg)',
            transformOrigin: 'center top',
          }}
        >
          {words[currIdx]}
        </span>

        {/* Incoming word — flips up from below */}
        <span
          className={wordClassName}
          style={{
            ...sharedWordStyle,
            transform: flipping ? 'rotateX(0deg)' : 'rotateX(90deg)',
            transformOrigin: 'center bottom',
          }}
        >
          {words[nextIdx]}
        </span>
      </span>
    </>
  );
}
