import { ShieldCheck, Zap, Globe, Trophy } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="w-full bg-[#f8f9fc] py-24 md:py-32 px-6 overflow-hidden border-t border-[#e5e7eb]/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Content & Form */}
        <div className="flex-1 flex flex-col items-start reveal-left is-visible">
          <h2 className="display-font text-[48px] md:text-[60px] font-bold text-[#111827] leading-[1.1] mb-6 tracking-tight">
            Join the <span className="text-[#1e5dd7]">elite tier</span> of global talent.
          </h2>
          <p className="text-[#6b7280] text-[18px] mb-10 max-w-lg leading-[1.6] font-medium">
            Stop getting rejected by broken ATS algorithms. Verify your skills once, and get headhunted by the world's best engineering teams.
          </p>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-2 gap-6 mb-12 w-full max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1e5dd7] border border-[#e5e7eb]/50">
                <ShieldCheck className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#111827] font-semibold text-sm">Verified Profile</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1e5dd7] border border-[#e5e7eb]/50">
                <Zap className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#111827] font-semibold text-sm">Instant Matches</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1e5dd7] border border-[#e5e7eb]/50">
                <Globe className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#111827] font-semibold text-sm">Global Reach</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1e5dd7] border border-[#e5e7eb]/50">
                <Trophy className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#111827] font-semibold text-sm">Top 1% Network</span>
            </div>
          </div>

          {/* The Waitlist Form embedded here */}
          <div className="w-full max-w-lg">
            <WaitlistForm variant="light" onSuccess={() => {}} />
            <p className="text-[#9ca3af] text-[13px] font-medium mt-4 ml-2">Free early access for the first 1,000 users.</p>
          </div>
        </div>

        {/* Right Column: 3D Floating Metric Card */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex items-center justify-center relative reveal-right is-visible">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-[#1e5dd7] opacity-[0.08] blur-[80px] rounded-full" />
          
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-[32px] bg-gradient-to-br from-[#5b9ffb] to-[#1448be] p-1 shadow-[0_20px_60px_rgba(30,93,215,0.25)] animate-float tilt-card">
            <div className="w-full h-full rounded-[30px] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center border border-white">
              <div className="w-20 h-20 rounded-2xl bg-[#f0f1f5] flex items-center justify-center mb-8 border border-[#e5e7eb] shadow-sm">
                <Trophy className="w-10 h-10 text-[#1e5dd7]" strokeWidth={2} />
              </div>
              <h3 className="text-[#111827] text-2xl font-bold mb-2 tracking-tight">Your actual skill.</h3>
              <p className="text-[#6b7280] font-medium mb-8">Not your resume.</p>
              
              <div className="w-full bg-[#f8f9fc] rounded-2xl p-5 border border-[#e5e7eb]/50 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#6b7280] text-sm font-semibold">Match Rate</span>
                  <span className="text-[#1e5dd7] font-bold">98%</span>
                </div>
                <div className="w-full bg-white rounded-full h-2.5 overflow-hidden shadow-inner border border-[#e5e7eb]">
                  <div className="bg-[#1e5dd7] h-full rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
