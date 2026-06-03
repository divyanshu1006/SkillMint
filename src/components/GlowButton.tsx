/**
 * GlowButton
 * A premium CTA button whose inner glow tracks the cursor position in real time.
 *
 * Technique:
 *  - `onMouseMove` writes --gx / --gy CSS variables (cursor position relative to button)
 *  - A ::before pseudo-element renders `radial-gradient(circle at var(--gx) var(--gy), …)`
 *    which creates a soft bloom that follows the mouse exactly
 *  - The right-arrow SVG nudges right on hover via `group-hover:translate-x-1`
 */
import { useRef, type MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  /** Tailwind size preset: 'sm' | 'md' | 'lg'. Default 'lg'. */
  size?: 'sm' | 'md' | 'lg';
  /** Accent colour used for glow (hex or CSS colour). Default Skill Mint #0A66C2. */
  glowColor?: string;
  className?: string;
  id?: string;
}

export function GlowButton({
  children,
  onClick,
  size = 'lg',
  glowColor = '#0A66C2',
  className = '',
  id,
}: GlowButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-[14px] gap-2',
    md: 'px-7 py-3.5 text-[15px] gap-2.5',
    lg: 'px-9 py-4 text-[17px] gap-3',
  }[size];

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--gx', `${e.clientX - rect.left}px`);
    btn.style.setProperty('--gy', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    // Reset to centre so next hover doesn't flash from the edge
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.setProperty('--gx', '50%');
    btn.style.setProperty('--gy', '50%');
  };

  return (
    <button
      ref={btnRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glow-btn group relative inline-flex items-center justify-center rounded-full font-semibold text-white overflow-hidden ${sizeStyles} ${className}`}
      style={{
        '--gx': '50%',
        '--gy': '50%',
        '--glow': glowColor,
        background: `linear-gradient(135deg, ${glowColor}ee 0%, ${glowColor}bb 100%)`,
        boxShadow: `0 0 0 0 ${glowColor}00`,
        transition: 'box-shadow 0.3s ease, transform 0.2s ease',
      } as React.CSSProperties}
    >
      {/* Glow disc — follows cursor via CSS vars */}
      <span
        className="glow-btn__disc"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          // The radial gradient is driven by CSS vars updated onMouseMove
          background:
            'radial-gradient(circle 90px at var(--gx) var(--gy), rgba(255,255,255,0.28) 0%, transparent 80%)',
          opacity: 0,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Top edge highlight — gives the button a lit-glass look */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '15%',
          right: '15%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Label */}
      <span className="relative z-10 tracking-wide">{children}</span>

      {/* Arrow — slides right on hover */}
      <span className="relative z-10 transition-transform duration-200 ease-out group-hover:translate-x-1">
        <ArrowRight
          strokeWidth={2}
          className="shrink-0"
          style={{ width: size === 'sm' ? 16 : size === 'md' ? 18 : 20, height: 'auto' }}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}
