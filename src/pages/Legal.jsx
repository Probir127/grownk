import React from 'react';

const Legal = ({ title }) => {
  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-[5%]">
        <div className="mb-16">
          <p className="text-[0.8rem] uppercase tracking-[4px] text-[var(--accent-gold)] font-bold mb-6">Compliance</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] leading-none uppercase tracking-[1px] mb-8">
            {title}
          </h1>
          <p className="text-[1.1rem] text-[var(--text-muted)] opacity-80 leading-relaxed italic">
            Last Updated: March 31, 2026
          </p>
        </div>

        <div className="flex flex-col gap-10 text-[1.1rem] text-[var(--text-muted)] leading-[1.8]">
          <section className="flex flex-col gap-4">
            <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-[var(--text-main)] tracking-[1px]">1. Introduction</h2>
            <p>
              Welcome to GrownK. These {title} govern your use of our services and our digital ecosystem. By partnering with us, you agree to these foundational terms.
            </p>
          </section>

          <section className="flex flex-col gap-4">
             <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-[var(--text-main)] tracking-[1px]">2. Partnership Architecture</h2>
             <p>
               Every service provided by GrownK is a custom transition from business complexity to narrative clarity. Our "Manual," "Custom," and "Total Management" models carry specific responsibilities regarding hosting, domain costs, and content ownership.
             </p>
          </section>

          <section className="flex flex-col gap-4">
             <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-[var(--text-main)] tracking-[1px]">3. Data Sovereignty</h2>
             <p>
               We believe in brand legacy. All content, assets, and narratives built during our partnership are owned by the client upon full payment, as specified in the service agreement.
             </p>
          </section>

          <section className="flex flex-col gap-4">
             <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-[var(--text-main)] tracking-[1px]">4. Strategic Liability</h2>
             <p>
               While we architect growth ecosystems for success, market performance is subject to external vectors. GrownK provides the horsepower; the market provides the terrain.
             </p>
          </section>

          <section className="flex flex-col gap-4">
             <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-[var(--text-main)] tracking-[1px]">5. Contact Information</h2>
             <p>
               For any clarifications on our architectural terms, contact our strategic inquiry desk at <a href="mailto:agency.grownk@gmail.com" className="text-[var(--accent-gold)] underline">agency.grownk@gmail.com</a>.
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
