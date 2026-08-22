import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { BentoSection } from './components/BentoSection';
import { AudienceSection } from './components/AudienceSection';
import { StatsSection } from './components/StatsSection';
import { ScrollTickerSection } from './components/ScrollTickerSection';
import { WaitlistCTA } from './components/WaitlistCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500/25 antialiased">
      <CustomCursor />
      <Navbar onJoinClick={() => {}} />
      <main>
        {/* 1. Hero: Curiosity, Social Proof, 3D FlipWord, LightBeam CTA */}
        <HeroSection />
        
        {/* 2. Problem: Pain point amplification & Anchoring (75% auto-rejected) */}
        <ProblemSection />
        
        {/* 3. Solution: Direct Contrast & Relief (Verify Once, Trust Everywhere) */}
        <SolutionSection />
        
        {/* 4. Bento Section: Authority, 30+ Tech Stacks, Live Sandbox proof */}
        <BentoSection />
        
        {/* 5. Audience Section: Role-based Reciprocity & Interactive Profile Cards */}
        <AudienceSection />
        
        {/* 6. Stats Section: Social Validation & Bandwagon Proof */}
        <StatsSection />
        
        {/* 7. Scroll Ticker Section: Peak-End Narrative flow */}
        <ScrollTickerSection />
        
        {/* 8. Final Waitlist: Scarcity Bar, Goal Gradient Stepper & Instant Fast-Track */}
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
}
