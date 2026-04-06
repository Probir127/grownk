import React from 'react';
import { SVC_DETAILS, SVC_CLASS } from '../../data/servicesData';
import { useCurrency } from '../../contexts/CurrencyContext';

const Services = ({ selectedServices, toggleService }) => {
  const { currency } = useCurrency();
  const coreServices = ['manual', 'custom', 'total'];

  return (
    <section className="py-20 px-0 relative bg-[var(--bg-dark)]" id="solutions">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-8 reveal fade-up">
          <p className="text-[0.75rem] uppercase tracking-[3px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Chapter IV</p>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] text-[var(--text-main)] uppercase leading-none tracking-[1px] mb-4">
            Build Your <span className="text-gradient-gold">Stack</span>
          </h2>
          <p className="max-w-[680px] mx-auto text-[var(--text-muted)] text-[clamp(1rem,2vw,1.15rem)] leading-[1.7]">
            Select a core partnership model, then add targeted artillery to deploy a 
            high-performance growth ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coreServices.map((id) => {
            const svc = SVC_DETAILS[id];
            const isSelected = selectedServices.has(id);
            const featuredClass = id === 'total' ? 'border-[rgba(245,166,35,0.25)] bg-[rgba(245,166,35,0.04)]' : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]';
            const selectedClass = isSelected ? SVC_CLASS[id] : '';

            return (
              <div 
                key={id}
                onClick={() => toggleService(id)}
                className={`group relative rounded-[20px] border p-8 pb-20 flex flex-col gap-[1.2rem] transition-all duration-350 ease-out cursor-pointer overflow-hidden h-full box-border hover:-translate-y-1 ${featuredClass} ${selectedClass} ${id === 'total' ? 'hover:border-[rgba(245,166,35,0.55)] hover:shadow-[0_0_50px_rgba(245,166,35,0.12)]' : 'hover:border-[rgba(245,166,35,0.35)] hover:shadow-[0_0_40px_rgba(245,166,35,0.08)]'}`}
              >
                {/* Selection Overlay */}
                <div className={`absolute top-[1.2rem] left-[1.2rem] flex items-center gap-1.5 bg-[rgba(245,166,35,0.15)] text-[var(--accent-gold)] border border-[rgba(245,166,35,0.3)] rounded-[20px] text-[0.7rem] px-3 py-1 font-['Bebas_Neue'] tracking-[1px] transition-all duration-250 pointer-events-none ${isSelected ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}>
                  <i className="ph-bold ph-check"></i> Added
                </div>

                {/* Badge */}
                {svc.badge && (
                  <div className={`absolute top-[1.2rem] right-[1.2rem] bg-[rgba(245,166,35,0.12)] text-[var(--accent-gold)] border border-[rgba(245,166,35,0.25)] rounded-[20px] text-[0.65rem] font-['Bebas_Neue'] tracking-[2px] px-3 py-1 uppercase`}>
                    {svc.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(245,166,35,0.1)] text-[var(--accent-gold)] flex items-center justify-center text-2xl flex-shrink-0">
                  <i className={svc.icon}></i>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-grow">
                  <h3 className="font-['Bebas_Neue'] text-[1.6rem] text-[var(--text-main)] m-0 tracking-[0.5px] uppercase">{svc.name}</h3>
                  <p className="text-[0.9rem] text-[var(--text-muted)] leading-[1.6] m-0">
                    {id === 'manual' && 'For brands that have the talent but need a high-performance roadmap and technical strategy.'}
                    {id === 'custom' && 'Elite-tier infrastructure and ad strategy for established brands looking to scale aggressively.'}
                    {id === 'total' && 'The premium partnership. We deploy, manage, and scale your entire digital presence 24/7.'}
                  </p>

                  <ul className="list-none flex flex-col gap-2 m-0 p-0">
                    {id === 'manual' && [
                      'Website Template (up to 5 pages)*',
                      'Social media set up + 1 boosting*',
                      'Brand kit handover',
                      '1 training session'
                    ].map(f => <li key={f} className="flex items-center gap-2 text-[0.85rem] text-[var(--text-muted)]"><i className="ph-bold ph-check text-[var(--accent-gold)] text-[0.8rem]"></i>{f}</li>)}
                    
                    {id === 'custom' && [
                      'Website custom design*',
                      'Social media set up',
                      'Meta Ad boosting*',
                      'Brand kit handover',
                      '1 training session'
                    ].map(f => <li key={f} className="flex items-center gap-2 text-[0.85rem] text-[var(--text-muted)]"><i className="ph-bold ph-check text-[var(--accent-gold)] text-[0.8rem]"></i>{f}</li>)}

                    {id === 'total' && [
                      'Website Template design*',
                      'Social media set up',
                      'Meta Ad management',
                      'Content posting (8 videos, 15 photos)',
                      'Graphic support (Up to 15 photos)',
                      'Technical support',
                      'Brand kit handover'
                    ].map(f => <li key={f} className="flex items-start gap-2 text-[0.85rem] text-[var(--text-muted)] leading-[1.4]"><i className="ph-bold ph-check text-[var(--accent-gold)] text-[0.8rem] mt-[0.15rem]"></i>{f}</li>)}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="flex flex-col gap-0.5 mt-auto pt-4 border-t border-[rgba(255,255,255,0.06)] flex-shrink-0">
                  <span className="text-[0.7rem] uppercase tracking-[2px] text-[var(--text-dim)]">Starting Investment</span>
                  <span className={`font-['Bebas_Neue'] text-[1.9rem] leading-[1.2] break-words text-[var(--accent-gold)]`}>{svc.price[currency]}</span>
                </div>

                {/* Add Button */}
                <button 
                  className={`absolute bottom-[1.4rem] left-[1.4rem] right-[1.4rem] flex items-center justify-center gap-2 p-3 rounded-xl border font-['Bebas_Neue'] text-[0.9rem] tracking-[1.5px] cursor-pointer transition-all duration-300 transform active:scale-95 ${isSelected ? 'bg-[rgba(255,255,255,0.05)] text-[var(--text-muted)] border-[rgba(255,255,255,0.12)]' : 'bg-transparent text-[var(--accent-gold)] border-[rgba(245,166,35,0.4)] hover:bg-[var(--accent-gold)] hover:text-black hover:border-[var(--accent-gold)]'}`}
                >
                  <i className={`ph-bold ${isSelected ? 'ph-check' : 'ph-plus-circle'}`}></i>
                  <span>{isSelected ? 'In Stack' : 'Add Solution'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;