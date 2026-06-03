import { useEffect, useRef, useState } from 'react';

export function Footer() {
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '6a9ab023-1773-4bef-94bb-b845a7eb2e33',
          email: email,
          subject: 'New Newsletter Subscription from SkillMint Footer',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  useEffect(() => {
    const fitWatermark = () => {
      if (!svgRef.current || !textRef.current) return;
      try {
        const bbox = textRef.current.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          svgRef.current.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        }
      } catch (e) {}
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fitWatermark);
    } else {
      fitWatermark();
    }
    
    window.addEventListener('resize', fitWatermark);
    // Double-check after render
    const timeout = setTimeout(fitWatermark, 150);
    return () => {
      window.removeEventListener('resize', fitWatermark);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="bg-white px-6 py-12 md:py-24 font-['DM_Sans'] text-[#2d3148] relative">
      {/* ── Main Wrapper ── */}
      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 lg:gap-4 items-stretch relative z-10">
        
        {/* ── Left Card (Video Background) ── */}
        <div 
          className="relative min-h-[340px] rounded-[28px] p-8 overflow-hidden flex flex-col justify-between bg-[#1e4fc0]"
          style={{ boxShadow: '0 12px 40px rgba(21, 76, 189, 0.25)' }}
        >
          {/* Video */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4" type="video/mp4" />
          </video>

          {/* Logo */}
          <div className="flex flex-row gap-2.5 relative z-10 items-center">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[16px] text-white tracking-[-0.02em]"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.85)' }}
            >
              S
            </div>
            <span className="text-[22px] font-bold text-white tracking-[-0.02em]">
              SkillMint
            </span>
          </div>

          {/* Tagline */}
          <div className="mt-auto mb-7 relative z-10">
            <p className="text-[19px] font-normal text-white leading-[1.45]">
              Smarter skill verification,<br/>
              <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>powered by AI.</span>
            </p>
          </div>

          {/* Social Row */}
          <div className="flex flex-row justify-between items-center gap-3 relative z-10">
            <span className="font-['Caveat'] text-[17px] font-semibold tracking-[0.3px]" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Stay in touch!
            </span>
            <div className="flex flex-row gap-[7px]">
              {/* Discord */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#0e1014] flex items-center justify-center transition-all duration-200 hover:bg-black hover:-translate-y-[2px]" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)' }}>
                <svg className="w-[15px] h-[15px] text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#0e1014] flex items-center justify-center transition-all duration-200 hover:bg-black hover:-translate-y-[2px]" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)' }}>
                <svg className="w-[15px] h-[15px] text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#0e1014] flex items-center justify-center transition-all duration-200 hover:bg-black hover:-translate-y-[2px]" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)' }}>
                <svg className="w-[15px] h-[15px] text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="w-9 h-9 rounded-[9px] bg-[#0e1014] flex items-center justify-center transition-all duration-200 hover:bg-black hover:-translate-y-[2px]" style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)' }}>
                <svg className="w-[15px] h-[15px] text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Right Card ── */}
        <div 
          className="bg-[#f0f1f5] rounded-[28px] p-6 sm:p-10 flex flex-col justify-between relative overflow-visible"
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
        >
          {/* Floating Lucky Badge */}
          <div className="absolute top-[-28px] sm:top-[-36px] right-[12px] sm:right-[40px] z-10 flex flex-col items-start gap-1.5">
            {/* Cube */}
            <div 
              className="w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] rounded-[18px] sm:rounded-[22px] -rotate-12 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #5b9ffb 0%, #1e5dd7 55%, #1448be 100%)',
                boxShadow: 'inset 3px 3px 8px rgba(255,255,255,0.35), inset -3px -3px 12px rgba(0,0,0,0.18), 8px 14px 28px rgba(20,72,200,0.35)'
              }}
            >
              <span 
                className="font-bold text-[32px] sm:text-[42px] text-white tracking-[-0.04em] rotate-12 leading-none"
                style={{ textShadow: '0 3px 6px rgba(0,0,0,0.25)' }}
              >
                S
              </span>
            </div>
            {/* Arrow & Text */}
            <div className="flex flex-row gap-1.5 items-center -rotate-3 mt-1">
              <svg className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-[#9ca3af]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 20 C 6 14, 10 9, 18 5" />
                <path d="M18 5 L 12 5" />
                <path d="M18 5 L 18 11" />
              </svg>
              <span className="font-['Caveat'] text-[18px] sm:text-[20px] font-semibold text-[#9ca3af] whitespace-nowrap">
                Feeling lucky?
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-row gap-10 sm:gap-[72px] pt-2 sm:pt-4">
            <div className="flex flex-col">
              <h3 className="font-['Caveat'] text-[24px] font-semibold italic text-[#9ca3af] mb-4">Navigation</h3>
              <div className="flex flex-col gap-3.5">
                {['How it works', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(link => (
                  <a key={link} href="#" className="block text-[14px] font-semibold text-[#111827] no-underline hover:text-[#1f65d6] transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-['Caveat'] text-[24px] font-semibold italic text-[#9ca3af] mb-4">Company</h3>
              <div className="flex flex-col gap-3.5">
                {['Blog', 'About', 'Terms and Condition', 'Privacy Policy'].map(link => (
                  <a key={link} href="#" className="block text-[14px] font-semibold text-[#111827] no-underline hover:text-[#1f65d6] transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mt-12 sm:mt-12 gap-6 sm:gap-0">
            <span className="text-[12.5px] font-medium text-[#9ca3af]">
              © 2026 SkillMint. All rights reserved.
            </span>

            <div className="flex flex-col gap-3.5 w-full sm:w-auto">
              <h4 className="text-[15px] font-normal text-[#6b7280] leading-[1.45]">
                AI moves fast.<br />
                <strong className="block text-[19px] font-bold text-[#111827]">Stay ahead with SkillMint.</strong>
              </h4>
              
              <div 
                className="flex flex-row w-full sm:w-[310px] bg-white border border-[#e5e7eb] rounded-xl p-[5px]"
                style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  placeholder={status === 'success' ? "Thanks for subscribing!" : "Enter email address"} 
                  className="flex-1 px-3.5 py-[11px] bg-transparent border-none text-[13.5px] text-[#111827] placeholder-[#9ca3af] focus:outline-none disabled:opacity-50"
                />
                <button 
                  type="button" 
                  onClick={handleSubscribe}
                  disabled={status === 'loading' || status === 'success'}
                  className="px-[22px] py-[11px] bg-[#111214] text-white font-semibold text-[13.5px] rounded-lg transition-all duration-200 hover:bg-black hover:-translate-y-[1px] disabled:opacity-50 disabled:hover:translate-y-0"
                  style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.15)' }}
                >
                  {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Background Watermark ── */}
      <div 
        className="max-w-[1150px] mx-auto pointer-events-none select-none relative z-0 leading-none mt-[-40px] sm:mt-[-60px]"
        aria-hidden="true"
      >
        <svg 
          id="watermarkSvg" 
          ref={svgRef}
          viewBox="0 0 1000 200" 
          preserveAspectRatio="xMidYMid meet" 
          className="block w-full h-auto overflow-visible"
        >
          <text 
            id="watermarkText" 
            ref={textRef}
            x="500" 
            y="240" 
            textAnchor="middle" 
            fontSize="320"
            className="font-bold tracking-[-0.03em]"
            style={{ fill: 'rgba(0,0,0,0.04)', fontFamily: '"DM Sans", sans-serif' }}
          >
            SkillMint
          </text>
        </svg>
      </div>
    </section>
  );
}
