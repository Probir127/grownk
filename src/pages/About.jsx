import React, { useEffect } from 'react';
import gsap from 'gsap';
import SEO from '../components/SEO';

// Reusable Sub-components (Polished outside of render for performance)
const SectionSeparator = ({ title }) => (
  <div className="flex items-center justify-center gap-6 my-20 about-fade-up">
    <div className="h-[1px] grow bg-gradient-to-r from-transparent to-[var(--accent-gold)] opacity-20"></div>
    <h2 className="font-['Bebas_Neue'] text-[1.5rem] tracking-[4px] text-[var(--accent-gold)] uppercase whitespace-nowrap">
      — {title} —
    </h2>
    <div className="h-[1px] grow bg-gradient-to-l from-transparent to-[var(--accent-gold)] opacity-20"></div>
  </div>
);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo('.about-fade-up', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' }
      );
    });
    return () => ctx.revert(); // GSAP Cleanup for React
  }, []);

  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24 overflow-hidden selection:bg-[var(--accent-gold-soft)] selection:text-[var(--accent-gold)]">
      <SEO 
        title="About Us" 
        description="We started GrownK with one belief: great products deserve to be seen. GrownK is a PR and Digital Marketing Agency based in Bangladesh." 
        path="/about" 
      />
      <div className="max-w-[1000px] mx-auto px-[5%] text-center">
        
        {/* Document Header */}
        <div className="mb-24 about-fade-up">
           <div className="flex flex-col items-center gap-2 mb-12">
              <h3 className="font-['Bebas_Neue'] text-[3.5rem] leading-none tracking-[2px] text-[var(--text-main)]">
                GROWN<span className="text-[var(--accent-gold)]">K</span>
              </h3>
              <p className="text-[0.8rem] uppercase tracking-[5px] text-[var(--text-muted)] font-medium">
                PR & Digital Marketing Agency
              </p>
           </div>
           
           <div className="h-[2px] w-16 bg-[var(--accent-gold)] mx-auto mb-12 opacity-50"></div>

           <h1 className="font-['Bebas_Neue'] text-[5rem] md:text-[7rem] leading-none tracking-[1px] mb-6 uppercase">
             ABOUT <span className="text-[var(--accent-gold)]">US</span>
           </h1>
           <p className="text-[1rem] uppercase tracking-[4px] text-[var(--text-dim)] font-semibold">
             Who We Are &nbsp;·&nbsp; What We Believe &nbsp;·&nbsp; Why We Do It
           </p>
        </div>

        {/* WHO WE ARE Section */}
        <SectionSeparator title="WHO WE ARE" />
        <div className="flex flex-col gap-8 text-[1.15rem] leading-[1.8] text-[var(--text-muted)] max-w-[850px] mx-auto about-fade-up">
           <p className="text-[var(--text-main)] font-medium text-[1.4rem] leading-snug">
             We started GrownK with one belief: <span className="text-[var(--accent-gold)]">great products deserve to be seen.</span>
           </p>
           <p>
             Too many brilliant businesses in Bangladesh stay invisible not because their product is weak, but because their presence is. A jewellery shop with stunning craftsmanship. A fashion brand with real vision. A local business built on years of hard work. All of them losing customers to competitors with a louder digital voice.
           </p>
           <p className="text-[var(--text-main)] font-semibold tracking-wide uppercase text-[0.95rem] opacity-70">
             That is the problem we exist to solve.
           </p>
           <p>
             GrownK is a PR and Digital Marketing Agency based in Bangladesh. We build digital ecosystems, websites, social media presence, content, campaigns, and strategies that put your brand exactly where your customers are looking. We don't just run ads or post content. We craft the full narrative around your business and make it impossible to ignore.
           </p>
           <p>
             Our team is a tight group of strategists, creatives, and builders who care deeply about one thing: your growth. Every project we take on gets our full attention, our honest thinking, and our best work.
           </p>
        </div>

        {/* OUR MISSION Section */}
        <SectionSeparator title="OUR MISSION" />
        <div className="max-w-[850px] mx-auto about-fade-up space-y-12">
           <div className="relative py-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center opacity-10">
                 <i className="ph-fill ph-quotes text-[4rem] text-[var(--accent-gold)]"></i>
              </div>
              <h4 className="text-[clamp(1.5rem,4vw,2.5rem)] font-['Bebas_Neue'] text-[var(--accent-gold)] tracking-[1px] leading-tight px-4 italic">
                "To build digital presence that creates real trust and turns that trust into real sales."
              </h4>
           </div>
           <p className="text-[1.2rem] leading-relaxed text-[var(--text-muted)] italic">
             We believe visibility and credibility go hand in hand. Our mission is to bridge the gap between a great product and the customers who need it by building brands that people recognize, remember, and return to.
           </p>
        </div>

        {/* OUR VISION Section */}
        <SectionSeparator title="OUR VISION" />
        <div className="max-w-[850px] mx-auto about-fade-up space-y-12">
           <div className="relative py-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center opacity-10">
                 <i className="ph-fill ph-quotes text-[4rem] text-[var(--accent-gold)]"></i>
              </div>
              <h4 className="text-[clamp(1.5rem,4vw,2.5rem)] font-['Bebas_Neue'] text-[var(--accent-gold)] tracking-[1px] leading-tight px-4 italic">
                "To become Bangladesh's most trusted digital growth partner for local businesses."
              </h4>
           </div>
           <p className="text-[1.2rem] leading-relaxed text-[var(--text-muted)]">
             We envision a Bangladesh where every serious local business, no matter its size, has the digital presence it deserves. Where the quality of your product, not the size of your budget, determines how far your brand travels.
           </p>
        </div>

        {/* WHY GROWNK Section */}
        <SectionSeparator title="WHY GROWNK" />
        <div className="flex flex-col gap-10 text-[1.15rem] leading-[1.8] text-[var(--text-muted)] max-w-[850px] mx-auto about-fade-up">
           <p>
             We don't offer generic packages or one-size-fits-all strategies. We build tailored ecosystems, because your business is not like anyone else's.
           </p>
           <p>
             We work with you, not just for you. Your goals become our goals. Your growth is our only metric of success.
           </p>

           <div className="mt-16 py-12 border-y border-[rgba(255,255,255,0.05)] bg-[rgba(245,166,35,0.02)] rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
              <h4 className="text-[2rem] md:text-[2.8rem] font-['Bebas_Neue'] text-[var(--accent-gold)] tracking-[2px] mb-4">
                "You built the product. We'll build the empire."
              </h4>
              <p className="text-[1.1rem] opacity-80 uppercase tracking-[2px]">
                We don't just market your brand; we build it alongside you.
              </p>
           </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-32 pt-24 border-t border-[rgba(255,255,255,0.05)] about-fade-up">
           <p className="text-[1.4rem] font-medium mb-8 text-[var(--text-main)]">
             Ready to write the next chapter of your brand's story?
           </p>
           <div className="flex flex-col items-center gap-4">
              <a href="mailto:agency.grownk@gmail.com" className="text-[var(--accent-gold)] hover:text-white transition-colors duration-300 font-semibold tracking-wide">
                agency.grownk@gmail.com
              </a>
              <p className="text-[var(--text-dim)] uppercase tracking-[3px] text-[0.85rem]">
                Bangladesh
              </p>
           </div>

           <div className="mt-24 pt-12 border-t border-[rgba(255,255,255,0.03)] text-[0.75rem] text-[var(--text-dim)] uppercase tracking-[2px]">
             © 2026 GrownK Agency. All Rights Reserved.
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;