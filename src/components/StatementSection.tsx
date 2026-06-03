import { useInView } from '../hooks';

export function StatementSection() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className="bg-[#050B14] py-32 md:py-48 px-6 flex items-center justify-center text-center">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2
          className="display-font font-semibold text-white text-[clamp(32px,6vw,72px)] leading-[1.1] tracking-tight"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          The resume is dead.{' '}
          <span className="text-white/40">Prove your worth.</span>
        </h2>
      </div>
    </section>
  );
}
