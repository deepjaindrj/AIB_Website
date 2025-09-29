'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Counter animation component
const AnimatedCounter: React.FC<{ value: string; inView: boolean; duration?: number }> = ({ value, inView, duration = 7 }) => {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    if (!inView) return;
    
    // Extract number from value (e.g., "120M+" -> 120)
    const match = value.match(/^(\d+(?:\.\d+)?)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const targetNum = parseFloat(match[1]);
    let currentNum = 0;
    
    const animationDuration = duration * 100; // Convert to milliseconds
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      // Ease out animation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      currentNum = targetNum * easeProgress;
      
      setDisplayValue(Math.floor(currentNum).toString());
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetNum.toString()); // Ensure final value is exact
      }
    };
    
    // Start animation after a small delay
    const timer = setTimeout(() => {
      animate();
    }, 200);
    
    return () => clearTimeout(timer);
  }, [value, inView, duration]);
  
  return <>{displayValue}</>;
};

interface StatCardProps {
  title: string;
  value: string;
  suffix: string;
  description: string;
  hasOrangeDot?: boolean;
  index: number;
  countDuration?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  suffix,
  description, 
  hasOrangeDot,
  index,
  countDuration = 100
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div 
      ref={ref}
      className="relative h-[35vh] w-auto flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      {/* Top section - Title */}
      <div>
        {/* Orange dot for the last card */}
        {hasOrangeDot && (
          <div className="absolute top-0 right-0 w-3 h-3 bg-purple-600 rounded-full"></div>
        )}
        
        {/* Title (eyebrow) */}
        <div className="text-zinc-500 uppercase text-sm tracking-wider">
          {title}
        </div>
      </div>
      
      {/* Bottom section - Stats and Description */}
      <div>
        {/* Large number with suffix */}
        <div className="text-white mb-3 text-6xl font-light leading-none tracking-tight">
          <AnimatedCounter value={value} inView={isInView} duration={countDuration} />
          {suffix}
        </div>
        
        {/* Description */}
        <div 
          className="text-zinc-400 text-sm leading-relaxed max-w-none"
        >
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const HeroStatsSection: React.FC = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-20%" });
  
  const stats = [
    {
      title: "INVESTMENTS",
      value: "120",
      suffix: "M+",
      description: "In VC funding raised by products we've helped bring to life.",
      countDuration: 7
    },
    {
      title: "RECOGNITION", 
      value: "40",
      suffix: "+",
      description: "Design awards from Webby, Awwwards, Adobe, Behance",
      countDuration: 7
    },
    {
      title: "TRUST",
      value: "90",
      suffix: "%", 
      description: "of clients come back to us for a second project",
      countDuration: 7
    },
    {
      title: "",
      value: "7",
      suffix: "",
      description: "Early stage startups that successfully scaled",
      hasOrangeDot: true,
      countDuration: 5
    }
  ];

  return (
    <section className="min-h-screen bg-zinc-950">
      <div className="py-16">
        <div className=" mx-auto px-6">
          
          {/* Hero Text Section */}
          <div ref={heroRef} className="max-w-4xl mx-auto mb-24">
            <div className="text-center mx-auto max-w-4xl text-zinc-100 text-3xl leading-[1.4]">
              {[
                "HHello Robo is a digital product design agency that",
"turns complex technology into intuitive, usable",
"interfaces. We work with forward-thinking teams",
"to create market-ready digital products that are",
"easy to use and hard to ignore."
              ].map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={isHeroInView ? { y: "0%" } : { y: "100%" }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeOut",
                      delay: 0.2 + (index * 0.1)
                    }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cards Wrapper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-zinc-900/60 border border-zinc-800/40 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/70 hover:border-zinc-700/50 min-h-80">
                <StatCard
                  title={stat.title}
                  value={stat.value}
                  suffix={stat.suffix}
                  description={stat.description}
                  hasOrangeDot={stat.hasOrangeDot}
                  index={index}
                  countDuration={stat.countDuration}
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroStatsSection;