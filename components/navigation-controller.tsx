'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface NavigationContextType {
  isAnimating: boolean;
  destinationRoute: string | null;
  triggerNavigation: (route: string) => void;
  onAnimationMidpoint: () => void;
  onAnimationComplete: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [destinationRoute, setDestinationRoute] = useState<string | null>(null);
  const router = useRouter();

  const triggerNavigation = (route: string) => {
    console.log('Triggering navigation to:', route);
    setIsAnimating(true);
    setDestinationRoute(route);
    // Don't navigate yet - wait for animation midpoint
  };

  const onAnimationMidpoint = () => {
    console.log('Animation midpoint reached - navigating to:', destinationRoute);
    if (destinationRoute) {
      router.push(destinationRoute);
    }
  };

  const onAnimationComplete = () => {
    console.log('Animation complete - resetting state');
    setIsAnimating(false);
    setDestinationRoute(null);
  };

  return (
    <NavigationContext.Provider value={{
      isAnimating,
      destinationRoute,
      triggerNavigation,
      onAnimationMidpoint,
      onAnimationComplete,
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}