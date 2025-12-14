// app/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Music2, Radio, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import fruitImages from './FoodImg';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch by waiting for client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % fruitImages.length);
    }, 4000);

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
    <main className="min-h-screen bg-gradient-to-b from-[#6b7566] to-[#5a6355] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 rounded-full bg-[#2d4a2d] flex items-center justify-center mb-6">
            <span className="text-4xl font-bold text-[#e89b5c] italic">EML</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-2">EZEKIEL Matomi Lucky</h1>
          <p className="text-lg text-gray-300">Your daily dose of vitamin C</p>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-4 mb-8">
          <Link 
            href="/portfolio"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          >
            Portfolio
          </Link>
          
          <Link 
            href="/contact"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          >
            Contact
          </Link>
          
          <Link 
            href="/about"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          >
            About
          </Link>
          
          <Link 
            href="/blog"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          >
            Latest Posts
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://tiktok.com/@yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="TikTok"
          >
            <Music2 size={32} strokeWidth={1.5} />
          </a>
          
          <a 
            href="https://spotify.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="Spotify"
          >
            <Radio size={32} strokeWidth={1.5} />
          </a>
          
          <a 
            href="https://youtube.com/@yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={32} strokeWidth={1.5} />
          </a>
        </div>

        {/* Optimized Fruits Image Carousel */}
        <div className="relative h-64 overflow-hidden bg-[#5a6355]">
          {/* Gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#5a6355] via-transparent to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#6b7566] via-transparent to-transparent z-10 pointer-events-none"></div>
          
          {/* Only render images after mounting to avoid hydration issues */}
          {mounted && fruitImages.map((img, index) => {
            const nextIndex = (currentImage + 1) % fruitImages.length;
            // Only render current and next image for performance
            if (index !== currentImage && index !== nextIndex) return null;
            
            return (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
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
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage 
                    ? 'bg-[#e89b5c] w-6' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}