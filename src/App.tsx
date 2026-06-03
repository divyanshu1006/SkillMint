import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoSection } from './components/BentoSection';
import { WaitlistCTA } from './components/WaitlistCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';


export default function App() {

  return (
    <div className="relative w-full min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500/30">
      <CustomCursor />
      <Navbar onJoinClick={() => {}} />
      <main>
        <HeroSection />
        <BentoSection />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
}
