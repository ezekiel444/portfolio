'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Cloud, Terminal, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

interface MotionCardProps {
  imageSrc?: string;
  name?: string;
  role?: string;
  location?: string;
}

export default function MotionCard({
  imageSrc = '/about_profile_picx/about_me_picx.png',
  name = 'EZEKIEL Matomi Lucky',
  role = 'Cloud & DevOps Architect',
  location = 'Lyon, France',
}: MotionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized coordinates (-0.5 to 0.5)
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    // Subtle 3D tilt calculation (max +-14 deg)
    const rotateX = -(normalizedY * 18);
    const rotateY = normalizedX * 18;

    // Glare position in percentage (0 to 100)
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;

    setTransform({
      rotateX: Number(rotateX.toFixed(2)),
      rotateY: Number(rotateY.toFixed(2)),
      scale: 1.02,
    });
    setGlare({
      x: Number(glareX.toFixed(1)),
      y: Number(glareY.toFixed(1)),
      opacity: 1,
    });
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div className="relative group w-full max-w-[440px] mx-auto select-none">
      {/* 1. Ambient Background Light Aura (Breathing Glow Cone) */}
      <div 
        className={`absolute -inset-6 -z-10 rounded-[40px] opacity-40 blur-3xl transition-all duration-700 pointer-events-none ${
          isHovered ? 'opacity-80 scale-110' : 'opacity-40 scale-95'
        }`}
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(232, 155, 92, 0.45) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(6, 182, 212, 0.15) 100%)',
        }}
      />

      {/* 2. 3D Perspective Wrapper */}
      <div
        style={{ perspective: 1200 }}
        className="w-full flex justify-center items-center py-4"
      >
        {/* 3. The Interactive Rotating Border Beam Container */}
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          style={{
            transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${transform.scale}, ${transform.scale}, 1)`,
            transition: isHovered
              ? 'transform 0.12s cubic-bezier(0.2, 0.8, 0.4, 1)'
              : 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          className="relative w-full rounded-[32px] p-[2px] overflow-hidden shadow-2xl shadow-black/90 cursor-pointer preserve-3d"
        >
          {/* Animated Conic Border Beam (MotionSites Flagship Creative) */}
          <div
            className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] animate-spin-beam pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #e89b5c 290deg, #10b981 330deg, #38bdf8 355deg, transparent 360deg)',
            }}
          />

          {/* Secondary Soft Glow Beam for outer halo aura */}
          <div
            className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] animate-spin-beam blur-md opacity-60 pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, transparent 240deg, #e89b5c 290deg, #10b981 330deg, #38bdf8 355deg, transparent 360deg)',
            }}
          />

          {/* 4. Inner Card Body */}
          <div className="relative w-full h-[520px] sm:h-[560px] rounded-[30px] overflow-hidden bg-neutral-950/95 backdrop-blur-2xl border border-white/10 preserve-3d">
            {/* The User's Portrait Image */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={name}
                fill
                priority
                sizes="(max-width: 640px) 100vw, 440px"
                className={`object-cover object-top transition-transform duration-700 ease-out ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Cinematic Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-black/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Specular Glare Reflection Sheen */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle 320px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.28) 0%, rgba(232, 155, 92, 0.12) 35%, transparent 70%)`,
                  opacity: glare.opacity,
                  mixBlendMode: 'overlay',
                }}
              />
            </div>

            {/* 5. Floating 3D Depth Layer (Parallax Elements with translateZ) */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none preserve-3d">
              {/* Top Row: Live Availability Pill */}
              <div 
                style={{ transform: 'translateZ(45px)' }}
                className="flex items-center justify-between w-full"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/15 text-xs font-medium text-white shadow-xl shadow-black/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for Engineering Roles</span>
                </div>

                <div className="h-8 w-8 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#e89b5c] shadow-xl">
                  <Sparkles size={14} />
                </div>
              </div>

              {/* Bottom Row: Identity & Floating Badges */}
              <div className="space-y-3.5">
                {/* Floating Badge 1: Cloud & DevOps Specialization */}
                <div
                  style={{ transform: 'translateZ(40px)' }}
                  className="animate-float-1 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-neutral-900/85 backdrop-blur-md border border-amber-500/30 text-white shadow-xl shadow-black/60 max-w-[92%]"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#e89b5c]/20 border border-[#e89b5c]/40 flex items-center justify-center text-[#e89b5c] shrink-0">
                    <Cloud size={15} />
                  </div>
                  <div className="text-left leading-tight overflow-hidden">
                    <p className="text-xs font-semibold text-white tracking-wide truncate">Cloud & DevOps Architect</p>
                    <p className="text-[10px] text-gray-300 truncate">Kubernetes · Azure · AWS · GCP</p>
                  </div>
                </div>

                {/* Floating Badge 2: Location & Experience */}
                <div 
                  style={{ transform: 'translateZ(35px)' }}
                  className="animate-float-2 flex items-center justify-between gap-2 pt-1"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-white/10 text-xs text-gray-200 shadow-lg">
                    <MapPin size={13} className="text-[#e89b5c]" />
                    <span>{location}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 backdrop-blur-md border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-lg">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>5+ Yrs Hands-on</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Inner Border Inset Highlight */}
            <div className="absolute inset-0 rounded-[30px] border border-white/10 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Helpful subtle interaction cue */}
      <div className="text-center mt-1">
        <p className="text-[11px] text-gray-400/80 tracking-wider font-mono uppercase transition-opacity duration-300 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89b5c]/80 animate-pulse"></span>
          Interactive 3D Holographic View · Hover or Tilt
        </p>
      </div>
    </div>
  );
}
