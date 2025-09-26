import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
  durationSec?: number;   // seconds per full loop
  pauseOnHover?: boolean;
};

export default function SeamlessDownMarquee({
  className,
  children,
  durationSec = 18,
  pauseOnHover = true,
}: Props) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        // soft fade at top/bottom to match the reference
        '[mask-image:linear-gradient(to_bottom,transparent,white_14%,white_86%,transparent)]',
        className
      )}
      style={{ ['--duration' as any]: `${durationSec}s` }}
    >
      {/* Stack 1 */}
      <div
        className={cn(
          'flex flex-col animate-seamless-down',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>

      {/* Stack 2 (duplicate) */}
      <div
        className={cn(
          'flex flex-col animate-seamless-down absolute inset-x-0 top-0',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
    </div>
  );
}
