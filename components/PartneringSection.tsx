'use client';
import React from 'react';

const PartneringSection: React.FC = () => {
  return (
    <section className="w-screen h-screen bg-zinc-950 flex items-center justify-center overflow-hidden relative">
      <div className="w-full max-w-[1900px] h-full px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
          
          {/* Left Side - Organic Brand Logo Scatter */}
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start">
            <div className="relative w-[700px] h-[600px]">
              
              {/* AIO2 - Top Left */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '20px', left: '60px' }}
              >
                <span className="text-zinc-200 text-xs font-bold tracking-widest group-hover:text-white transition-colors">AIO2</span>
              </div>

              {/* NYSE - Top Center */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '60px', left: '320px' }}
              >
                <div className="text-center text-zinc-200 group-hover:text-white transition-colors">
                  <div className="flex justify-center mb-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-[1.5px] h-2 bg-current mr-[1px] last:mr-0"></div>
                    ))}
                  </div>
                  <div className="text-xs font-bold tracking-wide">NYSE</div>
                </div>
              </div>

              {/* Palantir - Left Middle */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '160px', left: '40px' }}
              >
                <div className="text-center text-zinc-200 group-hover:text-white transition-colors">
                  <div className="text-base mb-1">🏢</div>
                  <span className="text-xs font-medium">Palantir</span>
                </div>
              </div>

              {/* Cisco - Center */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '140px', left: '280px' }}
              >
                <div className="text-center text-zinc-200 group-hover:text-white transition-colors">
                  <div className="flex justify-center mb-2">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-[1px] bg-current mr-[1px] last:mr-0" 
                        style={{ height: `${8 + Math.floor(i / 3) * 2}px` }}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs font-bold">cisco</span>
                </div>
              </div>

              {/* Shopify - Right */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '100px', left: '520px' }}
              >
                <div className="text-center text-zinc-200 group-hover:text-white transition-colors flex items-center">
                  <span className="text-base mr-2">🛒</span>
                  <span className="text-xs font-bold">shopify</span>
                </div>
              </div>

              {/* Nike - Left Lower */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '280px', left: '120px' }}
              >
                <div className="text-zinc-200 group-hover:text-white transition-colors">
                  <svg width="32" height="18" viewBox="0 0 100 35" fill="currentColor" className="transform scale-110">
                    <path d="M12.7 34.9c-3.7-.1-6.7-1.2-9.1-3.1-.5-.4-1.5-1.4-1.9-1.9C.5 28.8.1 27.8.1 26.5c0-2.3.8-5.2 2.2-8.1 1.2-2.5 3.1-5.3 6.3-9 .9-1.1 3.7-4.2 3.7-4.2s-.1.3-.3.6c-1.6 2.8-2.9 6.1-3.6 9-.9 4.6-.4 8.5 1.4 11.6 1 2.1 2.7 3.9 4.6 4.9 3.4 1.8 8.3 1.9 14.3.4l45.7-12.5c24.7-6.7 44.9-12.1 44.9-12.1l-87.2 37.4c-4.7 2.1-5.9 2.7-8.2 3.5-5.7 2.1-10.8 3.1-14.9 3z"/>
                  </svg>
                </div>
              </div>

              {/* SURFAIR - Right Middle */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '260px', left: '480px' }}
              >
                <span className="text-zinc-200 text-xs font-bold tracking-wide group-hover:text-white transition-colors">SURFAIR</span>
              </div>

              {/* NTWRK - Bottom Left */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '400px', left: '80px' }}
              >
                <span className="text-zinc-200 text-xs font-bold tracking-widest group-hover:text-white transition-colors">NTWRK</span>
              </div>

              {/* Y Combinator - Bottom Center */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '420px', left: '300px' }}
              >
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-7 h-7 bg-orange-500 text-black font-bold text-sm flex items-center justify-center mx-auto mb-1 rounded-sm">
                    Y
                  </div>
                  <span className="text-zinc-200 text-xs group-hover:text-white transition-colors">Combinator</span>
                </div>
              </div>

              {/* AL6Z - Bottom Right */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500"
                style={{ top: '380px', left: '540px' }}
              >
                <span className="text-zinc-200 text-xs font-bold tracking-widest group-hover:text-white transition-colors">AL6Z</span>
              </div>

              {/* Partial circles at bottom (cut off by container) */}
              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center"
                style={{ top: '520px', left: '160px' }}
              >
                <div className="text-center text-zinc-200">
                  <div className="flex justify-center">
                    <div className="w-1 h-1 bg-current rounded-full mr-1"></div>
                    <div className="w-1 h-1 bg-current rounded-full mr-1"></div>
                    <div className="w-1 h-1 bg-current rounded-full"></div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute w-28 h-28 rounded-full border border-zinc-700/25 bg-zinc-900/5 backdrop-blur-sm flex items-center justify-center"
                style={{ top: '540px', left: '380px' }}
              >
                <div className="text-center text-zinc-200">
                  <div className="flex justify-center">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-[1px] h-2 bg-current mr-[1px] last:mr-0"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orange accent dot */}
              <div 
                className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full opacity-90"
                style={{ top: '330px', left: '450px' }}
              ></div>

              {/* Additional subtle accent elements */}
              <div 
                className="absolute w-0.5 h-0.5 bg-zinc-600 rounded-full opacity-60"
                style={{ top: '200px', left: '180px' }}
              ></div>
              
              <div 
                className="absolute w-0.5 h-0.5 bg-zinc-600 rounded-full opacity-60"
                style={{ top: '350px', left: '220px' }}
              ></div>
            </div>
          </div>

          {/* Right Side - Enhanced Typography */}
          <div className="flex items-center justify-center lg:justify-start xl:justify-center">
            <div className="max-w-[600px] text-center lg:text-left xl:text-center">
              <h1
                className="text-zinc-100 font-light tracking-tight mb-12 leading-none"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: 'clamp(4rem, 7vw, 8.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Partnering with
                <br />
                <span className="inline-block mt-2">the best</span>
              </h1>
              
              <p
                className="text-zinc-400 max-w-lg mx-auto lg:mx-0 xl:mx-auto opacity-90 leading-relaxed"
                style={{
                  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: 'clamp(1.1rem, 1.3vw, 1.4rem)',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.65,
                }}
              >
                Our clients trust us to deliver exceptional results, time and time again,
                helping over 30 brands succeed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </section>
  );
};

export default PartneringSection;
