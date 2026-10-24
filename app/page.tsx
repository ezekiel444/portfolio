'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import fruitImages from './FoodImg';
import KineticBrandAvatar from './KineticBrandAvatar';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % fruitImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [mounted]);

  // Preload next image
  useEffect(() => {
    if (!mounted) return;
    const nextIndex = (currentImage + 1) % fruitImages.length;
    const img = new window.Image();
    img.src = fruitImages[nextIndex].src;
  }, [currentImage, mounted]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] flex items-center justify-center p-4 selection:bg-[#e89b5c]/30 selection:text-white">
      <div className="w-full max-w-md">
        
        {/* Kinetic Motion Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <KineticBrandAvatar />
          
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight text-center">
            EZEKIEL Matomi Lucky
          </h1>
          <p className="text-lg text-gray-200 text-center font-light">
            All About Open-Source Community
          </p>
        </div>

        {/* Navigation Buttons with Interactive Micro-Physics */}
        <div className="space-y-4 mb-8">
          <Link 
            href="/about"
            className="group block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] active:scale-[0.98] text-gray-900 text-xl font-medium rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-black/20 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>About</span>
              <span className="inline-block transform group-hover:translate-x-1.5 transition-transform text-[#2d4a2d]">
                &rarr;
              </span>
            </span>
          </Link>
        </div>

        {/* Social Media Links with Spring Scaling */}
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://tiktok.com/@ezekielmatomilucky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transform hover:scale-125 transition-all duration-300 w-8 h-8 flex items-center justify-center"
            aria-label="TikTok"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
            </svg>
          </a>

          <a 
            href="https://www.youtube.com/channel/UC58Sc0rg86Fs0noTlIq7gNg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transform hover:scale-125 transition-all duration-300 w-8 h-8 flex items-center justify-center"
            aria-label="YouTube"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a 
            href="https://github.com/ezekiel444" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transform hover:scale-125 transition-all duration-300 w-8 h-8 flex items-center justify-center"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          <a 
            href="https://gitlab.com/matomi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transform hover:scale-125 transition-all duration-300 w-8 h-8 flex items-center justify-center"
            aria-label="GitLab"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452.045 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.624-8.443a.92.92 0 0 0 .331-1.024"/>
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/in/ezekielmatomilucky/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transform hover:scale-125 transition-all duration-300 w-8 h-8 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Fluid Image Carousel */}
        <div className="relative h-64 rounded-2xl overflow-hidden bg-[#5a6355] shadow-xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a6355] via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#6b7566]/60 via-transparent to-transparent z-10 pointer-events-none"></div>
          
          {mounted && fruitImages.map((img, index) => {
            const nextIndex = (currentImage + 1) % fruitImages.length;
            if (index !== currentImage && index !== nextIndex) return null;
            
            return (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                fill
                priority={index === currentImage}
                sizes="(min-width: 1024px) 100vw, 100vw"
                className={`object-cover transition-all duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            );
          })}
        </div>

        {/* Carousel indicators */}
        {mounted && (
          <div className="flex justify-center gap-2 mt-4">
            {fruitImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? 'bg-[#e89b5c] w-6' 
                    : 'bg-white/40 hover:bg-white/70 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}
