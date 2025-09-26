'use client';
import React, { useEffect, useRef, useState } from 'react';

const ONLINE_IMAGE = 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=';

/**
 * Fullscreen parallax-zoom hero without GSAP.
 * - Smooth scroll-linked scale using ScrollTimeline/ViewTimeline + fallback to requestAnimationFrame.
 * - Cursor-following “View more” pill with quick easing via requestAnimationFrame.
 * - Hides native cursor on hover.
 */
const FullscreenZoomHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  // Scroll-linked scale (native ScrollTimeline if available; else rAF fallback)
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const wrapEl = imgWrapRef.current;
    if (!sectionEl || !wrapEl) return;

    const supportsScrollTimeline =
      typeof (window as any).ScrollTimeline === 'function';

    wrapEl.style.transformOrigin = '50% 50%';

    if (supportsScrollTimeline) {
      // Use native ScrollTimeline for buttery scroll linkage
      const timeline = new (window as any).ScrollTimeline({
        source: document.scrollingElement || document.documentElement,
        axis: 'block',
        scrollOffsets: [
          { target: sectionEl, edge: 'start', threshold: 0 },
          { target: sectionEl, edge: 'center', threshold: 0 },
        ],
      });

      wrapEl.animate(
        [
          { transform: 'scale(1.04)', offset: 0 },
          { transform: 'scale(1.00)', offset: 1 },
        ],
        {
          duration: 1,
          fill: 'both',
          timeline,
          easing: 'linear',
        }
      );
      return;
    }

    // Fallback: requestAnimationFrame + scroll listener
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = sectionEl.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const total = rect.height || 1;
        // progress 0 at top reaches, 1 when midpoint reaches viewport center
        const midpoint = rect.top + total / 2;
        const progress = Math.min(Math.max((vh - midpoint) / (vh + total / 2), 0), 1);
        const scale = 1.04 + (1.0 - 1.04) * progress;
        wrapEl.style.transform = `scale(${scale.toFixed(4)})`;
      });
    };

    // Initialize and bind
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Cursor-following “View more” pill without GSAP
  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const update = () => {
      cx = lerp(cx, tx, 0.2);
      cy = lerp(cy, ty, 0.2);
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(update);
    };

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      tx = e.clientX - rect.width / 2;
      ty = e.clientY - rect.height / 2;
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden bg-black select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Scaling wrapper */}
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        <img
          src={ONLINE_IMAGE}
          alt="Hero"
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Custom “View more” follower */}
      <div
        ref={overlayRef}
        className={`pointer-events-none fixed z-20 ${
          hovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-200`}
        style={{ left: 0, top: 0, transform: 'translate3d(-9999px,-9999px,0)' }}
      >
        <div className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold shadow-md whitespace-nowrap">
          View more
        </div>
      </div>

      {/* Hide native cursor on hover */}
      <div className={`absolute inset-0 ${hovered ? 'cursor-none' : 'cursor-default'}`} />
    </section>
  );
};

export default FullscreenZoomHero;
