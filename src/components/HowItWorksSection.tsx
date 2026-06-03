import { useState } from 'react';
import { useInView } from '../hooks';

const steps = [
  {
    number: '01',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="12" r="5" stroke="#0A66C2" strokeWidth="1.5" />
        <path d="M8 30C8 24.477 12.477 20 18 20s10 4.477 10 10" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 15l2 2 4-4" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sign Up & Select Your Skills',
    body: 'Tell us what you know: Python, web dev, data, design. Add your GitHub or project links — whatever you\'ve built.',
  },
  {
    number: '02',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="24" height="24" rx="5" stroke="#0A66C2" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="4" stroke="#0A66C2" strokeWidth="1.5" />
        <circle cx="25" cy="25" r="4" stroke="#0A66C2" strokeWidth="1.5" />
        <line x1="22" y1="22" x2="27.5" y2="27.5" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Complete Your Verification',
    body: 'Our AI evaluates your real projects, tracks your learning curve, and tests how you handle pressure. No MCQs. No faking.',
  },
  {
    number: '03',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M18 4L21.5 11.5L29.5 12.5L24 18L25.5 26L18 22.5L10.5 26L12 18L6.5 12.5L14.5 11.5L18 4Z" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 18L16 21L23 14" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Get Your Skill Mint Badge',
    body: 'A verified, shareable credential. Attach it to every application — once, for all. Let employers trust what you can do.',
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useInView(0.1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="bg-[#F0FDF4] py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex justify-center mb-6 reveal-base ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#6EE7B7] bg-white text-[#065F46] text-[13px] font-medium">
            How It Works
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`text-center text-[clamp(26px,4vw,40px)] font-bold text-[#0F172A] mb-16 leading-[1.2] max-w-[600px] mx-auto reveal-base ${isVisible ? 'is-visible' : ''}`}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", transitionDelay: '100ms' }}
        >
          Three Steps to a Credential That Speaks for You
        </h2>

        {/* Steps container */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center gap-12 lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex lg:flex-row items-start w-full lg:items-center">
              {/* Step card */}
              <div
                className={`flex flex-col items-center text-center max-w-[280px] mx-auto reveal-base ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Number circle */}
                <div
                  className="w-16 h-16 rounded-full border-2 border-[#0A66C2] flex items-center justify-center mb-4 transition-all duration-200"
                  style={{
                    background: hoveredStep === i ? '#0A66C2' : 'white',
                  }}
                >
                  <span
                    className="text-[22px] font-extrabold transition-colors duration-200"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      color: hoveredStep === i ? 'white' : '#0A66C2',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="mb-4 transition-transform duration-200"
                  style={{ transform: hoveredStep === i ? 'scale(1.1)' : 'scale(1)' }}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-[18px] font-bold text-[#0F172A] mb-2"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-[15px] text-[#475569] leading-[1.6] text-center">
                  {step.body}
                </p>
              </div>

              {/* Connector line between steps (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex flex-1 items-center px-6" aria-hidden="true">
                  <div className="w-full overflow-hidden" style={{ height: '2px' }}>
                    <div
                      className="h-0 border-t-2 border-dashed border-[#6EE7B7]"
                      style={{
                        width: isVisible ? '100%' : '0%',
                        transition: isVisible ? `width 1.2s ease ${600 + i * 150}ms` : 'none',
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Mobile vertical connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center w-full mt-4 mb-4" aria-hidden="true">
                  <div className="w-0 border-l-2 border-dashed border-[#6EE7B7]" style={{ height: '40px' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
