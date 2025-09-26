'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

/* Utility: safe MotionPath orbit with ref guards */
function orbitSafe(
  el: SVGGraphicsElement | null,
  path: SVGPathElement | null,
  duration: number,
  autoRotate = false,
  delay = 0
) {
  if (!el || !path) {
    console.warn('orbitSafe: el or path is null', { el, path });
    return;
  }
  if (!(el instanceof Element) || !(path instanceof SVGPathElement)) {
    console.warn('orbitSafe: el or path is not correct type', { el, path });
    return;
  }

  gsap.delayedCall(delay, () => {
    // Recheck still valid after a tick
    if (!(el instanceof Element) || !(path instanceof SVGPathElement)) return;

    gsap.to(el, {
      duration,
      repeat: -1,
      ease: 'none',
      motionPath: {
        path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate,
      },
    });
  });
}

/* ========== SECTION 1: Radar Hero ========== */
/* ========== SECTION 1: Radar Hero ========== */
const RadarSection: React.FC = () => {
  const circleClockwiseRef = useRef<SVGGElement | null>(null);
  const circleCounterRef = useRef<SVGGElement | null>(null);
  const tickRef = useRef<SVGGElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const origin = '50% 50%';

      // Rotating tick marks around the perimeter
      if (tickRef.current) {
        gsap.to(tickRef.current, { 
          rotation: 360, 
          repeat: -1, 
          ease: 'none', 
          duration: 120, 
          transformOrigin: origin 
        });
      }

      // Clockwise rotating circle with mask
      if (circleClockwiseRef.current) {
        gsap.to(circleClockwiseRef.current, { 
          rotation: 360, 
          repeat: -1, 
          ease: 'none', 
          duration: 90, 
          transformOrigin: origin 
        });
      }

      // Counter-clockwise rotating elements
      if (circleCounterRef.current) {
        gsap.to(circleCounterRef.current, { 
          rotation: -360, 
          repeat: -1, 
          ease: 'none', 
          duration: 60, 
          transformOrigin: origin 
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-screen h-screen bg-zinc-950">
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 flex items-center">
          <div className="px-8 md:px-16 lg:pl-24 lg:pr-8 max-w-4xl">
            <h1
              className="text-zinc-100 font-light tracking-tight"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(2.75rem, 5.5vw, 7rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              Design interfaces
              <br />
              customers actually use
            </h1>
            <p
              className="mt-8 text-zinc-400"
              style={{
                fontFamily:
                  'Evo, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.375rem)',
                lineHeight: 1.7,
                letterSpacing: '-0.005em',
                maxWidth: '42ch',
              }}
            >
              We turn complex technology into intuitive interfaces—guided by real customer insight. The result: stronger
              product–market fit, faster iteration cycles, and fewer costly misalignments.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-[92%] max-w-[820px] aspect-square">
            <svg viewBox="0 0 617 614" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <mask id="mask0_radar" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="5" y="4" width="606" height="605">
                  {/* Radial lines creating the radar sweep mask */}
                  {Array.from({ length: 120 }).map((_, i) => {
                    const angle = (i / 120) * 360;
                    const startAngle = (angle - 2) * (Math.PI / 180);
                    const endAngle = (angle + 2) * (Math.PI / 180);
                    const innerR = 60;
                    const outerR = 300;
                    
                    const x1 = 308 + Math.cos(startAngle) * innerR;
                    const y1 = 307 + Math.sin(startAngle) * innerR;
                    const x2 = 308 + Math.cos(startAngle) * outerR;
                    const y2 = 307 + Math.sin(startAngle) * outerR;
                    const x3 = 308 + Math.cos(endAngle) * outerR;
                    const y3 = 307 + Math.sin(endAngle) * outerR;
                    const x4 = 308 + Math.cos(endAngle) * innerR;
                    const y4 = 307 + Math.sin(endAngle) * innerR;
                    
                    return (
                      <path
                        key={i}
                        d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`}
                        stroke="#373737"
                        strokeWidth="0.8"
                        strokeMiterlimit="10"
                      />
                    );
                  })}
                </mask>
              </defs>

              {/* Masked rotating circle */}
              <g mask="url(#mask0_radar)" ref={circleClockwiseRef}>
                <circle cx="308" cy="307" r="276" fill="white" />
              </g>

              {/* Outer circle border */}
              <circle cx="308" cy="306" r="281" stroke="#4B4B54" strokeWidth="0.8" fill="none" />

              {/* Dashed arc */}
              <path 
                d="M 496 305 C 496 409.381 411.382 494 307 494" 
                stroke="white" 
                strokeWidth="0.8" 
                strokeDasharray="3 3" 
                fill="none" 
              />

              {/* Crosshair lines */}
              <line x1="307" y1="557" x2="307" y2="57" stroke="white" strokeWidth="0.8" />
              <line x1="557" y1="306" x2="57" y2="306" stroke="white" strokeWidth="0.8" />

              {/* Central dark circle with text */}
              <circle cx="308" cy="306" r="113" fill="#151518" stroke="white" strokeWidth="0.8" />

              {/* Center text */}
              <text
                x="308"
                y="296"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as any,
                }}
              >
                PRODUCT
              </text>
              <text
                x="308"
                y="318"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as any,
                }}
              >
                MARKET FIT
              </text>

              {/* Rotating tick marks around perimeter */}
              <g ref={tickRef} transform="translate(308 307)">
                {Array.from({ length: 180 }).map((_, i) => {
                  const a = (i / 180) * Math.PI * 2;
                  const r = 270;
                  const x1 = Math.cos(a) * r;
                  const y1 = Math.sin(a) * r;
                  const x2 = Math.cos(a) * (r - 8);
                  const y2 = Math.sin(a) * (r - 8);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#4B4B54"
                      strokeOpacity="0.6"
                      strokeWidth={0.8}
                      strokeLinecap="round"
                    />
                  );
                })}
              </g>

              {/* Counter-rotating elements */}
              <g ref={circleCounterRef}>
                {/* Inner circle */}
                <circle cx="308" cy="306" r="189" stroke="#4B4B54" strokeWidth="0.8" fill="none" />
                
                {/* Floating geometric elements */}
                {/* Hexagon */}
                <path 
                  d="M177.787 437.34L184.468 437.34L187.809 443.127L184.468 448.913L177.787 448.913L174.446 443.127L177.787 437.34Z" 
                  fill="white" 
                />
                
                {/* Small squares */}
                <rect x="496" y="222" width="4" height="4" fill="white" />
                <rect x="467" y="222" width="4" height="4" fill="white" />
                <rect x="496" y="250" width="4" height="4" fill="white" />
                <rect x="467" y="250" width="4" height="4" fill="white" />
                
                {/* Angled squares */}
                <rect 
                  x="190" y="158" 
                  width="3.2" height="3.2" 
                  fill="white" 
                  transform="rotate(-16.3 191.6 159.6)" 
                />
                <rect 
                  x="165" y="151" 
                  width="3.2" height="3.2" 
                  fill="white" 
                  transform="rotate(-16.3 166.6 152.6)" 
                />
                <rect 
                  x="183" y="183" 
                  width="3.2" height="3.2" 
                  fill="white" 
                  transform="rotate(-16.3 184.6 184.6)" 
                />
                <rect 
                  x="158" y="176" 
                  width="3.2" height="3.2" 
                  fill="white" 
                  transform="rotate(-16.3 159.6 177.6)" 
                />
                
                {/* Central white hexagon */}
                <path 
                  d="M180.166 164.799L182.114 171.913L176.928 177.157L169.793 175.287L167.845 168.174L173.031 162.93L180.166 164.799Z" 
                  fill="white" 
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== SECTION 2: Commercial Drivers Funnel ========== */
const CommercialSection: React.FC = () => {
  const circleRef = useRef<SVGCircleElement | null>(null);
  const drawRefs = useRef<SVGPathElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (circleRef.current) {
        gsap.to(circleRef.current, {
          rotation: 360,
          repeat: -1,
          ease: 'none',
          duration: 90,
          transformOrigin: '50% 50%',
        });
      }

      drawRefs.current.forEach((path, idx) => {
        if (!(path instanceof SVGPathElement)) return;
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2 + idx * 0.4,
          ease: 'power1.out',
          delay: 0.2 + idx * 0.15,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const setPath = (el: SVGPathElement | null) => {
    if (el && !drawRefs.current.includes(el)) drawRefs.current.push(el);
  };

  return (
    <section className="w-screen h-screen bg-zinc-950">
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 flex items-center">
          <div className="px-8 md:px-16 lg:pl-24 lg:pr-8 max-w-4xl">
            <h2
              className="text-zinc-100 font-light tracking-tight"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(2.5rem, 5vw, 6.25rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Design for commercial
              <br />
              drivers of success
            </h2>
            <p
              className="mt-8 text-zinc-400"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.25rem)',
                lineHeight: 1.7,
                letterSpacing: '-0.005em',
                maxWidth: '48ch',
              }}
            >
              We prioritize the commercial drivers behind your product—revenue, retention, and growth. Every feature we
              design supports real business goals, not vanity metrics or design awards.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-[92%] max-w-[820px] aspect-square">
            <svg viewBox="0 0 617 615" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_5409_900" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="5" y="5" width="606" height="605">
                {Array.from({ length: 120 }).map((_, i) => {
                  const angle = (i / 120) * Math.PI * 2;
                  const centerX = 307.909;
                  const centerY = 307.361;
                  const outerRadius = 302;
                  const innerRadius = 270;
                  const x1 = centerX + Math.cos(angle) * outerRadius;
                  const y1 = centerY + Math.sin(angle) * outerRadius;
                  const x2 = centerX + Math.cos(angle) * innerRadius;
                  const y2 = centerY + Math.sin(angle) * innerRadius;
                  return (
                    <path
                      key={i}
                      d={`M${x1} ${y1}L${x2} ${y2}`}
                      stroke="#373737"
                      strokeWidth="0.873839"
                      strokeMiterlimit="10"
                    />
                  );
                })}
              </mask>
              
              <g mask="url(#mask0_5409_900)">
                <circle ref={circleRef} cx="307.909" cy="307.361" r="276.206" fill="#4B4B54" />
              </g>
              
              <circle cx="307.993" cy="308.029" r="281.624" stroke="#4B4B54" strokeWidth="0.8" fill="none" />
              <rect x="109.088" y="109.119" width="397.821" height="397.821" stroke="white" strokeWidth="0.8" fill="none" />
              
              <text
                x="310"
                y="185"
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  letterSpacing: '0.1em',
                  fontWeight: 400,
                }}
              >
                CAPTURE
              </text>
              
              <text
                x="310"
                y="205"
                textAnchor="middle"
                fill="white"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 14,
                  letterSpacing: '0.1em',
                  fontWeight: 400,
                }}
              >
                LEADS
              </text>

              <line x1="307.6" y1="507" x2="307.6" y2="245" stroke="#4B4B54" strokeWidth="0.8" />
              <line x1="376" y1="285.4" x2="236" y2="285.4" stroke="#4B4B54" strokeWidth="0.8" />

              <path ref={setPath} d="M282.32 247.072L282.32 353.816L108.999 506.574" stroke="white" strokeWidth="0.8" fill="none" />
              <polygon points="279,248.142 282.117,243 283.008,243 286.125,248.142 285.234,249 279.891,249" fill="white" />

              <path ref={setPath} d="M333.68 247.072L333.68 353.816L507.001 506.574" stroke="white" strokeWidth="0.8" fill="none" />
              <polygon points="337.125,248.142 334.008,243 333.117,243 330,248.142 330.891,249 336.234,249" fill="white" />

              <g className="animate-pulse">
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 324 269)" fill="white" />
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 324 297.463)" fill="white" />
              </g>
              
              <g className="animate-pulse" style={{animationDelay: '0.5s'}}>
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 295.531 269)" fill="white" />
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 295.539 297.463)" fill="white" />
              </g>
              
              <g className="animate-pulse" style={{animationDelay: '1s'}}>
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 324 451)" fill="white" />
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 324 479.463)" fill="white" />
              </g>
              
              <g className="animate-pulse" style={{animationDelay: '1.5s'}}>
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 295.531 451)" fill="white" />
                <rect width="3.53654" height="3.53654" transform="matrix(-1 0 0 1 295.539 479.463)" fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== SECTION 3: Your interface is your brand ========== */
const BrandSection: React.FC = () => {
  const dialRef = useRef<SVGGElement | null>(null);
  const innerRef = useRef<SVGGElement | null>(null);
  const tri1Ref = useRef<SVGPolygonElement | null>(null);
  const tri2Ref = useRef<SVGPolygonElement | null>(null);
  const orbitPathRef = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const origin = '50% 50%';

      if (dialRef.current) {
        gsap.to(dialRef.current, { rotation: 360, repeat: -1, ease: 'none', duration: 110, transformOrigin: origin });
      }
      if (innerRef.current) {
        gsap.to(innerRef.current, { rotation: 360, repeat: -1, ease: 'none', duration: 65, transformOrigin: origin });
      }

      // Safe orbits for triangles (staggered)
      orbitSafe(tri1Ref.current, orbitPathRef.current, 22, true, 0);
      orbitSafe(tri2Ref.current, orbitPathRef.current, 22, true, 11);
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-screen h-screen bg-zinc-950">
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-6 flex items-center">
          <div className="px-8 md:px-16 lg:pl-24 lg:pr-8 max-w-4xl">
            <h2
              className="text-zinc-100 font-light tracking-tight"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(2.8rem, 6vw, 7rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              Your interface
              <br />
              is your brand
            </h2>
            <p
              className="mt-8 text-zinc-400"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.25rem)',
                lineHeight: 1.7,
                letterSpacing: '-0.005em',
                maxWidth: '48ch',
              }}
            >
              We design with that in mind—crafting signature moments through motion, tone, and detail that
              make your product stand out and hard to copy.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-[92%] max-w-[820px] aspect-square">
            <svg viewBox="0 0 1000 1000" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Dial ticks */}
              <g ref={dialRef} transform="translate(500 500)">
                {Array.from({ length: 180 }).map((_, i) => {
                  const a = (i / 180) * Math.PI * 2;
                  const r = 430;
                  const x1 = Math.cos(a) * r;
                  const y1 = Math.sin(a) * r;
                  const x2 = Math.cos(a) * (r - 10);
                  const y2 = Math.sin(a) * (r - 10);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#E4E4E7"
                      strokeOpacity="0.16"
                      strokeWidth={1}
                      strokeLinecap="round"
                    />
                  );
                })}
              </g>

              {/* Orbit path for triangles (hidden) */}
              <path ref={orbitPathRef} d="M 740 500 a 240 240 0 1 0 -480 0 a 240 240 0 1 0 480 0" fill="none" />

              {/* Inner ring + center label */}
              <g ref={innerRef}>
                <circle cx="500" cy="500" r="240" fill="none" stroke="#E4E4E7" strokeOpacity="0.22" strokeWidth="2" />
                <text
                  x="500"
                  y="500"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#E4E4E7"
                  opacity="0.9"
                  style={{
                    fontFamily:
                      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    fontSize: 24,
                    letterSpacing: '0.08em',
                  }}
                >
                  STAND OUT
                  <tspan x="500" dy="1.35em">
                    IN THE MARKET
                  </tspan>
                </text>
              </g>

              {/* Triangular markers */}
              <polygon ref={tri1Ref} points="0,-10 9,7 -9,7" fill="#FFFFFF" opacity="0.9" transform="translate(740 500)" />
              <polygon ref={tri2Ref} points="0,-10 9,7 -9,7" fill="#FFFFFF" opacity="0.9" transform="translate(260 500)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== EXPORT: stack of all sections ========== */
const HeroStack: React.FC = () => {
  return (
    <main className="bg-zinc-950">
      <RadarSection />
      <CommercialSection />
      <BrandSection />
    </main>
  );
};

export default HeroStack;
