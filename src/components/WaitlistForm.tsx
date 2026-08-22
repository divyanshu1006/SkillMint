import { useState, useRef } from 'react';
import { AnimatedStepper, Step } from './AnimatedStepper';
import { Sparkles, ShieldCheck, CheckCircle, ArrowRight, Code2, Briefcase, Award } from 'lucide-react';

interface WaitlistFormProps {
  variant?: 'light' | 'dark' | 'glass';
  onSuccess?: () => void;
  showStepperMode?: boolean;
}

export function WaitlistForm({ onSuccess, showStepperMode = true }: WaitlistFormProps) {
  const [mode, setMode] = useState<'quick' | 'stepper'>(showStepperMode ? 'stepper' : 'quick');
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState('Full Stack Engineer');
  const [selectedStack, setSelectedStack] = useState('React & TypeScript');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const roles = [
    'Full Stack Engineer',
    'Frontend / UI Specialist',
    'Backend & Distributed Systems',
    'AI / ML & Data Engineer',
  ];

  const stacks = [
    'React, Next.js, TypeScript',
    'Python, PyTorch, FastApi',
    'Node.js, Go, PostgreSQL',
    'Rust, Systems, Cloud',
  ];

  const submitSignup = async (submittedEmail: string, role = selectedRole, stack = selectedStack) => {
    if (!submittedEmail || !submittedEmail.includes('@')) {
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
          email: submittedEmail,
          role: role,
          stack: stack,
          subject: 'New Priority Waitlist Signup from SkillMint',
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

  const handleQuickSubmit = () => {
    submitSignup(email);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleQuickSubmit();
  };

  if (status === 'success') {
    return (
      <div 
        className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-emerald-200/80 shadow-xl text-center"
        style={{ animation: 'popIn 0.5s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200 shadow-sm">
          <CheckCircle className="w-9 h-9" strokeWidth={2.5} />
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/60 text-emerald-800 text-[12px] font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Priority Founder Status Granted
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the Fast-Track! 🎉</h3>
        <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
          We've reserved your early access spot. You'll receive your direct AI Skill Assessment invitation and benchmark invite as soon as your batch opens.
        </p>
        <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Priority token generated • No spam, guaranteed.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mode switcher tabs */}
      {showStepperMode && (
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-5">
          <button
            type="button"
            onClick={() => setMode('stepper')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              mode === 'stepper'
                ? 'bg-[#1e5dd7] text-white shadow-sm shadow-blue-500/20'
                : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            ⚡ Fast-Track Qualifier (30s)
          </button>
          <button
            type="button"
            onClick={() => setMode('quick')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              mode === 'quick'
                ? 'bg-[#1e5dd7] text-white shadow-sm shadow-blue-500/20'
                : 'bg-white/80 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Instant Email Signup
          </button>
        </div>
      )}

      {mode === 'stepper' ? (
        /* Stepper Flow: Leverages Goal Gradient & Progressive Commitment */
        <AnimatedStepper
          className="w-full"
          onFinalStepCompleted={() => {
            if (email && email.includes('@')) {
              submitSignup(email, selectedRole, selectedStack);
            }
          }}
        >
          {/* Step 1: Role Selection */}
          <Step title="1. Select Your Primary Role">
            <p className="text-slate-600 text-sm mb-4">What role do you want your SkillMint credential for?</p>
            <div className="grid grid-cols-1 gap-2.5">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                    selectedRole === role
                      ? 'border-[#1e5dd7] bg-blue-50/50 text-[#1e5dd7] shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className={`w-4 h-4 ${selectedRole === role ? 'text-[#1e5dd7]' : 'text-slate-400'}`} />
                    <span>{role}</span>
                  </div>
                  {selectedRole === role && <CheckCircle className="w-4 h-4 text-[#1e5dd7]" />}
                </button>
              ))}
            </div>
          </Step>

          {/* Step 2: Tech Stack Selection */}
          <Step title="2. Choose Your Core Tech Stack">
            <p className="text-slate-600 text-sm mb-4">Choose the primary ecosystem you'd like assessed:</p>
            <div className="grid grid-cols-1 gap-2.5">
              {stacks.map((stack) => (
                <button
                  key={stack}
                  type="button"
                  onClick={() => setSelectedStack(stack)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-semibold transition-all cursor-pointer ${
                    selectedStack === stack
                      ? 'border-[#1e5dd7] bg-blue-50/50 text-[#1e5dd7] shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Code2 className={`w-4 h-4 ${selectedStack === stack ? 'text-[#1e5dd7]' : 'text-slate-400'}`} />
                    <span>{stack}</span>
                  </div>
                  {selectedStack === stack && <CheckCircle className="w-4 h-4 text-[#1e5dd7]" />}
                </button>
              ))}
            </div>
          </Step>

          {/* Step 3: Fast-Track Email Claim */}
          <Step title="3. Where Should We Send Your Assessment?">
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/60 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#1e5dd7] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <p className="font-bold text-slate-900">Customized for {selectedRole}</p>
                  <p className="text-slate-600">Includes free benchmark percentile and verified badge reservation.</p>
                </div>
              </div>

              <div>
                <label htmlFor="stepper-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Work / Personal Email
                </label>
                <input
                  id="stepper-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com or alex@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e5dd7]/30 focus:border-[#1e5dd7] shadow-sm"
                  required
                />
              </div>
            </div>
          </Step>
        </AnimatedStepper>
      ) : (
        /* Quick 1-Step Form */
        <div className={`w-full max-w-lg ${isShaking ? 'shake' : ''}`}>
          <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-white border border-slate-200 shadow-md">
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your email to claim your spot..."
              className="w-full sm:flex-1 px-4 py-3 bg-transparent border-none outline-none text-slate-900 text-sm placeholder:text-slate-400 focus:ring-0"
              disabled={status === 'loading'}
            />
            <button
              type="button"
              onClick={handleQuickSubmit}
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1e5dd7] hover:bg-[#154bb3] text-white text-sm font-semibold shadow-md shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-70 cursor-pointer whitespace-nowrap"
            >
              {status === 'loading' ? (
                <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WaitlistForm;
