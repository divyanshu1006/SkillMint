import { 
  ArrowUpRight, 
  Sparkle, 
  Monitor, 
  Cpu, 
  Palette, 
  PenTool, 
  Layers, 
  Type, 
  Aperture, 
  Globe, 
  Camera, 
  Brush, 
  Box, 
  Wand2 
} from 'lucide-react';

export function BentoSection() {
  return (
    <section id="bento" className="bg-[#f8f9fc] text-[#111827] font-['Inter',sans-serif] antialiased w-full px-4 sm:px-6 md:px-10 lg:px-14 py-16 md:py-24 lg:min-h-screen flex flex-col relative z-20 border-t border-[#e5e7eb]/50">
      
      {/* ── Header Row ── */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 md:mb-12">
        <div className="max-w-3xl">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-bold tracking-tight mb-4">
            The New Standard in Skill Verification
          </h2>
          <p className="text-sm md:text-[16px] leading-[1.6] text-[#6b7280] max-w-2xl font-medium">
            A comprehensive suite of tools designed to prove your actual worth, bypassing traditional resume filters. With deep-dive technical evaluations, we help candidates move with focus and intention.
          </p>
        </div>
        <button 
          onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-[15px] font-semibold whitespace-nowrap bg-[#1e5dd7] text-white hover:bg-[#1448be] hover:-translate-y-0.5 transition-all duration-300 self-start"
          style={{ boxShadow: '0 4px 14px 0 rgba(30,93,215,0.39)' }}
        >
          Request Early Access
        </button>
      </div>

      {/* ── Grid Layout ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1">
        
        {/* ================= COLUMN 1 ================= */}
        <div 
          className="rounded-[24px] bg-white relative overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-0 border border-[#e5e7eb]/80"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity"
            style={{ transform: 'translateZ(0)' }}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
          />
          {/* White wash overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0 pointer-events-none" />

          {/* Top Label */}
          <div className="relative z-10 flex items-center justify-center gap-2.5 pt-7">
            <Sparkle className="h-3.5 w-3.5 text-[#1e5dd7]" strokeWidth={2} />
            <span className="uppercase tracking-[0.22em] text-[11.5px] text-[#1e5dd7] font-bold">CORE CAPABILITIES</span>
            <Sparkle className="h-3.5 w-3.5 text-[#1e5dd7]" strokeWidth={2} />
          </div>
          
          {/* Bottom Timeline */}
          <div className="relative z-10 p-7 mt-auto bg-gradient-to-t from-white via-white/90 to-transparent pt-12">
            <div className="grid grid-cols-[auto_auto_1fr] items-center gap-x-3.5 gap-y-4 text-[13.5px] md:text-[14.5px]">
              
              <span className="text-[#111827] font-bold">AI Assessment</span>
              <Sparkle className="h-3 w-3 text-[#1e5dd7]/50" strokeWidth={2} />
              <span className="text-[#6b7280] font-medium truncate">Deep-dive tech evaluations</span>

              <span className="text-[#111827] font-bold">Code Verification</span>
              <Sparkle className="h-3 w-3 text-[#1e5dd7]/50" strokeWidth={2} />
              <span className="text-[#6b7280] font-medium truncate">Live environments</span>

              <span className="text-[#111827] font-bold">Global Credential</span>
              <Sparkle className="h-3 w-3 text-[#1e5dd7]/50" strokeWidth={2} />
              <span className="text-[#6b7280] font-medium truncate">Blockchain-backed</span>

              <span className="text-[#111827] font-bold">Stack Agnostic</span>
              <Sparkle className="h-3 w-3 text-[#1e5dd7]/50" strokeWidth={2} />
              <span className="text-[#6b7280] font-medium truncate">Over 30 tech stacks</span>
              
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2 ================= */}
        <div className="flex flex-col gap-4 md:gap-5">
          
          {/* Top - The Vision */}
          <div 
            className="rounded-[24px] bg-[#f0f1f5] p-6 md:p-7 flex flex-col justify-between min-h-[220px] border border-white/50"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.02), inset 0 2px 4px rgba(255,255,255,0.5)' }}
          >
            <div className="relative z-10 flex items-center justify-start gap-2.5 mb-5">
              <Sparkle className="h-3.5 w-3.5 text-[#1e5dd7]" strokeWidth={2} />
              <span className="uppercase tracking-[0.22em] text-[11.5px] text-[#1e5dd7] font-bold">THE VISION</span>
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-[14px] sm:text-[15px] leading-[1.65] text-[#111827] font-semibold mb-3">
                Resumes tell you what someone claims they can do. SkillMint proves what they can actually build.
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#6b7280] font-medium">
                We're developing an AI-native evaluation engine that assesses candidates on real-world architecture, debugging, and live coding.
              </p>
            </div>
          </div>

          {/* Bottom - Tech Stacks Card */}
          <div 
            className="rounded-[24px] bg-white relative overflow-hidden flex-1 flex flex-col items-center justify-center min-h-[240px] border border-[#e5e7eb]/80"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.15]"
              style={{ transform: 'translateZ(0)' }}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
            />
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] z-0 pointer-events-none" />

            <div className="relative z-10 text-center flex flex-col items-center justify-center pt-2">
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[96px] font-bold tracking-tighter text-[#111827] leading-none mb-1">
                30+
              </h3>
              <p className="mt-3 text-[14.5px] text-[#6b7280] font-bold tracking-wide uppercase">
                Tech Stacks Supported
              </p>
            </div>
          </div>

        </div>

        {/* ================= COLUMN 3 ================= */}
        <div className="flex flex-col gap-4 md:gap-5">
          
          {/* Top - Daily Software */}
          <div 
            className="rounded-[24px] bg-white relative overflow-hidden flex-1 flex flex-col min-h-[280px] border border-[#e5e7eb]/80"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
              style={{ transform: 'translateZ(0)' }}
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
            />
            
            <div className="relative z-10 flex items-center justify-center pt-7 mb-auto">
              <span className="uppercase tracking-[0.22em] text-[11.5px] text-[#1e5dd7] font-bold">TECH STACK</span>
            </div>

            {/* Marquee Rows (Light Mode specific fade mask) */}
            <div className="relative z-10 w-full pb-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]" style={{ transform: 'translateZ(0)' }}>
              {/* Row 1 (Left) */}
              <div className="flex w-[200%] animate-marquee-left mb-3.5 will-change-transform">
                {[Monitor, Cpu, Palette, PenTool, Layers, Type, Aperture, Globe, Monitor, Cpu, Palette, PenTool, Layers, Type, Aperture, Globe].map((Icon, idx) => (
                  <div key={`r1-${idx}`} className="w-[50%] flex justify-around">
                    <div className="h-14 w-14 md:h-[60px] md:w-[60px] rounded-2xl flex items-center justify-center shrink-0 mx-1.5 bg-[#f8f9fc] border border-[#e5e7eb] shadow-sm">
                      <Icon className="h-6 w-6 text-[#1e5dd7]" strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Row 2 (Right) */}
              <div className="flex w-[200%] animate-marquee-right will-change-transform">
                {[Camera, Brush, Box, Wand2, Monitor, Cpu, Type, Layers, Camera, Brush, Box, Wand2, Monitor, Cpu, Type, Layers].map((Icon, idx) => (
                  <div key={`r2-${idx}`} className="w-[50%] flex justify-around">
                    <div className="h-14 w-14 md:h-[60px] md:w-[60px] rounded-2xl flex items-center justify-center shrink-0 mx-1.5 bg-[#f8f9fc] border border-[#e5e7eb] shadow-sm">
                      <Icon className="h-6 w-6 text-[#1e5dd7]" strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom - Early Access */}
          <div 
            className="rounded-[24px] bg-[#1e4fc0] p-6 md:p-7 relative flex flex-col justify-between min-h-[160px] overflow-hidden"
            style={{ boxShadow: '0 12px 40px rgba(21, 76, 189, 0.25)' }}
          >
            {/* Subtle brand glow inside the blue card */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

            <button 
              onClick={() => document.querySelector('#waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center z-20 shadow-sm"
            >
              <ArrowUpRight className="h-5 w-5 text-white" strokeWidth={2} />
            </button>

            <div className="relative z-10 flex items-center justify-start gap-2.5 mb-6">
              <Sparkle className="h-3.5 w-3.5 text-white/80" strokeWidth={2} />
              <span className="uppercase tracking-[0.22em] text-[11.5px] text-white/80 font-bold">EARLY ACCESS</span>
            </div>

            <div className="relative z-10 mt-auto">
              <p className="text-[16px] font-bold text-white mb-0.5 tracking-tight">waitlist@skillmint.com</p>
              <p className="text-[14px] text-white/70 font-medium">Join the revolution.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
