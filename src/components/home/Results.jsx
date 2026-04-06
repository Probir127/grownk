import React, { useState, useEffect } from 'react';

const Results = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const caseStudies = [
    {
      metric: "65",
      suffix: "%",
      label: "Increase in Media Visibility",
      challenge: "An e-commerce brand struggling to break through market saturation.",
      resolution: "Total Management unified their social narrative. Within 8 weeks, inbound traffic surged."
    },
    {
      metric: "14",
      suffix: " Days",
      label: "To Market Launch",
      challenge: "A tech consultancy needing an immediate digital footprint for Series A.",
      resolution: "Manual Service deployed a premium web architecture communicating unassailable credibility."
    },
    {
      metric: "3",
      suffix: "x",
      label: "ROAS on Meta Ads",
      challenge: "A fashion retailer burning ad spend with zero conversions.",
      resolution: "FB/IG Boosting Add-on restructured their targeting and creative, tripling return within 30 days."
    },
    {
      metric: "95",
      suffix: "%",
      label: "Organic Traffic Growth",
      challenge: "Over-reliance on paid ads eroding local service margins.",
      resolution: "SEO Boosting restructured their site hierarchy, securing #1 local rankings in 3 months."
    }
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section className="py-24 px-0 relative bg-[var(--bg-dark)] border-t border-[rgba(255,255,255,0.03)]" id="impact">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-16 reveal fade-up">
          <p className="text-[0.75rem] uppercase tracking-[3px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Chapter VI</p>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] text-[var(--text-main)] uppercase leading-none tracking-[1px] mb-6">
            The <span className="text-[var(--accent-gold)]">Results</span>
          </h2>
          <p className="max-w-[700px] mx-auto text-[var(--text-muted)] text-[clamp(1rem,2vw,1.25rem)] leading-[1.6]">
            A story is only as good as its ending. Here is the impact we've engineered for our partners.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[900px] mx-auto group">
          <div className="overflow-hidden rounded-3xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <div 
              className="flex transition-transform duration-700 cubic-bezier(0.23, 1, 0.32, 1)"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 p-8 md:p-16 text-center">
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="font-['Bebas_Neue'] text-[4.5rem] md:text-[6.5rem] leading-none text-[var(--accent-gold)] drop-shadow-[0_0_30px_rgba(245,166,35,0.2)]">
                        {item.metric}<span className="text-[0.5em]">{item.suffix}</span>
                      </div>
                      <div className="text-[0.8rem] uppercase tracking-[3px] text-[var(--text-dim)] mt-2 font-semibold">
                        {item.label}
                      </div>
                    </div>
                    
                    <div className="w-12 h-px bg-[rgba(245,166,35,0.3)] my-4"></div>
                    
                    <div className="max-w-[600px] flex flex-col gap-4 text-[1.05rem] leading-[1.8] text-[var(--text-muted)]">
                      <p>
                        <strong className="text-[var(--text-main)] block mb-1 uppercase text-[0.8rem] tracking-[1px]">The Challenge</strong>
                        {item.challenge}
                      </p>
                      <p>
                        <strong className="text-[var(--accent-gold)] block mb-1 uppercase text-[0.8rem] tracking-[1px]">The Resolution</strong>
                        {item.resolution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[rgba(20,20,25,0.8)] border border-[rgba(255,255,255,0.1)] text-white flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 hidden md:flex"
          >
            <i className="ph-bold ph-arrow-left text-xl"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[rgba(20,20,25,0.8)] border border-[rgba(255,255,255,0.1)] text-white flex items-center justify-center hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 hidden md:flex"
          >
            <i className="ph-bold ph-arrow-right text-xl"></i>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 transition-all duration-500 rounded-full ${activeSlide === idx ? 'w-8 bg-[var(--accent-gold)]' : 'w-2 bg-[rgba(255,255,255,0.2)]'}`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;