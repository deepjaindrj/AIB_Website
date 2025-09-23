'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

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
        // Wait a few seconds before expanding the last image
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setShowContent(true);
          }, 1200); // allow expansion animation to finish
        }, 1000); // 1 second delay before expanding
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [currentImageIndex, preloadImages.length]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Final Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={preloadImages[preloadImages.length - 1]}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-black"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Stacked images except last */}
              {preloadImages.map((image, index) => (
                index < preloadImages.length - 1 && (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      width: '55vw',
                      height: '35vw', // 4:3 ratio
                      maxWidth: '800px',
                      maxHeight: '600px',
                      left: '50%',
                      top: '50%',
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotate: angles[index],
                      x: '-50%',
                      y: '-50%',
                    }}
                    animate={index <= currentImageIndex ? {
                      opacity: 1,
                      scale: 1,
                      rotate: angles[index],
                      x: '-50%',
                      y: '-50%',
                    } : {}}
                    transition={{
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1],
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
                  </motion.div>
                )
              ))}

              {/* Last image expands full screen */}
              {currentImageIndex >= preloadImages.length - 1 && (
                <motion.div
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{
                    width: '60vw',
                    height: '45vw', // 4:3 ratio
                    borderRadius: '0px',
                  }}
                  animate={{
                    width: '100vw',
                    height: '100vh',
                    borderRadius: '0px',
                  }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <img
                    src={preloadImages[preloadImages.length - 1]}
                    alt="Expanding Background"
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Welcome to the future</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                AIB
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Website
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed "
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Crafting digital experiences with innovative style transitions and modern design principles.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
