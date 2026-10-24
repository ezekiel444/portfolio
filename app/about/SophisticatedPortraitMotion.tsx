'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

interface SophisticatedPortraitMotionProps {
  imageSrc?: string;
  alt?: string;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  speed: number;
  angle: number;
  phase: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
}

export default function SophisticatedPortraitMotion({
  imageSrc = '/about_profile_picx/about_me_picx.png',
  alt = 'Ezekiel Matomi Lucky',
}: SophisticatedPortraitMotionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Smooth lerp targets
  const targetTiltRef = useRef({ x: 0, y: 0 });
  const currentTiltRef = useRef({ x: 0, y: 0 });
  const pointerNormRef = useRef({ x: 0, y: 0, active: false });
  const ripplesRef = useRef<Ripple[]>([]);

  const addRipple = useCallback((x: number, y: number) => {
    ripplesRef.current.push({ x, y, radius: 10, alpha: 0.6 });
    if (ripplesRef.current.length > 5) ripplesRef.current.shift();
  }, []);

  // 1. Mouse / Pointer Event Handlers (Desktop)
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    targetTiltRef.current = { x: nx * 2, y: ny * 2 };
    pointerNormRef.current = { x: (e.clientX - rect.left), y: (e.clientY - rect.top), active: true };
    setIsInteracting(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    targetTiltRef.current = { x: 0, y: 0 };
    pointerNormRef.current = { x: 0, y: 0, active: false };
    setIsInteracting(false);
  }, []);

  // 2. Touch Handlers with Tap Ripple & Inertia (Mobile)
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0 && containerRef.current) {
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      const localX = touch.clientX - rect.left;
      const localY = touch.clientY - rect.top;
      const nx = localX / rect.width - 0.5;
      const ny = localY / rect.height - 0.5;

      targetTiltRef.current = { x: nx * 2.2, y: ny * 2.2 };
      pointerNormRef.current = { x: localX, y: localY, active: true };
      addRipple(localX, localY);
      setIsInteracting(true);
    }
  }, [addRipple]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0 && containerRef.current) {
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const localX = touch.clientX - rect.left;
      const localY = touch.clientY - rect.top;
      const nx = localX / rect.width - 0.5;
      const ny = localY / rect.height - 0.5;

      targetTiltRef.current = { x: nx * 2.2, y: ny * 2.2 };
      pointerNormRef.current = { x: localX, y: localY, active: true };
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    targetTiltRef.current = { x: 0, y: 0 };
    pointerNormRef.current = { x: 0, y: 0, active: false };
    setIsInteracting(false);
  }, []);

  // 3. Gyroscope / Device Orientation Support (Mobile Phone Tilt)
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (touchStartRef.current) return;
      if (e.gamma !== null && e.beta !== null) {
        const gx = Math.min(Math.max(e.gamma / 22, -1), 1);
        const gy = Math.min(Math.max((e.beta - 40) / 22, -1), 1);
        targetTiltRef.current = { x: gx, y: gy };
      }
    };

    if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    }
    return () => {
      if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  // 4. Kinetic Canvas 60FPS Orbit & Particle Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particles strictly in Ezekiel's brand palette
    const particleCount = 36;
    const particles: Particle[] = [];
    const colors = [
      'rgba(232, 155, 92, 0.85)',  // Warm Amber
      'rgba(232, 155, 92, 0.5)',   // Muted Amber
      'rgba(45, 74, 45, 0.9)',     // Forest Green
      'rgba(255, 255, 255, 0.65)', // White node
    ];

    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const dist = 145 + Math.random() * 65;
      particles.push({
        x: 0,
        y: 0,
        baseX: dist * Math.cos(angle),
        baseY: dist * Math.sin(angle),
        radius: Math.random() * 2 + 1.2,
        color: colors[i % colors.length],
        speed: 0.0009 + Math.random() * 0.0012,
        angle: angle,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const render = () => {
      if (isVisible) {
        time += 0.016;

        // Smooth physics lerp
        currentTiltRef.current.x += (targetTiltRef.current.x - currentTiltRef.current.x) * 0.09;
        currentTiltRef.current.y += (targetTiltRef.current.y - currentTiltRef.current.y) * 0.09;
        
        setTilt({
          x: currentTiltRef.current.x,
          y: currentTiltRef.current.y,
        });

        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const offsetX = currentTiltRef.current.x * 12;
        const offsetY = currentTiltRef.current.y * 12;

        ctx.save();
        ctx.translate(centerX + offsetX, centerY + offsetY);

        // A. Dynamic Kinetic Orbit Ring 1 (Amber Arc & Comet)
        const r1 = Math.min(width, height) * 0.44;
        ctx.beginPath();
        ctx.arc(0, 0, r1, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(232, 155, 92, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([6, 10]);
        ctx.stroke();

        // Orbiting glowing satellite nodes on Ring 1
        const satAngle1 = -time * 0.55;
        const sat1X = r1 * Math.cos(satAngle1);
        const sat1Y = r1 * Math.sin(satAngle1);
        ctx.beginPath();
        ctx.arc(sat1X, sat1Y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#e89b5c';
        ctx.shadowColor = '#e89b5c';
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;

        // B. Dynamic Kinetic Orbit Ring 2 (Forest Green Segmented Arc)
        const r2 = Math.min(width, height) * 0.48;
        const arcStart = time * 0.35;
        ctx.beginPath();
        ctx.arc(0, 0, r2, arcStart, arcStart + Math.PI * 0.8);
        ctx.strokeStyle = 'rgba(45, 74, 45, 0.75)';
        ctx.lineWidth = 2.2;
        ctx.setLineDash([]);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, r2, arcStart + Math.PI, arcStart + Math.PI * 1.55);
        ctx.strokeStyle = 'rgba(232, 155, 92, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // C. Continuous Radar Pulse Wave
        const pulseProgress = (time * 0.35) % 1;
        const pulseR = r1 * (0.82 + pulseProgress * 0.45);
        const pulseAlpha = Math.max(0, (1 - pulseProgress) * 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 155, 92, ${pulseAlpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // D. Technical Reticle Marks
        const tickCount = 16;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.lineWidth = 1;
        for (let i = 0; i < tickCount; i++) {
          const a = (i / tickCount) * Math.PI * 2;
          const x1 = (r1 - 4) * Math.cos(a);
          const y1 = (r1 - 4) * Math.sin(a);
          const x2 = (r1 + 4) * Math.cos(a);
          const y2 = (r1 + 4) * Math.sin(a);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        // E. Fluid Gravitational Particles
        particles.forEach((p) => {
          p.angle += p.speed;
          const harmonic = Math.sin(time * 1.4 + p.phase) * 12;
          const curR = 145 + harmonic;
          const rawX = curR * Math.cos(p.angle);
          const rawY = curR * Math.sin(p.angle);

          if (pointerNormRef.current.active) {
            const relPointerX = pointerNormRef.current.x - centerX - offsetX;
            const relPointerY = pointerNormRef.current.y - centerY - offsetY;
            const dx = rawX - relPointerX;
            const dy = rawY - relPointerY;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 85 && d > 0) {
              const force = (85 - d) / 85;
              p.x = rawX + (dx / d) * force * 24;
              p.y = rawY + (dy / d) * force * 24;
            } else {
              p.x = rawX;
              p.y = rawY;
            }
          } else {
            p.x = rawX;
            p.y = rawY;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        });

        // F. Touch Interactive Ripples
        ripplesRef.current.forEach((r, idx) => {
          r.radius += 3;
          r.alpha -= 0.015;
          if (r.alpha > 0) {
            ctx.beginPath();
            ctx.arc(r.x - centerX - offsetX, r.y - centerY - offsetY, r.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(232, 155, 92, ${r.alpha})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          } else {
            ripplesRef.current.splice(idx, 1);
          }
        });

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  const rotateX = (-tilt.y * 14).toFixed(2);
  const rotateY = (tilt.x * 14).toFixed(2);
  const glareX = ((tilt.x + 1) / 2 * 100).toFixed(1);
  const glareY = ((tilt.y + 1) / 2 * 100).toFixed(1);

  return (
    <div className="w-full flex flex-col items-center justify-center pb-6 sm:pb-0">
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full aspect-square max-w-[360px] sm:max-w-[400px] mx-auto select-none touch-pan-y cursor-grab active:cursor-grabbing flex items-center justify-center"
        style={{ perspective: 1000 }}
      >
        {/* Kinetic Canvas for 60FPS Mathematical Orbits & Particles */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        {/* Ambient Backlight (Brand Olive Green & Amber) */}
        <div
          className="absolute w-[80%] h-[80%] rounded-full -z-10 blur-2xl transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(232, 155, 92, 0.35) 0%, rgba(45, 74, 45, 0.45) 60%, transparent 100%)',
            opacity: isInteracting ? 0.9 : 0.6,
            transform: `scale(${isInteracting ? 1.08 : 1})`,
          }}
        />

        {/* The Sculpted 3D Portrait Core */}
        <div
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isInteracting ? 1.03 : 1}, ${isInteracting ? 1.03 : 1}, 1)`,
            transformStyle: 'preserve-3d',
            transition: isInteracting
              ? 'transform 0.1s cubic-bezier(0.2, 0.8, 0.4, 1)'
              : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          className="relative z-10 w-[78%] h-[78%] rounded-3xl p-[2px] bg-gradient-to-br from-[#e89b5c]/70 via-white/15 to-[#2d4a2d]/90 shadow-2xl shadow-black/60 overflow-hidden"
        >
          {/* Inner Card Container */}
          <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#2d4a2d]/90 backdrop-blur-md">
            {/* Ezekiel's Picture */}
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority
              sizes="(max-width: 640px) 260px, 320px"
              className="object-cover object-top transition-transform duration-700 ease-out"
            />

            {/* Editorial Contrast Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Specular Glare Reflection Sheen */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 240px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.3) 0%, rgba(232, 155, 92, 0.15) 30%, transparent 70%)`,
                opacity: isInteracting ? 0.85 : 0.25,
                mixBlendMode: 'overlay',
              }}
            />

            {/* Floating Status Capsule */}
            <div
              style={{ transform: 'translateZ(30px)' }}
              className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white shadow-lg pointer-events-none"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e89b5c] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e89b5c]"></span>
                </span>
                <span className="text-[11px] font-semibold tracking-wide text-gray-100">Senior Cloud & DevOps</span>
              </div>
              <span className="text-[10px] text-gray-300 font-mono">Lyon, FR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Discrete Interaction Cue (Sits comfortably below without touching text) */}
      <p className="mt-2 text-[10px] uppercase tracking-widest text-gray-200/80 font-mono text-center">
        Touch · Swipe · Tilt
      </p>
    </div>
  );
}
