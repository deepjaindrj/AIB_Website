'use client';
import React from 'react';

type Member = {
  name: string;
  role: string;
  img: string;
};

const members: Member[] = [
  {
    name: 'Shakir Dzheyranov',
    role: 'Founder',
    img: 'https://i.pravatar.cc/220?img=5',
  },
  {
    name: 'Joe Carbonaro',
    role: 'Partnerships',
    img: 'https://i.pravatar.cc/220?img=14',
  },
  {
    name: 'Vlad DuHnov',
    role: 'Design & Partnerships',
    img: 'https://i.pravatar.cc/220?img=50',
  },
];

const HelloRoboTeam: React.FC = () => {
  return (
    <section className="w-screen min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 pt-16 md:pt-20">
        {/* Heading + subcopy */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          <h2
            className="text-zinc-100 font-semibold tracking-[0.2em]"
            style={{
              fontFamily:
                'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: 'clamp(2rem, 5.2vw, 5rem)',
              letterSpacing: '0.16em',
            }}
          >
            HELLO ROBO
          </h2>
          <p className="mt-4 max-w-3xl text-zinc-300/85 text-sm md:text-base leading-relaxed">
            Made of members with backgrounds at Nike, Apple and Google, the Hello Robo
            team mirrors real‑world expertise derived from design industry leaders.
          </p>
        </div>

        {/* Card layout matching reference */}
        <div className="relative w-full h-[700px] max-w-[1400px] mx-auto">
          {/* Top-left card */}
          <div className="absolute top-0 left-0 w-[420px] h-[420px] border border-zinc-700/40 rounded-none bg-transparent flex flex-col justify-between">
            <div className="flex flex-col items-center mt-10">
              <div className="w-[140px] h-[140px] bg-zinc-800 rounded-none overflow-hidden mb-2">
                <img src={members[0].img} alt={members[0].name} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <div className="mb-10 ml-8">
              <div className="text-2xl font-normal tracking-wide mb-2" style={{fontFamily:'Inter, system-ui'}}>{members[0].name}</div>
              <div className="text-base text-zinc-300/90 font-normal" style={{fontFamily:'Inter, system-ui'}}>{members[0].role}</div>
            </div>
          </div>

          {/* Top-right card */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] border border-zinc-700/40 rounded-none bg-transparent flex flex-col justify-between">
            <div className="flex flex-col items-center mt-10">
              <div className="w-[140px] h-[140px] bg-zinc-800 rounded-none overflow-hidden mb-2">
                <img src={members[1].img} alt={members[1].name} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <div className="mb-10 ml-8">
              <div className="text-2xl font-normal tracking-wide mb-2" style={{fontFamily:'Inter, system-ui'}}>{members[1].name}</div>
              <div className="text-base text-zinc-300/90 font-normal" style={{fontFamily:'Inter, system-ui'}}>{members[1].role}</div>
            </div>
          </div>

          {/* Bottom-center card */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] border border-zinc-700/40 rounded-none bg-transparent flex flex-col justify-between">
            <div className="flex flex-col items-center mt-10">
              <div className="w-[140px] h-[140px] bg-zinc-800 rounded-none overflow-hidden mb-2">
                <img src={members[2].img} alt={members[2].name} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            <div className="mb-10 ml-8">
              <div className="text-2xl font-normal tracking-wide mb-2" style={{fontFamily:'Inter, system-ui'}}>{members[2].name}</div>
              <div className="text-base text-zinc-300/90 font-normal" style={{fontFamily:'Inter, system-ui'}}>{members[2].role}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloRoboTeam;
