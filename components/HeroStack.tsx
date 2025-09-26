'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

/* Utility: safe MotionPath orbit with ref guards */
function orbitSafe(
  el: SVGGraphicsElement | null,
  path: SVGGraphicsElement | null,
  duration: number,
  autoRotate = false,
  delay = 0
) {
  if (!el || !path) {
    console.warn('orbitSafe: el or path is null', { el, path });
    return;
  }
  if (!(el instanceof Element) || !(path instanceof Element)) {
    console.warn('orbitSafe: el or path is not an Element', { el, path });
    return;
  }

  gsap.delayedCall(delay, () => {
    // Recheck still valid after a tick
    if (!(el instanceof Element) || !(path instanceof Element)) return;

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
const RadarSection: React.FC = () => {
  const outerRef = useRef<SVGGElement | null>(null);
  const ringRef = useRef<SVGGElement | null>(null);
  const tickRef = useRef<SVGGElement | null>(null);
  const blip1Ref = useRef<SVGCircleElement | null>(null);
  const blip2Ref = useRef<SVGPolygonElement | null>(null);
  const blip3Ref = useRef<SVGCircleElement | null>(null);

  const orbit1PathRef = useRef<SVGPathElement | null>(null);
  const orbit2PathRef = useRef<SVGPathElement | null>(null);
  const orbit3PathRef = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const origin = '50% 50%';

      if (outerRef.current) {
        gsap.to(outerRef.current, { rotation: 360, repeat: -1, ease: 'none', duration: 48, transformOrigin: origin });
      }
      if (ringRef.current) {
        gsap.to(ringRef.current, { rotation: 360, repeat: -1, ease: 'none', duration: 36, transformOrigin: origin });
      }
      if (tickRef.current) {
        gsap.to(tickRef.current, { rotation: 360, repeat: -1, ease: 'none', duration: 120, transformOrigin: origin });
      }

      // Safe orbits
      orbitSafe(blip1Ref.current, orbit1PathRef.current, 18, false, 0);
      orbitSafe(blip2Ref.current, orbit2PathRef.current, 26, true, 0);
      orbitSafe(blip3Ref.current, orbit3PathRef.current, 34, false, 0);
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
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
            <svg viewBox="0 0 1000 1000" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="ringFade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                </radialGradient>
              </defs>

              {/* Crosshair */}
              <g stroke="#E4E4E7" strokeOpacity="0.18">
                <line x1="500" y1="100" x2="500" y2="900" />
                <line x1="100" y1="500" x2="900" y2="500" />
              </g>

              {/* Tick marks */}
              <g ref={tickRef} transform="translate(500 500)">
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
                      strokeOpacity="0.18"
                      strokeWidth={1}
                      strokeLinecap="round"
                    />
                  );
                })}
              </g>

              {/* Outer ring */}
              <g ref={outerRef}>
                <circle cx="500" cy="500" r="440" fill="none" stroke="#E4E4E7" strokeOpacity="0.22" strokeWidth="1.5" />
                <circle
                  cx="500"
                  cy="500"
                  r="400"
                  fill="none"
                  stroke="#E4E4E7"
                  strokeOpacity="0.12"
                  strokeWidth="2"
                  strokeDasharray="3 10"
                />
              </g>

              {/* Inner rings */}
              <g ref={ringRef}>
                <circle cx="500" cy="500" r="300" fill="url(#ringFade)" stroke="#E4E4E7" strokeOpacity="0.22" strokeWidth="2" />
                <circle cx="500" cy="500" r="200" fill="none" stroke="#E4E4E7" strokeOpacity="0.22" strokeWidth="2" />
                <circle cx="500" cy="500" r="110" fill="none" stroke="#E4E4E7" strokeOpacity="0.22" strokeWidth="2" />
              </g>

              {/* Center label */}
              <text
                x="500"
                y="500"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#E4E4E7"
                opacity="0.85"
                style={{
                  fontFamily:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: 22,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as any,
                }}
              >
                PRODUCT
                <tspan x="500" dy="1.4em">
                  MARKET FIT
                </tspan>
              </text>

              {/* Orbits (hidden) */}
              <path ref={orbit1PathRef} d="M 845 500 a 345 345 0 1 0 -690 0 a 345 345 0 1 0 690 0" fill="none" />
              <path ref={orbit2PathRef} d="M 755 500 a 255 255 0 1 0 -510 0 a 255 255 0 1 0 510 0" fill="none" />
              <path ref={orbit3PathRef} d="M 655 500 a 155 155 0 1 0 -310 0 a 155 155 0 1 0 310 0" fill="none" />

              {/* Blips */}
              <circle ref={blip1Ref} r="6" fill="#FFFFFF" opacity="0.9" transform="translate(500 155)" />
              <polygon ref={blip2Ref} points="0,-8 7,6 -7,6" fill="#FFFFFF" opacity="0.9" transform="translate(500 245)" />
              <circle ref={blip3Ref} r="4" fill="#FFFFFF" opacity="0.9" transform="translate(500 345)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========== SECTION 2: Commercial Drivers Funnel ========== */
const CommercialSection: React.FC = () => {
  const circleRef = useRef<SVGGElement | null>(null);
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
            <svg viewBox="0 0 1000 1000" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <g ref={circleRef} transform="translate(500 500)">
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

              <circle cx="500" cy="500" r="440" fill="none" stroke="#E4E4E7" strokeOpacity="0.18" strokeWidth="1.5" />

              <rect x="225" y="225" width="550" height="550" fill="none" stroke="#E4E4E7" strokeOpacity="0.6" strokeWidth="2" />

              {/* Funnel lines */}
              <path ref={setPath} d="M500 320 V450" stroke="#E4E4E7" strokeOpacity="0.85" strokeWidth="2" fill="none" />
              <path ref={setPath} d="M430 360 H570" stroke="#E4E4E7" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />
              <path ref={setPath} d="M500 450 L380 570" stroke="#E4E4E7" strokeOpacity="0.85" strokeWidth="2" fill="none" />
              <path ref={setPath} d="M500 450 L620 570" stroke="#E4E4E7" strokeOpacity="0.85" strokeWidth="2" fill="none" />
              <path ref={setPath} d="M380 570 H620" stroke="#E4E4E7" strokeOpacity="0.85" strokeWidth="2" fill="none" />

              {[{ x: 500, y: 338 }, { x: 500, y: 400 }, { x: 500, y: 430 }].map((p, i) => (
                <circle key={`u${i}`} cx={p.x} cy={p.y} r="2" fill="#E4E4E7" opacity="0.8" />
              ))}
              {[{ x: 500, y: 590 }, { x: 500, y: 610 }, { x: 500, y: 630 }].map((p, i) => (
                <circle key={`d${i}`} cx={p.x} cy={p.y} r="2" fill="#E4E4E7" opacity="0.8" />
              ))}

              <text
                x="500"
                y="340"
                textAnchor="middle"
                fill="#E4E4E7"
                opacity="0.9"
                style={{
                  fontFamily:
                    'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: 24,
                  letterSpacing: '0.08em',
                }}
              >
                CAPTURE
                <tspan x="500" dy="1.35em">
                  LEADS
                </tspan>
              </text>
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
