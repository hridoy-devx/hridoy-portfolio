
import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;
    let visible = false;
    let hovering = false;

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      visible = true;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)`;
        dotRef.current.style.opacity = '1';
      }

      const target = event.target;
      const interactive =
        target instanceof Element &&
        target.closest(
          'a, button, input, textarea, select, [role="button"]'
        );

      hovering = Boolean(interactive);

      ringRef.current?.classList.toggle(
        'cursor-ring--active',
        hovering
      );

      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const leave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const render = () => {
      ringX += (x - ringX) * 0.14;
      ringY += (y - ringY) * 0.14;

      if (ringRef.current && visible) {
        ringRef.current.style.transform =
          `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      frame = requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', leave);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />

      <style>{`
        .custom-cursor-dot,
        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          pointer-events: none;
          opacity: 0;
          will-change: transform;
        }

        .custom-cursor-dot {
          width: 5px;
          height: 5px;
          margin: -2.5px 0 0 -2.5px;
          border-radius: 50%;
          background: #a3e635;
          box-shadow: 0 0 12px rgba(163, 230, 53, 0.55);
        }

        .custom-cursor-ring {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(163, 230, 53, 0.65);
          border-radius: 50%;
          background: rgba(163, 230, 53, 0.025);
          transition:
            width 220ms ease,
            height 220ms ease,
            border-color 220ms ease,
            background 220ms ease,
            opacity 180ms ease;
        }

        .custom-cursor-ring.cursor-ring--active {
          width: 44px;
          height: 44px;
          border-color: #a3e635;
          background: rgba(163, 230, 53, 0.08);
        }

        @media (hover: none), (pointer: coarse),
               (prefers-reduced-motion: reduce) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
