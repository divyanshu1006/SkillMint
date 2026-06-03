import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : false
  );
  
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  
  // Track mouse coordinates
  const mouse = useRef({ x: 0, y: 0 });
  // Track current cursor coordinates (for lerping)
  const cursor = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const handler = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const render = () => {
      // Easing factor (0.15)
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.15;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.15;

      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    render(); // Start loop

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    // Add hover scale effect dynamically to all interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        cursorInnerRef.current?.classList.add('cursor-hover');
      } else {
        cursorInnerRef.current?.classList.remove('cursor-hover');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isFinePointer) return null;

  return (
    <div
      ref={cursorOuterRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        willChange: 'transform'
      }}
    >
      <div
        id="custom-cursor"
        ref={cursorInnerRef}
        className="w-8 h-8 bg-white rounded-full transition-transform duration-500 ease-out"
        style={{
          transform: 'translate(-50%, -50%) scale(1)', // Center it relative to the outer container's tracking point
        }}
      />
    </div>
  );
}
