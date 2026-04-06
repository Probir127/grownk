import React, { useEffect, useRef } from 'react';

const GrowthChart = () => {
  const chartRef = useRef(null);
  const lineRef = useRef(null);

  const xLabels = ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  const yLabels = [100, 75, 50, 25, 0];

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      
      const ctx = gsap.context(() => {
        gsap.from(lineRef.current, {
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
          duration: 2.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 80%",
          }
        });
        
        gsap.fromTo('.stat-box', 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 75%",
            }
          }
        );
      }, chartRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section className="py-24 px-0 relative bg-[#0b0c10]" id="growth">
      <div className="max-w-[1100px] mx-auto px-4 md:px-8">
        
        {/* Main Chart Container */}
        <div ref={chartRef} className="p-8 md:p-12 rounded-[24px] bg-[#111318] border border-[rgba(255,255,255,0.05)] shadow-2xl">
          
          {/* Header & Legend */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <h3 className="font-['Bebas_Neue'] text-[2rem] md:text-[2.8rem] tracking-[1px] leading-tight text-white whitespace-nowrap">
              6-MONTH GROWTH TRAJECTORY
            </h3>
            
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#F5A623] rounded-sm flex-shrink-0 shadow-[0_0_8px_rgba(245,166,35,0.6)]"></div>
                  <span className="text-[0.8rem] text-gray-300 font-medium tracking-wide">Posts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#00F3FF] rounded-sm flex-shrink-0 shadow-[0_0_8px_rgba(0,243,255,0.6)]"></div>
                  <span className="text-[0.8rem] text-gray-300 font-medium tracking-wide">Followers (K)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#F5A623] rounded-sm flex-shrink-0 shadow-[0_0_8px_rgba(0,212,170,0.6)]"></div>
                  <span className="text-[0.8rem] text-gray-300 font-medium tracking-wide">Engagement (K)</span>
                </div>
              </div>
          </div>

          {/* Graph Section */}
          <div className="flex w-full mb-12">
            
            {/* Y Axis */}
            <div className="w-12 flex flex-col justify-between items-start text-[0.8rem] text-[#666] pr-2 pb-[35px] font-medium">
              {yLabels.map((val, i) => (
                <span key={i} className="leading-none">{val}</span>
              ))}
            </div>

            {/* Plot Area */}
            <div className="flex-1 flex flex-col">
              <div className="relative w-full h-[280px] md:h-[320px] border-b border-l border-[rgba(255,255,255,0.08)]">
                
                <svg 
                  className="absolute inset-0 w-full h-full overflow-visible" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00F3FF"/>
                      <stop offset="50%" stopColor="#F5A623"/>
                      <stop offset="100%" stopColor="#F5A623"/>
                    </linearGradient>
                    <linearGradient id="chartAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5A623" stopOpacity="0.25"/>
                      <stop offset="100%" stopColor="#F5A623" stopOpacity="0"/>
                    </linearGradient>
                    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Area fill under curve */}
                  <path
                    className="fill-[url(#chartAreaGrad)]"
                    d="M 5 85 Q 45 70 95 0 L 95 100 L 5 100 Z"
                  />

                  {/* The actual curve data */}
                  <path
                    ref={lineRef}
                    className="fill-none stroke-[url(#chartLineGrad)] stroke-[1.5] md:stroke-[1.2]"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M 5 85 Q 45 70 95 0" 
                    filter="url(#neonGlow)"
                  />
                </svg>

                {/* Floating Number & Dot at the tip of the graph */}
                <div className="absolute top-0 right-[5%] -translate-y-[40%] translate-x-[50%] flex flex-col items-center z-20">
                  <div className="bg-[#111318] border border-[#F5A623]/40 text-[#F5A623] px-3 py-1 rounded-[8px] text-[0.8rem] md:text-[0.9rem] font-['Bebas_Neue'] tracking-[1px] shadow-[0_0_15px_rgba(245,166,35,0.25)] backdrop-blur-sm mb-1.5 animate-pulse">
                    816K
                  </div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F5A623] shadow-[0_0_12px_rgba(245,166,35,0.9)] z-10"></div>
                </div>

              </div>

              {/* X Axis */}
              <div className="flex justify-between w-full mt-6 text-[0.75rem] font-bold tracking-[1.5px] text-[#666]">
                {xLabels.map((label, i) => (
                  <div key={i} className="w-10 text-center flex justify-center">
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="stat-box bg-white/[0.02] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.06)] p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#F5A623]/40 hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(245,166,35,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="font-['Bebas_Neue'] text-[3.5rem] md:text-[4.2rem] leading-none text-white tracking-[1px] z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                816<span className="text-[2.5rem] md:text-[3rem] text-[#F5A623]">K</span>
              </div>
              <span className="text-[0.75rem] uppercase tracking-[3px] font-semibold text-gray-400 mt-3 z-10 group-hover:text-gray-200 transition-colors duration-300">
                Total Followers
              </span>
            </div>

            <div className="stat-box bg-white/[0.02] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.06)] p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#00F3FF]/40 hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,243,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="font-['Bebas_Neue'] text-[3.5rem] md:text-[4.2rem] leading-none text-white tracking-[1px] z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                24
              </div>
              <span className="text-[0.75rem] uppercase tracking-[3px] font-semibold text-gray-400 mt-3 z-10 group-hover:text-gray-200 transition-colors duration-300">
                Posts / Month
              </span>
            </div>

            <div className="stat-box bg-white/[0.02] backdrop-blur-md rounded-2xl border border-[rgba(255,255,255,0.06)] p-8 flex flex-col items-center justify-center relative overflow-hidden group hover:border-[#F5A623]/40 hover:-translate-y-1 hover:bg-white/[0.04] transition-all duration-300 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,212,170,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="font-['Bebas_Neue'] text-[3.5rem] md:text-[4.2rem] leading-none text-white tracking-[1px] z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                11.7<span className="text-[2.5rem] md:text-[3rem] text-[#F5A623]">K</span>
              </div>
              <span className="text-[0.75rem] uppercase tracking-[3px] font-semibold text-gray-400 mt-3 z-10 group-hover:text-gray-200 transition-colors duration-300">
                Avg Engagement
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowthChart;
