'use client';
import React, { useState } from 'react';

type ServiceTag =
  | 'Digital Product Design'
  | 'Digital Product Strategy'
  | 'Product Market Fit'
  | 'Ship from 0-1'
  | 'Product Branding';

const TAGS: ServiceTag[] = [
  'Digital Product Design',
  'Digital Product Strategy',
  'Product Market Fit',
  'Ship from 0-1',
  'Product Branding',
];

const ContactFormSection: React.FC = () => {
  const [selected, setSelected] = useState<ServiceTag[]>([]);

  const toggleTag = (tag: ServiceTag) => {
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here (API / action)
    // console.log({ selected, ...form })
  };

  const Label = ({ children, required = false }: { children: React.ReactNode; required?: boolean }) => (
    <label className="block text-zinc-200/90 text-base md:text-lg tracking-wide mb-2">
      {children}
      {required ? <span className="text-zinc-200/60"> *</span> : null}
    </label>
  );

  const UnderlineInput = ({
    type = 'text',
    name,
    placeholder,
    required = false,
  }: {
    type?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
  }) => (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full bg-transparent outline-none text-zinc-100 placeholder-zinc-500 border-b border-zinc-700/50 focus:border-zinc-400/70 transition-colors py-4 text-base md:text-lg"
    />
  );

  const TagButton = ({ tag }: { tag: ServiceTag }) => {
    const isActive = selected.includes(tag);
    return (
      <button
        type="button"
        onClick={() => toggleTag(tag)}
        className={[
          'px-4 md:px-6 py-6 rounded-sm text-xs md:text-sm font-semibold tracking-wide',
          'border transition-colors duration-200',
          isActive
            ? 'border-zinc-300 text-zinc-100 bg-zinc-800/60'
            : 'border-zinc-700/60 text-zinc-200 hover:border-zinc-500/70 hover:bg-zinc-800/30',
        ].join(' ')}
      >
        {tag.toUpperCase()}
      </button>
    );
  };

  return (
    <section className="w-screen min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-[1500px] mx-10 px-6 md:px-10 lg:px-18 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left headline */}
          <div className="lg:col-span-5">
            <h2
              className=" font-dm-sans leading-[1.05] tracking-tight"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Let’s simplify
              <br />
              the complex
            </h2>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10 text-lg font-dm-mono">
              {/* Email */}
              <div>
                <Label required>Email</Label>
                <UnderlineInput type="email" name="email" required placeholder="" />
              </div>

              {/* Full name */}
              <div>
                <Label required>Full Name</Label>
                <UnderlineInput name="fullName" required placeholder="" />
              </div>

              {/* How can we help? */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <Label required>How can we help?</Label>
                </div>
                <div className="flex flex-wrap gap-4">
                  {TAGS.slice(0, 3).map((t) => (
                    <TagButton tag={t} key={t} />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  {TAGS.slice(3).map((t) => (
                    <TagButton tag={t} key={t} />
                  ))}
                </div>
              </div>

              {/* How did you know about us? (Optional) */}
              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <Label>How did you know about us?</Label>
                  <span className="text-[11px] text-zinc-500 tracking-widest">
                    OPTIONAL
                  </span>
                </div>
                <UnderlineInput name="referrer" placeholder="" />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-5 md:py-6 rounded-sm bg-purple-600 hover:bg-purple-600 text-black font-semibold tracking-widest"
                  style={{
                    letterSpacing: '0.12em',
                  }}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Subtle noise/texture background overlay (optional) */}
        {/* <div className="pointer-events-none fixed inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}/> */}
      </div>
    </section>
  );
};

export default ContactFormSection;
