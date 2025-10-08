'use client';
import React, { useState } from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const navigationLinks = ['AGENCY', 'APPROACH', 'WORK', 'THOUGHTS', 'LAB'];
  const socialLinks = ['LINKEDIN', 'TWITTER', 'INSTAGRAM', 'CONTACT'];

  return (
    <footer className={`bg-white text-black py-20 px-2 font-dm-mono overflow-hidden ${className}`}>

      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3">

          {/* Column 1: Copyright */}
          <div className="flex flex-col justify-start">
            <p className="text-base text-gray-600 leading-relaxed uppercase font-dm-mono">
              Copyright ©<br />
              Hello Robo, Inc
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-base text-black hover:text-gray-600 transition-colors duration-200 uppercase tracking-wide font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 3: Social */}
          <div className="flex flex-col space-y-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link === 'CONTACT' ? '#contact' : `#${link.toLowerCase()}`}
                className="text-base text-black hover:text-gray-600 transition-colors duration-200 uppercase tracking-wide font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <p className="text-base text-gray-600 mb-3 uppercase">Let's chat</p>
            <a 
              href="mailto:info@hellorobo.co"
              className="text-base text-black hover:text-gray-600 transition-colors duration-200 underline uppercase"
            >
              INFO@HELLOROBO.CO
            </a>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-base text-gray-600 mb-6 uppercase font-medium">Get valuable insights</h3>
            
            <form onSubmit={handleEmailSubmit} className="flex">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email here"
                  className="w-full bg-transparent border-b border-gray-400 py-3 px-0 text-xl text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="ml-4 w-8 h-8 flex items-center justify-center bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                aria-label="Subscribe to newsletter"
              >
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M1 6H11M11 6L6 1M11 6L6 11" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
