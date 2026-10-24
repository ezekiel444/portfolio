'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

export default function KineticBrandAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  const targetTiltRef = useRef({ x: 0, y: 0 });
  const currentTiltRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    targetTiltRef.current = { x: nx * 2, y: ny * 2 };
    setIsInteracting(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    targetTiltRef.current = { x: 0, y: 0 };
    setIsInteracting(false);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0 && containerRef.current) {
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const nx = (touch.clientX - rect.left) / rect.width - 0.5;
      const ny = (touch.clientY - rect.top) / rect.height - 0.5;
      targetTiltRef.current = { x: nx * 2.2, y: ny * 2.2 };
      setIsInteracting(true);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    targetTiltRef.current = { x: 0, y: 0 };
    setIsInteracting(false);
  }, []);

  // Gyroscope
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        const gx = Math.min(Math.max(e.gamma / 20, -1), 1);
        const gy = Math.min(Math.max((e.beta - 40) / 20, -1), 1);
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

  // Canvas Orbits
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
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

    let time = 0;

    const render = () => {
      if (isVisible) {
        time += 0.018;

        currentTiltRef.current.x += (targetTiltRef.current.x - currentTiltRef.current.x) * 0.09;
        currentTiltRef.current.y += (targetTiltRef.current.y - currentTiltRef.current.y) * 0.09;

        setTilt({ x: currentTiltRef.current.x, y: currentTiltRef.current.y });

        ctx.clearRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        const ox = currentTiltRef.current.x * 8;
        const oy = currentTiltRef.current.y * 8;

        ctx.save();
        ctx.translate(cx + ox, cy + oy);

        // Orbit 1: Amber dashed ring
        const r1 = 80;
        ctx.beginPath();
        ctx.arc(0, 0, r1, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(232, 155, 92, 0.45)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 8]);
        ctx.stroke();

        // Orbiting amber satellite bead
        const a1 = -time * 0.8;
        const s1x = r1 * Math.cos(a1);
        const s1y = r1 * Math.sin(a1);
        ctx.beginPath();
        ctx.arc(s1x, s1y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#e89b5c';
        ctx.shadowColor = '#e89b5c';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Orbit 2: Forest green solid arc
        const r2 = 92;
        const arcStart = time * 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, r2, arcStart, arcStart + Math.PI * 0.7);
        ctx.strokeStyle = 'rgba(45, 74, 45, 0.85)';
        ctx.lineWidth = 2;
        ctx.setLineDash([]);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, r2, arcStart + Math.PI, arcStart + Math.PI * 1.5);
        ctx.strokeStyle = 'rgba(232, 155, 92, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Pulse wave
        const pProg = (time * 0.4) % 1;
        const pr = r1 * (0.8 + pProg * 0.4);
        const pa = Math.max(0, (1 - pProg) * 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, pr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(232, 155, 92, ${pa})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  const rx = (-tilt.y * 14).toFixed(2);
  const ry = (tilt.x * 14).toFixed(2);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-52 h-52 mx-auto flex items-center justify-center select-none touch-pan-y cursor-grab active:cursor-grabbing mb-4"
      style={{ perspective: 800 }}
    >
      {/* 60FPS Orbit Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Ambient Backlight Glow */}
      <div
        className="absolute w-36 h-36 rounded-full blur-xl -z-10 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232, 155, 92, 0.35) 0%, rgba(45, 74, 45, 0.45) 70%, transparent 100%)',
          opacity: isInteracting ? 0.95 : 0.6,
          transform: `scale(${isInteracting ? 1.1 : 1})`,
        }}
      />

      {/* Core Sculpted Portrait Emblem */}
      <div
        style={{
          transform: `rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${isInteracting ? 1.05 : 1}, ${isInteracting ? 1.05 : 1}, 1)`,
          transformStyle: 'preserve-3d',
          transition: isInteracting ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
        className="relative z-10 w-32 h-32 rounded-full p-[2px] bg-gradient-to-tr from-[#e89b5c] via-white/30 to-[#2d4a2d] shadow-2xl shadow-black/60 flex items-center justify-center overflow-hidden"
      >
        <div className="w-full h-full rounded-full bg-[#2d4a2d] relative overflow-hidden">
          <Image
            src="/about_profile_picx/about_me_picx.png"
            alt="EZEKIEL Matomi Lucky"
            fill
            sizes="128px"
            priority
            className="object-cover object-top"
          />
          {/* Specular sheen */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at ${(tilt.x + 1) * 50}% ${(tilt.y + 1) * 50}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
              opacity: isInteracting ? 0.9 : 0.3,
            }}
          />
        </div>
      </div>
    </div>
  );
}
