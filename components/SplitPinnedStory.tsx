'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ph = (w: number, h: number, q = 'nature') =>
  `https://source.unsplash.com/${w}x${h}/?${q}`;

const SplitPinnedStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const leftInnerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let onResize: () => void;

    const ctx = gsap.context(() => {
      const section = sectionRef.current!;
      const right = rightRef.current!;
      const left = leftRef.current!;
      const leftInner = leftInnerRef.current!;

      // Use the section element as the main trigger so the effect is scoped
      // to this component rather than the whole page.
      const start = () => `top top`;

      // Compute dynamic end based on leftInner height so the animation runs
      // exactly while the image stack passes the viewport of the section.
      const leftHeight = leftInner.getBoundingClientRect().height;
      const sectionHeight = section.getBoundingClientRect().height;

      // Instead of pinning (which can conflict with other page pins), use CSS
      // `position: sticky` on the right column to keep it centered within the
      // section. We still animate it downward near the end for the finish.

      // Animate the left image stack upward as user scrolls the section
      gsap.fromTo(
        leftInner,
        { y: 0 },
        {
          y: () => -(leftHeight - sectionHeight + 40), // shift up by overflow amount
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${Math.max(leftHeight - sectionHeight, sectionHeight)}`,
            scrub: 1,
            // markers: true,
          },
        }
      );

      // Ease the sticky text down near the end so it finishes lower (relative)
      gsap.fromTo(
        right,
        { yPercent: 0 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'center top',
            end: () => `+=${Math.max(leftHeight - sectionHeight, sectionHeight)}`,
            scrub: 1,
            // markers: true,
          },
        }
      );

  // Refresh calculations on resize
  onResize = () => ScrollTrigger.refresh();
  window.addEventListener('resize', onResize);

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, sectionRef);

    return () => {
      ctx.revert();
      if (onResize) window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: vertical stack of 3 image cards, animated upward */}
          <div ref={leftRef} className="lg:col-span-6 overflow-hidden">
            <div ref={leftInnerRef} className="space-y-8">
              {/* Card 1 */}
              <div className="bg-zinc-900/70 rounded-md border border-zinc-800/60 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[11px] tracking-widest text-zinc-300/80">
                    UNDERSTANDING CUSTOMERS
                    <br className="hidden md:block" />
                    AND YOUR MARKET
                  </div>
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                </div>

                <div className="aspect-[16/10] bg-zinc-800/70 rounded-sm overflow-hidden">
                  <img
                    src={ph(1200, 750, 'ui')}
                    alt="placeholder 1"
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>

                <ul className="mt-6 text-sm text-zinc-300/90 leading-7">
                  <li>Customer interviews</li>
                  <li>Stakeholder interviews</li>
                  <li>Market research</li>
                  <li>User testing</li>
                  <li>Competitive research</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-900/70 rounded-md border border-zinc-800/60 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[11px] tracking-widest text-zinc-300/80">
                    DESIGN FOR COMMERCIAL
                    <br className="hidden md:block" />
                    DRIVERS OF SUCCESS
                  </div>
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                </div>

                <div className="aspect-[16/10] bg-zinc-800/70 rounded-sm overflow-hidden">
                  <img
                    src={ph(1200, 750, 'app')}
                    alt="placeholder 2"
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-900/70 rounded-md border border-zinc-800/60 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[11px] tracking-widest text-zinc-300/80">
                    MARKET-READY PRODUCT DESIGN
                  </div>
                  <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
                </div>

                <div className="aspect-[16/10] bg-zinc-800/70 rounded-sm overflow-hidden">
                  <img
                    src={ph(1200, 750, 'prototype')}
                    alt="placeholder 3"
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: sticky text (uses CSS sticky inside the section) */}
          <div className="lg:col-span-6 min-h-[60vh]">
            <div ref={rightRef} className="w-full lg:max-w-[640px] mx-auto sticky top-1/2 transform -translate-y-1/2">
              <p
                className="text-zinc-200/95 font-light leading-[1.6]"
                style={{
                  fontFamily:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: 'clamp(1.1rem, 1.4vw, 1.5rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                We know that Market-Ready Product Design is most important for
                product teams. Not minimum viable product or maximum overkill. We
                achieve Market-Ready Design by focusing on three decision‑making
                drivers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitPinnedStory;
