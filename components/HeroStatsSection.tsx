import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  hasOrangeAccent?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  description, 
  hasOrangeAccent 
}) => {
  return (
    <div className="relative group">
      {/* Card Container - expanded width and height */}
      <div className="bg-zinc-900/60 border border-zinc-800/40 p-12 h-[450px] w-full flex flex-col justify-between backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/70 hover:border-zinc-700/50">
        
        {/* Orange accent dot */}
        {hasOrangeAccent && (
          <div className="absolute top-10 right-10 w-3 h-3 bg-orange-500 rounded-full"></div>
        )}
        
        {/* Title Section - exact font matching */}
        <div className="flex-shrink-0">
          {title?.trim() && (
            <div 
              className="text-zinc-500 uppercase leading-none mb-20"
              style={{ 
                fontSize: '11px',
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.15em'
              }}
            >
              {title}
            </div>
          )}
        </div>
        
        {/* Value Section - exact font matching from reference */}
        <div className="flex-1 flex items-end">
          <div 
            className="text-white leading-[0.85]"
            style={{ 
              fontSize: '5.5rem', 
              fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '-0.02em'
            }}
          >
            {value}
          </div>
        </div>
        
        {/* Description Section - exact font matching */}
        <div className="flex-1 flex items-end">
          <p 
            className="text-zinc-400 leading-[1.45] max-w-none"
            style={{ 
              fontSize: '16px',
              fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
          >
            {description}
          </p>
        </div>
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
      title: "nbibi",
      value: "7",
      description: "Early stage startups that successfully scaled",
      hasOrangeAccent: true
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col px-4">
      {/* Hero Text - exact font matching from reference */}
      <div className="max-w-6xl mx-auto text-center pt-16 mb-auto">
        <h1 
          className="text-zinc-100"
          style={{ 
            fontSize: '2.25rem',
            fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            lineHeight: 1.4,
            letterSpacing: '-0.015em'
          }}
        >
          Hello Robo is a digital product design agency that 
          turns complex technology into intuitive, usable 
          interfaces. We work with forward-thinking teams 
          to create market-ready digital products that are 
          easy to use and hard to ignore.
        </h1>
      </div>

      {/* Stats Grid - positioned at very bottom */}
      <div className="w-full max-w-[1600px] mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default HeroStatsSection;
