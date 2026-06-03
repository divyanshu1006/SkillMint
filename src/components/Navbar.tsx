import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollY } from '../hooks';

interface NavbarProps {
  onJoinClick: () => void;
}

export function Navbar({ onJoinClick }: NavbarProps) {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = scrollY > 20;

  const navLinks = [
    { label: 'Platform', href: '#bento' },
    { label: 'Solutions', href: '#waitlist' },
    { label: 'Pricing', href: '#waitlist' },
  ];

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Left: Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollToSection('#hero'); }}
          className="flex items-center gap-3 focus:outline-none flex-shrink-0"
        >
          {/* Gradient Icon Box */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#a78bfa] flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="display-font text-[22px] font-bold text-[#0f172a] tracking-tight">
            SkillMint
          </span>
        </a>

        {/* Center: Horizontal Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={e => { e.preventDefault(); scrollToSection(link.href); }}
                className="relative text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3b82f6] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => { scrollToSection('#waitlist'); onJoinClick(); }}
            className="pill-btn pill-btn-primary px-6 py-2.5 text-[14px]"
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </nav>

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
              className="text-2xl font-semibold text-slate-900"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px w-full bg-slate-200 my-4" />
          <button
            onClick={() => { scrollToSection('#waitlist'); onJoinClick(); }}
            className="pill-btn pill-btn-primary px-6 py-4 text-[16px] mt-4 w-full"
          >
            Join Waitlist
          </button>
        </div>
      </div>

    </header>
  );
}
