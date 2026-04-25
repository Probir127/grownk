import React from 'react';
import SEO from '../components/SEO';

const Career = () => {
  const openRoles = []; // Empty array = "no open roles" placeholder shows

  const values = [
    {
      title: "Strategic Clarity",
      desc: "We cut through noise. Every decision has a data-backed rationale and every action serves the larger narrative.",
      icon: "ph-fill ph-crosshair"
    },
    {
      title: "Ownership Mentality",
      desc: "We treat every partner's brand like our own. There's no clock-watching — only result-watching.",
      icon: "ph-fill ph-crown"
    },
    {
      title: "Relentless Growth",
      desc: "We invest in our people as aggressively as we invest in our clients. Learning never stops here.",
      icon: "ph-fill ph-trend-up"
    },
    {
      title: "Creative Precision",
      desc: "Creativity without strategy is art. Creativity with strategy is architecture. We build the latter.",
      icon: "ph-fill ph-paint-brush"
    }
  ];

  return (
    <div className="bg-[#0b0c10] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <SEO 
        title="Careers - Join the Team" 
        description="Join the GrownK team. We're building the future of digital growth architecture." 
        path="/career" 
      />
      <div className="max-w-[1200px] mx-auto px-[5%]">
        {/* Header */}
        <div className="mb-20">
          <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Careers</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5.5rem)] leading-none uppercase tracking-[1px] mb-6">
            Join the <span className="text-[var(--accent-gold)]">Team</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[650px]">
            We're building the future of digital growth architecture. If you're driven by results and obsessed with craft, you might belong here.
          </p>
        </div>

        {/* Culture & Values */}
        <div className="mb-24">
          <h2 className="font-['Bebas_Neue'] text-[2.5rem] tracking-[1px] uppercase mb-10">Our <span className="text-[var(--accent-gold)]">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(245,166,35,0.08)] text-[var(--accent-gold)] flex items-center justify-center text-2xl border border-[rgba(245,166,35,0.1)] flex-shrink-0">
                  <i className={value.icon}></i>
                </div>
                <div>
                  <h3 className="font-['Bebas_Neue'] text-[1.6rem] tracking-[0.5px] mb-2">{value.title}</h3>
                  <p className="text-[1rem] text-[var(--text-muted)] leading-[1.7]">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Roles */}
        <div className="mb-24">
          <h2 className="font-['Bebas_Neue'] text-[2.5rem] tracking-[1px] uppercase mb-10">Open <span className="text-[var(--accent-gold)]">Roles</span></h2>
          
          {openRoles.length > 0 ? (
            <div className="flex flex-col gap-6">
              {openRoles.map((role, i) => (
                <div key={i} className="group p-8 md:p-10 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(245,166,35,0.25)] transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 text-[0.75rem] uppercase tracking-[2px] font-semibold">
                      <span className="text-[var(--accent-gold)]">{role.type}</span>
                      <span className="text-[rgba(255,255,255,0.15)]">|</span>
                      <span className="text-[var(--text-dim)]">{role.location}</span>
                    </div>
                    <h3 className="font-['Bebas_Neue'] text-[2rem] tracking-[0.5px] group-hover:text-[var(--accent-gold)] transition-colors">{role.title}</h3>
                    <p className="text-[1rem] text-[var(--text-muted)] max-w-[500px]">{role.desc}</p>
                  </div>
                  <a
                    href={`mailto:career.grownk@gmail.com?subject=Application: ${role.title}`}
                    className="inline-flex items-center justify-center gap-2 py-4 px-8 text-[1rem] tracking-[1px] font-['Bebas_Neue'] rounded-xl bg-transparent text-[var(--accent-gold)] border border-[rgba(245,166,35,0.3)] hover:bg-[var(--accent-gold)] hover:text-black hover:border-[var(--accent-gold)] transition-all duration-300 text-center flex-shrink-0"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          ) : (
            /* No open roles placeholder */
            <div className="p-12 md:p-16 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] text-center">
              <i className="ph-fill ph-briefcase text-[3rem] text-[var(--text-dim)] mb-6 block"></i>
              <h3 className="font-['Bebas_Neue'] text-[2rem] tracking-[1px] mb-4">No Open Roles Right Now</h3>
              <p className="text-[1.1rem] text-[var(--text-muted)] max-w-[500px] mx-auto mb-8 leading-[1.7]">
                We don't have any open positions at the moment, but we're always on the lookout for exceptional talent. Send us your portfolio and let's start a conversation.
              </p>
              <a
                href="mailto:career.grownk@gmail.com?subject=Open Application"
                className="inline-flex items-center justify-center gap-3 py-4 px-10 text-[1.1rem] tracking-[1px] font-['Bebas_Neue'] rounded-xl bg-[var(--accent-gold)] text-black border border-[var(--accent-gold)] hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95 shadow-lg shadow-[rgba(245,166,35,0.1)]"
              >
                <i className="ph-bold ph-envelope-simple"></i>
                Send Open Application
              </a>
            </div>
          )}
        </div>

        {/* Why GrownK */}
        <div className="p-12 md:p-16 rounded-2xl border border-[rgba(245,166,35,0.15)] bg-[rgba(245,166,35,0.02)]">
          <h2 className="font-['Bebas_Neue'] text-[2.5rem] tracking-[1px] uppercase mb-6">Why <span className="text-[var(--accent-gold)]">GrownK</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[1rem] text-[var(--text-muted)] leading-[1.7]">
            <div>
              <h4 className="font-['Bebas_Neue'] text-[1.4rem] text-[var(--text-main)] tracking-[0.5px] mb-2">Remote-First</h4>
              <p>Work from anywhere. We're a distributed team that values output over office hours.</p>
            </div>
            <div>
              <h4 className="font-['Bebas_Neue'] text-[1.4rem] text-[var(--text-main)] tracking-[0.5px] mb-2">Growth Budget</h4>
              <p>Annual learning budget for courses, conferences, and tools to sharpen your edge.</p>
            </div>
            <div>
              <h4 className="font-['Bebas_Neue'] text-[1.4rem] text-[var(--text-main)] tracking-[0.5px] mb-2">Real Impact</h4>
              <p>Every project ships. You'll see your work transform real businesses in real time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;