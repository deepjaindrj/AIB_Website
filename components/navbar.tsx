'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useNavigation } from './navigation-controller';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { isAnimating, destinationRoute, triggerNavigation } = useNavigation();

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsOpen(!isOpen);
    }
  };

  const handleNavigation = (href: string) => {
    // Only navigate if it's a different route and not already animating
    if (pathname !== href && !isAnimating) {
      console.log('Navbar: Starting navigation to', href);
      
      // Close menu first
      setIsOpen(false);
      
      // Trigger the controlled navigation (this starts animation but doesn't navigate yet)
      triggerNavigation(href);
    }
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.button
          onClick={toggleMenu}
          className={cn(
            "relative w-14 h-14 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center shadow-2xl",
            isAnimating && "opacity-50 cursor-not-allowed"
          )}
          whileHover={!isAnimating ? { scale: 1.05 } : {}}
          whileTap={!isAnimating ? { scale: 0.95 } : {}}
          transition={{ duration: 0.2 }}
          disabled={isAnimating}
        >
          {/* Hamburger Lines */}
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.div
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white rounded-full my-1"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-24 right-6 z-40 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {navItems.map((item, index) => {
              const isCurrentPage = pathname === item.href;
              const isDestination = destinationRoute === item.href;
              const isDisabled = isCurrentPage || isAnimating;
              
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.05, 
                    duration: 0.2 
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className="w-full text-left"
                    disabled={isDisabled}
                  >
                    <motion.div
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                        isCurrentPage
                          ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white cursor-default"
                          : isDestination && isAnimating
                          ? "bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 text-blue-300"
                          : isAnimating
                          ? "text-gray-500 cursor-not-allowed opacity-50"
                          : "text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer"
                      )}
                      whileHover={!isDisabled ? { x: 4 } : {}}
                      whileTap={!isDisabled ? { scale: 0.98 } : {}}
                      transition={{ duration: 0.15 }}
                    >
                      {isDestination && isAnimating ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Going to {item.name}...</span>
                        </span>
                      ) : (
                        item.name
                      )}
                    </motion.div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}