import React from 'react';
import SEO from '../components/SEO';

const AIStudies = () => {
  const studies = [
    {
      title: "How AI-Driven Content Scheduling Increased Our Client's Engagement by 340%",
      category: "Content Intelligence",
      excerpt: "Using NLP-based sentiment analysis and optimal posting algorithms to transform a stagnant social presence into a growth engine.",
      icon: "ph-fill ph-brain"
    },
    {
      title: "Predictive Analytics for E-Commerce: Forecasting Demand Before It Happens",
      category: "Predictive Modeling",
      excerpt: "A case study on how machine learning models helped an e-commerce brand reduce inventory waste by 28% while increasing sales.",
      icon: "ph-fill ph-chart-line-up"
    },
    {
      title: "Conversational AI for Lead Qualification: Automating the Top of Funnel",
      category: "Automation",
      excerpt: "How we deployed chatbot workflows to qualify 500+ leads per month without adding headcount to our client's sales team.",
      icon: "ph-fill ph-robot"
    }
  ];

  return (
    <div className="bg-[#0b0c10] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <SEO 
        title="AI Studies - Research Lab" 
        description="Exploring how artificial intelligence and data science amplify our growth architecture for real-world results." 
        path="/ai-studies" 
      />
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="mb-16">
          <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Research Lab</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5.5rem)] leading-none uppercase tracking-[1px] mb-6">
            AI <span className="text-[var(--accent-gold)]">Studies</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[600px]">
            Exploring how artificial intelligence and data science amplify our growth architecture for real-world results.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {studies.map((study, i) => (
            <article
              key={i}
              className="group p-8 md:p-12 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(245,166,35,0.25)] transition-all duration-500 flex flex-col md:flex-row gap-8 items-start cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-[rgba(245,166,35,0.08)] text-[var(--accent-gold)] flex items-center justify-center text-3xl border border-[rgba(245,166,35,0.1)] flex-shrink-0">
                <i className={study.icon}></i>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[0.7rem] uppercase tracking-[2px] font-bold text-[var(--accent-gold)]">{study.category}</span>
                <h2 className="font-['Bebas_Neue'] text-[clamp(1.5rem,3vw,2rem)] tracking-[0.5px] leading-tight group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                  {study.title}
                </h2>
                <p className="text-[1.05rem] text-[var(--text-muted)] leading-[1.7] max-w-[700px]">{study.excerpt}</p>
                <span className="mt-2 text-[0.8rem] uppercase tracking-[2px] font-bold text-[var(--accent-gold)] group-hover:underline flex items-center gap-2">
                  Read Study <i className="ph-bold ph-arrow-right text-[0.7rem]"></i>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIStudies;