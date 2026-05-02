import React from 'react';
import { SVC_DETAILS } from '../../data/servicesData';

const StackBar = ({ selectedServices }) => {
  const count = selectedServices.size;
  const isVisible = count > 0;
  
  const selectedList = Array.from(selectedServices).map(id => SVC_DETAILS[id]);
  const names = selectedList.map(item => item.name).join(' · ');

  const generateWhatsAppMessage = () => {
    let message = "Hi GrownK! I'd like to build a stack with the following services:\n\n";
    selectedList.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.price})\n`;
    });
    message += "\nPlease get back to me to discuss the details.";
    return `https://wa.me/8801611510192?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(860px,92vw)] bg-[rgba(10,10,20,0.92)] backdrop-blur-3xl border border-[rgba(245,166,35,0.3)] rounded-20 px-6 py-4.5 flex items-center justify-between gap-5 z-[900] shadow-[0_-4px_40px_rgba(245,166,35,0.15),0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-450 cubic-bezier(0.22,1,0.36,1) ${isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-[150%] opacity-0 pointer-events-none'}`}>
      <div className="flex items-center gap-3.5 flex-1 min-w-0">
        <div className="hidden md:flex text-[var(--accent-gold)] text-xl flex-shrink-0 animate-pulse">
           <i className="ph-fill ph-stack"></i>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-['Bebas_Neue'] text-base tracking-[1px] text-[var(--text-main)]">Your Selected Stack</span>
          <span className="text-[0.8rem] text-[var(--text-muted)] whitespace-nowrap overflow-hidden text-ellipsis">
            {count === 0 ? 'Nothing selected yet' : names}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-[var(--accent-gold)] text-black font-['Bebas_Neue'] text-[1.1rem] flex items-center justify-center transition-transform duration-200 active:scale-125 shadow-[0_0_15px_rgba(245,166,35,0.3)]">
          {count}
        </div>
        
        <a 
          href={isVisible ? generateWhatsAppMessage() : '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary py-2.5 px-6 text-[0.9rem] tracking-[1px] font-['Bebas_Neue'] rounded-lg whitespace-nowrap bg-[var(--accent-gold)] text-black border border-[var(--accent-gold)] hover:bg-white hover:border-white transition-all duration-300 shadow-lg shadow-[rgba(245,166,35,0.2)]"
        >
          Build My Stack
        </a>
      </div>
    </div>
  );
};

export default StackBar;
