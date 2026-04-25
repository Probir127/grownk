import React, { useEffect } from 'react';
import gsap from 'gsap';
import SEO from '../components/SEO';

// --- Sub-components (outside for performance) ---

const SectionTitle = ({ number, title }) => (
  <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-white tracking-[2px] mb-6 border-b border-white/10 pb-2 uppercase text-left w-full policy-reveal">
    {number}. {title}
  </h2>
);

const SubTitle = ({ title }) => (
  <h3 className="font-['Bebas_Neue'] text-[1.5rem] text-[var(--accent-gold)] tracking-[1px] mb-4 mt-8 uppercase policy-reveal">
    {title}
  </h3>
);

const BulletPoint = ({ children, boldPrefix }) => (
  <div className="flex gap-4 mb-4 policy-reveal items-start pl-2">
    <span className="text-[var(--accent-gold)] mt-1.5 shrink-0 text-[0.8rem]">▪</span>
    <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
      {boldPrefix && <strong className="text-white font-semibold">{boldPrefix}: </strong>}
      {children}
    </p>
  </div>
);

const RefundRow = ({ service, refund, condition }) => (
  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors policy-reveal">
    <td className="py-5 px-4 text-white font-medium text-[0.95rem]">{service}</td>
    <td className={`py-5 px-4 font-bold text-[1rem] ${refund.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>{refund}</td>
    <td className="py-5 px-4 text-[var(--text-muted)] text-[0.95rem] italic">{condition}</td>
  </tr>
);

const RefundPolicy = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.policy-reveal', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.2, scrollTrigger: {
            trigger: '.policy-container',
            start: 'top 80%'
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24 selection:bg-[var(--accent-gold-soft)] selection:text-[var(--accent-gold)] overflow-hidden">
      <SEO 
        title="Refund Policy" 
        description="GrownK Agency Refund Policy. Clear, Fair & Transparent Refund Rules for All Clients." 
        path="/refund-policy" 
      />
      <div className="max-w-[1000px] mx-auto px-[5%] policy-container">
        
        {/* Header Section */}
        <div className="text-center mb-24 policy-reveal">
           <div className="flex flex-col items-center gap-2 mb-10">
              <h3 className="font-['Bebas_Neue'] text-[3rem] leading-none tracking-[2px] text-[var(--text-main)]">
                GROWN<span className="text-[var(--accent-gold)]">K</span>
              </h3>
              <p className="text-[0.7rem] uppercase tracking-[5px] text-[var(--text-muted)] font-medium">
                PR & Digital Marketing Agency
              </p>
           </div>
           
           <h1 className="font-['Bebas_Neue'] text-[4rem] md:text-[6rem] leading-none tracking-[1px] mb-6 uppercase">
             REFUND <span className="text-[var(--accent-gold)]">POLICY</span>
           </h1>
           <p className="text-[1rem] md:text-[1.2rem] uppercase tracking-[4px] text-[var(--accent-gold)] font-semibold mb-8">
             Clear, Fair & Transparent Refund Rules for All Clients
           </p>

           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.85rem] text-[var(--text-dim)] font-medium uppercase tracking-[2px] mb-12">
             <span>Effective Date: 30 March 2026</span>
             <span className="hidden md:inline opacity-30">|</span>
             <span>Version: 1.0</span>
             <span className="hidden md:inline opacity-30">|</span>
             <span>agency.grownk@gmail.com</span>
             <span className="hidden md:inline opacity-30">|</span>
             <span>Bangladesh</span>
           </div>

           <div className="bg-[var(--accent-gold-soft)] border border-[var(--accent-gold)]/20 p-8 rounded-2xl max-w-[800px] mx-auto">
              <p className="text-[1.1rem] md:text-[1.25rem] leading-relaxed text-[var(--text-main)] italic font-light">
                "We invest real time, creativity, and expertise the moment your project begins. This policy protects both you and us fairly and transparently."
              </p>
           </div>
        </div>

        <div className="max-w-[850px] mx-auto space-y-20">
          
          {/* Section 1: Philosophy */}
          <section>
            <SectionTitle number="1" title="OUR REFUND PHILOSOPHY" />
            <div className="space-y-6 text-[var(--text-muted)] leading-[1.8] text-[1.1rem]">
              <p>
                GrownK Agency operates on the principle that time, skill, and creative effort are the most valuable resources we offer. Unlike physical products, digital and creative services cannot be returned, reversed, or reserved once delivered or commenced.
              </p>
              <p>Our refund policy is built on three core principles:</p>
              <div className="space-y-1">
                <BulletPoint boldPrefix="Clarity">you know exactly what is and is not refundable before you pay.</BulletPoint>
                <BulletPoint boldPrefix="Fairness">we only retain fees proportional to work actually completed.</BulletPoint>
                <BulletPoint boldPrefix="Protection">both GrownK and the Client are protected from misuse and bad faith.</BulletPoint>
              </div>
              <p className="pt-4 font-semibold text-white tracking-[1px] uppercase text-[1rem]">
                By making any payment to GrownK, whether an advance, deposit, or full project fee you confirm that you have read and fully accept this Refund Policy.
              </p>
            </div>
          </section>

          {/* Section 2: General Rule */}
          <section>
            <SectionTitle number="2" title="THE GENERAL RULE: NON-REFUNDABLE DEPOSITS" />
            <div className="space-y-6 text-[var(--text-muted)] leading-[1.8] text-[1.1rem]">
              <p className="text-white font-bold bg-white/5 p-6 rounded-xl border-l-4 border-[var(--accent-gold)]">
                All advance payments and deposits paid to GrownK are strictly non-refundable once work has commenced.
              </p>
              <p className="italic">"Work commencing" includes but is not limited to any of the following actions by GrownK following receipt of payment:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <BulletPoint>Internal strategy, planning, or briefing sessions</BulletPoint>
                <BulletPoint>Design mockups, wireframes, or concepts</BulletPoint>
                <BulletPoint>Content creation, copywriting, or graphics</BulletPoint>
                <BulletPoint>Technical development of any digital asset</BulletPoint>
                <BulletPoint>Social media account creation or setup</BulletPoint>
                <BulletPoint>Vendor or platform communication on your behalf</BulletPoint>
              </div>
              <p>
                GrownK begins work promptly after payment confirmation. The rationale is simple: our team allocates time and resources immediately upon receiving your project. The deposit compensates for this commitment, whether or not the project reaches completion.
              </p>
            </div>
          </section>

          {/* Section 3: Table */}
          <section className="overflow-x-auto">
            <SectionTitle number="3" title="REFUND RULES BY SERVICE TYPE" />
            <table className="w-full text-left border-collapse min-w-[750px] mb-8">
              <thead>
                <tr className="border-b-2 border-white/10 pb-4">
                  <th className="py-4 px-4 font-['Bebas_Neue'] text-[1.4rem] text-[var(--accent-gold)] uppercase tracking-[2px]">Service / Scenario</th>
                  <th className="py-4 px-4 font-['Bebas_Neue'] text-[1.4rem] text-[var(--accent-gold)] uppercase tracking-[2px]">Refund?</th>
                  <th className="py-4 px-4 font-['Bebas_Neue'] text-[1.4rem] text-[var(--accent-gold)] uppercase tracking-[2px]">Condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <RefundRow service="Manual Service — Deposit (50%)" refund="✗ No" condition="Non-refundable once any work begins." />
                <RefundRow service="Manual Service — Final Payment (50%)" refund="✗ No" condition="Due on delivery. Non-refundable post-handover." />
                <RefundRow service="Custom Project — Initial 40%" refund="✗ No" condition="Non-refundable. Covers strategy, planning & design." />
                <RefundRow service="Custom Project — Mid-Payment 30%" refund="✗ No" condition="Non-refundable once milestone is approved." />
                <RefundRow service="Custom Project — Final 30%" refund="✗ No" condition="Due on delivery approval. Non-refundable." />
                <RefundRow service="Total Management — Monthly Fee" refund="✗ No" condition="Non-refundable once the billing month commences." />
                <RefundRow service="Total Management — Cancelled (mid)" refund="✗ No" condition="No partial-month refunds. Service till month-end." />
                <RefundRow service="Add-On Services — Advance Payment" refund="✗ No" condition="Non-refundable once brief is received." />
                <RefundRow service="Duplicate Payment (bank error)" refund="✓ Yes" condition="Full refund of duplicate amount within 7 days." />
                <RefundRow service="GrownK cancels without delivery" refund="✓ Yes" condition="Pro-rata refund for work not commenced." />
                <RefundRow service="Service not started on time" refund="✓ Partial" condition="Refund less any planning/admin costs." />
              </tbody>
            </table>
          </section>

          {/* Section 4: Manual Service */}
          <section>
            <SectionTitle number="4" title="MANUAL SERVICE — REFUND RULES" />
            <p className="text-[var(--text-muted)] mb-6 text-[1.1rem] leading-relaxed">
              The Manual Service is a one-time build project. The following specific conditions apply:
            </p>
            <div className="space-y-1">
              <BulletPoint>The 50% advance deposit is non-refundable under all circumstances once GrownK has received a project brief or commenced any planning activity.</BulletPoint>
              <BulletPoint>The remaining 50% is payable upon delivery of completed Deliverables, prior to handover. Once the final payment is made and Deliverables are handed over, no refund is possible as the service is considered fully rendered.</BulletPoint>
              <BulletPoint>If the Client is dissatisfied with Deliverables, the appropriate remedy is revision (within the scope agreed), not a refund. See Section 8.</BulletPoint>
              <BulletPoint>If the Client abandons the project after paying the deposit but before any work commences (confirmed in writing by GrownK), a discretionary credit note may be issued — valid for 90 days against any future GrownK service. This is at GrownK's sole discretion and not a right.</BulletPoint>
            </div>
          </section>

          {/* Section 5: Custom Service */}
          <section>
            <SectionTitle number="5" title="CUSTOM SERVICE — REFUND RULES" />
            <p className="text-[var(--text-muted)] mb-6 text-[1.1rem] leading-relaxed">
              Custom projects are milestone-based. Each milestone payment is tied to a specific stage of work. The following rules apply:
            </p>
            <div className="space-y-1">
              <BulletPoint>The 40% initial payment is strictly non-refundable. It covers strategy sessions, planning, brief development, initial design concepts, and resource allocation.</BulletPoint>
              <BulletPoint>The 30% mid-project payment becomes non-refundable upon Client approval of the mid-project milestone review. Approval — including informal approval via WhatsApp or email constitutes acceptance of the work completed to that stage.</BulletPoint>
              <BulletPoint>The 30% final payment is due upon final Deliverable approval and is non-refundable post-payment.</BulletPoint>
              <BulletPoint>If the Client requests to cancel a Custom project after the 40% deposit but before the mid-project milestone, GrownK will invoice for all work completed to date on a pro-rata basis. If this amount is less than the 40% deposit already paid, no further charge is made and no refund is issued. If it exceeds the deposit, the Client is liable for the difference, payable within seven (7) days.</BulletPoint>
            </div>
          </section>

          {/* Section 6: Total Management */}
          <section>
            <SectionTitle number="6" title="TOTAL MANAGEMENT SUBSCRIPTION — REFUND RULES" />
            <div className="space-y-6 text-[var(--text-muted)] leading-[1.8] text-[1.1rem]">
              <div className="space-y-1">
                <BulletPoint>Monthly fees are non-refundable once the billing month has commenced, regardless of whether the Client has actively utilized all contracted services during that month.</BulletPoint>
                <BulletPoint>If a Client cancels their subscription with at least fifteen (15) calendar days' written notice before the next billing date, they will not be charged for the following month. No refund is issued for the current month.</BulletPoint>
                <BulletPoint>If cancellation notice is received fewer than fifteen (15) days before the next billing date, the following month's fee will be charged as normal, and services will be delivered through the end of that final month.</BulletPoint>
                <BulletPoint>No partial-month refunds are issued under any circumstances. The subscription is a fixed monthly commitment.</BulletPoint>
                <BulletPoint>If GrownK fails to deliver contracted monthly posts or services without valid reason, the Client is entitled to a proportional credit note for the undelivered portion applied to the following month's invoice. This is not payable as cash.</BulletPoint>
              </div>
              <p className="bg-white/5 p-8 rounded-2xl italic border border-white/5">
                "Subscription fees fund our team's ongoing allocation to your brand. Even in months of lower activity, our team remains on standby. This is why monthly fees are non-refundable."
              </p>
            </div>
          </section>

          {/* Section 7: Add-Ons */}
          <section>
            <SectionTitle number="7" title="ADD-ON SERVICES REFUND RULES" />
            <p className="text-[var(--text-muted)] mb-6 text-[1.1rem] leading-relaxed">
              All Targeted Artillery Add-Ons (FB & IG Boosting, Website Creation, Social Platform Creation, SEO, App Development) require advance payment before work commences. The following applies:
            </p>
            <div className="space-y-1">
              <BulletPoint>Add-on fees are non-refundable once GrownK has received the project brief and commenced any preparatory work, research, or design activity.</BulletPoint>
              <BulletPoint>App Development projects follow the same milestone-based payment and refund rules as Custom Service projects (see Section 5), with milestones defined in the individual Service Proposal.</BulletPoint>
              <BulletPoint>SEO retainer fees are non-refundable for the current month once optimisation work, audits, or content improvements have commenced. SEO is a long-term process; the Client acknowledges that results are not immediate and the absence of immediate ranking improvements is not grounds for a refund.</BulletPoint>
              <BulletPoint>Boosting management fees (paid to GrownK for managing ad campaigns) are non-refundable. Ad Spend paid directly to Meta, Google, or other platforms is governed entirely by those platforms' own refund policies, over which GrownK has no control or liability.</BulletPoint>
            </div>
          </section>

          {/* Section 8: Remedies */}
          <section>
            <SectionTitle number="8" title="WHEN REFUNDS ARE NOT APPROPRIATE — REMEDIES INSTEAD" />
            <p className="text-[var(--text-muted)] mb-10 text-[1.1rem]">
              A refund is not the appropriate remedy in the following situations. GrownK commits to the following alternative remedies instead:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
               <div className="policy-reveal">
                 <SubTitle title="8.1 Dissatisfaction with Design" />
                 <p className="text-[var(--text-muted)] leading-relaxed text-[1rem]">
                   If the Client is dissatisfied with a Deliverable, the appropriate remedy is a revision request within the included rounds. Dissatisfaction with the creative direction is not grounds for a refund, particularly if the Client approved a brief prior to production.
                 </p>
               </div>
               <div className="policy-reveal">
                 <SubTitle title="8.2 Poor Advertising Performance" />
                 <p className="text-[var(--text-muted)] leading-relaxed text-[1rem]">
                   GrownK will review the campaign strategy, audience targeting, and creative assets and make evidence-based adjustments. Results depend on market conditions beyond GrownK's absolute control.
                 </p>
               </div>
               <div className="policy-reveal">
                 <SubTitle title="8.3 Slow SEO Results" />
                 <p className="text-[var(--text-muted)] leading-relaxed text-[1rem]">
                   SEO typically materialises over 3-6 months. Short-term slow progress is not grounds for a refund. GrownK will provide monthly reports demonstrating activity and progress.
                 </p>
               </div>
               <div className="policy-reveal">
                 <SubTitle title="8.4 Change of Business Direction" />
                 <p className="text-[var(--text-muted)] leading-relaxed text-[1rem]">
                   If the Client changes strategy, rebrands, or discontinues a product after work has commenced, this is not a valid ground for a refund. The Client is responsible for scope relevance.
                 </p>
               </div>
            </div>
            <div className="mt-12 policy-reveal">
               <SubTitle title="8.5 Communication Delays" />
               <p className="text-[var(--text-muted)] leading-relaxed text-[1rem]">
                 Project timelines are directly affected by Client response times. Delays caused by the Client's failure to provide materials do not entitle the Client to a refund or compensation.
               </p>
            </div>
          </section>

          {/* Section 9: Agency Cancellation */}
          <section>
            <SectionTitle number="9" title="GROWNK INITIATED CANCELLATION" />
            <div className="space-y-6 text-[var(--text-muted)] leading-[1.8] text-[1.1rem]">
              <p>In the exceptional circumstances where GrownK initiates cancellation — for reasons not attributable to the Client's breach — the following refund provisions apply:</p>
              <div className="space-y-1">
                <BulletPoint>If GrownK cancels before any work has commenced: Full refund of all payments processed within ten (10) business days.</BulletPoint>
                <BulletPoint>If GrownK cancels after work has partially commenced: A pro-rata refund for the portion of work not yet completed processed within ten (10) business days.</BulletPoint>
                <BulletPoint>If cancellation is due to the Client's own breach (non-payment, misconduct, illegal activity): No refund is issued.</BulletPoint>
              </div>
              <p className="italic text-[1rem] opacity-70">"In the event of GrownK's cessation of business operations, Clients... will receive a pro-rata refund for pre-paid services not yet rendered, to the extent financially possible."</p>
            </div>
          </section>

          {/* Section 10: Eligible Scenarios */}
          <section>
            <SectionTitle number="10" title="ELIGIBLE REFUND SCENARIOS" />
            <div className="space-y-6 text-[var(--text-muted)] leading-[1.8] text-[1.1rem]">
              <p className="font-semibold text-white uppercase tracking-[1px]">The only scenarios in which GrownK will process a cash refund are:</p>
              <div className="space-y-1">
                <BulletPoint>Where a Client has paid twice for the same invoice due to a bank or platform error (verified).</BulletPoint>
                <BulletPoint>Full refund within ten (10) business days, as described in Section 9.</BulletPoint>
                <BulletPoint>Pro-rata refund for undelivered work, as described in Section 9.</BulletPoint>
              </div>
              <p className="text-[1rem] italic pt-4">
                All other payment requests... will not be honoured as cash refunds. GrownK may, at its sole discretion, offer a credit note or service extension as a goodwill gesture but this is not a legal entitlement.
              </p>
            </div>
          </section>

          {/* Section 11: Process */}
          <section>
            <SectionTitle number="11" title="HOW TO REQUEST A REFUND" />
            <div className="space-y-8">
              <p className="text-[var(--text-muted)] text-[1.1rem]">Please follow this 5-step process for eligibility verification:</p>
              <div className="bg-white/5 p-10 rounded-3xl space-y-6 border border-white/5">
                {[
                  { s: "Step 1", d: "Contact us at agency.grownk@gmail.com with subject: 'Refund Request — [Your Name]'" },
                  { s: "Step 2", d: "Provide invoice number, payment date, and clear reason for request." },
                  { s: "Step 3", d: "GrownK will acknowledge within 2 business days and investigate the claim." },
                  { s: "Step 4", d: "A decision will be communicated within 7 business days of acknowledgement." },
                  { s: "Step 5", d: "Approved refunds processed within 10 business days via bank transfer or original method." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center policy-reveal">
                    <div className="font-['Bebas_Neue'] text-[1.4rem] text-[var(--accent-gold)] min-w-[70px] border-r border-white/10">{item.s}</div>
                    <div className="text-[var(--text-muted)] text-[1.05rem]">{item.d}</div>
                  </div>
                ))}
              </div>
              <p className="text-red-400 font-bold uppercase tracking-[1px] text-center pt-4">
                Refund requests made via WhatsApp alone will not be processed.
              </p>
            </div>
          </section>

          {/* Section 12: Chargebacks */}
          <section>
            <SectionTitle number="12" title="CHARGEBACKS & PAYMENT DISPUTES" />
            <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-2xl space-y-6">
              <p className="text-[var(--text-main)] leading-relaxed italic">
                "GrownK takes fraudulent chargebacks and unauthorised payment disputes extremely seriously. If a Client initiates a chargeback without following our process (Section 11):"
              </p>
              <div className="space-y-2">
                <BulletPoint>Immediate suspension of all active services without notice.</BulletPoint>
                <BulletPoint>Revocation of all shared Deliverables, credentials, or access.</BulletPoint>
                <BulletPoint>Legal pursuit for the full outstanding amount plus recovery fees.</BulletPoint>
                <BulletPoint>Permanent blacklisting from all future GrownK services.</BulletPoint>
              </div>
            </div>
          </section>

          {/* Section 13-15: Legalities */}
          <section>
            <div className="space-y-16">
              <div className="policy-reveal">
                <SectionTitle number="13" title="CURRENCY & PROCESSING" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.1rem]">
                  All refunds are processed in <strong className="text-white">Bangladeshi Taka (BDT)</strong>. GrownK is not responsible for exchange rate fluctuations or bank processing fees.
                </p>
              </div>
              <div className="policy-reveal">
                <SectionTitle number="14" title="AMENDMENTS TO THIS POLICY" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.1rem]">
                  GrownK reserves the right to update this Refund Policy at any time. Changes will be posted on our website and active Clients will be notified. Continued engagement constitutes acceptance.
                </p>
              </div>
              <div className="policy-reveal">
                <SectionTitle number="15" title="GOVERNING LAW" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.1rem]">
                  This Refund Policy is governed by the laws of the <strong className="text-white italic">People's Republic of Bangladesh.</strong> All disputes are subject to the exclusive jurisdiction of the courts of Bangladesh.
                </p>
              </div>
            </div>
          </section>

          {/* Section 16: Contact */}
          <section className="mt-32 pt-24 border-t border-white/5 policy-reveal text-center">
            <h2 className="font-['Bebas_Neue'] text-[3rem] mb-8 text-white tracking-[2px]">16. CONTACT US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[1.1rem] max-w-[600px] mx-auto text-left mb-16">
               <div className="flex flex-col gap-1">
                 <span className="text-[var(--accent-gold)] uppercase text-[0.8rem] tracking-[3px] font-bold">Email</span>
                 <span className="text-white font-medium">agency.grownk@gmail.com</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[var(--accent-gold)] uppercase text-[0.8rem] tracking-[3px] font-bold">Website</span>
                 <span className="text-white font-medium">www.grownk.com</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[var(--accent-gold)] uppercase text-[0.8rem] tracking-[3px] font-bold">Country</span>
                 <span className="text-white font-medium">Bangladesh</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[var(--accent-gold)] uppercase text-[0.8rem] tracking-[3px] font-bold">Response Time</span>
                 <span className="text-white font-medium">Within 2 business days</span>
               </div>
            </div>
            
            <p className="text-[var(--text-muted)] italic text-[1.2rem] max-w-[700px] mx-auto mb-16">
              "We value every client relationship. Our policies exist not to create barriers, but to ensure both parties can work together with complete clarity and trust."
            </p>

            <div className="text-[0.7rem] text-[var(--text-dim)] uppercase tracking-[4px] pt-10 border-t border-white/5">
                © 2026 GrownK Agency. All Rights Reserved.
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;
