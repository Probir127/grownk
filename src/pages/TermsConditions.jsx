import React, { useEffect } from 'react';
import gsap from 'gsap';
import SEO from '../components/SEO';

// --- Sub-components (outside for performance) ---

const SectionTitle = ({ number, title }) => (
  <h2 className="font-['Bebas_Neue'] text-[2.2rem] text-white tracking-[1px] mb-6 border-b border-white/10 pb-2 uppercase text-left w-full policy-reveal">
    {number}. {title}
  </h2>
);

const SubTitle = ({ title }) => (
  <h3 className="font-['Bebas_Neue'] text-[1.5rem] text-[var(--accent-gold)] tracking-[1px] mb-4 mt-6 uppercase policy-reveal">
    {title}
  </h3>
);

const DefinitionCard = ({ term, definition }) => (
  <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 policy-reveal group transform transition-all duration-300">
    <div className="font-bold text-white min-w-[140px] uppercase text-[0.85rem] tracking-[2px] pt-1">
      <span className="text-[var(--accent-gold)] mr-2">▪</span>{term}
    </div>
    <div className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
      {definition}
    </div>
  </div>
);

const BulletPoint = ({ children, boldPrefix }) => (
  <div className="flex gap-4 mb-3 policy-reveal items-start pl-2">
    <span className="text-[var(--accent-gold)] mt-1.5 shrink-0 text-[0.8rem]">▪</span>
    <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
      {boldPrefix && <strong className="text-white font-semibold">{boldPrefix}: </strong>}
      {children}
    </p>
  </div>
);

const TermsConditions = () => {
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
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24 selection:bg-[var(--accent-gold-soft)] selection:text-[var(--accent-gold)]">
      <SEO 
        title="Terms and Conditions" 
        description="GrownK Agency Terms and Conditions of Service. Client Service Agreement and Legal Framework." 
        path="/terms-conditions" 
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
           
           <h1 className="font-['Bebas_Neue'] text-[3.5rem] md:text-[5.5rem] leading-none tracking-[1px] mb-4 uppercase">
             TERMS AND <span className="text-[var(--accent-gold)]">CONDITIONS</span>
           </h1>
           <p className="text-[1.2rem] md:text-[1.8rem] uppercase tracking-[4px] text-[var(--text-muted)] font-light mb-8">
             Client Service Agreement & Legal Framework
           </p>

           <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.85rem] text-[var(--text-dim)] font-medium uppercase tracking-[2px] mb-12">
             <span>Effective Date: 30 March 2026</span>
             <span className="hidden md:inline opacity-30">|</span>
             <span>Version: 1.0</span>
             <span className="hidden md:inline opacity-30">|</span>
             <span>agency.grownk@gmail.com</span>
           </div>

           <div className="bg-red-900/10 border border-red-500/20 p-6 rounded-2xl max-w-[800px] mx-auto mb-16">
              <p className="text-red-400 font-bold tracking-[2px] uppercase text-[0.9rem] mb-2 font-['Inter']">
                IMPORTANT: PLEASE READ CAREFULLY BEFORE ENGAGING OUR SERVICES
              </p>
              <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed italic">
                This Agreement constitutes a legally binding contract. By moving forward, you confirm you have read, understood, and unconditionally agree to these terms.
              </p>
           </div>
        </div>

        <div className="max-w-[850px] mx-auto space-y-20">
          
          {/* Introduction */}
          <section className="policy-reveal bg-white/5 p-10 rounded-3xl border border-white/5 italic text-[1.1rem] leading-relaxed text-[var(--text-dim)]">
            "These Terms and Conditions of Service ("Agreement") constitute a legally binding contract between GrownK Agency ("Agency," "we," "us," or "our") and the individual, business entity, or organization ("Client," "you," or "your") engaging any of our services. By signing a Service Proposal, making any full or partial payment, sending a written or verbal confirmation, or allowing any work to commence, the Client confirms that they have read, understood, and unconditionally agree to be bound by this Agreement in its entirety.
            <br /> <br />
            If the Client does not agree to any provision of this Agreement, they must notify GrownK in writing prior to commencing any engagement. Proceeding without such notification constitutes full and irrevocable acceptance of these Terms."
          </section>

          {/* Section 1: Definitions */}
          <section>
            <SectionTitle number="1" title="DEFINITIONS" />
            <div className="space-y-1">
              <DefinitionCard term="Agency" definition="‘GrownK’ a PR and Digital Marketing Agency operating in Bangladesh." />
              <DefinitionCard term="Client" definition="Any individual, shop owner, business, or organization that engages GrownK for any service." />
              <DefinitionCard term="Services" definition="All offerings provided by the Agency including, but not limited to, Manual Service, Custom Service, Total Management subscriptions, and Targeted Artillery Add-ons." />
              <DefinitionCard term="Service Proposal" definition="A written, digital, or formally communicated document outlining scope, timeline, pricing, and deliverables specific to a Client engagement." />
              <DefinitionCard term="Deliverables" definition="All outputs produced by the Agency including websites, social media profiles, content, graphics, copywriting, strategies, reports, and applications." />
              <DefinitionCard term="Ad Spend" definition="Monetary funds paid directly by the Client to third-party advertising platforms (Meta, Google, TikTok, etc.) to run paid advertisements. Ad Spend is entirely separate from Agency fees." />
              <DefinitionCard term="Intellectual Property (IP)" definition="All creative works, designs, code, written content, branding assets, strategies, frameworks, and materials produced during the engagement." />
              <DefinitionCard term="Subscription" definition="Any recurring monthly management plan under the Total Management service tier." />
              <DefinitionCard term="Revision" definition="A change to a Deliverable that falls within the originally agreed scope. Additions to scope are not Revisions and may attract additional fees." />
              <DefinitionCard term="Force Majeure" definition="Any event beyond reasonable control, including natural disasters, civil unrest, internet or platform outages, platform policy changes, government actions, or any other unforeseeable circumstance." />
              <DefinitionCard term="Confidential Information" definition="Any non-public information shared by either party during the engagement including business data, strategy, financials, and Client content." />
            </div>
          </section>

          {/* Section 2: Scope of Services */}
          <section>
            <SectionTitle number="2" title="SCOPE OF SERVICES" />
            <p className="text-[var(--text-muted)] mb-8 text-[1.1rem] leading-relaxed">
              GrownK provides the following clearly defined service models. The precise scope of any engagement is governed by the Service Proposal accepted by the Client. Any feature, task, or output not explicitly listed in the Service Proposal is excluded from the engagement.
            </p>
            <div className="space-y-10">
              <div className="policy-reveal">
                <SubTitle title="2.1 Manual Service (One-Time Build)" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  GrownK will design and deliver a complete website and social media presence (Facebook, Instagram, TikTok). Upon delivery and final payment, full ownership is transferred to the Client. Post-handover, the Client assumes sole and total responsibility for content management, hosting renewals, domain fees, ad spend, and all platform interactions. GrownK bears absolutely no responsibility for results, performance, or outcomes following handover.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="2.2 Custom Service (Project-Based)" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  GrownK will deliver a scoped project as detailed in the agreed Service Proposal. This may include template or custom-designed websites, social media setup, and optional campaign launch services. Any feature, platform, or service not explicitly named in the Service Proposal is considered out-of-scope and will require a separate agreement and additional fees.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="2.3 Total Management (Monthly Subscription)" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  GrownK provides ongoing brand management as a monthly subscription. Subscription cover organic content management only. Paid advertising (Ad Spend) is not included and is the Client's sole financial responsibility, paid directly to the relevant platform. GrownK charges a separate management fee for running paid campaigns where applicable.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="2.4 Targeted Artillery (Add-On Services)" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem] mb-4">
                  The following standalone add-ons may be appended to any core service model:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <BulletPoint>FB & IG Boosting</BulletPoint>
                  <BulletPoint>Website Creation Only</BulletPoint>
                  <BulletPoint>Social Platform Creation & Boosting</BulletPoint>
                  <BulletPoint>SEO Boosting</BulletPoint>
                  <BulletPoint>App Creation</BulletPoint>
                </div>
                <p className="text-[var(--text-muted)] mt-6 italic text-[0.95rem]">
                  All prices listed in website are indicative and all types of Ad Spend paid separately by Client. The confirmed pricing in a signed or acknowledged Service Proposal supersedes all previously quoted or displayed figures.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Payment Terms */}
          <section>
            <SectionTitle number="3" title="PAYMENT TERMS & CONDITIONS" />
            <div className="space-y-8">
              <div className="policy-reveal">
                <SubTitle title="3.1 Currency & Invoicing" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  All fees are quoted and payable in Bangladeshi Taka (BDT) unless explicitly agreed otherwise in writing. GrownK will issue invoices electronically. Invoices are considered accepted unless disputed in writing within 48 hours of receipt.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="3.2 Payment Schedule" />
                <div className="space-y-4">
                  <BulletPoint boldPrefix="Manual Service & Website-Only">50% advance before work commences. 50% upon final delivery, before handover. No handover occurs until full payment is cleared.</BulletPoint>
                  <BulletPoint boldPrefix="Custom Projects">40% upon Service Proposal acceptance. 30% at mid-project milestone review. 30% upon final delivery. Milestones may be adjusted in the Service Proposal.</BulletPoint>
                  <BulletPoint boldPrefix="Total Management Subscriptions">Full monthly fee payable in advance on or before the 1st of each billing cycle. Services will not commence for the billing month until payment is confirmed.</BulletPoint>
                  <BulletPoint boldPrefix="All Add-Ons">100% advance payment required before any work begins, unless an alternative schedule is documented in the Service Proposal.</BulletPoint>
                </div>
              </div>
              <div className="policy-reveal">
                <SubTitle title="3.3 Late Payments" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Any payment not received within seven (7) calendar days of the due date will attract a late fee of 5% of the outstanding balance per week. GrownK reserves the right to immediately pause, suspend, or withhold all active services without prior notice and without liability until all outstanding amounts including late fees are cleared in full. The Agency accepts no responsibility for any business losses, missed opportunities, or damages incurred by the Client during a suspension period arising from non-payment.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="3.4 Non-Refundable Deposits" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  All advance and deposit payments made to GrownK are strictly non-refundable. Once a deposit has been received and work has commenced including planning, strategy, design, or any preparatory activity the deposit cannot be reclaimed under any circumstances, including if the Client decides to cancel or change direction.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="3.5 Ad Spend Responsibility" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Ad Spend is entirely and exclusively the Client's financial responsibility. GrownK does not hold, manage, or take liability for any funds transferred to advertising platforms. Poor results due to insufficient ad budget are not grounds for a refund, dispute, or service renegotiation. The Client acknowledges that advertising outcomes depend on market conditions, audience behaviour, and platform algorithms, which are outside GrownK's control.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="3.6 Price Changes" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  GrownK reserves the right to revise its pricing at any time. Existing Clients with active Service Proposals will receive 30 days' written notice before any price increase takes effect. Engaging a new service after a price revision constitutes acceptance of the updated rates.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Client Obligations */}
          <section>
            <SectionTitle number="4" title="CLIENT OBLIGATIONS" />
            <p className="text-[var(--text-muted)] mb-8 text-[1.1rem] leading-relaxed">
              The quality and timeliness of our work depends directly on the Client fulfilling the following obligations. Failure to do so may delay delivery, affect quality, or result in additional charges for which GrownK bears no liability.
            </p>
            <div className="space-y-4">
              <BulletPoint>Provide all required materials including logos, product photos, brand guidelines, written content, and credentials within five (5) business days of project commencement, or within the timeline specified in the Service Proposal.</BulletPoint>
              <BulletPoint>Provide a single, designated point of contact authorized to give approvals and feedback on behalf of the Client's organization.</BulletPoint>
              <BulletPoint>Review and respond to all proofs, drafts, and milestone submissions within five (5) business days. Delays in Client response will extend the project timeline by the equivalent number of days, with no impact on the Agency's fees or delivery obligations.</BulletPoint>
              <BulletPoint>Ensure all materials provided to GrownK are legally owned by the Client or that the Client holds full rights to use them. The Client indemnifies GrownK against any third-party intellectual property claims arising from Client-supplied materials.</BulletPoint>
              <BulletPoint>Maintain control and access to all social media accounts, hosting platforms, domain registrars, and advertising accounts. GrownK will not be held responsible for access issues caused by the Client's failure to manage their own accounts.</BulletPoint>
              <BulletPoint>Comply with all applicable laws of Bangladesh, including those governing advertising standards, consumer protection, and data privacy, in relation to the business being marketed.</BulletPoint>
              <BulletPoint>Provide truthful and accurate information about their business, products, and services. GrownK is not liable for any consequences arising from false or misleading information supplied by the Client.</BulletPoint>
            </div>
          </section>

          {/* Section 5: Revisions */}
          <section>
            <SectionTitle number="5" title="REVISIONS, SCOPE CHANGES & ADDITIONAL WORK" />
            <div className="space-y-8">
              <div className="policy-reveal">
                <SubTitle title="5.1 Included Revisions" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Each project includes a defined number of revision rounds as specified in the Service Proposal. Where not specified, the default is two (2) rounds of revisions per Deliverable. A revision is defined as a modification that falls within the originally agreed scope. Revisions must be submitted in a single, consolidated communication not issued piecemeal across multiple messages.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="5.2 Scope Changes" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Any request for work that falls outside the agreed scope including adding new features, platforms, pages, service areas, or deliverables constitutes a scope change and requires a new written quote and agreement before work proceeds. GrownK reserves the right to decline scope changes that conflict with the project timeline or resource availability.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="5.3 Revision Charges" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Revisions requested beyond the included allowance will be charged at GrownK's current hourly rate, communicated at the time of the request. Approval of additional revision charges must be confirmed in writing before work proceeds.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="5.4 Design Approval & Final Sign-Off" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Once a Client provides written or digital approval of any Deliverable including via WhatsApp, email, or any messaging platform that Deliverable is considered final and accepted. No further changes to an approved Deliverable will be made without a new scope agreement and applicable fees. GrownK may publish, deploy, or hand over an approved Deliverable immediately upon receiving sign-off.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Intellectual Property */}
          <section>
            <SectionTitle number="6" title="INTELLECTUAL PROPERTY & OWNERSHIP" />
            <div className="space-y-8">
              <div className="policy-reveal">
                <SubTitle title="6.1 Ownership Before Full Payment" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  All Deliverables, creative works, code, designs, content, and strategies produced by GrownK remain the exclusive intellectual property of GrownK Agency until full and final payment has been received. The Client has no rights to use, publish, distribute, or claim ownership of any Deliverable until payment obligations are fully discharged.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="6.2 Ownership After Full Payment" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Upon receipt of full payment, ownership of the final Deliverables specific to the Client's project transfers to the Client. This transfer applies to final outputs only. It does not apply to GrownK's underlying tools, templates, frameworks, methodologies, processes, or any component that forms part of the Agency's reusable intellectual property.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="6.3 Portfolio Rights" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  GrownK retains the irrevocable right to showcase any Deliverable produced for the Client in its portfolio, case studies, social media, website, presentations, or any other promotional material unless the Client has submitted a written confidentiality request at the time of signing, which GrownK has explicitly acknowledged in writing.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="6.4 Third-Party Assets" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                   Where third-party assets (stock photography, licensed fonts, plugins, or software) are incorporated into Deliverables, the relevant license terms of those assets apply. GrownK will inform the Client of any such assets. The Client is responsible for acquiring or continuing any necessary licenses post-handover where applicable.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Results and Performance */}
          <section>
            <SectionTitle number="7" title="RESULTS, PERFORMANCE & WARRANTIES" />
            <p className="text-[var(--text-muted)] mb-8 text-[1.1rem] leading-relaxed">
              Digital marketing results depend on market conditions, audience behaviour, competitor activity, and platform algorithms, all of which are outside GrownK's control.
            </p>
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                GrownK does not guarantee specific outcomes including, but not limited to: follower counts, engagement rates, reach figures, lead volumes, sales conversions, search engine rankings, return on ad spend (ROAS), or any other measurable metric. All projections, estimates, and case study results shared by GrownK are indicative of past performance and are not promises of future results.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                GrownK warrants that all services will be delivered with reasonable professional skill, care, and diligence. Beyond this, no express or implied warranties are made regarding commercial outcomes.
              </p>
              <div className="space-y-4">
                <p className="text-white font-semibold uppercase tracking-wider text-[0.9rem]">The Client acknowledges that:</p>
                <BulletPoint>Organic social media growth is a long-term process and timelines vary significantly based on industry, competition, content quality, and audience behaviour.</BulletPoint>
                <BulletPoint>Paid advertising results are subject to platform algorithms, audience targeting accuracy, ad creative quality, and ad budget sufficiency, all of which involve variables beyond the Agency's absolute control.</BulletPoint>
                <BulletPoint>SEO results typically take 3 to 6 months to materialise and are subject to search engine algorithm updates which are entirely outside GrownK's influence.</BulletPoint>
                <BulletPoint>App performance post launch depends on user adoption, device compatibility, and platform policy changes, for which GrownK is not liable.</BulletPoint>
              </div>
            </div>
          </section>

          {/* Section 8: Cancellation & Refund */}
          <section>
            <SectionTitle number="8" title="CANCELLATION, TERMINATION & REFUNDS" />
            <div className="space-y-10">
              <div className="policy-reveal">
                <SubTitle title="8.1 Cancellation by Client" />
                <p className="text-[var(--text-muted)] mb-4 text-[1.05rem]">
                  The Client may cancel an engagement by providing written notice to GrownK. The following conditions apply upon cancellation:
                </p>
                <div className="space-y-3">
                  <BulletPoint>All advance payments and deposits are non-refundable, regardless of the stage of work at the time of cancellation.</BulletPoint>
                  <BulletPoint>If cancellation occurs mid-project, the Client is liable for all work completed to the point of cancellation, invoiced on a pro-rata basis against the total project value. This invoice is payable within seven (7) days of issue.</BulletPoint>
                  <BulletPoint>For monthly subscriptions, cancellation must be submitted in writing at least fifteen (15) calendar days before the next billing date to avoid being charged for the following month. No partial-month refunds are provided.</BulletPoint>
                  <BulletPoint>Any Deliverables produced up to the point of cancellation remain GrownK's property until all outstanding amounts are settled.</BulletPoint>
                </div>
              </div>
              <div className="policy-reveal">
                <SubTitle title="8.2 Termination by GrownK" />
                <p className="text-[var(--text-muted)] mb-4 text-[1.05rem]">
                  GrownK reserves the right to terminate this Agreement immediately and without liability in any of the following circumstances:
                </p>
                <div className="space-y-3">
                  <BulletPoint>Non-payment or persistent late payment.</BulletPoint>
                  <BulletPoint>The Client's business is found to engage in illegal, unethical, or fraudulent activities.</BulletPoint>
                  <BulletPoint>The Client engages in abusive, threatening, or disrespectful conduct toward any GrownK team member.</BulletPoint>
                  <BulletPoint>The Client provides materially false information that affects the Agency's ability to deliver services.</BulletPoint>
                  <BulletPoint>Circumstances arise that make it impossible for GrownK to fulfil its obligations (Force Majeure).</BulletPoint>
                </div>
                <p className="text-[var(--text-muted)] mt-6 italic text-[0.95rem]">
                  Upon termination by GrownK under this clause, the Client is entitled to receive completed Deliverables for which full payment has been made. No further liability rests with GrownK.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="8.3 Subscription Pause" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  Subscriptions may be paused once per calendar year for a maximum of one (1) month, subject to a written request submitted at least ten (10) days in advance and GrownK's written approval. Pauses do not extend the subscription term; the billing cycle resumes from the original schedule upon reactivation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Confidentiality */}
          <section>
            <SectionTitle number="9" title="CONFIDENTIALITY" />
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                Both parties agree to keep all Confidential Information shared during the engagement strictly private and not disclose it to any third party without the prior written consent of the disclosing party. This obligation survives the termination of this Agreement by two (2) years.
              </p>
              <div className="space-y-3">
                <p className="text-white font-semibold uppercase tracking-wider text-[0.9rem]">Confidential Information does not include information that:</p>
                <BulletPoint>Is or becomes publicly known through no breach of this Agreement.</BulletPoint>
                <BulletPoint>Was already in the receiving party's possession prior to the engagement.</BulletPoint>
                <BulletPoint>Is independently developed by the receiving party without reference to the disclosing party's information.</BulletPoint>
                <BulletPoint>Is required to be disclosed by applicable law or a court of competent jurisdiction.</BulletPoint>
              </div>
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                GrownK may share Client information with trusted subcontractors or team members strictly on a need-to-know basis for the purpose of delivering the agreed services. All such parties are bound by equivalent confidentiality obligations.
              </p>
            </div>
          </section>

          {/* Section 10: Limitation of Liability */}
          <section>
            <SectionTitle number="10" title="LIMITATION OF LIABILITY" />
            <div className="space-y-6">
              <p className="text-white font-bold leading-relaxed text-[1.1rem] border-l-4 border-[var(--accent-gold)] pl-6 py-2 bg-[var(--accent-gold)]/5">
                GrownK's total liability under any circumstance shall not exceed the total fees paid by the Client in the three (3) months immediately preceding the event giving rise to the claim.
              </p>
              <div className="space-y-3 pt-4">
                <p className="text-white font-semibold uppercase tracking-wider text-[0.9rem]">To the maximum extent permitted by applicable law, GrownK shall not be liable for:</p>
                <BulletPoint>Indirect, consequential, incidental, punitive, or special damages of any kind.</BulletPoint>
                <BulletPoint>Loss of profits, loss of revenue, loss of business, loss of data, or loss of goodwill.</BulletPoint>
                <BulletPoint>Any damages arising from the Client's use or misuse of Deliverables post-handover.</BulletPoint>
                <BulletPoint>Any outcome arising from third-party platform changes, algorithm updates, account suspensions, or policy modifications.</BulletPoint>
                <BulletPoint>Any loss arising from the Client's failure to maintain their own accounts, hosting, or domain registrations.</BulletPoint>
                <BulletPoint>Any claim arising from Client-supplied content that infringes third-party rights.</BulletPoint>
                <BulletPoint>Any business outcome positive or negative resulting from advice, strategy, or recommendations provided by GrownK.</BulletPoint>
              </div>
            </div>
          </section>

          {/* Section 11: Indemnification */}
          <section>
            <SectionTitle number="11" title="INDEMNIFICATION" />
            <div className="space-y-4">
              <p className="text-[var(--text-muted)] mb-4 text-[1.05rem]">
                The Client agrees to fully indemnify, defend, and hold harmless GrownK Agency, its founders, directors, employees, contractors, and partners from and against any claims, damages, losses, costs (including legal fees), penalties, or liabilities arising from:
              </p>
              <BulletPoint>Any content, material, information, or instruction provided by the Client to GrownK.</BulletPoint>
              <BulletPoint>The Client's violation of any applicable law or third-party rights.</BulletPoint>
              <BulletPoint>The Client's use, modification, or misuse of any Deliverable after handover.</BulletPoint>
              <BulletPoint>False, misleading, or inaccurate information provided to GrownK during the engagement.</BulletPoint>
              <BulletPoint>Any claim by the Client's own customers, employees, or partners relating to the services marketed or the business operated by the Client.</BulletPoint>
            </div>
          </section>

          {/* Section 12: 3rd Party Platforms */}
          <section>
            <SectionTitle number="12" title="THIRD-PARTY PLATFORMS & TOOLS" />
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                GrownK utilizes third-party platforms including but not limited to Meta (Facebook/Instagram), TikTok, Google, various website builders, hosting services, and design tools in delivering its services. GrownK is not affiliated with, endorsed by, or responsible for the actions, policies, or decisions of any such platform.
              </p>
              <div className="space-y-3">
                <p className="text-white font-semibold uppercase tracking-wider text-[0.9rem]">GrownK bears no liability for:</p>
                <BulletPoint>Account suspensions, bans, or restrictions imposed by any third-party platform on the Client's accounts.</BulletPoint>
                <BulletPoint>Changes to platform algorithms, advertising policies, or feature availability that affect campaign performance.</BulletPoint>
                <BulletPoint>Downtime, data loss, or service interruption caused by any third-party hosting or platform provider.</BulletPoint>
                <BulletPoint>Ad account or payment method rejections by advertising platforms.</BulletPoint>
              </div>
            </div>
          </section>

          {/* Section 13: Communication */}
          <section>
            <SectionTitle number="13" title="COMMUNICATION & APPROVALS" />
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                GrownK's primary communication channels are WhatsApp, email (agency.grownk@gmail.com), and scheduled video/phone calls. The Client acknowledges that:
              </p>
              <div className="space-y-4">
                <BulletPoint>Written approvals provided via WhatsApp, email, or any messaging platform carry the same legal weight as a handwritten signature for the purposes of this Agreement.</BulletPoint>
                <BulletPoint>GrownK's standard response time is within two (2) business days. Urgent matters must be marked as such and directed to the Client's dedicated account contact.</BulletPoint>
                <BulletPoint>Requests, approvals, and scope changes communicated verbally must be followed up in writing within 24 hours to be considered binding on GrownK.</BulletPoint>
                <BulletPoint>GrownK will not act on instructions from individuals not identified as the Client's designated point of contact.</BulletPoint>
              </div>
            </div>
          </section>

          {/* Section 14: Force Majeure */}
          <section>
            <SectionTitle number="14" title="FORCE MAJEURE" />
            <div className="space-y-6">
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                Neither party shall be held liable for any failure or delay in performing their obligations under this Agreement if such failure or delay is caused by a Force Majeure event, including but not limited to natural disasters, floods, fires, pandemics, acts of government, nationwide internet disruptions, civil unrest, or any other event genuinely beyond the party's reasonable control.
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                In the event of a Force Majeure, the affected party shall notify the other in writing within five (5) business days. GrownK will make reasonable efforts to resume services as quickly as practically possible. No refunds or compensation are due for service interruptions caused by Force Majeure events.
              </p>
            </div>
          </section>

          {/* Section 15: Dispute Resolution */}
          <section>
            <SectionTitle number="15" title="DISPUTE RESOLUTION" />
            <div className="space-y-8">
              <div className="policy-reveal">
                <SubTitle title="15.1 Good Faith Resolution" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  In the event of any dispute arising out of or in connection with this Agreement, both parties agree to first attempt to resolve the matter through good-faith negotiation within fifteen (15) calendar days of the dispute being raised in writing.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="15.2 Mediation" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  If direct negotiation fails, both parties agree to refer the dispute to a mutually agreed neutral mediator before escalating to legal proceedings.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="15.3 Governing Law & Jurisdiction" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  This Agreement is governed by and shall be construed in accordance with the laws of the <strong className="text-white italic">People's Republic of Bangladesh.</strong> Both parties irrevocably submit to the exclusive jurisdiction of the courts of Bangladesh for the resolution of any dispute that cannot be resolved through negotiation or mediation.
                </p>
              </div>
              <div className="policy-reveal">
                <SubTitle title="15.4 No Class Actions" />
                <p className="text-[var(--text-muted)] leading-relaxed text-[1.05rem]">
                  All disputes shall be resolved on an individual basis. The Client waives any right to bring or participate in any class action, collective claim, or representative proceeding against GrownK.
                </p>
              </div>
            </div>
          </section>

          {/* Section 16: General Provisions */}
          <section>
            <SectionTitle number="16" title="GENERAL PROVISIONS" />
            <div className="space-y-4">
              <BulletPoint boldPrefix="Entire Agreement">This Agreement, together with the Service Proposal, constitutes the entire agreement between the parties and supersedes all prior discussions, representations, or agreements whether oral or written relating to the subject matter herein.</BulletPoint>
              <BulletPoint boldPrefix="Amendments">No amendment, modification, or variation of this Agreement shall be effective unless agreed in writing and signed (or digitally acknowledged) by authorised representatives of both parties.</BulletPoint>
              <BulletPoint boldPrefix="Severability">If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.</BulletPoint>
              <BulletPoint boldPrefix="Waiver">Failure by GrownK to enforce any right under this Agreement at any time shall not constitute a waiver of that right, and GrownK may enforce such right at any subsequent time.</BulletPoint>
              <BulletPoint boldPrefix="Assignment">The Client may not transfer or assign any rights or obligations under this Agreement to any third party without GrownK's prior written consent. GrownK may assign this Agreement, in whole or in part, to any affiliate, successor, or acquirer.</BulletPoint>
              <BulletPoint boldPrefix="Non-Solicitation">During the engagement and for twelve (12) months thereafter, the Client shall not directly solicit, employ, or engage any GrownK employee, contractor, or team member without GrownK's prior written consent.</BulletPoint>
              <BulletPoint boldPrefix="No Agency">Nothing in this Agreement creates a partnership, joint venture, employment relationship, or agency between the parties. GrownK operates as an independent contractor.</BulletPoint>
            </div>
          </section>

          {/* Acceptance of Terms & signature blocks */}
          <section className="mt-32 pt-20 border-t border-white/5 policy-reveal">
            <h2 className="font-['Bebas_Neue'] text-[2.5rem] md:text-[3.5rem] text-center text-white mb-8 tracking-[2px]">ACCEPTANCE OF TERMS</h2>
            <p className="text-center text-[var(--text-muted)] text-[1.1rem] leading-relaxed mb-20 max-w-[800px] mx-auto italic">
              "By engaging GrownK's services whether through payment, written confirmation, WhatsApp acknowledgement, email, or any other form of communication the Client confirms that they have read, understood, and unconditionally agree to all Terms and Conditions set out in this Agreement."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
               {/* Agency Side */}
               <div className="space-y-8 bg-white/[0.02] p-10 rounded-3xl border border-white/5">
                  <h4 className="font-['Bebas_Neue'] text-[1.2rem] text-[var(--accent-gold)] tracking-[2px] uppercase opacity-70">For: GrownK Agency</h4>
                  <div className="space-y-6">
                    <div className="border-b-2 border-[var(--accent-gold)]/30 pb-4">
                       <p className="font-['Bebas_Neue'] text-[2rem] text-white tracking-[2px]">Razu Paul</p>
                       <p className="text-[0.7rem] uppercase tracking-[3px] text-[var(--text-dim)] font-bold">Authorised Signature</p>
                       <p className="text-[0.8rem] text-[var(--text-muted)] mt-1 tracking-[1px]">Founder & CEO</p>
                    </div>
                    <div>
                       <p className="text-[0.7rem] uppercase tracking-[3px] text-[var(--text-dim)] mb-1 font-bold">Date:</p>
                       <p className="text-white font-medium">30 March 2026</p>
                    </div>
                  </div>
               </div>

               {/* Client Side */}
               <div className="space-y-8 bg-white/[0.02] p-10 rounded-3xl border border-white/5">
                  <h4 className="font-['Bebas_Neue'] text-[1.2rem] text-[var(--accent-gold)] tracking-[2px] uppercase opacity-70">For: Client</h4>
                  <div className="space-y-6">
                    <div className="border-b-2 border-white/10 pb-4 min-h-[60px] flex items-end">
                       <p className="text-[0.7rem] uppercase tracking-[3px] text-[var(--text-dim)] font-bold">Authorised Signature</p>
                    </div>
                    <div className="border-b-2 border-white/10 pb-4">
                       <p className="text-[0.7rem] uppercase tracking-[3px] text-[var(--text-dim)] mb-1 font-bold">Name / Title:</p>
                       <div className="h-6"></div>
                    </div>
                    <div>
                       <p className="text-[0.7rem] uppercase tracking-[3px] text-[var(--text-dim)] mb-1 font-bold">Date:</p>
                       <div className="h-6"></div>
                    </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Footer Contact */}
          <div className="mt-32 pt-16 border-t border-white/5 text-center policy-reveal">
             <div className="flex flex-col items-center gap-4 text-[0.85rem] text-[var(--text-dim)] uppercase tracking-[3px] mb-8">
               <span>GrownK Agency</span>
               <span className="opacity-30">•</span>
               <span>agency.grownk@gmail.com</span>
               <span className="opacity-30">•</span>
               <span>www.grownk.com</span>
               <span className="opacity-30">•</span>
               <span>Bangladesh</span>
             </div>
             <p className="text-[0.7rem] text-[var(--text-dim)]/50 uppercase tracking-[4px]">
                © 2026 GrownK Agency. All Rights Reserved. Document Version 1.0
             </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TermsConditions;
