import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-[#0b0c10] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="mb-16">
          <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Get In Touch</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5.5rem)] leading-none uppercase tracking-[1px] mb-6">
            Contact <span className="text-[var(--accent-gold)]">Us</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[600px]">
            Strategic guidance is one conversation away. Let's discuss how we can transform your complex business into a compelling narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
              <h3 className="font-['Bebas_Neue'] text-[1.8rem] tracking-[1px] mb-2">Direct Inquiry</h3>
              <a href="mailto:agency.grownk@gmail.com" className="text-[var(--accent-gold)] text-lg hover:underline">
                agency.grownk@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
              <h3 className="font-['Bebas_Neue'] text-[1.8rem] tracking-[1px] mb-2">Office</h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                House: 02, Block: B, Road: 04,<br />
                Banasree, Rampura, Dhaka 1219
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
              <h3 className="font-['Bebas_Neue'] text-[1.8rem] tracking-[1px] mb-2">Follow Us</h3>
              <div className="flex gap-6 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61574323077446" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors uppercase text-[0.75rem] tracking-[2px] font-bold">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors uppercase text-[0.75rem] tracking-[2px] font-bold">LinkedIn</a>
                <a href="https://www.instagram.com/grownk_1/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors uppercase text-[0.75rem] tracking-[2px] font-bold">Instagram</a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex items-start">
            <div className="w-full p-10 md:p-14 rounded-2xl border border-[rgba(245,166,35,0.3)] bg-[rgba(10,10,20,0.6)] backdrop-blur-xl text-center shadow-[0_0_60px_rgba(245,166,35,0.1)]">
              <i className="ph-fill ph-whatsapp-logo text-[4rem] text-[var(--accent-gold)] mb-6 block"></i>
              <h2 className="font-['Bebas_Neue'] text-[2.5rem] tracking-[1px] text-[var(--text-main)] mb-4">Chat on WhatsApp</h2>
              <p className="text-[var(--text-muted)] mb-8 max-w-[400px] mx-auto">
                The fastest way to reach our strategic command. Start a conversation instantly with our team.
              </p>
              <a
                href="https://wa.me/8801971046485"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-10 text-[1.1rem] tracking-[1px] font-['Bebas_Neue'] rounded-xl bg-[var(--accent-gold)] text-black border border-[var(--accent-gold)] hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 shadow-lg shadow-[rgba(245,166,35,0.1)]"
              >
                <i className="ph-bold ph-chat-circle-text"></i>
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
