const fs = require('fs');
const path = require('path');

const appPath = path.resolve(__dirname, 'src/App.jsx');
const scriptPath = path.resolve(__dirname, '../../grownk/grownk/script.js');

let appContent = fs.readFileSync(appPath, 'utf8');
const scriptContent = fs.readFileSync(scriptPath, 'utf8');

// The original script has `document.addEventListener('DOMContentLoaded', () => { ... });`
// and some IIFE modules for Service Stack and Carousel.
// We need to inject the content of `script.js` into the `useEffect` hook in `App.jsx`.

// 1. Extract the inner body of DOMContentLoaded from script.js
let scriptBodyMatch = scriptContent.match(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{([\s\S]*?)\n\}\);/);
let scriptBody = scriptBodyMatch ? scriptBodyMatch[1] : '';

// 2. Extract the IIFEs (Modular Service Card Selection, Carousel Engine)
let modularServiceRegex = /\/\* =+\s*Modular Service Card Selection\s*=+\s*\*\/[\s\S]*?(?=\/\* =+|$)/;
let carouselRegex = /\/\* =+\s*Responsive Slide Carousel Engine[\s\S]*?(?=\/\* =+|$)/;

let modularService = scriptContent.match(modularServiceRegex) ? scriptContent.match(modularServiceRegex)[0] : '';
let carouselEngine = scriptContent.match(carouselRegex) ? scriptContent.match(carouselRegex)[0] : '';

// Wait! In React we can just run the whole script.js logic inside useEffect since it's a single page app.
// But some `window.onload` and IIFEs might need adjustments.

// Convert IIFEs to regular functions or just strip the IIFE wrapper so they run sequentially.
modularService = modularService.replace(/^\(function\s*\(\)\s*\{/m, '').replace(/\}\)\(\);\s*$/m, '');
carouselEngine = carouselEngine.replace(/^\(function\s*\(\)\s*\{/m, '').replace(/\}\)\(\);\s*$/m, '');

// Full logic to be injected into `useEffect` (excluding the things we've already done like Preloader, Mobile menu which may duplicate).
// Since the user asked to "implement everything to solve issues", relying on the original script completely is safest.

const fullLogicToInject = `
    setTimeout(() => {
      // Setup GSAP
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);
          
          ScrollTrigger.getAll().forEach(t => t.kill()); // Clean up old triggers on HMR

          gsap.to('.reading-progress', {
              width: '100%',
              ease: 'none',
              scrollTrigger: {
                  trigger: 'body',
                  start: 'top top',
                  end: 'bottom bottom',
                  scrub: 0.3
              }
          });

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

          const hScrollSection = document.querySelector('.h-scroll-section');
          const hScrollContainer = document.querySelector('.h-scroll-container');
          if (hScrollSection && hScrollContainer) {
              const hCards = gsap.utils.toArray('.h-card');
              gsap.to(hCards, {
                  xPercent: -100 * (hCards.length - 1),
                  ease: "none",
                  scrollTrigger: {
                      trigger: hScrollSection,
                      pin: true,
                      scrub: 1,
                      snap: 1 / (hCards.length - 1),
                      end: () => "+=" + hScrollContainer.offsetWidth
                  }
              });
          }

          const revealSections = document.querySelectorAll('.conflict, .guide, .philosophy-highlight');
          revealSections.forEach(section => {
              const triggers = section.querySelectorAll('.gs-reveal');
              gsap.to(triggers, {
                  scrollTrigger: {
                      trigger: section,
                      start: 'top 75%',
                  },
                  y: '0%',
                  opacity: 1,
                  duration: 1.2,
                  stagger: 0.15,
                  ease: 'power3.out'
              });
          });

          document.querySelectorAll('.chapter-divider').forEach(divider => {
              gsap.fromTo(divider, 
                  { opacity: 0, x: -30 },
                  {
                      opacity: 1, x: 0,
                      duration: 1.2,
                      ease: 'power3.out',
                      scrollTrigger: {
                          trigger: divider,
                          start: 'top 85%',
                          toggleActions: 'play none none none'
                      }
                  }
              );

              const line = divider.querySelector('.chapter-line');
              if (line) {
                  gsap.fromTo(line,
                      { scaleX: 0 },
                      {
                          scaleX: 1,
                          transformOrigin: 'left center',
                          duration: 1.5,
                          ease: 'power3.out',
                          delay: 0.3,
                          scrollTrigger: {
                              trigger: divider,
                              start: 'top 85%',
                              toggleActions: 'play none none none'
                          }
                      }
                  );
              }
          });

          const timelineSteps = gsap.utils.toArray('.timeline-step');
          timelineSteps.forEach((step, i) => {
              gsap.fromTo(step,
                  { y: 60, opacity: 0 },
                  {
                      y: 0, opacity: 1,
                      duration: 1,
                      delay: i * 0.2,
                      ease: 'power3.out',
                      scrollTrigger: {
                          trigger: step,
                          start: 'top 85%',
                          toggleActions: 'play none none none'
                      }
                  }
              );
          });

          document.querySelectorAll('.section-bg-image').forEach(bg => {
              gsap.to(bg, {
                  y: -80,
                  ease: 'none',
                  scrollTrigger: {
                      trigger: bg.parentElement.parentElement,
                      start: 'top bottom',
                      end: 'bottom top',
                      scrub: true
                  }
              });
          });

          if (document.getElementById('cartItemsContainer')) {
              const cartItems = gsap.utils.toArray('.cart-item');
              gsap.fromTo(cartItems, 
                  { x: 40, opacity: 0 },
                  {
                      x: 0, opacity: 1,
                      duration: 0.6,
                      stagger: 0.15,
                      ease: 'power3.out',
                      scrollTrigger: {
                          trigger: '#cartTrigger',
                          start: 'top 70%',
                          toggleActions: 'play none none none',
                          onEnter: () => {
                              cartItems.forEach((item, i) => {
                                  setTimeout(() => item.classList.add('scrolled-in'), i * 150 + 200);
                              });
                          }
                      }
                  }
              );
          }

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
          setTimeout(runGrowthSequence, 500);

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
      }

      // Chart Animation
      const chartWrapper = document.querySelector('.chart-wrapper');
      if (chartWrapper) {
          const chartObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      chartWrapper.classList.add('chart-visible');
                      const bars = document.querySelectorAll('.chart-area .bar');
                      bars.forEach((bar, i) => {
                          const targetH = bar.getAttribute('data-height');
                          setTimeout(() => {
                              bar.style.transition = 'height 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
                              bar.style.height = targetH + '%';
                          }, i * 60);
                      });
                      const line = document.querySelector('.chart-line');
                      if (line) {
                          const len = line.getTotalLength();
                          line.style.strokeDasharray = len;
                          line.style.strokeDashoffset = len;
                          setTimeout(() => {
                              line.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)';
                              line.style.strokeDashoffset = '0';
                          }, bars.length * 60);
                      }
                      document.querySelectorAll('.summary-value[data-target]').forEach((el, i) => {
                          const target = parseFloat(el.getAttribute('data-target'));
                          const isFloat = el.getAttribute('data-target').includes('.');
                          const duration = 2000;
                          const start = performance.now();
                          const delay = 600 + i * 200;
                          setTimeout(() => {
                              function tick(now) {
                                  const elapsed = now - start - delay;
                                  const progress = Math.min(elapsed / duration, 1);
                                  const ease = 1 - Math.pow(1 - progress, 3);
                                  const current = target * ease;
                                  el.textContent = isFloat ? current.toFixed(1) : Math.round(current);
                                  if (progress < 1) requestAnimationFrame(tick);
                              }
                              requestAnimationFrame(tick);
                          }, delay);
                      });
                      chartObserver.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1 });
          chartObserver.observe(chartWrapper);
      }

      ${modularService}
      ${carouselEngine}

      // Init Carousels
      if (typeof initSlideCarousel !== 'undefined') {
          initSlideCarousel('addonsGridCarousel', 0);
          initSlideCarousel('expertsCarousel', 4000);
          initSlideCarousel('resultsCarousel', 5000);
      }

    }, 200);
`;

// Replace `images/` with `/images/`
appContent = appContent.replace(/src="images\//g, 'src="/images/');
appContent = appContent.replace(/src='images\//g, "src='/images/");

// Inject logic right before `}; // init ends`
// Since `App.jsx` has:
//       // YEAR
//       const yearEl = document.getElementById('currentYear');
//       if (yearEl) yearEl.textContent = new Date().getFullYear();
//
//     };
//
//     setTimeout(init, 100);
//
//   }, []);
// We'll replace `// YEAR[...]` with `// YEAR[...] \n ${fullLogicToInject}`

appContent = appContent.replace(
  /const yearEl = document\.getElementById\('currentYear'\);\s+if \(yearEl\) yearEl\.textContent = new Date\(\)\.getFullYear\(\);/g,
  `const yearEl = document.getElementById('currentYear');
      if (yearEl) yearEl.textContent = new Date().getFullYear();\n\n` + fullLogicToInject + `\n\n`
);

fs.writeFileSync(appPath, appContent, 'utf8');

console.log('App.jsx updated with script and image fixes!');
