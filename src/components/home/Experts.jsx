import React, { useState, useEffect, useRef } from 'react';

const Experts = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const experts = [
    {
      name: "Razu Paul",
      role: "Founder & CEO",
      photo: "/images/WhatsApp-Image-2026-03-16-at-12.39.53-AM.jpeg",
      desc: "Razu is the driving force behind GrownK's mission to build complete digital ecosystems. His leadership and strategic vision have shaped the agency into a powerhouse for brand transformation."
    },
    {
      name: "Probir Saha Shohom",
      role: "Co-Founder & Head of Tech",
      photo: "/images/WhatsApp-Image-2026-03-15-at-8.31.37-PM.jpeg",
      desc: "Probir leads the technical vision behind every GrownK project. From robust web architectures to seamless application deployment, he ensures every digital ecosystem is built for scale, performance, and premium quality."
    },
    {
      name: "Mir Sajjad",
      role: "Technical Lead",
      photo: "/images/image.png",
      desc: "Mir Sajjad builds the high-performance digital infrastructure behind every ecosystem. From custom web architectures to seamless app deployment, he ensures your tech stack delivers at scale."
    },
    {
      name: "Sudipto Saha",
      role: "Junior Developer",
      photo: "/images/WhatsApp-Image-2026-03-15-at-8.30.53-PM.jpeg",
      desc: "Sudipto is a dedicated developer executing the foundational code behind GrownK applications. He supports the technical team by building reliable, performant features and ensuring seamless user experiences."
    },
    {
      name: "Samiya Islam Sadiya",
      role: "Frontend Designer & SEO",
      photo: "/images/WhatsApp-Image-2026-03-15-at-8.57.41-PM.jpeg",
      desc: "Samiya unites creative interface design with robust SEO strategies. She ensures every GrownK website not only looks visually stunning but also ranks highly and converts visitors into lasting clients."
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(true);

  // Remove totally native dots logic, using extended experts
  const extendedExperts = [...experts, ...experts.slice(0, itemsPerView)];

  const nextSlide = () => {
    if (activeSlide >= experts.length) return;
    setIsTransitioning(true);
    setActiveSlide(prev => prev + 1);
  };
  
  const prevSlide = () => {
    if (activeSlide === 0) {
      setIsTransitioning(false);
      setActiveSlide(experts.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setActiveSlide(experts.length - 1);
      }, 30);
    } else {
      setIsTransitioning(true);
      setActiveSlide(prev => prev - 1);
    }
  };

  // Handle clone snap-back
  useEffect(() => {
    if (activeSlide === experts.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [activeSlide, experts.length]);

  const hoverRef = useRef(false);

  // Auto right-to-left circle slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverRef.current) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide, experts.length]);

  return (
    <section className="py-24 px-0 relative bg-[#0b0c10] border-t border-[rgba(255,255,255,0.03)] overflow-hidden" id="experts">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal fade-up">
          <div className="flex flex-col gap-3">
            <span className="text-[0.75rem] uppercase tracking-[4px] text-[var(--text-dim)] font-semibold">Strategic Capital</span>
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] text-white uppercase leading-none tracking-[1px]">
              Meet Our <span className="text-[#F5A623]">Experts</span>
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <p className="max-w-[480px] text-[#a8a89a] text-[1.1rem] md:text-right leading-[1.6]">
              The architects behind the ecosystems. Pure strategic horsepower, 
              dedicated to scaling your narrative.
            </p>
            
            {/* Slider Navigation (Arrows with dots in between) */}
            <div className="flex items-center gap-4 mt-2">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] text-white flex items-center justify-center hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] transition-all duration-300 active:scale-95"
              >
                <i className="ph-bold ph-arrow-left text-lg"></i>
              </button>

              <div className="flex gap-2">
                {experts.map((_, idx) => {
                  const isActive = activeSlide === idx || (activeSlide === experts.length && idx === 0);
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsTransitioning(true);
                        setActiveSlide(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${isActive ? 'w-6 bg-[#F5A623]' : 'w-2 bg-[rgba(255,255,255,0.2)] hover:bg-white/50'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    ></button>
                  );
                })}
              </div>

              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.02)] text-white flex items-center justify-center hover:bg-[#F5A623] hover:text-black hover:border-[#F5A623] transition-all duration-300 active:scale-95"
              >
                <i className="ph-bold ph-arrow-right text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Universal Slider */}
        <div 
          className="relative group"
          onMouseEnter={() => hoverRef.current = true}
          onMouseLeave={() => hoverRef.current = false}
        >
           <div className="overflow-hidden rounded-[24px]">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' : ''}`}
              style={{ transform: `translateX(-${activeSlide * (100 / itemsPerView)}%)` }}
            >
              {extendedExperts.map((expert, idx) => (
                <div 
                  key={idx} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group/card relative h-[450px] rounded-[24px] overflow-hidden bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] transition-all duration-500 hover:border-[#F5A623]/30 hover:shadow-[0_10px_40px_rgba(245,166,35,0.1)]">
                    
                    {/* Image takes full height with gradient overlay */}
                    <img 
                      src={expert.photo} 
                      alt={expert.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-[1.05]" 
                    />
                    
                    {/* Vignette & Bottom Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-300"></div>
                    
                    {/* Content overlays sliding up from bottom */}
                    <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end translate-y-[80px] group-hover/card:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <h3 className="font-['Bebas_Neue'] text-3xl text-white tracking-[1px] leading-tight drop-shadow-md">
                        {expert.name}
                      </h3>
                      <p className="text-[#F5A623] text-sm uppercase tracking-[2px] font-semibold mb-4 drop-shadow-md">
                        {expert.role}
                      </p>
                      <p className="text-[0.9rem] text-[#ddd] leading-relaxed opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                        {expert.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;