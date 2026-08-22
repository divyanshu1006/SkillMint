import { useInView, useCountUp } from '../hooks';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function StatItem({ value, suffix, label, isVisible, delay }: StatItemProps) {
  const count = useCountUp(value, 1500, isVisible);

  return (
    <div
      className="flex flex-col items-center reveal-base"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      <div className="flex items-end gap-0 mb-2">
        <span
          className="text-[44px] sm:text-[48px] font-extrabold text-white leading-none tracking-tight"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {count}
        </span>
        <span
          className="text-[44px] sm:text-[48px] font-extrabold text-[#60a5fa] leading-none"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {suffix}
        </span>
      </div>
      {/* Blue underline */}
      <div className="w-8 h-[3px] rounded-full bg-[#1e5dd7] mb-3" />
      <p className="text-[13.5px] text-[#94A3B8] text-center max-w-[130px] font-medium leading-tight">{label}</p>
    </div>
  );
}

const stats = [
  { value: 75, suffix: '%', label: 'Resumes Auto-Rejected by ATS' },
  { value: 6, suffix: 's', label: 'Average Initial Review Time' },
  { value: 88, suffix: '%', label: 'Signal Lost in Unverified CVs' },
  { value: 100, suffix: '%', label: 'Objective Code Assessment' },
];

export function StatsSection() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section id="stats" className="bg-[#0A0F1E] py-[72px]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <h2
          className={`text-[clamp(20px,3vw,28px)] font-bold text-white text-center max-w-[520px] mx-auto mb-12 leading-[1.3] reveal-base ${isVisible ? 'is-visible' : ''}`}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          The Industry Data Behind the Broken Hiring Paradigm.
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center ${i < stats.length - 1 ? 'md:border-r md:border-[#1E293B]' : ''}`}
            >
              <div className="flex-1 px-4 sm:px-6 py-2">
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  isVisible={isVisible}
                  delay={i * 150}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
