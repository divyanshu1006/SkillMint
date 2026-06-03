import { useState, useEffect, useRef } from 'react';

interface ToastProps {
  isVisible: boolean;
  onHide: () => void;
}

export function Toast({ isVisible, onHide }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    setIsExiting(false);
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onHide, 300);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isVisible, onHide]);

  if (!isVisible && !isExiting) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-[100] max-w-xs w-80 ${isExiting ? 'toast-exit' : 'toast-enter'}`}>
      <div className="bg-white rounded-xl shadow-2xl p-4 border-l-4 border-[#0A66C2] flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EFF6FF] flex items-center justify-center mt-0.5">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2.5 7L5.5 10L11.5 4" stroke="#0A66C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-[#0F172A]">You're on the list! 🎉</p>
          <p className="text-[13px] text-[#475569] mt-0.5">We'll reach out when Skill Mint launches.</p>
        </div>
        <button
          onClick={() => { setIsExiting(true); setTimeout(onHide, 300); }}
          className="flex-shrink-0 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
          aria-label="Dismiss notification"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

interface WaitlistFormProps {
  variant?: 'light' | 'dark' | 'glass';
  onSuccess?: () => void;
}

export function WaitlistForm({ variant = 'light', onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
      inputRef.current?.focus();
      return;
    }
    
    setStatus('loading');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '6a9ab023-1773-4bef-94bb-b845a7eb2e33',
          email: email,
          subject: 'New Waitlist Signup from SkillMint',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        onSuccess?.();
      } else {
        setStatus('error');
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 600);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit();
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-2" style={{ animation: 'popIn 0.5s cubic-bezier(0.22,1,0.36,1) both' }}>
        <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-lg shadow-blue-200">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M6 14L11 19L22 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className={`text-base font-semibold ${variant === 'dark' || variant === 'glass' ? 'text-white' : 'text-[#0F172A]'}`}>You're on the list!</p>
        <p className={`text-sm ${variant === 'dark' || variant === 'glass' ? 'text-white/70' : 'text-[#475569]'}`}>We'll be in touch when we launch. 🚀</p>
      </div>
    );
  }

  const isDark = variant === 'dark';
  const isGlass = variant === 'glass';

  // Glass variant: no outer wrapper — the HeroSection provides the glass shell.
  // We just render input + button side-by-side.
  if (isGlass) {
    return (
      <div className={`flex w-full ${isShaking ? 'shake' : ''}`}>
        <label htmlFor="email-input-glass" className="sr-only">Email address</label>
        <input
          ref={inputRef}
          id="email-input-glass"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your email address"
          className="flex-1 px-5 py-3 bg-transparent border-none outline-none text-[15px] text-[#0F172A] placeholder:text-[#94A3B8] focus:ring-0"
          aria-label="Email address"
          disabled={status === 'loading'}
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className="pill-btn pill-btn-primary px-6 py-3 text-[15px] disabled:opacity-70"
          aria-label="Join Waitlist"
        >
          {status === 'loading' ? (
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <path d="M9 2a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
    );
  }

  return (
    <div className={`flex w-full max-w-[480px] ${isShaking ? 'shake' : ''}`}>
      <div
        className={`flex w-full items-center rounded-full p-1.5 transition-all duration-200 ${
          isDark
            ? 'border border-white/25 focus-within:border-white/50 bg-white/10'
            : 'border-[1.5px] border-[#E2E8F0] shadow-md focus-within:border-[#3b82f6] bg-white'
        }`}
      >
        <label htmlFor={`email-input-${variant}`} className="sr-only">Email address</label>
        <input
          ref={inputRef}
          id={`email-input-${variant}`}
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your email address"
          className={`flex-1 px-5 py-3 bg-transparent border-none outline-none text-[15px] focus:ring-0 ${
            isDark ? 'text-white placeholder:text-white/50' : 'text-[#0F172A] placeholder:text-[#94A3B8]'
          }`}
          aria-label="Email address"
          disabled={status === 'loading'}
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'loading'}
          className={`pill-btn ${isDark ? 'bg-white text-slate-900' : 'pill-btn-primary'} px-6 py-3 text-[15px] disabled:opacity-70`}
          aria-label="Join Waitlist"
        >
          {status === 'loading' ? (
            <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
              <path d="M9 2a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            'Join Waitlist'
          )}
        </button>
      </div>
    </div>
  );
}
