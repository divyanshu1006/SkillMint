import { useState } from 'react';
import { useInView } from '../hooks';

const jobSeekerChecklistItems = [
  'Verify skills once, use across all applications',
  'Get recognized from any college, any city',
  'Show learning speed, not just what you know today',
  'Free to join during beta',
];

const hiringTeamChecklistItems = [
  'Pre-verified profiles — skip the screening call',
  'Diverse talent beyond top-10 colleges',
  'Reduce time-to-hire by up to 60%',
  'Early partner access — shape how we build this',
];

const candidateSkillTags = ['Python', 'React', 'ML Basics'];

const recruiterCandidates = [
  { initial: 'A', color: '#6366F1', name: 'Arjun K.', role: 'Full Stack Dev', score: 90 },
  { initial: 'P', color: '#0A66C2', name: 'Priya S.', role: 'ML Engineer', score: 82 },
  { initial: 'R', color: '#F59E0B', name: 'Rohan M.', role: 'Product Design', score: 76 },
];

function ChecklistItem({ text, delay }: { text: string; delay: number }) {
  return (
    <li
      className="flex items-start gap-3 reveal-base is-visible"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0A66C2] flex items-center justify-center mt-0.5">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M2 5L4.5 7.5L8.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-[15px] text-[#0F172A]">{text}</span>
    </li>
  );
}

export function AudienceSection() {
  const [activeTab, setActiveTab] = useState<'seekers' | 'hiring'>('seekers');
  const { ref, isVisible } = useInView(0.1);
  const [transitioning, setTransitioning] = useState(false);

  const switchTab = (tab: 'seekers' | 'hiring') => {
    if (tab === activeTab) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
    }, 200);
  };

  return (
    <section id="for-you" className="bg-white py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Toggle pill switcher */}
        <div className={`flex justify-center mb-16 reveal-base ${isVisible ? 'is-visible' : ''}`}>
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#F1F5F9]">
            <button
              onClick={() => switchTab('seekers')}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-1 ${
                activeTab === 'seekers'
                  ? 'bg-white shadow-md text-[#0F172A] font-semibold'
                  : 'text-[#94A3B8]'
              }`}
            >
              For Job Seekers
            </button>
            <button
              onClick={() => switchTab('hiring')}
              className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-1 ${
                activeTab === 'hiring'
                  ? 'bg-white shadow-md text-[#0F172A] font-semibold'
                  : 'text-[#94A3B8]'
              }`}
            >
              For Hiring Teams
            </button>
          </div>
        </div>

        {/* Content panels */}
        <div
          className="transition-all duration-200"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning
              ? `translateX(${activeTab === 'seekers' ? '-12px' : '12px'})`
              : 'translateX(0)',
          }}
        >
          {activeTab === 'seekers' ? (
            /* Panel A - Job Seekers */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left content */}
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EFF6FF] text-[#065F46] text-[13px] font-medium mb-5">
                  For Job Seekers
                </span>
                <h2
                  className="text-[clamp(26px,3.5vw,36px)] font-bold text-[#0F172A] mb-5 leading-[1.2]"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Stop Rewriting Your Resume. Start Proving Your Skills.
                </h2>
                <p className="text-[16px] text-[#475569] leading-[1.7] mb-7">
                  You've built real things. You've learned on your own. But ATS bots only see keywords — not your
                  GitHub commits, not your projects, not your growth. Skill Mint gives you one verified credential
                  that proves what you can actually do.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {jobSeekerChecklistItems.map((item, i) => (
                    <ChecklistItem key={item} text={item} delay={i * 50} />
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-7 py-3 rounded-full bg-[#0A66C2] text-white text-[15px] font-semibold hover:bg-[#004182] hover:scale-105 transition-all duration-200 shadow-md shadow-blue-200/50 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2"
                >
                  Get Early Access →
                </button>
              </div>

              {/* Right visual — candidate card */}
              <div className="flex justify-center">
                <div
                  className="w-full max-w-[320px] bg-white rounded-2xl shadow-xl border border-[#E2E8F0] p-6 float-anim"
                  aria-label="Sample candidate profile card"
                >
                  {/* Avatar + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-[16px] font-bold flex-shrink-0">
                      P
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#0F172A]">Priya S.</p>
                      <p className="text-[12px] text-[#94A3B8]">CS Student · Tier-3 College</p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="border-t border-[#E2E8F0] mb-4" />

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {candidateSkillTags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#F1F5F9] text-[#0F172A] text-[12px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Verified badge */}
                  <div
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#EFF6FF] mb-3 glow-pulse"
                    style={{ boxShadow: '0 0 12px rgba(16,185,129,0.25)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M9 2L10.8 6.5L15.5 7.2L12 10.5L12.9 15.2L9 13L5.1 15.2L6 10.5L2.5 7.2L7.2 6.5L9 2Z" fill="#0A66C2" />
                      <path d="M6.5 9L8.5 11L12 7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] font-bold text-[#065F46]">Skill Mint Verified</span>
                  </div>

                  <p className="text-[11px] text-[#94A3B8] text-center">Designed for modern engineering teams</p>
                </div>
              </div>
            </div>
          ) : (
            /* Panel B - Hiring Teams */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left visual — recruiter dashboard */}
              <div className="flex justify-center order-2 lg:order-1">
                <div
                  className="w-full max-w-[340px] bg-white rounded-2xl shadow-xl p-6 border border-[#E2E8F0] float-anim"
                  aria-label="Skill Mint recruiter dashboard preview"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[14px] font-bold text-[#0F172A]">Skill Mint Pipeline</p>
                    <span className="px-2.5 py-1 rounded-full bg-[#EFF6FF] text-[#0A66C2] text-[11px] font-semibold">
                      3 verified
                    </span>
                  </div>

                  {/* Candidate rows */}
                  <div className="flex flex-col gap-4">
                    {recruiterCandidates.map((c, i) => (
                      <div key={c.name} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0"
                          style={{ background: c.color }}
                        >
                          {c.initial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div>
                              <span className="text-[13px] font-medium text-[#0F172A]">{c.name}</span>
                              <span className="text-[11px] text-[#94A3B8] ml-1">· {c.role}</span>
                            </div>
                            <span className="flex-shrink-0 px-2 py-0.5 rounded-full bg-[#EFF6FF] text-[#0A66C2] text-[10px] font-semibold">
                              Verified
                            </span>
                          </div>
                          <div className="w-full h-[3px] rounded-full bg-[#F1F5F9] overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[#0A66C2] transition-all duration-1000"
                              style={{
                                width: `${c.score}%`,
                                transitionDelay: `${i * 200}ms`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[12px] text-[#94A3B8] italic text-center mt-4">Save 8hrs/week on screening</p>
                </div>
              </div>

              {/* Right content */}
              <div className="order-1 lg:order-2">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFF7ED] text-[#9A3412] text-[13px] font-medium mb-5">
                  For Hiring Teams
                </span>
                <h2
                  className="text-[clamp(26px,3.5vw,36px)] font-bold text-[#0F172A] mb-5 leading-[1.2]"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Find Real Talent Faster. Trust the Signal.
                </h2>
                <p className="text-[16px] text-[#475569] leading-[1.7] mb-7">
                  Stop drowning in unverified CVs. Skill Mint-verified candidates come with a proven AI-assessed
                  capability profile — so your team can focus on fit, not filtering. Access builders from every
                  background.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {hiringTeamChecklistItems.map((item, i) => (
                    <ChecklistItem key={item} text={item} delay={i * 50} />
                  ))}
                </ul>
                <a
                  href="mailto:hello@skillmint.in"
                  className="inline-flex items-center px-7 py-3 rounded-full bg-white border-[1.5px] border-[#10B981] text-[#10B981] text-[15px] font-semibold hover:bg-[#ECFDF5] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2"
                >
                  Partner With Us →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
