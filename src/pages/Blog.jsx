import React from 'react';
import SEO from '../components/SEO';

const Blog = () => {
  const posts = [
    {
      title: "Why Your Brand Needs a Digital Ecosystem, Not Just a Website",
      date: "March 28, 2026",
      category: "Strategy",
      excerpt: "A website alone isn't enough. Discover how a unified digital ecosystem accelerates growth and establishes market authority.",
      icon: "ph-fill ph-globe"
    },
    {
      title: "The 3-Phase Growth Architecture We Use for Every Client",
      date: "March 15, 2026",
      category: "Methodology",
      excerpt: "From strategic inquiry to deployment and scale — a look inside the systematic framework behind our results.",
      icon: "ph-fill ph-git-merge"
    },
    {
      title: "Meta Ads in 2026: How to Achieve 3x ROAS on a Limited Budget",
      date: "February 28, 2026",
      category: "Paid Media",
      excerpt: "Practical strategies for maximizing your return on ad spend with Meta's evolving advertising platform.",
      icon: "ph-fill ph-megaphone"
    },
    {
      title: "SEO Is Not Dead: Why Organic Traffic Still Wins Long-Term",
      date: "February 10, 2026",
      category: "SEO",
      excerpt: "While paid channels get attention, organic search remains the most sustainable acquisition channel. Here's the data.",
      icon: "ph-fill ph-trend-up"
    }
  ];

  return (
    <div className="bg-[#0b0c10] text-[var(--text-main)] min-h-screen pt-32 pb-24">
      <SEO 
        title="The Blog - Insights & Strategy" 
        description="Strategic insights, tactical breakdowns, and growth narratives from the GrownK team." 
        path="/blog" 
      />
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="mb-16">
          <p className="text-[0.75rem] uppercase tracking-[4px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Insights</p>
          <h1 className="font-['Bebas_Neue'] text-[clamp(3rem,8vw,5.5rem)] leading-none uppercase tracking-[1px] mb-6">
            The <span className="text-[var(--accent-gold)]">Blog</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.3rem)] text-[var(--text-muted)] leading-[1.7] max-w-[600px]">
            Strategic insights, tactical breakdowns, and growth narratives from the GrownK team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group p-8 md:p-10 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(245,166,35,0.25)] transition-all duration-500 flex flex-col gap-6 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.7rem] uppercase tracking-[2px] font-bold text-[var(--accent-gold)]">{post.category}</span>
                <span className="text-[0.75rem] text-[var(--text-dim)]">{post.date}</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[rgba(245,166,35,0.08)] text-[var(--accent-gold)] flex items-center justify-center text-2xl border border-[rgba(245,166,35,0.1)]">
                <i className={post.icon}></i>
              </div>
              <h2 className="font-['Bebas_Neue'] text-[1.8rem] tracking-[0.5px] leading-tight group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-[1rem] text-[var(--text-muted)] leading-[1.7]">{post.excerpt}</p>
              <span className="mt-auto text-[0.8rem] uppercase tracking-[2px] font-bold text-[var(--accent-gold)] group-hover:underline flex items-center gap-2">
                Read More <i className="ph-bold ph-arrow-right text-[0.7rem]"></i>
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;