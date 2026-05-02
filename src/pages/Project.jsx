import React from 'react';

const Project = () => {
  const projects = [
    { title: "E-Com Narrative", category: "Full Management", desc: "65% increase in media visibility for a saturated market brand.", icon: "ph-fill ph-shopping-cart" },
    { title: "Tech Series A", category: "Manual Service", desc: "14-day market launch for a consultancy requiring immediate credibility.", icon: "ph-fill ph-cpu" },
    { title: "Fashion ROAS", category: "Targeted Ads", desc: "3x ROAS on Meta ads within 30 days for a struggling retailer.", icon: "ph-fill ph-paint-brush" },
    { title: "Local Organic", category: "SEO Boosting", desc: "120% organic traffic growth securing #1 local rankings.", icon: "ph-fill ph-trend-up" },
    { title: "Global App", category: "App Build", desc: "High-performance e-commerce platform built for scale.", icon: "ph-fill ph-device-mobile" },
    { title: "Brand Identity", category: "Graphic Support", desc: "Premium visual assets and copy that command trust.", icon: "ph-fill ph-swatches" }
  ];

  return (
    <div className="bg-[var(--bg-dark)] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="max-w-[900px] mb-20 text-center mx-auto">
          <p className="text-[0.8rem] uppercase tracking-[4px] text-[var(--accent-gold)] font-bold mb-6">Portfolio of Legacies</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,6rem)] leading-none uppercase tracking-[1px] mb-8">
            The <span className="text-[var(--accent-gold)]">Ecosystems</span> we've built.
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.4rem)] text-[var(--text-muted)] leading-[1.7]">
            Every project at GrownK is a strategic conquest. Our portfolio spans from early-stage ventures to market leaders across diverse digital terrains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group p-10 rounded-40 border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(245,166,35,0.3)] transition-all duration-500 flex flex-col gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent-gold)] opacity-5 blur-3xl group-hover:scale-150 transition-all duration-700"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-[rgba(245,166,35,0.08)] text-[var(--accent-gold)] flex items-center justify-center text-3xl border border-[rgba(245,166,35,0.1)] group-hover:scale-110 transition-transform duration-500">
                <i className={project.icon}></i>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="text-[0.7rem] uppercase tracking-[2px] font-bold text-[var(--text-dim)]">
                   {project.category}
                </div>
                <h3 className="font-['Bebas_Neue'] text-[2.2rem] tracking-[1px] group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[1.05rem] text-[var(--text-muted)] leading-relaxed">
                  {project.desc}
                </p>
              </div>
              
              <div className="mt-4 pt-6 border-t border-[rgba(255,255,255,0.05)]">
                <a href="#" className="font-['Bebas_Neue'] text-[1.1rem] tracking-[1.5px] uppercase text-[var(--accent-gold)] hover:underline flex items-center gap-2">
                  View Case Study <i className="ph-bold ph-arrow-right text-[0.9rem]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-16 rounded-40 border border-[rgba(245,166,35,0.2)] bg-[rgba(10,10,20,0.4)] backdrop-blur-3xl text-center">
            <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,5vw,4rem)] tracking-[1px] uppercase mb-6 leading-none">Your brand could be our next <span className="text-[var(--accent-gold)]">masterpiece</span>.</h2>
            <p className="text-[1.1rem] text-[var(--text-muted)] max-w-[700px] mx-auto mb-10 leading-relaxed font-medium">
              We don't take on every brand. We partner with legacy builders. If your narrative is ready to dominate, start your strategy inquiry today.
            </p>
            <a href="https://wa.me/8801611510192" target="_blank" className="font-['Bebas_Neue'] text-[1.4rem] tracking-[2px] uppercase bg-[var(--accent-gold)] text-black px-12 py-5 rounded-2xl hover:scale-105 hover:shadow-[0_0_50px_rgba(245,166,35,0.3)] transition-all inline-block">
               Start Partnership Inquiry
            </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
