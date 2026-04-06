import React from 'react';

const Process = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery',
      desc: 'We study your business, your customers, and your competitors then identify exactly what your brand needs to say to stand out and be trusted.',
      icon: 'ph-fill ph-magnifying-glass'
    },
    {
      id: '02',
      title: 'Strategy & Build',
      desc: 'We build your complete digital presence website, social media profiles, content plan, and brand identity all designed to attract the right customers from day one.',
      icon: 'ph-fill ph-git-merge'
    },
    {
      id: '03',
      title: 'Amplification',
      desc: 'We push your brand in front of your audience through targeted campaigns, consistent content, and strategic promotion turning visibility into real, measurable sales.',
      icon: 'ph-fill ph-rocket-launch'
    }
  ];

  return (
    <section className="py-24 px-0 relative bg-[var(--bg-dark)] border-t border-[rgba(255,255,255,0.03)]" id="approach">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sticky Left Column */}
          <div className="lg:w-[40%] lg:sticky lg:top-32 lg:h-fit">
            <p className="text-[0.7rem] uppercase tracking-[4px] text-[var(--accent-gold)] mb-4 font-semibold font-['Inter']">Chapter V</p>
            <h2 className="font-['Bebas_Neue'] text-[3rem] md:text-[4rem] text-[var(--text-main)] uppercase leading-[0.95] tracking-[1px] mb-6">
              Writing the <span className="text-gradient-gold">story.</span>
            </h2>
            <p className="max-w-[400px] text-[#aaa] text-[1.05rem] leading-[1.6]">
              Strategic architecture that moves backwards from your final objective. A systematic three-phase transition.
            </p>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:w-[60%] flex flex-col mt-8 lg:mt-0">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="group relative flex items-start gap-6 lg:gap-8"
              >
                {/* Timeline Icon Column */}
                <div className="flex flex-col items-center h-full">
                  <div className="w-12 h-12 rounded-full bg-[rgba(245,166,35,0.1)] text-[#F5A623] flex items-center justify-center text-xl border border-[rgba(245,166,35,0.2)] shadow-[0_0_15px_rgba(245,166,35,0.1)] z-10 shrink-0">
                    <i className={step.icon}></i>
                  </div>
                  {/* Vertical Line Decoration */}
                  {index !== steps.length - 1 && (
                    <div className="w-[1px] h-full min-h-[50px] bg-gradient-to-b from-[#F5A623]/30 to-transparent flex-grow my-4"></div>
                  )}
                </div>

                {/* Content Column */}
                <div className={`flex flex-col gap-3 pt-1 ${index !== steps.length - 1 ? 'pb-16' : 'pb-0'}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-['Bebas_Neue'] text-[2.5rem] leading-none text-[rgba(245,166,35,0.4)] select-none transition-all duration-300 group-hover:text-[var(--accent-gold)] group-hover:scale-110">
                      {step.id}
                    </span>
                    <h3 className="font-['Bebas_Neue'] text-[1.8rem] text-[var(--text-main)] tracking-[1px] uppercase transition-colors duration-300 group-hover:text-[var(--accent-gold)]">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-[1rem] text-[#aaa] leading-[1.7] m-0 max-w-[480px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Process;