import { ShieldCheck, Zap, Users, Target, Sparkles, ArrowRight, Terminal } from 'lucide-react';
import { FlipWord } from './FlipWord';
import { LightBeamButton } from './LightBeamButton';

const TypewriterText = ({ text, delayOffset = 0, className = "" }: { text: string, delayOffset?: number, className?: string }) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`inline-block opacity-0 ${className}`}
          style={{ 
            animation: `typeChar 0.1s forwards`,
            animationDelay: `${delayOffset + i * 45}ms` 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
};

export function HeroSection() {
  const line1 = "Verification, ";
  const line2 = "solved.";
  
  const delay1 = 150; 
  const delay2 = delay1 + (line1.length * 45);

  const flipWords = ["Build.", "Ship.", "Solve.", "Architect.", "Master."];

  return (
    <section id="hero" className="relative w-full min-h-screen pt-[140px] md:pt-[160px] pb-20 md:pb-24 overflow-hidden mesh-bg flex flex-col items-center justify-between">
      
      {/* ── Video Background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_145119_f4ec4d9f-3ecd-4116-baa3-26e8cf2df976.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none"
        style={{ transform: 'translateZ(0)' }}
      />

      <div className="relative z-10 w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center text-center">
        
        {/* ── Authentic Early Access Top Pill ── */}
        <div 
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] mb-8 transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          style={{ animation: 'fadeSlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[13px] font-semibold text-slate-800">
            <span className="text-[#1e5dd7] font-bold">Early Access Program</span> • Apply to join the developer cohort
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#1e5dd7] ml-0.5" />
        </div>

        {/* ── Main Content ── */}
        <div className="max-w-4xl flex flex-col items-center justify-center flex-1 relative z-20 w-full">
          <h1 className="display-font text-[36px] sm:text-[48px] md:text-[68px] lg:text-[76px] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-6 w-full px-2">
            <span className="inline-block whitespace-normal sm:whitespace-nowrap"><TypewriterText text={line1} delayOffset={delay1} /></span>
            <span className="inline-block whitespace-normal sm:whitespace-nowrap"><TypewriterText text={line2} delayOffset={delay2} className="text-gradient" /></span>
            <br />
            <span className="inline-flex items-baseline flex-wrap justify-center gap-x-3 mt-1 sm:mt-2">
              <span className="text-slate-900">Prove what you can</span>
              <span className="text-[#1e5dd7] font-black inline-block text-left">
                <FlipWord 
                  words={flipWords} 
                  interval={2400} 
                  duration={350} 
                  wordClassName="text-[#1e5dd7] drop-shadow-sm" 
                />
              </span>
            </span>
          </h1>
          
          <p className="text-[17px] sm:text-[19px] md:text-[21px] text-slate-600 leading-[1.6] max-w-2xl mb-8 md:mb-10 reveal-base is-visible font-normal px-4" style={{ transitionDelay: '100ms' }}>
            The traditional resume is broken. SkillMint evaluates your actual code and architecture in real-world environments—giving you an authentic, verifiable proof of competence.
          </p>

          {/* ── High-Converting CTA Area ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-base is-visible w-full sm:w-auto mb-10" style={{ transitionDelay: '200ms' }}>
            <LightBeamButton
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-9 py-4 text-[16px]"
              gradientColors={['#1e5dd7', '#60a5fa', '#3b82f6']}
              glowColor="rgba(30, 93, 215, 0.45)"
            >
              <span>Request Early Access</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </LightBeamButton>
            
            <button
              onClick={() => document.querySelector('#bento')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-4 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 text-[15px] font-semibold border border-slate-200 shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
            >
              Explore Verification Engine
            </button>
          </div>

          {/* ── Genuine Mission Statement Badge ── */}
          <div className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm font-medium mb-12 bg-white/60 px-4 py-2 rounded-full border border-slate-200/60 shadow-2xs">
            <Terminal className="w-4 h-4 text-[#1e5dd7]" />
            <span>Merit-first assessment • Built for developers, engineers, and creators</span>
          </div>
        </div>

        {/* ── Authority & Verifiable Capability Badges ── */}
        <div className="w-full flex flex-wrap justify-center gap-3.5 md:gap-4 mt-4 mb-4 relative z-10">
          {[
            { icon: <ShieldCheck className="w-5 h-5 text-blue-600" />, label: 'AI Proctor & Code Sandbox', glow: 'shadow-[0_8px_30px_rgba(59,130,246,0.25)] border-blue-500/40' },
            { icon: <Zap className="w-5 h-5 text-purple-600" />, label: 'Objective Proof Credentials', glow: 'shadow-[0_8px_30px_rgba(168,85,247,0.25)] border-purple-500/40' },
            { icon: <Users className="w-5 h-5 text-emerald-600" />, label: 'Direct Talent Matching', glow: 'shadow-[0_8px_30px_rgba(16,185,129,0.25)] border-emerald-500/40' },
            { icon: <Target className="w-5 h-5 text-orange-600" />, label: 'Real Production Tasks', glow: 'shadow-[0_8px_30px_rgba(249,115,22,0.25)] border-orange-500/40' },
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-row items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1"
              style={{ 
                animation: `fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                animationDelay: `${i * 120 + 200}ms`,
                opacity: 0
              }}
            >
              <div 
                className={`absolute inset-0 rounded-full border opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 pointer-events-none ${item.glow}`}
              />
              
              <div className="relative z-10 bg-slate-50 rounded-full p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <span className="relative z-10 text-[13.5px] font-bold text-slate-800 tracking-tight transition-colors duration-300 group-hover:text-blue-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default HeroSection;
