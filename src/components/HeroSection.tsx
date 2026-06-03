import { ShieldCheck, Zap, Users, Target } from 'lucide-react';


const TypewriterText = ({ text, delayOffset = 0, className = "" }: { text: string, delayOffset?: number, className?: string }) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`inline-block opacity-0 ${className}`}
          style={{ 
            animation: `typeChar 0.1s forwards`,
            animationDelay: `${delayOffset + i * 50}ms` 
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
  const line3 = "Prove what you can do.";
  
  const delay1 = 200; 
  const delay2 = delay1 + (line1.length * 50);
  const delay3 = delay2 + (line2.length * 50) + 300; // tiny pause before line 3

  return (
    <section id="hero" className="relative w-full min-h-screen pt-[160px] pb-24 overflow-hidden mesh-bg flex flex-col items-center">
      
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

      {/* ── Spotlight Cursor Effect ── */}
      {/* (In a full implementation, you'd track mouse X/Y and update a radial gradient position, 
          but for now we use a static central mesh gradient handled in index.css) */}
      <div className="relative z-10 w-full flex-1 max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        
        {/* ── Main Content ── */}
        <div className="max-w-4xl flex flex-col items-center justify-center flex-1 relative z-20 w-full">
          <h1 className="display-font text-[48px] md:text-[72px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6 w-full">
            <span className="whitespace-nowrap"><TypewriterText text={line1} delayOffset={delay1} /></span>
            <span className="whitespace-nowrap"><TypewriterText text={line2} delayOffset={delay2} className="text-gradient" /></span><br />
            <span className="whitespace-nowrap"><TypewriterText text={line3} delayOffset={delay3} /></span>
          </h1>
          
          <p className="text-[18px] md:text-[20px] text-slate-600 leading-[1.6] max-w-2xl mb-10 md:mb-12 reveal-base is-visible" style={{ transitionDelay: '100ms' }}>
            The resume is dead. Skill Mint uses AI to assess real-world ability—bypassing ATS filters and providing a credential that employers actually trust.
          </p>

          {/* ── CTA Button ── */}
          <div className="flex flex-col sm:flex-row items-center gap-4 reveal-base is-visible w-full sm:w-auto" style={{ transitionDelay: '200ms' }}>
            <button
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="pill-btn pill-btn-primary px-8 py-4 text-[16px] w-full sm:w-auto"
            >
              Request Early Access
            </button>
          </div>
        </div>

        {/* ── Bottom Row Glass Badges ── */}
        <div className="w-full flex flex-wrap justify-center gap-4 mt-12 mb-12 md:mb-16 relative z-10">
          {[
            { icon: <ShieldCheck className="w-5 h-5 text-blue-500" />, label: 'AI Monitored', glow: 'shadow-[0_8px_30px_rgba(59,130,246,0.3)] border-blue-500/50' },
            { icon: <Zap className="w-5 h-5 text-purple-500" />, label: 'Instant Results', glow: 'shadow-[0_8px_30px_rgba(168,85,247,0.3)] border-purple-500/50' },
            { icon: <Users className="w-5 h-5 text-emerald-500" />, label: 'Employer Ready', glow: 'shadow-[0_8px_30px_rgba(16,185,129,0.3)] border-emerald-500/50' },
            { icon: <Target className="w-5 h-5 text-orange-500" />, label: 'Real-world Tasks', glow: 'shadow-[0_8px_30px_rgba(249,115,22,0.3)] border-orange-500/50' },
          ].map((item, i) => (
            <div 
              key={i} 
              className="group relative flex flex-row items-center gap-3 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] cursor-pointer transition-transform duration-500 ease-out hover:-translate-y-1.5"
              style={{ 
                animation: `fadeSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                animationDelay: `${i * 150 + 200}ms`,
                opacity: 0 // Start hidden for the entrance animation
              }}
            >
              {/* Smooth Hover Glow Element (Fades in on hover) */}
              <div 
                className={`absolute inset-0 rounded-full border opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 pointer-events-none ${item.glow}`}
              />
              
              <div className="relative z-10 bg-white rounded-full p-2 shadow-sm transition-transform duration-500 ease-out group-hover:scale-110">
                {item.icon}
              </div>
              <span className="relative z-10 text-[14.5px] font-bold text-slate-800 tracking-tight transition-colors duration-500 group-hover:text-black">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
