'use client';

import Link from 'next/link';
import Image from 'next/image';
import {SiYoutube, SiTiktok, SiFacebook, SiGithub, SiGitlab, SiInstagram, SiX} from '@icons-pack/react-simple-icons';
import { useState, useEffect } from 'react';
import fruitImages from './FoodImg';



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
          <p className="text-lg text-gray-300">All About Open-Source community</p>
        </div>

        {/* Navigation Buttons */}
        <div className="space-y-4 mb-8">

          <Link 
            href="/about"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          >
            About
          </Link>

          {/* <Link 
            href="/portfolio"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          > */}
            {/* Portfolio */}
            {/* </Link> */}
            <a
              href="https://matomi.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
            >
              Portfolio
            </a>

         {/* <Link 
            href="/contact"
            className="block w-full py-4 px-6 bg-[#c9ccc4] hover:bg-[#b8bbb3] text-gray-900 text-xl font-medium rounded-full text-center transition-colors"
          >
            Contact
          </Link>  */}
 
        </div>

        {/* Social Icons */}   
        <div className="flex flex-wrap justify-center gap-6 mb-8 px-4">
          <a 
            href="https://tiktok.com/@ezekielmatomilucky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="TikTok"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>

          <a 
            href="https://www.youtube.com/channel/UC58Sc0rg86Fs0noTlIq7gNg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="YouTube"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a 
            href="https://facebook.com/ezekielmatomilucky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Facebook"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a 
            href="https://github.com/ezekiel444" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>

          <a 
            href="https://gitlab.com/matomi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="GitLab"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452.045 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.624-8.443a.92.92 0 0 0 .331-1.024"/>
            </svg>
          </a>

          <a 
            href="https://instagram.com/ezekielmatomilucky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/in/ezekielmatomilucky/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://tiktok.com/@ezekielmatomilucky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="TikTok"
          >
            <SiTiktok size={32} strokeWidth={1.5} />
          </a>

          <a 
            href="https://www.youtube.com/channel/UC58Sc0rg86Fs0noTlIq7gNg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="YouTube"
          >
            <SiYoutube size={32} strokeWidth={1.5} />
          </a>

          <a 
            href="https://faceboo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="Facebook"
          >
            <SiFacebook size={32} strokeWidth={1.5} />
          </a>

          <a 
            href="https://github.com/ezekiel444" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="Github"
          >
            <SiGithub size={32} strokeWidth={1.5} />
          </a>

          <a 
            href="https://gitlab.com/matomi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="Gitlab"
          >
            <SiGitlab size={32} strokeWidth={1.5} />
          </a>

          <a 
            href="https://ezekielmatomilucky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="Instagram"
          >
            <SiInstagram size={32} strokeWidth={1.5} />
          </a>

          <a 
            href="https://www.linkedin.com/in/ezekielmatomilucky/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-[#e89b5c] transition-colors"
            aria-label="Linkedin"
          >
          <Image 
              src="/logo/LinkedIn_icon.svg"
              alt="LinkedIn"
              width="32" 
              height="32"
              className="shrink-0 min-w-[32px] min-h-[32px]"

              />

          </a>
          

        </div> */}



{/* testing */}



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
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                fill
                priority={index === currentImage}
                sizes="(min-width: 1024px) 100vw, 100vw"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
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