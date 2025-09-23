'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState(children);
  const [isExiting, setIsExiting] = useState(false);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    // After initial render, set isInitialLoad to false
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // If pathname changed and it's not the initial load
    if (!isInitialLoad && pathname !== previousPathnameRef.current) {
      setIsExiting(true);
      // Keep displaying the old children during exit
      // Don't update displayedChildren yet
    } else if (!isExiting) {
      // Update displayed children only when not exiting
      setDisplayedChildren(children);
    }
    previousPathnameRef.current = pathname;
  }, [pathname, children, isInitialLoad, isExiting]);

  const handleExitComplete = () => {
    // After exit animation completes, update the content and allow enter animation
    setIsExiting(false);
    setDisplayedChildren(children);
  };

  // For initial load, render without animation
  if (isInitialLoad) {
    return (
      <div className="fixed inset-0">
        <div className="h-full overflow-auto">
          {children}
        </div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={handleExitComplete}>
      <motion.div
        key={pathname}
        className="fixed inset-0"
        initial={{ 
          scale: 0.7,
          borderRadius: '24px',
          y: '100vh',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          filter: 'blur(8px)',
        }}
        animate={{ 
          scale: [0.7, 0.7, 1],
          borderRadius: ['24px', '24px', '0px'],
          y: ['100vh', 0, 0],
          boxShadow: [
            '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
            '0 0 0 0 rgba(0, 0, 0, 0)'
          ],
          filter: ['blur(8px)', 'blur(4px)', 'blur(0px)'],
        }}
        exit={{ 
          scale: [1, 0.8, 0.8],
          borderRadius: ['0px', '16px', '16px'],
          y: [0, 0, '-100vh'],
          boxShadow: [
            '0 0 0 0 rgba(0, 0, 0, 0)',
            '0 15px 35px -8px rgba(0, 0, 0, 0.3)',
            '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          ],
          filter: ['blur(0px)', 'blur(2px)', 'blur(8px)'],
        }}
        transition={{
          duration: 2.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.4, 1],
          scale: { 
            duration: 2.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.4, 1]
          },
          borderRadius: { 
            duration: 2.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.4, 1]
          },
          y: {
            duration: 2.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            times: [0, 0.4, 1]
          },
          filter: { 
            duration: 2.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          },
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(55, 48, 163, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="h-full overflow-auto">
          {displayedChildren}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}