import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    let gsap;
    let ScrollTrigger;
    
    // Safely attempt to pull GSAP from window if it was loaded via CDN in legacy
    if (window.gsap && window.ScrollTrigger) {
      gsap = window.gsap;
      ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl.to('.hero-title .mask-text', {
          y: '0%',
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out'
      })
      .to('.gsap-fade-up', {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out'
      }, "-=0.8");

      function runGrowthSequence() {
          const tl = gsap.timeline({
              onComplete: () => {
                  gsap.to(['.mockup-card', '.mockup-badge', '.person-node'], {
                      opacity: 0, scale: 0.9, y: 20, duration: 0.6, ease: 'power2.in',
                      stagger: 0.05,
                      onComplete: () => {
                          gsap.set('.ig-post.delay-pop-1, .ig-post.delay-pop-2, .ig-post.delay-pop-3', { opacity: 0, scale: 0.8 });
                          gsap.set('.ui-layer', { opacity: 0, scale: 1.05 });
                          gsap.set('.mockup-badge', { opacity: 0, y: 20, scale: 0.8 });
                          document.querySelectorAll('.dash-count[data-val]').forEach(c => {
                              const val = c.getAttribute('data-val');
                              if (val.includes('.')) c.innerHTML = (parseFloat(val) * 0.25).toFixed(1);
                              else c.innerHTML = Math.round(parseFloat(val) * 0.25);
                          });
                          setTimeout(runGrowthSequence, 800);
                      }
                  });
              }
          });

          tl.fromTo('.mockup-web',
              { y: 60, opacity: 0, rotateX: -10 },
              { y: 0, opacity: 1, rotateX: 0, duration: 0.9, ease: 'power3.out' }
          )
          .to('.ui-layer', { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
          .fromTo('.mockup-ig',
              { x: -60, opacity: 0, rotateY: 25 },
              { x: 0, opacity: 1, rotateY: 15, duration: 0.8, ease: 'back.out(1.4)' },
              '-=0.2'
          )
          .to('.ig-post.delay-pop-1', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.1')
          .to('.ig-post.delay-pop-2', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.15')
          .to('.ig-post.delay-pop-3', { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(2)' }, '-=0.15')
          .fromTo('.mockup-fb',
              { x: 60, opacity: 0, rotateY: -25 },
              { x: 0, opacity: 1, rotateY: -15, duration: 0.8, ease: 'back.out(1.4)' },
              '-=0.4'
          )
          .fromTo('.mockup-badge',
              { y: 20, opacity: 0, scale: 0.8 },
              { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.5)' },
              '-=0.3'
          )
          .fromTo('.person-node',
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(2)' },
              '-=0.3'
          );

          document.querySelectorAll('.dash-count[data-val]').forEach((counter, i) => {
              const targetStr = counter.getAttribute('data-val');
              const targetVal = parseFloat(targetStr);
              const isFloat = targetStr.includes('.');
              gsap.to(counter, {
                  innerHTML: targetVal,
                  duration: 3,
                  ease: 'power2.out',
                  snap: { innerHTML: isFloat ? 0.1 : 1 },
                  delay: 0.8 + i * 0.2,
                  onUpdate: function() {
                      if (isFloat) counter.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
                  }
              });
          });
      }
      
      const timeoutId = setTimeout(runGrowthSequence, 500);

      gsap.to('.hero', {
          opacity: 0,
          scale: 0.95,
          ease: 'none',
          scrollTrigger: {
              trigger: '.hero',
              start: 'bottom bottom',
              end: 'bottom 30%',
              scrub: true
          }
      });
      
      return () => {
        clearTimeout(timeoutId);
        heroTl.kill();
      };
    }
  }, []);

  return (
    <section className="hero min-h-screen grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-center relative overflow-hidden" id="home">
      {/* Ambient Floating Orb */}
      <div 
        className="hero-orb absolute top-[-10%] left-[-5%] w-[800px] h-[800px] rounded-full z-0 pointer-events-none animate-[float-orb_25s_infinite_alternate_ease-in-out]"
        style={{ background: 'radial-gradient(circle, rgba(245, 166, 35, 0.08) 0%, rgba(245, 166, 35, 0.04) 40%, transparent 70%)' }}
      ></div>
      
      <div className="container mx-auto px-5 max-w-[1200px] hero-container relative z-10 w-full">
        <div className="hero-content pt-[80px] px-0 lg:px-[5%] relative z-10">
          <p className="eyebrow gsap-fade-up text-[0.75rem] uppercase tracking-[3px] text-gold-accent mb-6 font-semibold font-body"></p>
          <h1 className="hero-title font-heading text-[clamp(3.5rem,8vw,7.5rem)] uppercase tracking-[2px] mb-6 leading-[0.95] text-main">
            <span className="line-mask block overflow-hidden"><span className="mask-text block">Presence that whispers,</span></span>
            <span className="line-mask block overflow-hidden"><span className="mask-text block text-[var(--accent-gold)]">Impact that roars.</span></span>
          </h1>
          <p className="hero-subtitle gsap-fade-up text-[1.4rem] mt-6 text-white/90 font-medium max-w-[550px] mb-8 leading-[1.6]">
            Your story. Their screen. Our strategy.
          </p>
          <p className="gsap-fade-up text-[1.1rem] mb-8 text-muted font-light">
            At <span className="notranslate font-semibold">GrownK</span> we don't just market, we build brand with you.
          </p>
          <div className="hero-ctas gsap-fade-up flex flex-wrap gap-8 items-center">
            <a href="https://wa.me/8801611510192" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large inline-flex items-center justify-center font-body uppercase tracking-[1.5px] font-bold transition-all duration-300 rounded-[4px] bg-transparent text-[#F5A623] border border-[#F5A623] hover:bg-[#F5A623] hover:text-[#0b0c10] hover:shadow-[0_0_15px_rgba(245,166,35,0.4)] active:scale-95 px-11 py-[22px] text-[0.85rem]">
              Start Your Chapter
            </a>
            <a href="#solutions" className="btn-text scroll-hint inline-flex items-center gap-3 text-muted text-[0.95rem] py-4 relative group hover:text-main transition-colors duration-300">
              Explore Partnerships <span className="bounce-arrow inline-flex text-gold animate-[bounce-down_2.5s_ease-in-out_infinite]"><i className="ph ph-arrow-down"></i></span>
              <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Tech Dashboard Hero Visual: The Growth Sequence */}
      <div className="hero-growth-sequence relative w-full h-[600px] z-10 [perspective:1200px] overflow-hidden mt-10 lg:mt-0 opacity-100 lg:block hidden">
        {/* Animated Upward Trending Chart Background */}
        <div className="hero-chart-bg absolute bottom-0 left-0 w-[120%] h-[60%] z-[1] pointer-events-none opacity-60 -translate-x-[10%]">
          <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="heroChartGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00F3FF" stopOpacity="0" />
                <stop offset="50%" stopColor="#00F3FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F5A623" stopOpacity="1" />
              </linearGradient>
              <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path className="hero-grid-line stroke-white/5 stroke-1 fill-none" d="M0,100 L1000,100" />
            <path className="hero-grid-line stroke-white/5 stroke-1 fill-none" d="M0,200 L1000,200" />
            <path className="hero-grid-line stroke-white/5 stroke-1 fill-none" d="M0,300 L1000,300" />
            <path className="hero-trend-line fill-none stroke-[url(#heroChartGrad)] stroke-[4px] animate-[trendDraw_4s_ease-out_forwards]"
              style={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
              d="M-50,380 C150,380 200,300 350,280 S500,200 650,150 S800,100 1050,40"
              filter="url(#heroGlow)" />
          </svg>
        </div>

        {/* Floating Social Icons */}
        <div className="floating-icon icon-fb absolute w-[60px] h-[60px] bg-[#0b0c10]/65 backdrop-blur-[12px] border border-white/10 rounded-2xl flex items-center justify-center text-[2rem] z-[5] shadow-[0_15px_35px_rgba(0,0,0,0.4)] pointer-events-none top-[5%] left-[10%] text-[#1877F2] animate-[floatIcon_6s_ease-in-out_infinite]"><i className="ph-fill ph-facebook-logo"></i></div>
        <div className="floating-icon icon-ig absolute w-[60px] h-[60px] bg-[#0b0c10]/65 backdrop-blur-[12px] border border-white/10 rounded-2xl flex items-center justify-center text-[2rem] z-[5] shadow-[0_15px_35px_rgba(0,0,0,0.4)] pointer-events-none top-[45%] left-[35%] text-[#E1306C] animate-[floatIcon_8s_ease-in-out_infinite_1s]"><i className="ph-fill ph-instagram-logo"></i></div>
        <div className="floating-icon icon-tiktok absolute w-[60px] h-[60px] bg-[#0b0c10]/65 backdrop-blur-[12px] border border-white/10 rounded-2xl flex items-center justify-center text-[2rem] z-[5] shadow-[0_15px_35px_rgba(0,0,0,0.4)] pointer-events-none top-[15%] right-[15%] text-gold animate-[floatIcon_7s_ease-in-out_infinite_2s]" style={{ textShadow: '2px 2px 0 #FF0050'}}><i className="ph-fill ph-tiktok-logo"></i></div>

        {/* Instagram Profile Mockup */}
        <div className="mockup-card mockup-ig absolute bg-elevated/80 backdrop-blur-[24px] border border-white/10 rounded-2xl p-5 shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)] [transform-style:preserve-3d] transition-transform duration-400 opacity-0 top-[12%] left-[2%] w-[220px] z-[3] hover:border-white/20 hover:z-10" style={{ transform: 'rotateY(12deg) rotateX(5deg) translateZ(30px)' }}>
          <div className="mockup-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[60px] -z-10 pointer-events-none opacity-50" style={{ background: 'rgba(0, 212, 170, 0.4)' }}></div>
          <div className="ig-header flex items-center gap-[15px] mb-5">
            <div className="ig-avatar w-[45px] h-[45px] rounded-full p-[2px]" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'}}>
              <div className="w-full h-full bg-[#0b0c10] rounded-full"></div>
            </div>
            <div className="ig-stats flex gap-[15px]">
              <div className="ig-stat flex flex-col items-center leading-[1.2]"><span className="font-heading text-[1.2rem] text-main">24</span><span className="text-[0.65rem] text-muted uppercase">Posts</span></div>
              <div className="ig-stat flex flex-col items-center leading-[1.2]"><span className="font-heading text-[1.2rem] text-main"><span className="dash-count" data-val="84.2">12.5</span>K</span><span className="text-[0.65rem] text-muted uppercase">Followers</span></div>
            </div>
          </div>
          <div className="ig-grid grid grid-cols-3 gap-1.5">
            <div className="ig-post bg-white/5 aspect-square rounded"></div>
            <div className="ig-post bg-white/5 aspect-square rounded"></div>
            <div className="ig-post bg-white/5 aspect-square rounded"></div>
            <div className="ig-post delay-pop-1 bg-white/5 aspect-square rounded opacity-0 scale-80"></div>
            <div className="ig-post delay-pop-2 bg-white/5 aspect-square rounded opacity-0 scale-80"></div>
            <div className="ig-post delay-pop-3 bg-white/5 aspect-square rounded opacity-0 scale-80"></div>
          </div>
          <div className="mockup-badge absolute -bottom-[15px] -right-[15px] bg-[#0b0c10]/92 backdrop-blur-[10px] border border-white/10 text-main text-[0.8rem] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-0" style={{ transform: 'translateZ(40px)' }}><i className="ph-fill ph-instagram-logo"></i> Scaling Community</div>
        </div>

        {/* Website Build Mockup */}
        <div className="mockup-card mockup-web absolute bg-elevated/80 backdrop-blur-[24px] border border-white/10 rounded-2xl p-5 shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)] [transform-style:preserve-3d] transition-transform duration-400 opacity-0 top-[3%] left-[45%] w-[320px] -translate-x-1/2 z-[2] hover:border-white/20 hover:z-10" style={{ transform: 'rotateY(0deg) translateZ(0px)' }}>
          <div className="mockup-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[60px] -z-10 pointer-events-none opacity-50" style={{ background: 'rgba(0, 243, 255, 0.3)' }}></div>
          <div className="web-header flex items-center gap-4 border-b border-white/5 pb-2.5 mb-4">
            <div className="mac-dots flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
            </div>
            <div className="web-url grow text-center bg-black/50 rounded p-1 text-[0.7rem] text-muted notranslate">grownk.com</div>
          </div>
          <div className="web-body relative h-[180px] bg-black/30 rounded-lg overflow-hidden p-4">
            <div className="code-layer absolute top-0 left-0 w-full h-full p-4 flex flex-col gap-2 opacity-100">
              <div className="code-line h-1.5 bg-gold/20 rounded-full w-[70%]"></div>
              <div className="code-line h-1.5 bg-gold/20 rounded-full w-[90%]"></div>
              <div className="code-line h-1.5 bg-gold/20 rounded-full w-[50%] ml-5"></div>
              <div className="code-line h-1.5 bg-gold/20 rounded-full w-[80%] ml-5"></div>
              <div className="code-line h-1.5 bg-gold/20 rounded-full w-[40%]"></div>
            </div>
            <div className="ui-layer absolute top-0 left-0 w-full h-full p-4 bg-elevated opacity-0 flex flex-col gap-4 scale-105">
              <div className="ui-nav h-2.5 w-full bg-white/10 rounded-sm"></div>
              <div className="ui-hero-text h-[30px] w-[80%] bg-white/20 rounded mx-auto"></div>
              <div className="ui-hero-btn h-5 w-[40%] bg-electric rounded mx-auto"></div>
            </div>
          </div>
          <div className="mockup-badge absolute -bottom-[15px] -right-[15px] bg-[#0b0c10]/92 backdrop-blur-[10px] border border-white/10 text-main text-[0.8rem] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-0" style={{ transform: 'translateZ(40px)' }}><i className="ph-fill ph-globe"></i> Live Ecosystem Build</div>
        </div>

        {/* Facebook Post Mockup */}
        <div className="mockup-card mockup-fb absolute bg-elevated/80 backdrop-blur-[24px] border border-white/10 rounded-2xl p-5 shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.02)] [transform-style:preserve-3d] transition-transform duration-400 opacity-0 top-[38%] right-[2%] w-[240px] z-[4] hover:border-white/20 hover:z-10" style={{ transform: 'rotateY(-12deg) rotateX(-3deg) translateZ(60px)' }}>
          <div className="mockup-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[60px] -z-10 pointer-events-none opacity-50" style={{ background: 'rgba(207, 168, 94, 0.3)' }}></div>
          <div className="fb-header flex items-center gap-2.5 mb-3">
            <div className="fb-avatar w-9 h-9 rounded-full bg-white/10"></div>
            <div className="fb-user-info flex flex-col gap-1">
              <div className="fb-name h-1.5 w-[60px] bg-white/30 rounded-full"></div>
              <div className="fb-time h-1 w-[40px] bg-white/10 rounded-sm"></div>
            </div>
          </div>
          <div className="fb-content">
            <div className="fb-text h-1.5 bg-white/10 rounded-full mb-1.5 w-[80%]"></div>
            <div className="fb-text h-1.5 bg-white/10 rounded-full mb-1.5 w-[60%]"></div>
            <div className="fb-image h-[100px] bg-white/5 rounded-md mt-2.5 mb-4"></div>
          </div>
          <div className="fb-stats flex justify-between items-center border-t border-white/5 pt-2.5 text-[0.8rem] text-main">
            <span className="fb-likes flex items-center gap-1.5"><i className="ph-fill ph-thumbs-up text-electric"></i> <span className="dash-count font-heading text-[1.2rem]" data-val="12.4">1.2</span>K</span>
            <span className="fb-reach flex items-center gap-1.5"><span className="dash-count font-heading text-[1.2rem]" data-val="45.5">5.0</span>K Reach <i className="ph-bold ph-trend-up text-gold"></i></span>
          </div>
          <div className="mockup-badge absolute -bottom-[15px] -right-[15px] bg-[#0b0c10]/92 backdrop-blur-[10px] border border-white/10 text-main text-[0.8rem] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.3)] opacity-0" style={{ transform: 'translateZ(40px)' }}><i className="ph-fill ph-facebook-logo"></i> Viral Reach</div>
        </div>

        {/* People Growing Animation */}
        <div className="people-growth absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <div className="person-node node-1 absolute w-[45px] h-[45px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/30 rounded-full flex items-center justify-center text-gold text-[1.4rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[20%] left-[10%]"><i className="ph-fill ph-user"></i></div>
          <div className="person-node node-2 absolute w-[35px] h-[35px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/30 rounded-full flex items-center justify-center text-gold text-[1.1rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[75%] left-[8%]"><i className="ph-fill ph-user"></i></div>
          <div className="person-node node-3 absolute w-[45px] h-[45px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/30 rounded-full flex items-center justify-center text-gold text-[1.4rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[85%] left-[35%]"><i className="ph-fill ph-user"></i></div>
          <div className="person-node node-4 absolute w-[45px] h-[45px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/30 rounded-full flex items-center justify-center text-gold text-[1.4rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[15%] right-[15%]"><i className="ph-fill ph-user"></i></div>
          <div className="person-node node-5 absolute w-[40px] h-[40px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/30 rounded-full flex items-center justify-center text-gold text-[1.2rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[60%] right-[5%]"><i className="ph-fill ph-user"></i></div>
          <div className="person-node node-6 absolute w-[30px] h-[30px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/30 rounded-full flex items-center justify-center text-gold text-[1rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[90%] right-[25%]"><i className="ph-fill ph-user"></i></div>
          <div className="person-node node-7 absolute w-[55px] h-[55px] bg-[#0b0c10]/85 backdrop-blur-[8px] border border-gold/40 rounded-full flex items-center justify-center text-gold text-[1.8rem] shadow-[0_0_20px_rgba(245,166,35,0.2)] opacity-0 scale-0 top-[40%] right-[-5%]"><i className="ph-fill ph-users"></i></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;