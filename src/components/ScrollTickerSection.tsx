/**
 * ScrollTickerSection
 *
 * A GSAP ScrollTrigger horizontal ticker-tape section placed near the end of the page.
 *
 * Mechanic:
 *  - The outer <section> is tall (height = ticker content width, so scrolling it
 *    translates 1:1 into horizontal movement).
 *  - A sticky inner container pins at the viewport top for the entire scroll distance.
 *  - GSAP animates the flex strip from x=0 to x=-(stripWidth - viewportWidth).
 *  - scrub:1 ties the animation perfectly to scroll speed — feels like a tape reel.
 *
 * Content (Skill Mint adaptation of the ticker-tape sentence):
 *  "In every career · discover the undeniable Real Skill · of earning pure
 *   Credentials · that bring Talent and Opportunity · Together"
 *
 * Inline visual elements (SVG ornaments, lucide icons) act as typographic
 * punctuation — not slide separators.
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles, ShieldCheck, BadgeCheck, TrendingUp, BrainCircuit, Rocket,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ── Inline SVG ornaments ──────────────────────────────────────────── */
function WaveCurve({ color = '#1e5dd7' }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 80 32"
      fill="none"
      aria-hidden="true"
      style={{ width: '3em', height: '0.75em', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path
        d="M4 16 C 18 4, 30 28, 44 16 S 64 4, 76 16"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function AsteriskMark({ color = '#1e5dd7' }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ width: '0.8em', height: '0.8em', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="2"  y1="7" x2="22" y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="7" x2="2"  y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowCurve({ color = 'rgba(17,24,39,0.15)' }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 56 24"
      fill="none"
      aria-hidden="true"
      style={{ width: '2.2em', height: '0.7em', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      <path d="M2 12 H50 M42 4 L52 12 L42 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Icon pill ─────────────────────────────────────────────────────── */
function IconPill({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e5dd7]/20 bg-[#1e5dd7]/5 text-[#1e5dd7] flex-shrink-0"
      style={{ fontSize: '0.42em', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
      aria-label={label}
    >
      <Icon style={{ width: '1.4em', height: '1.4em' }} strokeWidth={2} aria-hidden="true" />
      {label}
    </span>
  );
}

/* ── Ticker word styles ─────────────────────────────────────────────── */
const plain    = 'text-[#6b7280] font-normal';
const accent   = 'text-[#111827] font-bold tracking-tight';
const dimGap   = 'text-[#9ca3af]/40 font-thin select-none';

/* ── Full ticker strip ─────────────────────────────────────────────── */
function TickerStrip() {
  return (
    <>
      {/* === Sentence start === */}
      <span className={dimGap}>✦</span>
      <span className={plain}>In every</span>
      <span className={accent}>career</span>
      <AsteriskMark />
      <span className={plain}>discover the</span>
      <span className={accent}>undeniable</span>
      <WaveCurve />
      <IconPill icon={BrainCircuit} label="AI Engine" />

      <span className={plain}>Real</span>
      <span className={accent} style={{ color: '#1e5dd7' }}>Skill</span>
      <WaveCurve color="rgba(17,24,39,0.15)" />

      <span className={plain}>of earning</span>
      <span className={accent}>pure</span>
      <AsteriskMark color="rgba(17,24,39,0.15)" />
      <IconPill icon={ShieldCheck} label="Verified" />

      <span className={accent} style={{ color: '#1e5dd7' }}>Credentials</span>
      <ArrowCurve />

      <span className={plain}>that bring</span>
      <IconPill icon={BadgeCheck} label="Trusted" />
      <span className={accent}>Talent</span>
      <WaveCurve color="rgba(30,93,215,0.3)" />

      <span className={plain}>and</span>
      <span className={accent}>Opportunity</span>
      <AsteriskMark color="#1e5dd7" />
      <IconPill icon={TrendingUp} label="Forward" />

      <span className={accent} style={{ color: '#1e5dd7' }}>Together</span>
      <ArrowCurve color="#1e5dd7" />
      <IconPill icon={Rocket} label="Launch" />

      {/* === Separator before repeat === */}
      <span className={dimGap} style={{ letterSpacing: '0.3em', fontSize: '0.7em' }}>· · ·</span>

      {/* === Seamless repeat === */}
      <span className={dimGap}>✦</span>
      <span className={plain}>In every</span>
      <span className={accent}>career</span>
      <AsteriskMark />
      <span className={plain}>discover the</span>
      <span className={accent}>undeniable</span>
      <WaveCurve />
      <IconPill icon={BrainCircuit} label="AI Engine" />
      <span className={plain}>Real</span>
      <span className={accent} style={{ color: '#1e5dd7' }}>Skill</span>
      <WaveCurve color="rgba(17,24,39,0.15)" />
      <span className={plain}>of earning</span>
      <span className={accent}>pure</span>
      <AsteriskMark color="rgba(17,24,39,0.15)" />
      <IconPill icon={ShieldCheck} label="Verified" />
      <span className={accent} style={{ color: '#1e5dd7' }}>Credentials</span>
      <ArrowCurve />
      <span className={plain}>that bring</span>
      <IconPill icon={BadgeCheck} label="Trusted" />
      <span className={accent}>Talent</span>
      <WaveCurve color="rgba(30,93,215,0.3)" />
      <span className={plain}>and</span>
      <span className={accent}>Opportunity</span>
      <AsteriskMark color="#1e5dd7" />
      <IconPill icon={TrendingUp} label="Forward" />
      <span className={accent} style={{ color: '#1e5dd7' }}>Together</span>
      <ArrowCurve color="#1e5dd7" />
      <IconPill icon={Rocket} label="Launch" />
    </>
  );
}

/* ── Main export ───────────────────────────────────────────────────── */
export function ScrollTickerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky  = stickyRef.current;
    const strip   = stripRef.current;
    if (!section || !sticky || !strip) return;

    // Let browser lay out, then calculate distances
    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, strip.scrollWidth - window.innerWidth + 80); // +80 right padding

      gsap.to(strip, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: sticky,
          pinSpacing: false,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const FONT_STYLE: React.CSSProperties = {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: 'clamp(52px, 7vw, 110px)',
    lineHeight: 1,
    letterSpacing: '-0.03em',
  };

  return (
    <section
      ref={sectionRef}
      id="ticker"
      aria-label="Skill Mint mission statement"
      style={{
        background: '#ffffff',
        position: 'relative',
        borderTop: '1px solid rgba(229,231,235,0.5)',
      }}
    >
      {/* Sticky viewport — pinned by GSAP, 100vh */}
      <div
        ref={stickyRef}
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Left fade mask */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '8vw',
            background: 'linear-gradient(to right, #ffffff, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        {/* Right fade mask */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '8vw',
            background: 'linear-gradient(to left, #ffffff, transparent)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* The actual ticker strip — GSAP moves this left */}
        <div
          ref={stripRef}
          role="marquee"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(24px, 3vw, 56px)',
            paddingLeft: '6vw',
            paddingRight: '6vw',
            whiteSpace: 'nowrap',
            willChange: 'transform',
            ...FONT_STYLE,
          }}
        >
          <TickerStrip />
        </div>

        {/* Bottom scroll hint */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#9ca3af',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <span>scroll</span>
          <Sparkles style={{ width: 12, height: 12, color: '#1e5dd7' }} strokeWidth={2} />
          <span>to read</span>
        </div>
      </div>
    </section>
  );
}
