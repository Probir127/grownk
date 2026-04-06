import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Reusable Sub-components (Polished outside of render)
const SectionSeparator = ({ title }) => (
  <div className="flex items-center justify-center gap-6 my-20 privacy-fade-up">
    <div className="h-[1px] grow bg-gradient-to-r from-transparent to-[var(--accent-gold)] opacity-20"></div>
    <h2 className="font-['Bebas_Neue'] text-[1.5rem] tracking-[4px] text-[var(--accent-gold)] uppercase whitespace-nowrap">
      — {title} —
    </h2>
    <div className="h-[1px] grow bg-gradient-to-l from-transparent to-[var(--accent-gold)] opacity-20"></div>
  </div>
);

const PolicySection = ({ number, title, children }) => (
  <section className="privacy-fade-up mb-12">
    <h3 className="font-['Bebas_Neue'] text-[2.2rem] text-[var(--text-main)] tracking-[1.5px] mb-6 flex items-baseline gap-4">
      <span className="text-[var(--accent-gold)] opacity-50 text-[1.5rem]">{number}.</span>
      {title}
    </h3>
    <div className="text-[1.1rem] leading-[1.8] text-[var(--text-muted)] space-y-4">
      {children}
    </div>
  </section>
);

const PrivacyPolicy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.privacy-fade-up',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert(); // GSAP Cleanup for React
  }, []);

  return (
    <div ref={containerRef} className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24 overflow-hidden selection:bg-[var(--accent-gold-soft)] selection:text-[var(--accent-gold)]">
      <div className="max-w-[900px] mx-auto px-[5%]">
        
        {/* Document Header */}
        <div className="mb-24 text-center privacy-fade-up">
           <div className="flex flex-col items-center gap-2 mb-12">
              <h3 className="font-['Bebas_Neue'] text-[3.5rem] leading-none tracking-[2px] text-[var(--text-main)]">
                GROWN<span className="text-[var(--accent-gold)]">K</span>
              </h3>
              <p className="text-[0.8rem] uppercase tracking-[5px] text-[var(--text-muted)] font-medium">
                PR & Digital Marketing Agency
              </p>
           </div>
           
           <div className="h-[2px] w-16 bg-[var(--accent-gold)] mx-auto mb-12 opacity-50"></div>

           <h1 className="font-['Bebas_Neue'] text-[4.5rem] md:text-[6rem] leading-none tracking-[1px] mb-6 uppercase">
             Privacy <span className="text-[var(--accent-gold)]">Policy</span>
           </h1>
           <div className="flex justify-center items-center gap-6 text-[0.85rem] uppercase tracking-[2px] text-[var(--text-dim)] font-semibold mb-2">
              <span>Effective: 30 March 2026</span>
              <span className="opacity-30">|</span>
              <span>Version: 1.0</span>
           </div>
           <p className="text-[0.9rem] text-[var(--text-dim)] italic">
             Protecting your data as obsessively as we grow your brand.
           </p>
        </div>

        {/* INTRODUCTION Section */}
        <SectionSeparator title="INTRODUCTION" />
        <PolicySection number="01" title="SCOPE OF PRIVACY">
          <p>GrownK Agency ("Agency," "we," "us," or "our") respects your privacy and is committed to protecting the personal and business data of our clients ("Client," "you," or "your"). This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (www.grownk.com) or engage our PR and Digital Marketing services.</p>
          <p>By using our website or services, you unconditionally agree to the collection and use of information in accordance with this policy.</p>
        </PolicySection>

        {/* DATA COLLECTION Section */}
        <SectionSeparator title="DATA COLLECTION" />
        <PolicySection number="02" title="PERSONAL & BUSINESS INFORMATION">
          <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our services. This includes:</p>
          <ul className="list-none space-y-3 custom-list">
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> <strong>Identity Data:</strong> Full name, job title, and company name.</li>
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> <strong>Contact Data:</strong> Email address, phone number, WhatsApp ID, and business address.</li>
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> <strong>Project Data:</strong> Marketing goals, current digital asset links, budget ranges, and service preferences.</li>
          </ul>
        </PolicySection>

        <PolicySection number="03" title="AUTOMATED DATA COLLECTION">
          <p>When you navigate GrownK.com, we automatically collect certain technical information via cookies and similar tracking technologies. This includes your IP address, browser type, operating system, referring URLs, and interaction patterns on our site.</p>
          <p>This data helps us understand how visitors use our platform and allows us to optimize the "Luxury Tech" experience we provide.</p>
        </PolicySection>

        {/* THIRD PARTY Section */}
        <SectionSeparator title="THIRD PARTIES" />
        <PolicySection number="04" title="TRACKING & ADVERTISING TOOLS">
          <p>We utilize industry-standard 3rd party tools to measure performance and deliver targeted advertising. These may include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="font-bold text-[var(--accent-gold)] mb-2 uppercase text-[0.8rem] tracking-wider">Analytics</h4>
              <p className="text-[0.95rem]">Google Analytics 4 (GA4) to track user journeys and site engagement metrics.</p>
            </div>
            <div className="p-4 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="font-bold text-[var(--accent-gold)] mb-2 uppercase text-[0.8rem] tracking-wider">Advertising</h4>
              <p className="text-[0.95rem]">Meta Pixel, LinkedIn Insight Tag, and Google Tag Manager for conversion tracking.</p>
            </div>
          </div>
        </PolicySection>

        {/* DATA USAGE Section */}
        <SectionSeparator title="DATA USAGE" />
        <PolicySection number="05" title="HOW WE USE YOUR DATA">
          <p>We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, and compliance with our legal obligations. Specifically:</p>
          <ul className="list-none space-y-3">
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> To generate custom Service Proposals and digital audits.</li>
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> To manage Client accounts, invoicing, and service delivery.</li>
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> To send administrative information, such as updates to our terms or policies.</li>
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> To protect our services from fraudulent or malicious activity.</li>
          </ul>
        </PolicySection>

        {/* PROTECTION Section */}
        <SectionSeparator title="PROTECTION" />
        <PolicySection number="06" title="DATA SECURITY MEASURES">
          <p>We implement a variety of technical and organizational security measures designed to maintain the safety of your personal information. These include SSL encryption for our website, secure cloud storage for client files, and restricted access to sensitive project data.</p>
          <p className="italic text-[0.95rem]">While we strive to use commercially acceptable means to protect your data, no method of transmission is 100% secure.</p>
        </PolicySection>

        <PolicySection number="07" title="DATA RETENTION POLICY">
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
        </PolicySection>

        <PolicySection number="08" title="CLIENT DATA OWNERSHIP">
          <p>All data, proprietary strategies, and assets provided by the Client during the course of an engagement remain the sole property of the Client. GrownK acts as a processor/custodian of this data and will respect all confidentiality agreements in place.</p>
        </PolicySection>

        {/* DISCLOSURE Section */}
        <SectionSeparator title="DISCLOSURE" />
        <PolicySection number="09" title="SHARING YOUR INFORMATION">
          <p>GrownK does not sell or rent user data to third parties. We only share information when necessary to provide our services, such as:</p>
          <ul className="list-none space-y-3">
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> <strong>Service Providers:</strong> Giving restricted access to vetted contractors or specialized tools (e.g., email marketing platforms) to execute your project.</li>
            <li className="flex gap-3"><span className="text-[var(--accent-gold)]">▪</span> <strong>Legal Requirements:</strong> Disclosing info to government or law enforcement agencies if required by the laws of Bangladesh.</li>
          </ul>
        </PolicySection>

        {/* RIGHTS Section */}
        <SectionSeparator title="YOUR RIGHTS" />
        <PolicySection number="10" title="ACCESS & CONTROL">
          <p>You have the right to request access to the personal data we hold about you, to request corrections to inaccurate data, or to request the deletion of your data when it is no longer needed for business or legal purposes.</p>
          <p>To exercise these rights, please email us at <a href="mailto:agency.grownk@gmail.com" className="text-[var(--accent-gold)] hover:underline">agency.grownk@gmail.com</a>.</p>
        </PolicySection>

        {/* CHANGES & GOVERNING Section */}
        <SectionSeparator title="GENERAL" />
        <PolicySection number="11" title="CHANGES TO THIS POLICY">
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal/regulatory reasons. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date."</p>
        </PolicySection>

        <PolicySection number="12" title="GOVERNING LAW">
          <p>This Privacy Policy is governed by and construed in accordance with the laws of the **People's Republic of Bangladesh**. Any disputes arising under or in connection with this policy shall be subject to the exclusive jurisdiction of the courts of Bangladesh.</p>
        </PolicySection>

        {/* CTA Footer */}
        <div className="mt-32 pt-24 border-t border-[rgba(255,255,255,0.05)] text-center privacy-fade-up">
           <p className="text-[1.2rem] font-medium mb-8 text-[var(--text-main)]">
             Questions about how we handle your data?
           </p>
           <div className="flex flex-col items-center gap-4">
              <a href="mailto:agency.grownk@gmail.com" className="text-[var(--accent-gold)] hover:text-white transition-colors duration-300 font-semibold tracking-wide border border-[rgba(245,166,35,0.3)] py-3 px-8 rounded-xl bg-[rgba(245,166,35,0.02)]">
                agency.grownk@gmail.com
              </a>
              <p className="text-[var(--text-dim)] uppercase tracking-[3px] text-[0.8rem] mt-4">
                Bangladesh · PR & Digital Marketing Agency
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

export default PrivacyPolicy;