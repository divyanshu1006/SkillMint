import React from 'react';

export interface LightBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  gradientColors?: [string, string, string];
  glowColor?: string;
}

/**
 * LightBeamButton
 *
 * A high-performance button with a rotating light beam border effect.
 * Uses CSS @property for ultra-smooth 60fps gradient rotation animations on the border.
 */
export function LightBeamButton({
  children,
  className = '',
  onClick,
  gradientColors = ['#2563eb', '#60a5fa', '#93c5fd'],
  glowColor = 'rgba(37, 99, 235, 0.4)',
  ...props
}: LightBeamButtonProps) {
  const gradientString = `conic-gradient(from var(--gradient-angle), transparent 0%, ${gradientColors[0]} 35%, ${gradientColors[1]} 50%, ${gradientColors[2]} 65%, transparent 80%, transparent 100%)`;

  return (
    <>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes border-spin {
          from { --gradient-angle: 0deg; }
          to { --gradient-angle: 360deg; }
        }
        .animate-border-spin {
          animation: border-spin 2.5s linear infinite;
        }
      `}</style>

      <button
        onClick={onClick}
        className={`group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 py-4 text-[15px] font-bold text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-slate-850 cursor-pointer ${className}`}
        style={{
          boxShadow: `0 8px 30px -4px ${glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`,
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2.5 tracking-wide">
          {children}
        </span>

        {/* Gradient Border Simulation */}
        <div
          className="absolute inset-0 -z-10 rounded-full p-[1.5px] animate-border-spin"
          style={{
            '--gradient-angle': '0deg',
            background: gradientString,
          } as React.CSSProperties}
        />

        {/* Inner Background (ensures high contrast readability) */}
        <div className="absolute inset-[1.5px] -z-10 rounded-full bg-[#0b1329] group-hover:bg-[#0f1b3b] transition-colors duration-300" />

        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.25)_0%,transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>
    </>
  );
}

export default LightBeamButton;
