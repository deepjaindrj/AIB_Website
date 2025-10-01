'use client';
import React from 'react';

const ph = (w: number, h: number, q = 'nature') =>
  `https://source.unsplash.com/${w}x${h}/?${q}`;

const SplitPinnedStory: React.FC = () => {
  return (
    <section className="relative w-full bg-zinc-950 text-zinc-100 overflow-visible">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14 py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[130px]">
          {/* Left: vertical stack of 3 image cards - this will scroll naturally */}
          <div className="flex-1 lg:w-1/2">
            <div className="space-y-8 min-h-[200vh]">
              {/* Card 1 */}
              <div className="bg-zinc-900/70 border border-zinc-800/60 p-6 flex flex-row items-end relative max-w-[600px]">
                <div className="absolute top-6 right-6 w-2 h-2 bg-purple-600 rounded-sm"></div>
                <div className="flex-1 min-w-0 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-base font-medium tracking-widest text-zinc-300/80 mb-56">
                      UNDERSTANDING CUSTOMERS
                      <br className="hidden md:block" />
                      AND YOUR MARKET
                    </div>
                  </div>
                  <ul className="mt-28 text-lg font-medium text-zinc-300/90 leading-7">
                    <li>Customer interviews</li>
                    <li>Stakeholder interviews</li>
                    <li>Market research</li>
                    <li>User testing</li>
                    <li>Competitive research</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-48 h-48 bg-zinc-800/70 rounded-sm overflow-hidden">
                  <img
                    src={ph(1200, 750, 'ui')}
                    alt="placeholder 1"
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-900/70 border border-zinc-800/60 p-6 flex flex-row items-end gap-4 relative max-w-[600px]">
                <div className="absolute top-6 right-6 w-2 h-2 bg-purple-600 rounded-sm"></div>
                <div className="flex-1 min-w-0 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-base font-medium tracking-widest text-zinc-300/80 mb-56">
                      DESIGN FOR COMMERCIAL
                      <br className="hidden md:block" />
                      DRIVERS OF SUCCESS
                    </div>
                  </div>
                  <ul className="mt-28 text-lg font-medium text-zinc-300/90 leading-7">
                    <li>UI/UX design</li>
                    <li>Data visualization</li>
                    <li>UI animation</li>
                    <li>Userflows</li>
                    <li>Design systems</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-48 h-48 bg-zinc-800/70 rounded-sm overflow-hidden">
                  <img
                    src={ph(1200, 750, 'app')}
                    alt="placeholder 2"
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-900/70 border border-zinc-800/60 p-6 flex flex-row items-end gap-4 relative max-w-[600px]">
                <div className="absolute top-6 right-6 w-2 h-2 bg-purple-600 rounded-sm"></div>
                <div className="flex-1 min-w-0 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-base font-medium tracking-widest text-zinc-300/80 mb-56">
                      MARKET-READY PRODUCT DESIGN
                    </div>
                  </div>
                  <ul className="mt-28 text-lg font-medium text-zinc-300/90 leading-7">
                    <li>UI/UX design</li>
                    <li>Data visualization</li>
                    <li>UI animation</li>
                    <li>Userflows</li>
                    <li>Design systems</li>
                  </ul>
                </div>
                <div className="flex-shrink-0 w-48 h-48 bg-zinc-800/70 rounded-sm overflow-hidden">
                  <img
                    src={ph(1200, 750, 'prototype')}
                    alt="placeholder 3"
                    className="w-full h-full object-cover opacity-95"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: sticky text */}
          <div className="flex-1 lg:w-1/2">
            <div className="lg:sticky lg:top-12 w-full lg:max-w-[640px] py-8">
              <p
                className="text-zinc-200/95 font-light leading-[1.4] font-dm-sans max-w-md"
                style={{
                  fontSize: 'clamp(1.4rem, 1.8vw, 1.9rem)',
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