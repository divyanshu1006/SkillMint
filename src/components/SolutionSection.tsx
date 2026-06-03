import { useInView } from '../hooks';

const featureCards = [
  {
    iconBg: '#EFF6FF',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="#0A66C2" strokeWidth="1.5" />
        <circle cx="14" cy="11" r="3" stroke="#0A66C2" strokeWidth="1.5" />
        <path d="M8 21C8 18.2386 10.2386 16 13 16H15C17.7614 16 20 18.2386 20 21" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 8L20 10L24 6" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI-Powered Assessment',
    body: 'Evaluated against real-world project tasks — not multiple choice. Our agents review what you build, how you learn, and how you adapt.',
    tagBg: '#F0FDF4',
    tagText: '#0A66C2',
    tagLabel: 'Powered by AI agents',
    hoverBorder: '#60A5FA',
    borderAccent: '#0A66C2',
  },
  {
    iconBg: '#EFF6FF',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 20L10 12L14 16L18 8L24 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="14" r="2" fill="#3B82F6" />
      </svg>
    ),
    title: 'Beyond the Resume',
    body: 'We measure learning velocity, pressure handling, and your ability to close skill gaps fast. Stats that actually predict performance.',
    tagBg: '#EFF6FF',
    tagText: '#1D4ED8',
    tagLabel: '6 performance metrics',
    hoverBorder: '#93C5FD',
    borderAccent: '#3B82F6',
  },
  {
    iconBg: '#EFF6FF',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L16.5 8.5L22.5 9.5L18.5 13.5L19.5 19.5L14 17L8.5 19.5L9.5 13.5L5.5 9.5L11.5 8.5L14 3Z" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 14.5L12.5 16.5L17.5 11.5" stroke="#0A66C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Universal Credential',
    body: 'One verified Skill Mint badge. Attach it to any job application, any platform, any time. It speaks for you before a recruiter reads your name.',
    tagBg: '#F0FDF4',
    tagText: '#0A66C2',
    tagLabel: 'Works everywhere',
    hoverBorder: '#60A5FA',
    borderAccent: '#0A66C2',
  },
];

export function SolutionSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="solution" className="bg-white py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex justify-center mb-6 reveal-base ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#60A5FA] bg-[#EFF6FF] text-[#1E3A8A] text-[13px] font-medium">
            The Solution
          </span>
        </div>

        {/* Section headline */}
        <h2
          className={`text-center text-[clamp(28px,4vw,40px)] font-bold text-[#0F172A] mb-4 leading-[1.2] reveal-base ${isVisible ? 'is-visible' : ''}`}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", transitionDelay: '100ms' }}
        >
          Verify Once. Trust Everywhere.
        </h2>

        {/* Sub-headline */}
        <p
          className={`text-[18px] text-[#475569] text-center max-w-[560px] mx-auto mb-16 leading-[1.7] reveal-base ${isVisible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >
          Skill Mint replaces guesswork with a verified skill credential — assessed by AI, grounded in real work,
          trusted by employers.
        </p>

        {/* Three feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, i) => (
            <div
              key={card.title}
              className={`group relative bg-white rounded-2xl p-8 border-[1.5px] border-[#E2E8F0] transition-colors duration-300 hover:shadow-xl cursor-default reveal-base ${isVisible ? 'is-visible' : ''}`}
              style={{
                transitionDelay: `${200 + i * 100}ms`,
                transformStyle: 'preserve-3d',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseMove={e => {
                const el = e.currentTarget as HTMLElement;
                const rect = el.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
                el.style.borderColor = card.hoverBorder;
                el.style.background = '#F0FDF4';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px)';
                el.style.borderColor = '#E2E8F0';
                el.style.background = 'white';
              }}
            >
              {/* Top hover gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-10 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, rgba(240,253,244,0.6), transparent)' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: card.iconBg }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[20px] font-semibold text-[#0F172A] mb-3"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p className="text-[15px] text-[#475569] leading-[1.65] mb-5">{card.body}</p>

              {/* Bottom tag */}
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium"
                style={{ background: card.tagBg, color: card.tagText }}
              >
                {card.tagLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
