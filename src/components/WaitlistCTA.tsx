import { ShieldCheck, Zap, Globe, Trophy, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="w-full bg-[#f8f9fc] py-20 md:py-28 px-4 sm:px-6 md:px-10 overflow-hidden border-t border-[#e5e7eb]/70">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Content & Form */}
        <div className="flex-1 w-full flex flex-col items-start reveal-left is-visible">
          
          {/* Authentic Early Access Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1e5dd7] text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Early Access Beta</span>
          </div>

          <h2 className="display-font text-[36px] sm:text-[44px] md:text-[54px] font-extrabold text-[#111827] leading-[1.12] mb-4 tracking-tight">
            Prove your actual skill. <br />
            <span className="text-[#1e5dd7]">Skip the resume filters.</span>
          </h2>
          <p className="text-[#4b5563] text-[16px] sm:text-[18px] mb-8 max-w-xl leading-[1.6] font-normal">
            Stop losing opportunities to keyword scanners and resume noise. Get evaluated on real-world engineering benchmarks and showcase your authentic capability.
          </p>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-xl">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1e5dd7] shrink-0">
                <ShieldCheck className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-[#111827] font-bold text-xs sm:text-sm">Verified Credentials</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1e5dd7] shrink-0">
                <Zap className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-[#111827] font-bold text-xs sm:text-sm">Objective Evaluation</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1e5dd7] shrink-0">
                <Globe className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-[#111827] font-bold text-xs sm:text-sm">Global Portability</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1e5dd7] shrink-0">
                <Trophy className="w-4 h-4" strokeWidth={2.5} />
              </div>
              <span className="text-[#111827] font-bold text-xs sm:text-sm">Merit-First Signal</span>
            </div>
          </div>

          {/* The Enhanced Waitlist Form */}
          <div className="w-full max-w-xl">
            <WaitlistForm onSuccess={() => {}} />
            <div className="flex items-center gap-4 text-slate-400 text-xs mt-4 ml-1">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" /> 100% Privacy Protected
              </span>
              <span>•</span>
              <span>No Spam</span>
              <span>•</span>
              <span>Free Beta Assessment</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Floating Credential Concept Card */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex items-center justify-center relative reveal-right is-visible">
          {/* Decorative background glow */}
          <div className="absolute inset-0 bg-[#1e5dd7] opacity-[0.10] blur-[90px] rounded-full" />
          
          <div className="relative w-full max-w-sm rounded-[32px] bg-gradient-to-br from-[#3b82f6] via-[#1e5dd7] to-[#0e3b9c] p-1.5 shadow-[0_25px_70px_rgba(30,93,215,0.25)] animate-float tilt-card">
            <div className="w-full h-full rounded-[28px] bg-white/95 backdrop-blur-md flex flex-col items-center justify-between p-7 sm:p-8 text-center border border-white">
              
              {/* Header Badge */}
              <div className="w-full flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1e5dd7] text-white flex items-center justify-center text-xs font-black">
                    SM
                  </div>
                  <span className="text-xs font-bold text-slate-800 tracking-tight">Verified Credential</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#1e5dd7] text-[11px] font-bold border border-blue-200">
                  Preview
                </span>
              </div>

              <div className="w-18 h-18 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 border border-blue-100 shadow-inner">
                <Trophy className="w-9 h-9 text-[#1e5dd7]" strokeWidth={2} />
              </div>
              
              <h3 className="text-slate-900 text-2xl font-bold mb-1 tracking-tight">Real Code. Zero Noise.</h3>
              <p className="text-slate-500 text-sm font-medium mb-6">Objective assessment of real tasks</p>
              
              {/* Metric Breakdown */}
              <div className="w-full space-y-3 bg-[#f8f9fc] rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-left">
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1">
                    <span className="text-slate-600">Architecture & System Design</span>
                    <span className="text-[#1e5dd7] font-bold">Verified</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-slate-200">
                    <div className="bg-[#1e5dd7] h-full rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-1">
                    <span className="text-slate-600">Live Code Execution & Tests</span>
                    <span className="text-emerald-600 font-bold">Verified</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2 overflow-hidden border border-slate-200">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
              </div>

              {/* Verified Trust Stamp */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standardized, tamper-proof credential</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WaitlistCTA;
