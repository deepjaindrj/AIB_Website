'use client';
import React from 'react';

const PartneringSection: React.FC = () => {
  return (
    <section className="w-screen h-screen bg-zinc-950 flex items-center justify-center overflow-hidden relative">
      <div className="w-full max-w-[1900px] h-full px-6 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center border border-white/30 px-16">
          
          {/* Left Side - Scrolling Brand Logos in Rows */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 animate-scroll-down">
                
                {/* First Set of Rows */}
                <div className="flex flex-col gap-8 mb-12">
                  {/* Row 1 - 3 cells */}
                  <div className="flex justify-center gap-12">
                    {/* Palantir */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="w-6 h-6 border border-current rounded-sm mb-1 mx-auto flex items-center justify-center">
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium">Palantir</span>
                      </div>
                    </div>
                    
                    {/* Cisco */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-2">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-[1.5px] bg-current mr-[1.5px] last:mr-0" 
                              style={{ height: `${6 + Math.floor(i / 2) * 2}px` }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs font-bold">cisco</span>
                      </div>
                    </div>
                    
                    {/* Shopify */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex items-center justify-center">
                          <span className="text-sm mr-1">🛍</span>
                          <span className="text-xs font-bold">shopify</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - 2 cells */}
                  <div className="flex justify-center gap-20">
                    {/* Nike */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-white group-hover:text-zinc-300 transition-colors">
                        <svg width="32" height="18" viewBox="0 0 100 35" fill="currentColor" className="transform scale-125">
                          <path d="M12.7 34.9c-3.7-.1-6.7-1.2-9.1-3.1-.5-.4-1.5-1.4-1.9-1.9C.5 28.8.1 27.8.1 26.5c0-2.3.8-5.2 2.2-8.1 1.2-2.5 3.1-5.3 6.3-9 .9-1.1 3.7-4.2 3.7-4.2s-.1.3-.3.6c-1.6 2.8-2.9 6.1-3.6 9-.9 4.6-.4 8.5 1.4 11.6 1 2.1 2.7 3.9 4.6 4.9 3.4 1.8 8.3 1.9 14.3.4l45.7-12.5c24.7-6.7 44.9-12.1 44.9-12.1l-87.2 37.4c-4.7 2.1-5.9 2.7-8.2 3.5-5.7 2.1-10.8 3.1-14.9 3z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* SURFAIR */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-wide group-hover:text-zinc-300 transition-colors">SURFAIR</span>
                    </div>
                  </div>

                  {/* Row 3 - 3 cells */}
                  <div className="flex justify-center gap-12">
                    {/* NTWRK */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-widest group-hover:text-zinc-300 transition-colors">NTWRK</span>
                    </div>
                    
                    {/* Y Combinator */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-6 h-6 bg-white text-black font-bold text-sm flex items-center justify-center mx-auto mb-1 rounded-sm">
                          Y
                        </div>
                        <span className="text-white text-xs group-hover:text-zinc-300 transition-colors">Combinator</span>
                      </div>
                    </div>
                    
                    {/* AL6Z */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-widest group-hover:text-zinc-300 transition-colors">AL6Z</span>
                    </div>
                  </div>

                  {/* Row 4 - 2 cells */}
                  <div className="flex justify-center gap-20">
                    {/* NYSE */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-[1.5px] h-3 bg-current mr-[1.5px] last:mr-0"></div>
                          ))}
                        </div>
                        <div className="text-xs font-bold tracking-wide">NYSE</div>
                      </div>
                    </div>
                    
                    {/* Additional Brand */}
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-1">
                          <div className="w-1.5 h-1.5 bg-current rounded-full mr-1.5"></div>
                          <div className="w-1.5 h-1.5 bg-current rounded-full mr-1.5"></div>
                          <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium">Brand</span>
                      </div>
                    </div>
                  </div>

                  {/* Row 5 - 3 cells */}
                  <div className="flex justify-center gap-12">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="w-6 h-6 border border-current rounded-sm mb-1 mx-auto flex items-center justify-center">
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium">Palantir</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-2">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-[1.5px] bg-current mr-[1.5px] last:mr-0" 
                              style={{ height: `${6 + Math.floor(i / 2) * 2}px` }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs font-bold">cisco</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex items-center justify-center">
                          <span className="text-sm mr-1">🛍</span>
                          <span className="text-xs font-bold">shopify</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 6 - 2 cells */}
                  <div className="flex justify-center gap-20">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-white group-hover:text-zinc-300 transition-colors">
                        <svg width="32" height="18" viewBox="0 0 100 35" fill="currentColor" className="transform scale-125">
                          <path d="M12.7 34.9c-3.7-.1-6.7-1.2-9.1-3.1-.5-.4-1.5-1.4-1.9-1.9C.5 28.8.1 27.8.1 26.5c0-2.3.8-5.2 2.2-8.1 1.2-2.5 3.1-5.3 6.3-9 .9-1.1 3.7-4.2 3.7-4.2s-.1.3-.3.6c-1.6 2.8-2.9 6.1-3.6 9-.9 4.6-.4 8.5 1.4 11.6 1 2.1 2.7 3.9 4.6 4.9 3.4 1.8 8.3 1.9 14.3.4l45.7-12.5c24.7-6.7 44.9-12.1 44.9-12.1l-87.2 37.4c-4.7 2.1-5.9 2.7-8.2 3.5-5.7 2.1-10.8 3.1-14.9 3z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-wide group-hover:text-zinc-300 transition-colors">SURFAIR</span>
                    </div>
                  </div>
                </div>

                {/* Second Set of Rows (Duplicate) */}
                <div className="flex flex-col gap-8 mb-12">
                  {/* Row 1 - 3 cells */}
                  <div className="flex justify-center gap-12">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="w-6 h-6 border border-current rounded-sm mb-1 mx-auto flex items-center justify-center">
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium">Palantir</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-2">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-[1.5px] bg-current mr-[1.5px] last:mr-0" 
                              style={{ height: `${6 + Math.floor(i / 2) * 2}px` }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs font-bold">cisco</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex items-center justify-center">
                          <span className="text-sm mr-1">🛍</span>
                          <span className="text-xs font-bold">shopify</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - 2 cells */}
                  <div className="flex justify-center gap-20">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-white group-hover:text-zinc-300 transition-colors">
                        <svg width="32" height="18" viewBox="0 0 100 35" fill="currentColor" className="transform scale-125">
                          <path d="M12.7 34.9c-3.7-.1-6.7-1.2-9.1-3.1-.5-.4-1.5-1.4-1.9-1.9C.5 28.8.1 27.8.1 26.5c0-2.3.8-5.2 2.2-8.1 1.2-2.5 3.1-5.3 6.3-9 .9-1.1 3.7-4.2 3.7-4.2s-.1.3-.3.6c-1.6 2.8-2.9 6.1-3.6 9-.9 4.6-.4 8.5 1.4 11.6 1 2.1 2.7 3.9 4.6 4.9 3.4 1.8 8.3 1.9 14.3.4l45.7-12.5c24.7-6.7 44.9-12.1 44.9-12.1l-87.2 37.4c-4.7 2.1-5.9 2.7-8.2 3.5-5.7 2.1-10.8 3.1-14.9 3z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-wide group-hover:text-zinc-300 transition-colors">SURFAIR</span>
                    </div>
                  </div>

                  {/* Row 3 - 3 cells */}
                  <div className="flex justify-center gap-12">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-widest group-hover:text-zinc-300 transition-colors">NTWRK</span>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-6 h-6 bg-white text-black font-bold text-sm flex items-center justify-center mx-auto mb-1 rounded-sm">
                          Y
                        </div>
                        <span className="text-white text-xs group-hover:text-zinc-300 transition-colors">Combinator</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-widest group-hover:text-zinc-300 transition-colors">AL6Z</span>
                    </div>
                  </div>

                  {/* Row 4 - 2 cells */}
                  <div className="flex justify-center gap-20">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-[1.5px] h-3 bg-current mr-[1.5px] last:mr-0"></div>
                          ))}
                        </div>
                        <div className="text-xs font-bold tracking-wide">NYSE</div>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-1">
                          <div className="w-1.5 h-1.5 bg-current rounded-full mr-1.5"></div>
                          <div className="w-1.5 h-1.5 bg-current rounded-full mr-1.5"></div>
                          <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium">Brand</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Set of Rows (Duplicate) */}
                <div className="flex flex-col gap-8">
                  {/* Row 1 - 3 cells */}
                  <div className="flex justify-center gap-12">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="w-6 h-6 border border-current rounded-sm mb-1 mx-auto flex items-center justify-center">
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        </div>
                        <span className="text-xs font-medium">Palantir</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex justify-center mb-2">
                          {[...Array(8)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-[1.5px] bg-current mr-[1.5px] last:mr-0" 
                              style={{ height: `${6 + Math.floor(i / 2) * 2}px` }}
                            ></div>
                          ))}
                        </div>
                        <span className="text-xs font-bold">cisco</span>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-center text-white group-hover:text-zinc-300 transition-colors">
                        <div className="flex items-center justify-center">
                          <span className="text-sm mr-1">🛍</span>
                          <span className="text-xs font-bold">shopify</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 - 2 cells */}
                  <div className="flex justify-center gap-20">
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <div className="text-white group-hover:text-zinc-300 transition-colors">
                        <svg width="32" height="18" viewBox="0 0 100 35" fill="currentColor" className="transform scale-125">
                          <path d="M12.7 34.9c-3.7-.1-6.7-1.2-9.1-3.1-.5-.4-1.5-1.4-1.9-1.9C.5 28.8.1 27.8.1 26.5c0-2.3.8-5.2 2.2-8.1 1.2-2.5 3.1-5.3 6.3-9 .9-1.1 3.7-4.2 3.7-4.2s-.1.3-.3.6c-1.6 2.8-2.9 6.1-3.6 9-.9 4.6-.4 8.5 1.4 11.6 1 2.1 2.7 3.9 4.6 4.9 3.4 1.8 8.3 1.9 14.3.4l45.7-12.5c24.7-6.7 44.9-12.1 44.9-12.1l-87.2 37.4c-4.7 2.1-5.9 2.7-8.2 3.5-5.7 2.1-10.8 3.1-14.9 3z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="w-28 h-28 rounded-full border border-white/30 bg-zinc-900/10 backdrop-blur-sm flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                      <span className="text-white text-xs font-bold tracking-wide group-hover:text-zinc-300 transition-colors">SURFAIR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Typography (Centered) */}
          <div className="flex items-center justify-center">
            <div className="max-w-[500px] text-center">
              <h1
                className="font-dm-sans text-white font-light tracking-tight mb-8 leading-none"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                Partnering with the best
                
              </h1>
              
              <p
                className="font-dm-mono text-white/80 max-w-md mx-auto opacity-90 leading-relaxed"
                style={{
                  fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.6,
                }}
              >
                Our clients trust us to deliver <br /> exceptional results, time and time again,<br />
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

      {/* CSS Animation - Slower scrolling */}
      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(-66.666%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartneringSection;