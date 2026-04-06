import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take for my website to be ready?",
      answer: "A typical website take 1 week - 1 month to get the final results depending on complexity and features."
    },
    {
      question: "Do you provide after-sales support?",
      answer: "Yes, we'll fix any bug in the website for the future service with add on charges. We ensure your ecosystem remains stable."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all of our digital ecosystems are fully responsive and optimized for mobile devices, ensuring a premium experience on every screen."
    },
    {
      question: "Do you handle content posting for all services?",
      answer: "It is depending on services you are taking. Content posting is only available in our Total Management service."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-0 relative bg-[var(--bg-dark)] border-t border-[rgba(255,255,255,0.03)]" id="faq">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="text-center mb-16 reveal fade-up">
          <p className="text-[0.75rem] uppercase tracking-[3px] text-[var(--accent-gold)] mb-6 font-semibold font-['Inter']">Clarification</p>
          <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] text-[var(--text-main)] uppercase leading-none tracking-[1px] mb-4">
            Common <span className="text-[var(--accent-gold)]">Questions</span>
          </h2>
          <p className="max-w-[650px] mx-auto text-[var(--text-muted)] text-[clamp(1rem,2vw,1.15rem)] leading-[1.7]">
            Clarity on how we build, deploy, and scale your custom ecosystem. 
            Everything you need to know before we begin.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`group rounded-2xl border transition-all duration-350 overflow-hidden ${activeIndex === index ? 'bg-[rgba(255,255,255,0.04)] border-[rgba(245,166,35,0.3)]' : 'bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.15)]'}`}
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-['Bebas_Neue'] text-[1.4rem] tracking-[0.5px] text-[var(--text-main)] transition-colors duration-300 group-hover:text-[var(--accent-gold)]">
                  {faq.question}
                </span>
                <i className={`ph-bold ph-caret-down text-xl transition-transform duration-500 text-[var(--accent-gold)] ${activeIndex === index ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out px-6 overflow-hidden ${activeIndex === index ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[1.05rem] text-[var(--text-muted)] leading-[1.7] border-t border-[rgba(255,255,255,0.05)] pt-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;