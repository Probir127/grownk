import React, { useRef, useEffect } from 'react';
import { SVC_DETAILS, SVC_CLASS } from '../../data/servicesData';
import { useCurrency } from '../../contexts/CurrencyContext';

const Addons = ({ selectedServices, toggleService }) => {
  const { currency } = useCurrency();
  const addons = [
    'addon_fbig', 'addon_web', 'addon_social', 
    'addon_seo', 'addon_app', 'addon_design'
  ];

  const scrollRef = useRef(null);
  const hoverRef = useRef(false);

  useEffect(() => {
    let interval;
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      interval = setInterval(() => {
        if (!hoverRef.current && scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          // small buffer of 10px to account for rounding errors
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: clientWidth * 0.8, behavior: 'smooth' });
          }
        }
      }, 3500); // 3.5 seconds per slide
    }

    const handleResize = () => {
      if (window.innerWidth >= 768 && interval) {
        clearInterval(interval);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="py-20 px-0 relative bg-[var(--bg-dark)] border-t border-[rgba(255,255,255,0.03)]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-12 reveal fade-up">
          <h3 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3rem)] text-[var(--text-main)] uppercase tracking-[1px] mb-4">
            Targeted <span className="text-[var(--accent-gold)]">Artillery</span> (Add-ons)
          </h3>
          <p className="max-w-[650px] mx-auto text-[var(--text-muted)] text-[0.95rem]">
            Deploy specific tactical units to reinforce your core ecosystem. 
            Mix and match to build your perfect growth stack.
          </p>
        </div>

        {/* Grid for desktop / Scrollable for mobile */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => hoverRef.current = true}
          onMouseLeave={() => hoverRef.current = false}
          className="flex overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 scrollbar-hide snap-x snap-mandatory"
        >
          {addons.map((id) => {
            const svc = SVC_DETAILS[id];
            const isSelected = selectedServices.has(id);
            const selectedClass = isSelected ? SVC_CLASS[id] : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]';

            return (
              <div 
                key={id}
                onClick={() => toggleService(id)}
                className={`flex-shrink-0 w-[85vw] md:w-auto snap-center group relative rounded-[20px] border p-6 pb-20 flex flex-col gap-4 transition-all duration-350 ease-out cursor-pointer overflow-hidden box-border hover:-translate-y-1 ${selectedClass} hover:border-[rgba(245,166,35,0.35)] hover:shadow-[0_0_40px_rgba(245,166,35,0.08)]`}
              >
                {/* Selection Overlay */}
                <div className={`absolute top-4 left-4 flex items-center gap-1.5 bg-[rgba(245,166,35,0.15)] text-[var(--accent-gold)] border border-[rgba(245,166,35,0.3)] rounded-[20px] text-[0.65rem] px-3 py-1 font-['Bebas_Neue'] tracking-[1px] transition-all duration-250 pointer-events-none ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}>
                  <i className="ph-bold ph-check"></i> Added
                </div>

                {/* Icon */}
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[rgba(245,166,35,0.1)] text-[var(--accent-gold)] flex items-center justify-center text-xl flex-shrink-0">
                  <i className={svc.icon}></i>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-grow min-w-0">
                  <h4 className="font-['Bebas_Neue'] text-[1.4rem] text-[var(--text-main)] m-0 tracking-[0.5px] uppercase truncate">{svc.name}</h4>
                  <p className="text-[0.85rem] text-[var(--text-muted)] leading-[1.5] m-0">
                    {id === 'addon_fbig' && 'Tactical ad deployment across Meta platforms to capture high-intent audiences.'}
                    {id === 'addon_web' && 'Bespoke digital architecture built for high conversion and premium storytelling.'}
                    {id === 'addon_social' && 'Full platform optimization, brand alignment, and strategy initialization.'}
                    {id === 'addon_seo' && 'Domain authority growth and organic visibility for sustainable long-term reach.'}
                    {id === 'addon_app' && 'Custom iOS/Android platforms designed for deep user engagement and utility.'}
                    {id === 'addon_design' && 'Premium visual assets and copy that command attention and trust.'}
                  </p>
                </div>

                {/* Pricing info - simple for addons */}
                <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-[rgba(255,255,255,0.06)] flex-shrink-0">
                  <span className="text-[0.65rem] uppercase tracking-[1.5px] text-[var(--text-dim)]">Starting At</span>
                  <span className="font-['Bebas_Neue'] text-[1.4rem] text-[var(--accent-gold)]">{svc.price[currency]}</span>
                </div>

                {/* Button */}
                <button 
                  className={`absolute bottom-5 left-5 right-5 flex items-center justify-center gap-2 py-2.5 rounded-lg border font-['Bebas_Neue'] text-[0.85rem] tracking-[1px] transition-all duration-300 transform active:scale-95 ${isSelected ? 'bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] border-[rgba(255,255,255,0.12)]' : 'bg-transparent text-[var(--accent-gold)] border border-[var(--accent-gold)] hover:bg-white hover:text-black hover:border-white'}`}
                >
                  <i className={`ph-bold ${isSelected ? 'ph-check' : 'ph-plus-circle'}`}></i>
                  <span>{isSelected ? 'Remove' : 'Add to Stack'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Addons;