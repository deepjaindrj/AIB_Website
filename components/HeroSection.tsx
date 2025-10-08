'use client';

import { ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // Refs for GSAP animations
  const preloaderRef = useRef<HTMLDivElement>(null);
  const topNavRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const expandingImageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const preloadImages = [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=900&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=900&fit=crop&auto=format',
  ];

  const angles = [50, 43, 36, 29, 22, 15, 8, 0];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < preloadImages.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setShowContent(true);
          }, 1200);
        }, 1000);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [currentImageIndex, preloadImages.length]);

  // GSAP animation for each stacked image as it appears
  useEffect(() => {
    const currentImage = imageRefs.current[currentImageIndex];
    if (currentImage && currentImageIndex < preloadImages.length - 1) {
      gsap.fromTo(
        currentImage,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }
      );

      // Update brightness for all images
      imageRefs.current.forEach((ref, idx) => {
        if (ref && idx < preloadImages.length - 1) {
          const img = ref.querySelector('img');
          if (img) {
            gsap.to(img, {
              filter: idx === currentImageIndex ? 'brightness(1)' : 'brightness(0.7)',
              duration: 0.3,
            });
          }
        }
      });
    }
  }, [currentImageIndex]);

  // GSAP animation for expanding last image
  useEffect(() => {
    if (currentImageIndex >= preloadImages.length - 1 && expandingImageRef.current && overlayRef.current) {
      gsap.fromTo(
        expandingImageRef.current,
        {
          width: 'min(55vw, 650px)',
          height: 'min(41.25vw, 487.5px)',
          borderRadius: '0px',
        },
        {
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          duration: 1.2,
          ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
        }
      );

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.4 }
      );
    }
  }, [currentImageIndex]);

  // GSAP animation for preloader exit
  useEffect(() => {
    if (!isLoading && preloaderRef.current) {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
      });
    }
  }, [isLoading]);

  // GSAP animation for top nav entrance
  useEffect(() => {
    if (showContent && topNavRef.current) {
      gsap.fromTo(
        topNavRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      );
    }
  }, [showContent]);

  // GSAP animation for tagline entrance
  useEffect(() => {
    if (showContent && taglineRef.current) {
      gsap.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.0 }
      );
    }
  }, [showContent]);

  return (
    <div className="relative min-h-screen bg-black" style={{ overflow: 'hidden', willChange: 'auto' }}>
      {/* Final Background */}
      <div className="absolute inset-0 z-0" style={{ opacity: showContent ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <img
          src={preloadImages[preloadImages.length - 1]}
          alt="Hero Background"
          className="w-full h-full object-cover"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Top Navigation - Only render when showContent is true */}
      {showContent && (
        <div
          ref={topNavRef}
          className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center p-8"
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Center Navigation */}
          <div className="font-dm-mono hidden md:flex items-center space-x-0 bg-black/40 backdrop-blur-sm rounded-lg px-2 py-2">
            <div className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded">AGENCY</div>
            <div className="px-6 py-2 text-gray-400 text-sm font-medium hover:text-white transition-colors">APPROACH</div>
            <div className="px-6 py-2 text-gray-400 text-sm font-medium hover:text-white transition-colors">WORK</div>
            <div className="px-6 py-2 text-gray-400 text-sm font-medium hover:text-white transition-colors">THOUGHTS</div>
            <div className="px-6 py-2 text-gray-400 text-sm font-medium hover:text-white transition-colors">LAB</div>
          </div>
          
          {/* Let's Chat Button */}
          <button className="font-dm-mono px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-all duration-300">
            LET'S CHAT
          </button>
        </div>
      )}

      {/* Main Tagline - Only render when showContent is true */}
      {showContent && (
        <div
          ref={taglineRef}
          className="absolute bottom-16 left-8 z-30 font-dm-sans"
        >
          <h1 className="text-white text-5xl md:text-7xl leading-tight font-dm-sans">
            Distilling complex tech<br />
            into simple, usable interfaces
          </h1>
        </div>
      )}

      {/* Preloader - Only render when isLoading is true */}
      {isLoading && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-50 bg-black"
          style={{ overflow: 'hidden' }}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ overflow: 'hidden' }}>
            {/* Stacked images except last */}
            {preloadImages.map((image, index) => (
              index < preloadImages.length - 1 && (
                <div
                  key={index}
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="absolute"
                  style={{
                    width: 'min(50vw, 600px)',
                    height: 'min(37.5vw, 450px)',
                    left: '50%',
                    top: '50%',
                    overflow: 'hidden',
                    transform: `translate(-50%, -50%) rotate(${angles[index]}deg)`,
                    opacity: index <= currentImageIndex ? 1 : 0,
                    scale: index <= currentImageIndex ? 1 : 0.8,
                  }}
                >
                  <img
                    src={image}
                    alt={`Preload ${index + 1}`}
                    className="w-full h-full object-cover shadow-2xl"
                    style={{
                      filter: index === currentImageIndex ? 'brightness(1)' : 'brightness(0.7)',
                    }}
                  />
                </div>
              )
            ))}

            {/* Last image expands full screen */}
            {currentImageIndex >= preloadImages.length - 1 && (
              <div
                ref={expandingImageRef}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={preloadImages[preloadImages.length - 1]}
                  alt="Expanding Background"
                  className="w-full h-full object-cover"
                />
                <div
                  ref={overlayRef}
                  className="absolute inset-0 bg-black/50"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        {/* Removed all center content */}
      </div>
    </div>
  );
}
