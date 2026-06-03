import { useInView, useCountUp } from '../hooks';

function CountUpStat({ value, suffix, isVisible }: { value: number; suffix?: string; isVisible: boolean }) {
  const count = useCountUp(value, 1500, isVisible);
  return (
    <span>
      {count}{suffix}
    </span>
  );
}

const painTagsCard1 = ['ATS Rejection', 'Resume Fatigue', 'Opportunity Lost'];
const painTagsCard2 = ['Signal Noise', 'Missed Talent', 'Bias by Proxy'];

export function ProblemSection() {
  const { ref: sectionRef, isVisible } = useInView(0.1);

  return (
    <section id="problem" className="bg-[#F8FAFC] py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className={`flex justify-center mb-6 reveal-base ${isVisible ? 'is-visible' : ''}`}>
          <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#E2E8F0] bg-white text-[#475569] text-[13px] font-medium">
            The Problem
          </span>
        </div>

        {/* Section headline */}
        <h2
          className={`text-center text-[clamp(28px,4vw,40px)] font-bold text-[#0F172A] max-w-[600px] mx-auto mb-16 leading-[1.2] reveal-base ${isVisible ? 'is-visible' : ''}`}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", transitionDelay: '100ms' }}
        >
          The Hiring System Is Broken. For Everyone.
        </h2>

        {/* Two problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - Candidates */}
          <div
            className={`bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm border-l-4 border-l-[#EF4444] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal-left ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Pill */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FEF2F2] text-[#991B1B] text-[12px] font-medium mb-5">
              For Job Seekers
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#FEF2F2] flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Filter icon" aria-hidden="true">
                <path d="M3 4H21M6 8H18M9 12H15M11 16H13" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Title */}
            <h3
              className="text-[22px] font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              You Keep Getting Filtered Out
            </h3>

            {/* Animated stat */}
            <div className="mb-4">
              <div className="text-[52px] font-extrabold text-[#EF4444] leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                <CountUpStat value={75} suffix="%" isVisible={isVisible} />
              </div>
              <p className="text-[14px] text-[#475569] mt-1">of resumes never reach a human</p>
            </div>

            {/* Body */}
            <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
              Your GitHub projects, your learning, your work ethic — invisible to a keyword scanner. Not because
              you lack skill. Because the system wasn't built for you.
            </p>

            {/* Pain tags */}
            <div className="flex flex-wrap gap-2">
              {painTagsCard1.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#FEE2E2] text-[#991B1B] text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 - Companies */}
          <div
            className={`bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm border-l-4 border-l-[#F59E0B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal-right ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            {/* Pill */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFFBEB] text-[#92400E] text-[12px] font-medium mb-5">
              For Hiring Teams
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stack icon" aria-hidden="true">
                <rect x="3" y="5" width="18" height="3" rx="1" fill="#F59E0B" />
                <rect x="3" y="10.5" width="18" height="3" rx="1" fill="#F59E0B" opacity="0.7" />
                <rect x="3" y="16" width="18" height="3" rx="1" fill="#F59E0B" opacity="0.4" />
              </svg>
            </div>

            {/* Title */}
            <h3
              className="text-[22px] font-bold text-[#0F172A] mb-4"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              You're Drowning in Unverified Claims
            </h3>

            {/* Animated stat */}
            <div className="mb-4">
              <div className="text-[52px] font-extrabold text-[#F59E0B] leading-none" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                <CountUpStat value={6} suffix=" sec" isVisible={isVisible} />
              </div>
              <p className="text-[14px] text-[#475569] mt-1">spent per resume on average</p>
            </div>

            {/* Body */}
            <p className="text-[15px] text-[#475569] leading-[1.65] mb-6">
              500+ applications per role. No verified signal. You default to college brand and keyword proxies —
              and systematically miss the best people.
            </p>

            {/* Pain tags */}
            <div className="flex flex-wrap gap-2">
              {painTagsCard2.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-[11px] font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
