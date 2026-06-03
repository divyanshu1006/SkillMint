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
          className="text-[48px] font-extrabold text-white leading-none"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {count}
        </span>
        <span
          className="text-[48px] font-extrabold text-white leading-none"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {suffix}
        </span>
      </div>
      {/* Mint underline */}
      <div className="w-8 h-[3px] rounded-full bg-[#0A66C2] mb-3" />
      <p className="text-[14px] text-[#94A3B8] text-center max-w-[120px]">{label}</p>
    </div>
  );
}

const stats = [
  { value: 500, suffix: '+', label: 'Beta Spots Available' },
  { value: 75, suffix: '%', label: 'Resumes Rejected by ATS' },
  { value: 8, suffix: 'hrs', label: 'Saved Per Hire Weekly' },
  { value: 3, suffix: 'x', label: 'Faster Time-to-Hire' },
];

export function StatsSection() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section id="stats" className="bg-[#0A0F1E] py-[72px]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <h2
          className={`text-[clamp(20px,3vw,28px)] font-bold text-white text-center max-w-[480px] mx-auto mb-12 leading-[1.3] reveal-base ${isVisible ? 'is-visible' : ''}`}
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          The Numbers Behind the Problem — And Our Solution.
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center ${i < stats.length - 1 ? 'border-r border-[#1E293B] last:border-r-0' : ''}`}
            >
              <div className="flex-1 px-6 py-2">
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
