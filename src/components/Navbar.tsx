import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useScrollY } from '../hooks';

interface NavbarProps {
  onJoinClick?: () => void;
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 20;

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Verification', href: '#solution' },
    { label: 'Capabilities', href: '#bento' },
    { label: 'For Candidates & Teams', href: '#for-you' },
  ];

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
          isScrolled ? 'glass-nav bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-slate-200/50' : 'bg-transparent'
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          
          {/* Left: Logo */}
          <a
            href="#hero"
            onClick={e => { e.preventDefault(); scrollToSection('#hero'); }}
            className="flex items-center gap-2.5 focus:outline-none flex-shrink-0"
          >
            {/* Gradient Icon Box */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1e5dd7] to-[#60a5fa] flex items-center justify-center shadow-md shadow-blue-500/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="display-font text-[21px] font-extrabold text-[#0f172a] tracking-tight leading-none">
                SkillMint
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e5dd7]">
                Proof Engine
              </span>
            </div>
          </a>

          {/* Center: Horizontal Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                  className="relative text-[14.5px] font-semibold text-slate-600 hover:text-[#1e5dd7] transition-colors py-2 group cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#1e5dd7] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
              <Sparkles className="w-3 h-3" />
              <span>Founder Cohort Open</span>
            </div>
            <button
              onClick={() => { scrollToSection('#waitlist'); onJoinClick?.(); }}
              className="inline-flex items-center justify-center rounded-full bg-[#1e5dd7] hover:bg-[#154bb3] text-white px-5 py-2.5 text-[14px] font-semibold shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col p-8 ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-xl font-bold text-slate-800 hover:text-[#1e5dd7] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px w-full bg-slate-200 my-2" />
          <button
            onClick={() => { scrollToSection('#waitlist'); onJoinClick?.(); }}
            className="rounded-full bg-[#1e5dd7] text-white px-6 py-3.5 text-[16px] font-bold shadow-lg shadow-blue-500/25 w-full cursor-pointer"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
