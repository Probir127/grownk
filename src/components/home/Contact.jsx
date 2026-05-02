import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-0 relative bg-[var(--bg-dark)] border-t border-[rgba(255,255,255,0.03)]" id="contact">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-16 reveal fade-up">
          <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Resolution</p>
          <div className="max-w-[850px] mx-auto">
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,7vw,5rem)] text-[var(--text-main)] uppercase leading-tight tracking-[1px]">
              Ready to write the <span className="text-[#F5A623]">next chapter</span> of your brand's legacy?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 reveal fade-up">
            <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[550px]">
              Strategic guidance is one conversation away. Let's discuss how we can transform your complex business into a compelling narrative that commands attention and market authority.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5 p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(245,166,35,0.2)] transition-all duration-300">
                <span className="text-[0.7rem] uppercase tracking-[2px] text-[var(--text-dim)] font-bold">Direct Inquiry</span>
                <span className="text-[clamp(1.1rem,2vw,1.4rem)] text-[var(--accent-gold)] font-medium">
                  <a href="mailto:agency.grownk@gmail.com?subject=Partnership%20Inquiry" className="hover:underline transition-all">
                    agency.grownk@gmail.com
                  </a>
                </span>
              </div>
              
              <div className="flex flex-col gap-1.5 p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                 <span className="text-[0.7rem] uppercase tracking-[2px] text-[var(--text-dim)] font-bold">Bangladeshi Office</span>
                 <span className="text-[1rem] text-[var(--text-muted)] leading-relaxed">
                   House: 02, Block: B, Road: 04,<br />
                   Banasree, Rampura, Dhaka 1219
                 </span>
              </div>
            </div>
          </div>

          <div className="reveal fade-up">
            <div className="relative group overflow-hidden rounded-40 border border-[var(--accent-gold)] bg-[rgba(10,10,20,0.6)] backdrop-blur-3xl p-10 md:p-14 shadow-[0_0_80px_rgba(245,166,35,0.15)] text-center transition-all duration-500 hover:shadow-[0_0_100px_rgba(245,166,35,0.25)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-gold)] opacity-5 blur-[80px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[rgba(0,243,255,0.1)] opacity-10 blur-[80px] pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="w-24 h-24 rounded-full bg-[rgba(245,166,35,0.1)] text-[var(--accent-gold)] flex items-center justify-center text-5xl mb-2 animate-bounce-slow">
                  <i className="ph-fill ph-whatsapp-logo"></i>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-['Bebas_Neue'] text-[2.5rem] text-[var(--text-main)] tracking-[1px]">Message Us Directly</h3>
                  <p className="text-[var(--text-muted)] text-[1.05rem] leading-[1.6] max-w-[350px]">
                    Skip the forms. Message us on WhatsApp to start building your stack immediately. 
                  </p>
                </div>

                <a 
                  href="https://wa.me/8801611510192" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full btn-primary py-4 px-10 text-[1.1rem] tracking-[1px] font-['Bebas_Neue'] rounded-xl bg-[var(--accent-gold)] text-black border border-[var(--accent-gold)] hover:bg-transparent hover:text-[var(--accent-gold)] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-lg"
                >
                  <i className="ph-bold ph-chat-circle-text"></i>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
