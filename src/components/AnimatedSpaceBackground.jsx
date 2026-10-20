
import { useEffect, useRef } from 'react';

const AnimatedSpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const colors = ['#a3e635', '#84cc16', '#38bdf8'];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let running = false;
    let particles = [];

    const pointer = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        100,
        Math.max(35, Math.floor((width * height) / 16000))
      );

      particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        depth: Math.random() * 0.8 + 0.2,
        size: Math.random() * 1.2 + 0.5,
        phase: Math.random() * Math.PI * 2,
        drift: Math.random() * 0.25 + 0.05,
        color: colors[i % colors.length]
      }));
    };

    const handleMove = (event) => {
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
    };

    const handleLeave = () => {
      pointer.active = false;
      pointer.targetX = -1000;
      pointer.targetY = -1000;
    };

    const draw = (now) => {
      if (!running) return;

      frame = requestAnimationFrame(draw);

      const delta = lastTime
        ? Math.min((now - lastTime) / 16.67, 2)
        : 1;

      lastTime = now;
      elapsed += delta * 0.008;

      ctx.clearRect(0, 0, width, height);

      pointer.x += (pointer.targetX - pointer.x) * 0.075 * delta;
      pointer.y += (pointer.targetY - pointer.y) * 0.075 * delta;

      const cx = width * 0.5;
      const cy = height * 0.5;
      const px = pointer.active ? (pointer.x - cx) / width : 0;
      const py = pointer.active ? (pointer.y - cy) / height : 0;

      // Soft atmospheric light
      const atmosphere = ctx.createRadialGradient(
        cx + px * 100,
        cy + py * 80,
        0,
        cx,
        cy,
        Math.max(width, height) * 0.72
      );

      atmosphere.addColorStop(0, 'rgba(163, 230, 53, 0.035)');
      atmosphere.addColorStop(0.45, 'rgba(56, 189, 248, 0.018)');
      atmosphere.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = atmosphere;
      ctx.fillRect(0, 0, width, height);

      // Flowing topographic light ribbons
      for (let layer = 0; layer < 5; layer++) {
        ctx.beginPath();

        const baseY = height * (0.25 + layer * 0.13);
        const amplitude = 16 + layer * 9;

        for (let x = -20; x <= width + 20; x += 12) {
          const wave =
            Math.sin(x * 0.003 + elapsed + layer * 0.75) * amplitude +
            Math.sin(x * 0.006 - elapsed * 0.7 + layer) * 9;

          const mouseInfluence = pointer.active
            ? Math.exp(
                -Math.pow((x - pointer.x) / 190, 2)
              ) * (pointer.y - baseY) * 0.12
            : 0;

          const y = baseY + wave + mouseInfluence + py * layer * 18;

          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.strokeStyle =
          layer % 2 === 0
            ? 'rgba(163, 230, 53, 0.085)'
            : 'rgba(56, 189, 248, 0.065)';

        ctx.lineWidth = layer === 2 ? 1.2 : 0.7;
        ctx.stroke();
      }

      // Depth-based floating particles
      particles.forEach((particle) => {
        particle.x += Math.sin(elapsed + particle.phase) * particle.drift * delta;
        particle.y -= particle.drift * particle.depth * delta;

        if (particle.y < -10) particle.y = height + 10;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;

        let x = particle.x + px * particle.depth * 75;
        let y = particle.y + py * particle.depth * 60;

        if (pointer.active) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0 && distance < 145) {
            const force = (1 - distance / 145) * 15;
            x += (dx / distance) * force;
            y += (dy / distance) * force;
          }
        }

        ctx.globalAlpha = 0.18 + particle.depth * 0.42;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(x, y, particle.size * particle.depth, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive cursor light
      if (pointer.active) {
        const glow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          180
        );

        glow.addColorStop(0, 'rgba(163, 230, 53, 0.075)');
        glow.addColorStop(0.45, 'rgba(56, 189, 248, 0.025)');
        glow.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.globalAlpha = 1;
        ctx.fillStyle = glow;
        ctx.fillRect(
          pointer.x - 180,
          pointer.y - 180,
          360,
          360
        );
      }

      ctx.globalAlpha = 1;
    };

    const start = () => {
      if (running || document.hidden || motion.matches) return;
      running = true;
      lastTime = 0;
      frame = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const handleMotionChange = () => {
      stop();
      if (!motion.matches) start();
      else ctx.clearRect(0, 0, width, height);
    };

    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerleave', handleLeave);
    document.addEventListener('visibilitychange', handleVisibility);
    motion.addEventListener('change', handleMotionChange);

    start();

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      motion.removeEventListener('change', handleMotionChange);
      particles = [];
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default AnimatedSpaceBackground;
