'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useNavigation } from './navigation-controller';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const { isAnimating, onAnimationMidpoint, onAnimationComplete } = useNavigation();
  
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [displayedChildren, setDisplayedChildren] = useState<ReactNode>(children);
  const [isMounted, setIsMounted] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  
  const previousPathnameRef = useRef(pathname);
  const hasCalledMidpointRef = useRef(false);
  const midpointTimerRef = useRef<NodeJS.Timeout>();

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsInitialLoad(false), 100);
    return () => clearTimeout(timer);
  }, []);

  // Update displayed children when pathname changes (after navigation)
  useEffect(() => {
    if (!isMounted || isInitialLoad) return;

    if (pathname !== previousPathnameRef.current) {
      console.log('Pathname changed from', previousPathnameRef.current, 'to', pathname);
      
      if (!isAnimating) {
        // Direct navigation (browser back/forward) - update immediately
        setDisplayedChildren(children);
        setAnimationKey(prev => prev + 1);
      } else {
        // We're in controlled animation - update displayed children
        // This happens when router.push was called at midpoint
        console.log('Updating content during controlled animation');
        setDisplayedChildren(children);
      }
      
      previousPathnameRef.current = pathname;
    } else {
      // Same pathname but content changed
      setDisplayedChildren(children);
    }
  }, [pathname, children, isMounted, isInitialLoad, isAnimating]);

  // Start animation when isAnimating becomes true
  useEffect(() => {
    if (isAnimating) {
      console.log('Starting controlled animation');
      setAnimationKey(prev => prev + 1);
      hasCalledMidpointRef.current = false;
      
      // Set a reliable timer for midpoint (50% of total animation duration)
      // Total duration is 2.2s, so midpoint is at 1.1s
      midpointTimerRef.current = setTimeout(() => {
        if (!hasCalledMidpointRef.current) {
          console.log('Timer-based midpoint reached - calling navigation');
          hasCalledMidpointRef.current = true;
          onAnimationMidpoint();
        }
      }, 1100); // 50% of 2200ms
    }

    return () => {
      if (midpointTimerRef.current) {
        clearTimeout(midpointTimerRef.current);
      }
    };
  }, [isAnimating, onAnimationMidpoint]);

  // Handle animation complete
  const handleAnimationComplete = () => {
    console.log('Animation sequence complete');
    hasCalledMidpointRef.current = false;
    if (midpointTimerRef.current) {
      clearTimeout(midpointTimerRef.current);
    }
    onAnimationComplete();
  };

  // Prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="fixed inset-0">
        <div className="h-full overflow-auto">{children}</div>
      </div>
    );
  }

  // Initial load without animation
  if (isInitialLoad) {
    return (
      <div className="fixed inset-0">
        <div className="h-full overflow-auto">{displayedChildren}</div>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={handleAnimationComplete}>
      <motion.div
        key={`${pathname}-${animationKey}`}
        className="fixed inset-0 transition-all duration-1000 ease-out"
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(55, 48, 163, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
        }}
        initial={{ 
          scale: 0.7,
          borderRadius: '24px',
          y: '100vh',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          opacity: 0.3,
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
          opacity: [0.3, 0.7, 1],
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
          opacity: [1, 0.7, 0.3],
        }}
        transition={{
          duration: 2.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          times: [0, 0.4, 1],
        }}
      >
        <div className="h-full overflow-auto">
          {displayedChildren}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}