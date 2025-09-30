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
    <section className="w-screen min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center font-dm-mono overflow-hidden">
      <div className="w-full max-w-[2000px] mx-12 px-6 md:px-10 lg:px-14 pt-16 md:pt-20">
        
        {/* Grid layout: 2 rows × 4 columns */}
        <div className="grid grid-cols-4 grid-rows-2 gap-0 w-full h-[800px] ">
          
          {/* First row, first column - Shakir with border */}
          <div className="col-span-1 row-span-1 border border-zinc-700/40 bg-transparent relative">
            {/* Photo - top right */} 
            <div className="absolute top-6 right-6 p-4">
              <div className="w-[120px] h-[120px] bg-zinc-800 overflow-hidden "> 
                <img src={members[0].img} alt={members[0].name} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            
            {/* Text - bottom left */}
            <div className="absolute bottom-8 left-8">
              <div className="text-xl font-normal tracking-wide mb-2 text-white font-dm-sans">{members[0].name}</div>
              <div className="text-sm text-zinc-300/90 font-normal font-dm-mono">{members[0].role}</div>
            </div>
          </div>

          {/* First row, second & third columns merged - HELLO ROBO centered */}
          <div className="col-span-2 row-span-1 bg-transparent flex flex-col items-center justify-center">
            <h2
              className="font-dm-sans text-zinc-100 font-semibold tracking-[0.2em] text-center"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '0.06em',
              }}
            >
              HELLO ROBO
            </h2>
            <p className="mt-6 max-w-[450px] text-zinc-300/85 text-center text-sm leading-relaxed font-dm-mono">
              Made of members with backgrounds at Nike, Apple and Google, the Hello Robo team mirrors real‑world expertise derived from design industry leaders.
            </p>
          </div>

          {/* First row, fourth column - Joe with border */}
          <div className="col-span-1 row-span-1 border border-zinc-700/40 bg-transparent relative">
            {/* Photo - top right */}
            <div className="absolute top-6 right-6 p-4">
              <div className="w-[120px] h-[120px] bg-zinc-800 overflow-hidden">
                <img src={members[1].img} alt={members[1].name} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            
            {/* Text - bottom left */}
            <div className="absolute bottom-8 left-8">
              <div className="text-xl font-normal tracking-wide mb-2 text-white font-dm-sans">{members[1].name}</div>
              <div className="text-sm text-zinc-300/90 font-normal font-dm-mono">{members[1].role}</div>
            </div>
          </div>

          {/* Second row, first column - empty */}
          <div className="col-span-1 row-span-1 bg-transparent"></div>

          {/* Second row, second column - Vlad with border */}
          <div className="col-span-1 row-span-1 border border-zinc-700/40 bg-transparent relative">
            {/* Photo - top right */}
            <div className="absolute top-6 right-6 p-4">
              <div className="w-[120px] h-[120px] bg-zinc-800 overflow-hidden">
                <img src={members[2].img} alt={members[2].name} className="w-full h-full object-cover grayscale" />
              </div>
            </div>
            
            {/* Text - bottom left */}
            <div className="absolute bottom-8 left-8 ">
              <div className="text-xl font-normal tracking-wide mb-2 text-white font-dm-sans">{members[2].name}</div>
              <div className="text-sm text-zinc-300/90 font-normal font-dm-mono">{members[2].role}</div>
            </div>
          </div>

          {/* Second row, third column - empty */}
          <div className="col-span-1 row-span-1 bg-transparent"></div>

          {/* Second row, fourth column - empty */}
          <div className="col-span-1 row-span-1 bg-transparent"></div>

        </div>
      </div>
    </section>
  );
};

export default HelloRoboTeam;
