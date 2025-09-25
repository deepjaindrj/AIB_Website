import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  hasOrangeAccent?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, hasOrangeAccent }) => {
  return (
    <div className="border-l border-gray-600/20 pl-6 pr-6 py-8 bg-transparent relative min-h-[300px]">
      {/* Orange accent line for last card */}
      {hasOrangeAccent && (
        <div className="absolute top-0 right-0 w-8 h-1 bg-orange-500"></div>
      )}
      
      {title && (
        <div className="text-gray-500 text-xs font-medium tracking-[0.15em] uppercase mb-6">
          {title}
        </div>
      )}
      
      <div className="mb-4">
        <div className="text-white text-6xl font-extralight mb-3 leading-[0.9] tracking-tight">
          {value}
        </div>
      </div>
      
      <div className="text-gray-400 text-sm leading-relaxed font-light">
        {description}
      </div>
    </div>
  );
};

const HeroStatsSection: React.FC = () => {
  const stats = [
    {
      title: "INVESTMENTS",
      value: "120M+",
      description: "In VC funding raised by products we've helped bring to life."
    },
    {
      title: "RECOGNITION", 
      value: "40+",
      description: "Design awards from Webby, Awwwards, Adobe, Behance"
    },
    {
      title: "TRUST",
      value: "90%", 
      description: "of clients come back to us for a second project"
    },
    {
      title: "  ",
      value: "7",
      description: "Early stage startups that successfully scaled",
      hasOrangeAccent: true
    }
  ];

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center px-6 py-20">
      {/* Hero Text */}
      <div className="max-w-4xl mx-auto text-center mb-32">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.4] px-8">
          Hello Robo is a digital product design agency that turns complex technology into intuitive, usable interfaces. We work with forward-thinking teams to create market-ready digital products that are easy to use and hard to ignore.
        </h1>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              description={stat.description}
              hasOrangeAccent={stat.hasOrangeAccent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStatsSection;