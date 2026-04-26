import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {

    // ================================
    // YOUR FULL JS CONVERTED
    // ================================

    const init = () => {

      // PRELOADER
      const preloader = document.getElementById('preloader');
      const preloaderFill = document.getElementById('preloaderFill');

      let loadProgress = 0;

      const fillInterval = setInterval(() => {
        loadProgress += Math.random() * 15 + 5;
        if (loadProgress > 90) loadProgress = 90;
        if (preloaderFill) preloaderFill.style.width = loadProgress + '%';
      }, 200);

      const hidePreloader = () => {
        clearInterval(fillInterval);
        if (preloaderFill) preloaderFill.style.width = '100%';
        setTimeout(() => {
            document.body.classList.remove('loading');
            if (preloader) preloader.classList.add('hidden');
            if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        }, 500);
      };

      setTimeout(hidePreloader, 1000);

      // Fix React StrictMode multiple timers by defining a global cleanup or clearing
      if (window.carouselTimers) {
        window.carouselTimers.forEach(t => clearInterval(t));
      }
      window.carouselTimers = [];

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

      /* =========================================================================
   Modular Service Card Selection
   ========================================================================= */

    var SVC_DETAILS = { 
        manual: { name: 'Manual Service', price: '25,000 BDT' }, 
        custom: { name: 'Custom Service', price: '35,000 BDT' }, 
        total: { name: 'Total Management', price: '20,000 BDT / month' }, 
        addon_fbig: { name: 'Social Media Ad Campaign', price: '5,000 BDT' },
        addon_web: { name: 'Website Creation Only', price: '14,000 - 25,000 BDT' },
        addon_social: { name: 'Social Media Setup', price: '4,000 BDT' },
        addon_seo: { name: 'SEO Marketing', price: '10,000 BDT' },
        addon_app: { name: 'App Creation', price: '30,000 - 50,000 BDT' },
        addon_design: { name: 'Graphic Design & Content', price: 'Starts 2,000 BDT' }
    };
    var SVC_CLASS = { 
        manual: 'svc-selected', 
        custom: 'svc-selected-electric', 
        total: 'svc-selected-gold', 
        addon_fbig: 'svc-selected',
        addon_web: 'svc-selected',
        addon_social: 'svc-selected',
        addon_seo: 'svc-selected',
        addon_app: 'svc-selected',
        addon_design: 'svc-selected'
    };
    var selected = new Set();
    var stackBar = document.getElementById('svcStackBar');
    var stackItems = document.getElementById('stackBarItems');
    var stackCount = document.getElementById('stackCount');
    var buildBtn = document.getElementById('stackBuildBtn');

    function updateBar() {
        var count = selected.size;
        if (stackCount) { stackCount.textContent = count; stackCount.style.transform = 'scale(1.35)'; setTimeout(function(){ stackCount.style.transform = ''; }, 180); }
        if (stackItems) { 
            stackItems.textContent = count === 0 ? 'Nothing selected yet' : Array.from(selected).map(function(k){ return SVC_DETAILS[k].name; }).join(' Â· '); 
        }
        if (stackBar) stackBar.classList.toggle('svc-bar-visible', count > 0);
        
        if (buildBtn) {
            var message = "";
            if (count > 0) {
                message = "Hi GrownK! I'd like to build a stack with the following services:\n\n";
                Array.from(selected).forEach(function(key, index) {
                    var item = SVC_DETAILS[key];
                    message += (index + 1) + ". " + item.name + " (" + item.price + ")\n";
                });
                message += "\nPlease get back to me to discuss the details.";
            } else {
                message = "Hi GrownK! I want to learn more about your services.";
            }
            buildBtn.href = 'https://wa.me/8801611510192?text=' + encodeURIComponent(message);
        }
    }

    document.querySelectorAll('.svc-add-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            var id = btn.dataset.svc;
            var card = btn.closest('.svc-card');
            var cls = SVC_CLASS[id];
            var txt = btn.querySelector('.svc-btn-text');
            if (selected.has(id)) {
                selected.delete(id);
                card.classList.remove('svc-selected', 'svc-selected-electric', 'svc-selected-gold');
                if (txt) txt.textContent = 'Add to Stack';
            } else {
                selected.add(id);
                card.classList.add(cls);
                if (txt) txt.textContent = 'In Stack';
            }
            updateBar();
        });
    });

    document.querySelectorAll('.svc-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
        });
    });

      /* =========================================================================
   Responsive Slide Carousel Engine (Vanilla JS)
   ========================================================================= */

    function initSlideCarousel(wrapperId, autoAdvanceMs) {
        var wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;

        var track = wrapper.querySelector('.carousel-track');
        var originalSlides = Array.from(wrapper.querySelectorAll('.carousel-slide'));
        var dotsContainer = wrapper.querySelector('.carousel-dots');
        var prevBtn = wrapper.querySelector('.prev-btn');
        var nextBtn = wrapper.querySelector('.next-btn');
        if (!track || originalSlides.length === 0) return;

        var currentIndex = 0;
        var cardsPerView = 1;
        var autoTimer = null;
        var isTransitioning = false;
        var isGridMode = false;
        var isExpertCarousel = (wrapperId === 'expertsCarousel');
        var isMobileOnlyCarousel = (wrapper.classList.contains('addons-grid'));
        var totalOriginal = originalSlides.length;
        var clonesBefore = [];
        var clonesAfter = [];
        var allSlides = [];



        function buildClones() {
            clonesBefore.forEach(function(c) { c.remove(); });
            clonesAfter.forEach(function(c) { c.remove(); });
            clonesBefore = [];
            clonesAfter = [];

            var cloneCount = Math.min(cardsPerView * 2, totalOriginal);
            for (var i = 0; i < cloneCount; i++) {
                var cloneAfter = originalSlides[i].cloneNode(true);
                cloneAfter.classList.add('carousel-clone');
                cloneAfter.setAttribute('aria-hidden', 'true');
                track.appendChild(cloneAfter);
                clonesAfter.push(cloneAfter);

                var cloneBefore = originalSlides[totalOriginal - 1 - i].cloneNode(true);
                cloneBefore.classList.add('carousel-clone');
                cloneBefore.setAttribute('aria-hidden', 'true');
                track.insertBefore(cloneBefore, track.firstChild);
                clonesBefore.unshift(cloneBefore);
            }
            allSlides = Array.from(track.querySelectorAll('.carousel-slide'));
        }

        function updateDimensions() {
            var viewport = wrapper.querySelector('.carousel-viewport');
            if (!viewport) return;
            var viewportWidth = viewport.offsetWidth;

            if (isMobileOnlyCarousel) {
                if (window.innerWidth > 768) {
                    isGridMode = true;
                    cardsPerView = totalOriginal;
                    wrapper.style.display = 'grid';
                    track.style.transform = '';
                    track.style.display = '';
                    track.style.width = '';
                    track.style.transition = '';
                    track.style.willChange = '';
                    originalSlides.forEach(function(slide) {
                        slide.style.width = '';
                        slide.style.minWidth = '';
                        slide.style.flexShrink = '';
                        slide.style.boxSizing = '';
                    });
                    clonesBefore.forEach(function(c) { c.remove(); });
                    clonesAfter.forEach(function(c) { c.remove(); });
                    clonesBefore = [];
                    clonesAfter = [];
                    allSlides = originalSlides;
                    if (prevBtn) prevBtn.style.display = 'none';
                    if (nextBtn) nextBtn.style.display = 'none';
                    if (dotsContainer) dotsContainer.style.display = 'none';
                    stopAutoAdvance();
                    return;
                } else {
                    isGridMode = false;
                    cardsPerView = 1;
                    wrapper.style.display = 'block';
                    if (prevBtn) prevBtn.style.display = '';
                    if (nextBtn) nextBtn.style.display = '';
                    if (dotsContainer) dotsContainer.style.display = '';
                }
            } else if (isExpertCarousel) {
                if (window.innerWidth > 1024) cardsPerView = 3;
                else if (window.innerWidth > 768) cardsPerView = 2;
                else cardsPerView = 1;
            } else {
                cardsPerView = 1;
            }

            // Snap currentIndex to nearest valid page start on resize
            currentIndex = Math.floor(currentIndex / cardsPerView) * cardsPerView;
            if (currentIndex >= totalOriginal) currentIndex = 0;

            buildClones();
            track.style.display = 'flex';
            track.style.width = 'max-content';
            track.style.willChange = 'transform';

            var slideWidth = viewportWidth / cardsPerView;
            allSlides.forEach(function(slide) {
                slide.style.boxSizing = 'border-box';
                slide.style.width = slideWidth + 'px';
                slide.style.minWidth = slideWidth + 'px';
                slide.style.flexShrink = '0';
            });

            renderDots();
            jumpTo(currentIndex);
            resetAutoAdvance();
        }

        function getOffset(index) {
            var cloneCount = clonesBefore.length;
            var slideWidth = allSlides.length > 0 ? allSlides[0].offsetWidth : 0;
            return (index + cloneCount) * slideWidth;
        }

        function jumpTo(index) {
            currentIndex = index;
            track.style.transition = 'none';
            track.style.transform = 'translateX(-' + getOffset(index) + 'px)';
            // Force reflow so the instant jump applies before next animation
            void track.offsetHeight;
            updateActiveStates();
        }

        function slideTo(index) {
            if (isTransitioning || isGridMode) return;
            isTransitioning = true;
            currentIndex = index;
            track.style.transition = 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.transform = 'translateX(-' + getOffset(index) + 'px)';
            updateActiveStates();
        }

        function updateActiveStates() {
            var realIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;
            allSlides.forEach(function(slide) { slide.classList.remove('active'); });
            var cloneCount = clonesBefore.length;
            for (var v = 0; v < cardsPerView; v++) {
                var si = cloneCount + currentIndex + v;
                if (si >= 0 && si < allSlides.length) {
                    allSlides[si].classList.add('active');
                }
            }
            if (dotsContainer) {
                var dots = dotsContainer.querySelectorAll('.carousel-dot');
                if (cardsPerView > 1) {
                    var activePage = Math.floor(realIndex / cardsPerView);
                    dots.forEach(function(dot, i) {
                        dot.classList.toggle('active', i === activePage);
                    });
                } else {
                    dots.forEach(function(dot, i) {
                        dot.classList.toggle('active', i === realIndex);
                    });
                }
            }
        }

        track.addEventListener('transitionend', function(e) {
            // Safari fires with -webkit-transform, Chrome/FF with transform
            if (e.propertyName !== 'transform' && e.propertyName !== '-webkit-transform') return;
            isTransitioning = false;
            if (currentIndex >= totalOriginal) {
                jumpTo(currentIndex - totalOriginal);
            }
            if (currentIndex < 0) {
                jumpTo(currentIndex + totalOriginal);
            }
        });

        function renderDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            var totalDots = (cardsPerView > 1) ? Math.ceil(totalOriginal / cardsPerView) : totalOriginal;
            for (var i = 0; i < totalDots; i++) {
                var dot = document.createElement('button');
                var dotIndex = (cardsPerView > 1) ? i * cardsPerView : i;
                dot.className = 'carousel-dot' + (dotIndex === currentIndex ? ' active' : '');
                dot.setAttribute('aria-label', 'Page ' + (i + 1));
                (function(idx) {
                    dot.addEventListener('click', function() {
                        slideTo(idx);
                        resetAutoAdvance();
                    });
                })(dotIndex);
                dotsContainer.appendChild(dot);
            }
        }

        function next() { slideTo(currentIndex + (cardsPerView > 1 ? cardsPerView : 1)); }
        function prev() { slideTo(currentIndex - (cardsPerView > 1 ? cardsPerView : 1)); }

        if (nextBtn) nextBtn.addEventListener('click', function() { next(); resetAutoAdvance(); });
        if (prevBtn) prevBtn.addEventListener('click', function() { prev(); resetAutoAdvance(); });

        var touchStartX = 0;
        var touchStartY = 0;
        var touchStartTime = 0;
        var isSwiping = false;

        track.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
            touchStartTime = Date.now();
            isSwiping = false;
            stopAutoAdvance();
        }, { passive: true });

        track.addEventListener('touchmove', function(e) {
            if (!isSwiping) {
                var dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
                var dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
                if (dx > dy && dx > 10) isSwiping = true;
            }
        }, { passive: true });

        track.addEventListener('touchend', function(e) {
            if (!isSwiping) {
                // Tap without swipe â€” restart auto after delay
                setTimeout(startAutoAdvance, 3000);
                return;
            }
            var touchEndX = e.changedTouches[0].clientX;
            var diff = touchStartX - touchEndX;
            var elapsed = Date.now() - touchStartTime;
            var threshold = elapsed < 250 ? 30 : 50;
            if (Math.abs(diff) > threshold) {
                if (diff > 0) next(); else prev();
            }
            // Always restart auto-advance after touch (with delay for swipes)
            setTimeout(startAutoAdvance, 3000);
        });

        wrapper.setAttribute('tabindex', '0');
        wrapper.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight') { next(); resetAutoAdvance(); }
            if (e.key === 'ArrowLeft') { prev(); resetAutoAdvance(); }
        });

        function startAutoAdvance() {
            stopAutoAdvance();
            if (autoAdvanceMs && autoAdvanceMs > 0) {
                autoTimer = setInterval(next, autoAdvanceMs);
            }
        }
        function stopAutoAdvance() {
            if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
        }
        function resetAutoAdvance() {
            stopAutoAdvance();
            startAutoAdvance();
        }

        wrapper.addEventListener('mouseenter', stopAutoAdvance);
        wrapper.addEventListener('mouseleave', startAutoAdvance);

        var resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateDimensions, 100);
        });

        setTimeout(updateDimensions, 100);
        setTimeout(updateDimensions, 500);

        originalSlides.forEach(function(s) {
            var img = s.querySelector('img');
            if (img && !img.complete) {
                img.addEventListener('load', updateDimensions);
            }
        });
    }

    // Wait for DOM layout to complete before calculating widths
    setTimeout(function() {
        if (typeof initSlideCarousel !== 'undefined') {
            initSlideCarousel('addonsGridCarousel', 6000);
            initSlideCarousel('expertsCarousel', 7000);
            initSlideCarousel('resultsCarousel', 8000);
        }
    }, 100);

    };

    setTimeout(init, 100);

  }, []);

  return (
    <>


      {/* Preloader */}
      <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <span className="preloader-logo">Grown<em>K</em></span>
          <div className="preloader-bar">
            <div className="preloader-fill" id="preloaderFill"></div>
          </div>
        </div>
      </div>

      {/* Reading Progress Bar */}
      <div className="reading-progress"></div>





      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">Grown<span>K</span></a>

          <div className="nav-links" id="navMenu">
            <a href="#approach">Our Approach</a>
            <a href="#solutions">Solutions</a>
            <a href="#impact">Impact</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="https://wa.me/8801611510192" target="_blank" className="btn btn-primary nav-cta">Start Your Chapter</a>

          <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu" aria-expanded="false">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-overlay" id="mobileOverlay">
        <div className="mobile-menu-content">
          <a href="#approach" className="mobile-link">Our Approach</a>
          <a href="#solutions" className="mobile-link">Solutions</a>
          <a href="#impact" className="mobile-link">Impact</a>
          <a href="#contact" className="mobile-link">Contact</a>
          <a href="https://wa.me/8801611510192" target="_blank" className="btn btn-primary btn-large mobile-cta">Start
            Your Chapter</a>
        </div>
      </div>

      <main>
        {/* Chapter 1: The Hook (Hero) */}
        <section className="hero" id="home">
          {/* Ambient Floating Orb */}
          <div className="hero-orb"></div>
          <div className="container hero-container">
            <div className="hero-content">
                            <p className="eyebrow gsap-fade-up"></p>
              <h1 className="hero-title">
                <span className="line-mask"><span className="mask-text">Presence that whispers,</span></span>
                <span className="line-mask"><span className="mask-text accent-text">Impact that roars.</span></span>
              </h1>
              <p className="hero-subtitle gsap-fade-up" style={{ fontSize: '1.4rem', marginTop: '1.5rem', color: '#fff', opacity: '0.9', fontWeight: '500' }}>
                Your story. Their screen. Our strategy.
              </p>
              <p className="gsap-fade-up" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                At grownk we don't just market, we build brand with you.
              </p>
              <div className="hero-ctas gsap-fade-up">
                <a href="https://wa.me/8801611510192" target="_blank" className="btn btn-primary btn-large">
                  Start Your Chapter
                </a>
                <a href="#solutions" className="btn-text scroll-hint">
                  Explore Partnerships <span className="bounce-arrow"><i className="ph ph-arrow-down"></i></span>
                </a>
              </div>
            </div>
          </div>

          {/* Tech Dashboard Hero Visual: The Growth Sequence */}
          <div className="hero-growth-sequence">

            {/* Animated Upward Trending Chart Background */}
            <div className="hero-chart-bg">
              <svg viewBox="0 0 1000 400" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="heroChartGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stop-color="var(--accent-electric)" stop-opacity="0" />
                    <stop offset="50%" stop-color="var(--accent-electric)" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="var(--accent-gold)" stop-opacity="1" />
                  </linearGradient>
                  <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* Grid lines */}
                <path className="hero-grid-line" d="M0,100 L1000,100" />
                <path className="hero-grid-line" d="M0,200 L1000,200" />
                <path className="hero-grid-line" d="M0,300 L1000,300" />
                {/* Animated Line */}
                <path className="hero-trend-line"
                  d="M-50,380 C150,380 200,300 350,280 S500,200 650,150 S800,100 1050,40"
                  filter="url(#heroGlow)" />
              </svg>
            </div>

            {/* Floating Social Icons */}
            <div className="floating-icon icon-fb"><i className="ph-fill ph-facebook-logo"></i></div>
            <div className="floating-icon icon-ig"><i className="ph-fill ph-instagram-logo"></i></div>
            <div className="floating-icon icon-tiktok"><i className="ph-fill ph-tiktok-logo"></i></div>

            {/* Instagram Profile Mockup */}
            <div className="mockup-card mockup-ig">
              <div className="mockup-glow" style={{ background: 'rgba(0, 212, 170, 0.4)' }}></div>
              <div className="ig-header">
                <div className="ig-avatar"></div>
                <div className="ig-stats">
                  <div className="ig-stat"><span>24</span><span>Posts</span></div>
                  <div className="ig-stat"><span className="dash-count"
                    data-val="84.2">12.5</span>K<span>Followers</span></div>
                </div>
              </div>
              <div className="ig-grid">
                <div className="ig-post"></div>
                <div className="ig-post"></div>
                <div className="ig-post"></div>
                <div className="ig-post delay-pop-1"></div>
                <div className="ig-post delay-pop-2"></div>
                <div className="ig-post delay-pop-3"></div>
              </div>
              <div className="mockup-badge"><i className="ph-fill ph-instagram-logo"></i> Scaling Community</div>
            </div>

            {/* Website Build Mockup */}
            <div className="mockup-card mockup-web">
              <div className="mockup-glow" style={{ background: 'rgba(0, 243, 255, 0.3)' }}></div>
              <div className="web-header">
                <div className="mac-dots"><span></span><span></span><span></span></div>
                <div className="web-url">grownk.com</div>
              </div>
              <div className="web-body">
                <div className="code-layer">
                  <div className="code-line w-70"></div>
                  <div className="code-line w-90"></div>
                  <div className="code-line w-50 indent"></div>
                  <div className="code-line w-80 indent"></div>
                  <div className="code-line w-40"></div>
                </div>
                <div className="ui-layer">
                  <div className="ui-nav"></div>
                  <div className="ui-hero-text"></div>
                  <div className="ui-hero-btn"></div>
                </div>
              </div>
              <div className="mockup-badge"><i className="ph-fill ph-globe"></i> Live Ecosystem Build</div>
            </div>

            {/* Facebook Post Mockup */}
            <div className="mockup-card mockup-fb">
              <div className="mockup-glow" style={{ background: 'rgba(207, 168, 94, 0.3)' }}></div>
              <div className="fb-header">
                <div className="fb-avatar"></div>
                <div className="fb-user-info">
                  <div className="fb-name"></div>
                  <div className="fb-time"></div>
                </div>
              </div>
              <div className="fb-content">
                <div className="fb-text" style={{ width: '80%' }}></div>
                <div className="fb-text" style={{ width: '60%' }}></div>
                <div className="fb-image"></div>
              </div>
              <div className="fb-stats">
                <span className="fb-likes"><i className="ph-fill ph-thumbs-up"
                  style={{ color: 'var(--accent-electric)' }}></i> <span className="dash-count"
                    data-val="12.4">1.2</span>K</span>
                <span className="fb-reach"><span className="dash-count" data-val="45.5">5.0</span>K Reach <i
                  className="ph-bold ph-trend-up" style={{ color: 'var(--accent-gold)' }}></i></span>
              </div>
              <div className="mockup-badge"><i className="ph-fill ph-facebook-logo"></i> Viral Reach</div>
            </div>

            {/* People Growing Animation */}
            <div className="people-growth">
              <div className="person-node node-1"><i className="ph-fill ph-user"></i></div>
              <div className="person-node node-2"><i className="ph-fill ph-user"></i></div>
              <div className="person-node node-3"><i className="ph-fill ph-user"></i></div>
              <div className="person-node node-4"><i className="ph-fill ph-user"></i></div>
              <div className="person-node node-5"><i className="ph-fill ph-user"></i></div>
              <div className="person-node node-6"><i className="ph-fill ph-user"></i></div>
              <div className="person-node node-7"><i className="ph-fill ph-users"></i></div>
            </div>
          </div>
        </section>

        {/* Growth Metrics Chart (triggers once after hero) */}
        <section className="growth-chart-section" id="growthChart">
          <div className="container">
            <div className="chart-wrapper">
              <div className="chart-header">
                <div className="chart-title-block">
                                    <span className="chart-eyebrow"></span>
                  <h3 className="chart-title">6-Month Growth Trajectory</h3>
                </div>
                <div className="chart-legend">
                  <span className="legend-item"><span className="legend-dot"
                    style={{ background: 'var(--accent-gold)' }}></span>Posts</span>
                  <span className="legend-item"><span className="legend-dot"
                    style={{ background: 'var(--accent-electric)' }}></span>Followers (K)</span>
                  <span className="legend-item"><span className="legend-dot"
                    style={{ background: 'var(--accent-gold)' }}></span>Engagement (K)</span>
                </div>
              </div>
              <div className="chart-body">
                {/* Y-axis labels */}
                <div className="chart-y-axis">
                  <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
                </div>
                {/* Bar groups + line canvas */}
                <div className="chart-area" id="chartArea">
                  <div className="bar-group" data-month="Oct">
                    <div className="bar bar-posts" data-height="18"></div>
                    <div className="bar bar-followers" data-height="25"></div>
                    <div className="bar bar-engagement" data-height="12"></div>
                  </div>
                  <div className="bar-group" data-month="Nov">
                    <div className="bar bar-posts" data-height="28"></div>
                    <div className="bar bar-followers" data-height="38"></div>
                    <div className="bar bar-engagement" data-height="22"></div>
                  </div>
                  <div className="bar-group" data-month="Dec">
                    <div className="bar bar-posts" data-height="35"></div>
                    <div className="bar bar-followers" data-height="52"></div>
                    <div className="bar bar-engagement" data-height="30"></div>
                  </div>
                  <div className="bar-group" data-month="Jan">
                    <div className="bar bar-posts" data-height="50"></div>
                    <div className="bar bar-followers" data-height="61"></div>
                    <div className="bar bar-engagement" data-height="45"></div>
                  </div>
                  <div className="bar-group" data-month="Feb">
                    <div className="bar bar-posts" data-height="68"></div>
                    <div className="bar bar-followers" data-height="78"></div>
                    <div className="bar bar-engagement" data-height="58"></div>
                  </div>
                  <div className="bar-group" data-month="Mar">
                    <div className="bar bar-posts" data-height="90"></div>
                    <div className="bar bar-followers" data-height="95"></div>
                    <div className="bar bar-engagement" data-height="82"></div>
                  </div>
                  {/* SVG line overlay */}
                  <svg className="chart-line-svg" viewBox="0 0 600 200" preserveAspectRatio="none">
                    <polyline className="chart-line" points="50,164 150,124 250,96 350,78 450,44 550,10" />
                  </svg>
                </div>
              </div>
              {/* Metric summary cards under chart */}
              <div className="chart-summary">
                <div className="summary-card">
                  <span className="summary-value" data-target="816">0</span><span className="summary-suffix">K</span>
                  <span className="summary-label">Total Followers</span>
                </div>
                <div className="summary-card">
                  <span className="summary-value" data-target="24">0</span>
                  <span className="summary-label">Posts / Month</span>
                </div>
                <div className="summary-card">
                  <span className="summary-value" data-target="11.7">0</span><span className="summary-suffix">K</span>
                  <span className="summary-label">Avg Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Conflict (Problem/Agitate) â€” hidden: no content yet */}
        {/*
        <div className="chapter-divider">
          <span className="chapter-number">Chapter II</span>
          <div className="chapter-line"></div>
        </div>
        <section className="conflict section-padding" id="conflict">
          <div className="section-bg conflict-bg">
            <div className="section-bg-image"></div>
            <div className="section-bg-overlay"></div>
          </div>
          <div className="container">
            <div className="story-block">
              <div className="conflict-accent gs-reveal">"</div>
              <h2 className="editorial-heading">
                <span className="line-mask"><span className="mask-text gs-reveal"></span></span>
              </h2>
              <p className="editorial-text gs-reveal"></p>
              <div className="divider-line gs-reveal"></div>
            </div>
          </div>
        </section>

        <div className="chapter-divider">
          <span className="chapter-number">Chapter III</span>
          <div className="chapter-line"></div>
        </div>

        <section className="guide section-padding" id="approach">
          <div className="container align-center">
            <div className="story-block">
              <p className="eyebrow gs-reveal"></p>
              <h2 className="editorial-heading">
                <span className="line-mask"><span className="mask-text gs-reveal"></span></span><br />
                <span className="line-mask"><span className="mask-text gs-reveal"></span></span>
              </h2>
              <p className="editorial-text gs-reveal"></p>
            </div>
          </div>
        </section>
        */}



        {/* Chapter Transition Divider */}
        <div className="chapter-divider">
          <span className="chapter-number">Chapter II</span>
          <div className="chapter-line"></div>
        </div>


        {/* Chapter 4: The Stack (Solutions) */}
        <section className="solutions section-padding" id="solutions">
          <div className="container">

            {/* Section Headline */}
            <div className="svc-header reveal fade-up">
              <p className="eyebrow">Select Your Services</p>
              <h2 className="editorial-heading">BUILD YOUR <span className="accent-text">STACK</span></h2>
              <p className="editorial-text svc-subhead">Every business is different. Select from our core models and
                standalone artillery below to assemble the exact growth engine you need right now.</p>
            </div>

            <h3 className="subsection-title"
              style={{ color: '#fff', marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontSize: '2.4rem', letterSpacing: '1px', textShadow: '0 0 15px rgba(255,255,255,0.2)' }}>
              Core Partnership Models</h3>

            {/* 8 Service Cards Grid (3 Core, 5 Add-ons) */}
            <div className="svc-cards-grid" id="svcCardsGrid">

              {/* Core Card 1: Manual Service */}
              <div className="svc-card reveal fade-up" data-svc="manual">
                <div className="svc-card-badge">Manual Service</div>
                <div className="svc-card-icon svc-icon-teal"><i className="ph-fill ph-layout"></i></div>
                <div className="svc-card-body">
                  <h3 className="svc-card-title">Manual</h3>
                  <p className="svc-card-desc">We create your website and social media pages and hand them over. You manage your own content, boosting, and backend costs.</p>
                  <ul className="svc-card-features">
                    <li><i className="ph-bold ph-check"></i> Website Template (up to 5 pages)*</li>
                    <li><i className="ph-bold ph-check"></i> Social media set up + 1 boosting*</li>
                    <li><i className="ph-bold ph-check"></i> Brand kit handover</li>
                    <li><i className="ph-bold ph-check"></i> 1 training session</li>
                    <li style={{ marginTop: '10px', color: 'var(--accent-rose)', fontSize: '0.9rem' }}><i className="ph-bold ph-info"></i>
                      *Client pays for Hosting, Domain & Storage</li>
                  </ul>
                  <div className="svc-card-price">
                    <span className="svc-price-label">One-Time</span>
                    <span className="svc-price-val svc-price-teal">&#2547;25,000</span>
                  </div>
                </div>
                <button className="svc-add-btn svc-add-teal" data-svc="manual">
                  <i className="ph-bold ph-plus svc-btn-icon"></i>
                  <span className="svc-btn-text">Select Service</span>
                </button>
                <div className="svc-selected-overlay svc-overlay-teal"><i className="ph-fill ph-check-circle"></i>
                  Added</div>
              </div>

              {/* Core Card 2: Custom Service */}
              <div className="svc-card reveal fade-up delay-1" data-svc="custom">
                <div className="svc-card-badge svc-badge-electric">Custom Service</div>
                <div className="svc-card-icon svc-icon-electric"><i className="ph-fill ph-browsers"></i></div>
                <div className="svc-card-body">
                  <h3 className="svc-card-title">Custom</h3>
                  <p className="svc-card-desc">Template-based website with flexible add-ons. Customize your design, features, and promotion costs step by step.</p>
                  <ul className="svc-card-features">
                    <li><i className="ph-bold ph-check"></i> Website custom design*</li>
                    <li><i className="ph-bold ph-check"></i> Social media platform setup</li>
                    <li><i className="ph-bold ph-check"></i> Meta Ad boosting* (+extra charges)</li>
                    <li><i className="ph-bold ph-check"></i> Brand kit handover</li>
                    <li><i className="ph-bold ph-check"></i> 1 training session</li>
                    <li style={{ marginTop: '10px', color: 'var(--accent-rose)', fontSize: '0.9rem' }}><i className="ph-bold ph-info"></i>
                      *Client pays for Hosting, Domain, Storage & Boosting</li>
                  </ul>
                  <div className="svc-card-price">
                    <span className="svc-price-label">One-Time</span>
                    <span className="svc-price-val svc-price-electric">&#2547;35,000</span>
                  </div>
                </div>
                <button className="svc-add-btn svc-add-electric" data-svc="custom">
                  <i className="ph-bold ph-plus svc-btn-icon"></i>
                  <span className="svc-btn-text">Select Service</span>
                </button>
                <div className="svc-selected-overlay svc-overlay-electric"><i className="ph-fill ph-check-circle"></i>
                  Added</div>
              </div>

              {/* Core Card 3: Total Marketing */}
              <div className="svc-card svc-card-featured reveal fade-up delay-2" data-svc="total">
                <div className="svc-card-badge svc-badge-gold">Total Management</div>
                <div className="svc-card-icon svc-icon-gold"><i className="ph-fill ph-crown"></i></div>
                <div className="svc-card-body">
                  <h3 className="svc-card-title">Total management</h3>
                  <p className="svc-card-desc">The complete subscription model. We build, manage, and scale your website and social media with monthly product updates and promotions.</p>
                  <ul className="svc-card-features">
                    <li><i className="ph-bold ph-check"></i> Website Template design*</li>
                    <li><i className="ph-bold ph-check"></i> Social media set up</li>
                    <li><i className="ph-bold ph-check"></i> Meta Ad management (posting & boosting)</li>
                    <li><i className="ph-bold ph-check"></i> Content posting (8 video + 15 photo)</li>
                    <li><i className="ph-bold ph-check"></i> Graphic support (Up to 15 photos)</li>
                    <li><i className="ph-bold ph-check"></i> Technical support (website bug fixing)</li>
                    <li><i className="ph-bold ph-check"></i> Brand kit handover</li>
                    <li style={{ marginTop: '10px', color: 'var(--accent-rose)', fontSize: '0.9rem' }}><i className="ph-bold ph-info"></i>
                      *Client pays for Hosting, Domain, Storage & Boosting</li>
                  </ul>
                  <div className="svc-card-price">
                    <span className="svc-price-label">Monthly subscription</span>
                    <span className="svc-price-val svc-price-gold">&#2547;20,000 / month</span>
                  </div>
                </div>
                <button className="svc-add-btn svc-add-gold" data-svc="total">
                  <i className="ph-bold ph-plus svc-btn-icon"></i>
                  <span className="svc-btn-text">Select Service</span>
                </button>
                <div className="svc-selected-overlay svc-overlay-gold"><i className="ph-fill ph-check-circle"></i> Added
                </div>
              </div>
            </div>

            <h3 className="subsection-title"
              style={{ color: '#fff', marginTop: '4rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontSize: '2.4rem', letterSpacing: '1px', textShadow: '0 0 15px rgba(255,255,255,0.2)' }}>
              Targeted Artillery (Add-ons)</h3>

            {/* Add-ons Grid */}
            {/* Add-ons Grid as a Carousel for Mobile */}
            <div className="carousel-wrapper svc-cards-grid addons-grid" id="addonsGridCarousel">
              <div className="carousel-viewport">
                <div className="carousel-track" id="addonsGridTrack">

                  {/* Add-on 1: FB/IG Boosting */}
                  <div className="carousel-slide active">
                    <div className="svc-card svc-addon-card reveal fade-up" data-svc="addon_fbig">
                      <div className="svc-card-badge">Add-on</div>
                      <div className="svc-card-icon"><i className="ph ph-megaphone"></i></div>
                      <div className="svc-card-body">
                        <h3 className="svc-card-title">Social Media Ad Campaign & Boosting</h3>
                        <p className="svc-card-desc">Strategic ad setup, audience targeting, and campaign management across Meta platforms.</p>
                        <div className="svc-card-price">
                          <span className="svc-price-label">Per Ad</span>
                          <span className="svc-price-val">&#2547; 5,000</span>
                        </div>
                      </div>
                      <button className="svc-add-btn" data-svc="addon_fbig">
                        <i className="ph-bold ph-plus svc-btn-icon"></i><span className="svc-btn-text">Select</span>
                      </button>
                      <div className="svc-selected-overlay"><i className="ph-fill ph-check-circle"></i> Added</div>
                    </div>
                  </div>

                  {/* Add-on 2: Website Only */}
                  <div className="carousel-slide">
                    <div className="svc-card svc-addon-card reveal fade-up delay-1" data-svc="addon_web">
                      <div className="svc-card-badge">Add-on</div>
                      <div className="svc-card-icon"><i className="ph ph-globe"></i></div>
                      <div className="svc-card-body">
                        <h3 className="svc-card-title">Website Creation Only</h3>
                        <p className="svc-card-desc">High-performance web assets without social media management.</p>
                        <div className="svc-card-price">
                          <span className="svc-price-label">Flat rate</span>
                          <span className="svc-price-val svc-price-multiline">Basic - à§³14,000 | Custom - à§³25,000</span>
                        </div>
                      </div>
                      <button className="svc-add-btn" data-svc="addon_web">
                        <i className="ph-bold ph-plus svc-btn-icon"></i><span className="svc-btn-text">Select</span>
                      </button>
                      <div className="svc-selected-overlay"><i className="ph-fill ph-check-circle"></i> Added</div>
                    </div>
                  </div>

                  {/* Add-on 3: SEO */}
                  <div className="carousel-slide">
                    <div className="svc-card svc-addon-card reveal fade-up delay-2" data-svc="addon_seo">
                      <div className="svc-card-badge">Add-on</div>
                      <div className="svc-card-icon"><i className="ph ph-magnifying-glass"></i></div>
                      <div className="svc-card-body">
                        <h3 className="svc-card-title">SEO Marketing</h3>
                        <p className="svc-card-desc">On-page and technical optimization to raise your organic visibility.</p>
                        <div className="svc-card-price">
                          <span className="svc-price-label">Flat rate</span>
                          <span className="svc-price-val">&#2547; 10,000</span>
                        </div>
                      </div>
                      <button className="svc-add-btn" data-svc="addon_seo">
                        <i className="ph-bold ph-plus svc-btn-icon"></i><span className="svc-btn-text">Select</span>
                      </button>
                      <div className="svc-selected-overlay"><i className="ph-fill ph-check-circle"></i> Added</div>
                    </div>
                  </div>

                  {/* Add-on 4: App Creation */}
                  <div className="carousel-slide">
                    <div className="svc-card svc-addon-card reveal fade-up" data-svc="addon_app">
                      <div className="svc-card-badge">Add-on</div>
                      <div className="svc-card-icon"><i className="ph ph-device-mobile"></i></div>
                      <div className="svc-card-body">
                        <h3 className="svc-card-title">App Creation</h3>
                        <p className="svc-card-desc">Mobile catalogue or full e-commerce applications built for scale.</p>
                        <div className="svc-card-price">
                          <span className="svc-price-label">Flat rate</span>
                          <span className="svc-price-val svc-price-multiline">Catalogue - à§³30,000 | E-Com - à§³50,000</span>
                        </div>
                      </div>
                      <button className="svc-add-btn" data-svc="addon_app">
                        <i className="ph-bold ph-plus svc-btn-icon"></i><span className="svc-btn-text">Select</span>
                      </button>
                      <div className="svc-selected-overlay"><i className="ph-fill ph-check-circle"></i> Added</div>
                    </div>
                  </div>

                  {/* Add-on 5: Graphic Design & Content */}
                  <div className="carousel-slide">
                    <div className="svc-card svc-addon-card reveal fade-up delay-1" data-svc="addon_design">
                      <div className="svc-card-badge">Add-on</div>
                      <div className="svc-card-icon"><i className="ph ph-paint-brush"></i></div>
                      <div className="svc-card-body">
                        <h3 className="svc-card-title">Graphic Design & Content</h3>
                        <p className="svc-card-desc">Marketing posters, graphics, and visual content creation.</p>
                        <div className="svc-card-price">
                          <span className="svc-price-label">Starts with</span>
                          <span className="svc-price-val">&#2547; 2,000</span>
                        </div>
                      </div>
                      <button className="svc-add-btn" data-svc="addon_design">
                        <i className="ph-bold ph-plus svc-btn-icon"></i><span className="svc-btn-text">Select</span>
                      </button>
                      <div className="svc-selected-overlay"><i className="ph-fill ph-check-circle"></i> Added</div>
                    </div>
                  </div>

                  {/* Add-on 6: Social Setup */}
                  <div className="carousel-slide">
                    <div className="svc-card svc-addon-card reveal fade-up delay-2" data-svc="addon_social">
                      <div className="svc-card-badge">Add-on</div>
                      <div className="svc-card-icon"><i className="ph ph-share-network"></i></div>
                      <div className="svc-card-body">
                        <h3 className="svc-card-title">Social Media Setup</h3>
                        <p className="svc-card-desc">Full setup of FB, Meta Business, IG, TikTok, and X.</p>
                        <div className="svc-card-price">
                          <span className="svc-price-label">Flat rate</span>
                          <span className="svc-price-val">&#2547; 4,000</span>
                        </div>
                      </div>
                      <button className="svc-add-btn" data-svc="addon_social">
                        <i className="ph-bold ph-plus svc-btn-icon"></i><span className="svc-btn-text">Select</span>
                      </button>
                      <div className="svc-selected-overlay"><i className="ph-fill ph-check-circle"></i> Added</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navigation for Mobile Only */}
              <div className="carousel-nav addons-nav mobile-only">
                <button className="carousel-btn prev-btn" aria-label="Previous"><i className="ph-bold ph-arrow-left"></i></button>
                <div className="carousel-dots"></div>
                <button className="carousel-btn next-btn" aria-label="Next"><i className="ph-bold ph-arrow-right"></i></button>
              </div>

            </div>{/* /addons-grid */}

            {/* Floating Stack Summary Bar */}
            <div className="svc-stack-bar" id="svcStackBar">
              <div className="stack-bar-left">
                <i className="ph-fill ph-stack" style={{ fontSize: '1.4rem', color: 'var(--accent-gold)' }}></i>
                <div>
                  <div className="stack-bar-title">Your Stack</div>
                  <div className="stack-bar-items" id="stackBarItems">Nothing selected yet</div>
                </div>
              </div>
              <div className="stack-bar-right">
                <span className="stack-count" id="stackCount">0</span>
                <a href="#" id="stackBuildBtn" className="btn btn-primary" target="_blank">Build My Stack <i
                  className="ph-bold ph-arrow-right"></i></a>
              </div>
            </div>

          </div>
        </section>
        {/* Chapter Transition Divider */}
        <div className="chapter-divider">
          <span className="chapter-number">Chapter III</span>
          <div className="chapter-line"></div>
        </div>

        {/* Chapter 5: The Journey (Process - Sticky Layout) */}
        <section className="journey sticky-journey">
          {/* Background Image */}
          <div className="section-bg journey-bg">
            <div className="section-bg-image"></div>
          </div>
          <div className="journey-wrapper">
            <div className="journey-left">
              <div className="sticky-content">
                <p className="eyebrow">The Methodology</p>
                <h2 className="editorial-heading">Writing the story.</h2>
                <p className="editorial-text">Strategic architecture that moves backwards from your final objective.
                </p>
              </div>
            </div>

            <div className="journey-right">
              <div className="timeline-step reveal visible">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h4>Discovery</h4>
                  <p>We study your business, your customers, and your competitors then identify exactly what your brand needs to say to stand out and be trusted.</p>
                </div>
              </div>
              <div className="timeline-step reveal visible">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h4>Strategy & Build</h4>
                  <p>We build your complete digital presence website, social media profiles, content plan, and brand identity all designed to attract the right customers from day one.</p>
                </div>
              </div>
              <div className="timeline-step reveal visible">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h4>Amplification</h4>
                  <p>We push your brand in front of your audience through targeted campaigns, consistent content, and strategic promotion turning visibility into real, measurable sales.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6: The Climax (Impact/Testimonials) */}
        <section className="impact section-padding" id="impact">
          <div className="container">
            <div className="section-header reveal fade-up" style={{ textAlign: 'center' }}>
              <h2 className="section-title">The <span className="accent-text">Results</span></h2>
              <p className="section-subtitle" style={{ fontSize: '1.2rem', color: '#fff', opacity: 1, fontWeight: '500' }}>
                A story is only as good as its ending. Here is the impact we've engineered for our partners.
              </p>
            </div>

            <div className="carousel-wrapper reveal fade-up" id="resultsCarousel" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="carousel-viewport">
                <div className="carousel-track" style={{ textAlign: 'center' }}>

                  {/* Slide 1 */}
                  <div className="carousel-slide active">
                    <div className="case-card glass-panel">
                      <div className="case-metric">
                        <span className="metric-value">65</span><span className="metric-suffix">%</span>
                        <span className="metric-label">Increase in Media Visibility</span>
                      </div>
                      <div className="case-story">
                        <p><strong>The Challenge:</strong> An e-commerce brand struggling to break
                          through market saturation.</p>
                        <p><strong>The Resolution:</strong> Total Management unified their social
                          narrative. Within 8 weeks, inbound traffic surged.</p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="carousel-slide">
                    <div className="case-card glass-panel">
                      <div className="case-metric">
                        <span className="metric-value">14</span><span className="metric-suffix"> Days</span>
                        <span className="metric-label">To Market Launch</span>
                      </div>
                      <div className="case-story">
                        <p><strong>The Challenge:</strong> A tech consultancy needing an immediate
                          digital footprint for Series A.</p>
                        <p><strong>The Resolution:</strong> Manual Service deployed a premium web
                          architecture communicating unassailable credibility.</p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 */}
                  <div className="carousel-slide">
                    <div className="case-card glass-panel">
                      <div className="case-metric">
                        <span className="metric-value">3</span><span className="metric-suffix">x</span>
                        <span className="metric-label">ROAS on Meta Ads</span>
                      </div>
                      <div className="case-story">
                        <p><strong>The Challenge:</strong> A fashion retailer burning ad spend with zero
                          conversions.</p>
                        <p><strong>The Resolution:</strong> FB/IG Boosting Add-on restructured their
                          targeting and creative, tripling return within 30 days.</p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 */}
                  <div className="carousel-slide">
                    <div className="case-card glass-panel">
                      <div className="case-metric">
                        <span className="metric-value">120</span><span className="metric-suffix">%</span>
                        <span className="metric-label">Organic Traffic Growth</span>
                      </div>
                      <div className="case-story">
                        <p><strong>The Challenge:</strong> Over-reliance on paid ads eroding local
                          service margins.</p>
                        <p><strong>The Resolution:</strong> SEO Boosting restructured their site
                          hierarchy, securing #1 local rankings in 3 months.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navigation */}
              <div className="carousel-nav">
                <button className="carousel-btn prev-btn" aria-label="Previous"><i
                  className="ph-bold ph-arrow-left"></i></button>
                <div className="carousel-dots">
                  <button className="carousel-dot active" aria-label="Slide 1"></button>
                  <button className="carousel-dot" aria-label="Slide 2"></button>
                  <button className="carousel-dot" aria-label="Slide 3"></button>
                  <button className="carousel-dot" aria-label="Slide 4"></button>
                </div>
                <button className="carousel-btn next-btn" aria-label="Next"><i
                  className="ph-bold ph-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Experts Section */}
        <section className="experts-section section-padding" id="experts">
          <div className="container">
            <div className="section-header reveal fade-up">
              <h2 className="section-title">Meet Our <span className="accent-text">Experts</span></h2>
              <p className="section-subtitle">The architects behind the ecosystems. Pure strategic horsepower.</p>
            </div>

            <div className="carousel-wrapper reveal fade-up" id="expertsCarousel">
              <div className="carousel-viewport">
                <div className="carousel-track">

                  {/* Expert 1: Razu Paul */}
                  <div className="carousel-slide active">
                    <div className="expert-slide">
                      <div className="expert-photo-frame">
                        <img src="/images/WhatsApp-Image-2026-03-16-at-12.39.53-AM.jpeg"
                          alt="Razu Paul - Founder & CEO" className="expert-photo" />
                      </div>
                      <div className="expert-details">
                        <h3 className="expert-name">Razu Paul</h3>
                        <p className="expert-role">Founder & CEO</p>
                        <p className="expert-desc">Razu is the driving force behind GrownK's mission to
                          build complete digital ecosystems. His leadership and strategic vision have
                          shaped the agency into a powerhouse for brand transformation.</p>
                      </div>
                    </div>
                  </div>

                  {/* Expert 2: Probir Saha Shohom */}
                  <div className="carousel-slide">
                    <div className="expert-slide">
                      <div className="expert-photo-frame">
                        <img src="/images/WhatsApp-Image-2026-03-15-at-8.31.37-PM.jpeg"
                          alt="Probir Saha Shohom - Co-Founder & Head of Tech" className="expert-photo" />
                      </div>
                      <div className="expert-details">
                        <h3 className="expert-name">Probir Saha Shohom</h3>
                        <p className="expert-role">Co-Founder & Head of Tech</p>
                        <p className="expert-desc">Probir leads the technical vision behind every GrownK
                          project. From robust web architectures to seamless application deployment, he
                          ensures every digital ecosystem is built for scale, performance, and premium quality.</p>
                      </div>
                    </div>
                  </div>

                  {/* Expert 3: Mir Sajjad */}
                  <div className="carousel-slide">
                    <div className="expert-slide">
                      <div className="expert-photo-frame">
                        <img src="/images/image.png" alt="Mir Sajjad - Technical Lead"
                          className="expert-photo" />
                      </div>
                      <div className="expert-details">
                        <h3 className="expert-name">Mir Sajjad</h3>
                        <p className="expert-role">Technical Lead</p>
                        <p className="expert-desc">Mir Sajjad builds the high-performance digital
                          infrastructure behind every ecosystem. From custom web architectures to
                          seamless app deployment, he ensures your tech stack delivers at scale.</p>
                      </div>
                    </div>
                  </div>

                  {/* Expert 4: Sudipto Saha */}
                  <div className="carousel-slide">
                    <div className="expert-slide">
                      <div className="expert-photo-frame">
                        <img src="/images/WhatsApp-Image-2026-03-15-at-8.30.53-PM.jpeg"
                          alt="Sudipto Saha - Junior Developer" className="expert-photo" />
                      </div>
                      <div className="expert-details">
                        <h3 className="expert-name">Sudipto Saha</h3>
                        <p className="expert-role">Junior Developer</p>
                        <p className="expert-desc">Sudipto is a dedicated developer executing the foundational
                          code behind GrownK applications. He supports the technical team by building
                          reliable, performant features and ensuring seamless user experiences.</p>
                      </div>
                    </div>
                  </div>

                  {/* Expert 5: Samiya Islam Sadiya */}
                  <div className="carousel-slide">
                    <div className="expert-slide">
                      <div className="expert-photo-frame">
                        <img src="/images/WhatsApp-Image-2026-03-15-at-8.57.41-PM.jpeg"
                          alt="Samiya Islam Sadiya - Frontend Designer & SEO" className="expert-photo" />
                      </div>
                      <div className="expert-details">
                        <h3 className="expert-name">Samiya Islam Sadiya</h3>
                        <p className="expert-role">Frontend Designer & SEO</p>
                        <p className="expert-desc">Samiya unites creative interface design with robust
                          SEO strategies. She ensures every GrownK website not only looks visually stunning
                          but also ranks highly and converts visitors into lasting clients.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Navigation */}
              <div className="carousel-nav">
                <button className="carousel-btn prev-btn" aria-label="Previous"><i
                  className="ph-bold ph-arrow-left"></i></button>
                <div className="carousel-dots">
                  <button className="carousel-dot active" aria-label="Expert 1"></button>
                  <button className="carousel-dot" aria-label="Expert 2"></button>
                  <button className="carousel-dot" aria-label="Expert 3"></button>
                  <button className="carousel-dot" aria-label="Expert 4"></button>
                  <button className="carousel-dot" aria-label="Expert 5"></button>
                </div>
                <button className="carousel-btn next-btn" aria-label="Next"><i
                  className="ph-bold ph-arrow-right"></i></button>
              </div>



            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section section-padding" id="faq">
          <div className="container">
            <div className="section-header reveal fade-up">
              <h2 className="section-title">Common <span className="accent-text">Questions</span></h2>
              <p className="section-subtitle">Clarity on how we build, deploy, and scale your custom ecosystem.</p>
            </div>

            <div className="faq-accordion">
              {/* FAQ Item 1 */}
              <div className="faq-item reveal fade-up">
                <button className="faq-question">
                  <span>How long does it take for my website to be ready?</span>
                  <i className="ph-bold ph-caret-down"></i>
                </button>
                <div className="faq-answer">
                  <p>A typical website take 1 week - 1 month to get the final results.</p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-item reveal fade-up">
                <button className="faq-question">
                  <span>Do you provide after-sales support?</span>
                  <i className="ph-bold ph-caret-down"></i>
                </button>
                <div className="faq-answer">
                  <p>Yes, we'll fix any bug in the website for the future service with add on charges.</p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="faq-item reveal fade-up">
                <button className="faq-question">
                  <span>Will my website be mobile-friendly?</span>
                  <i className="ph-bold ph-caret-down"></i>
                </button>
                <div className="faq-answer">
                  <p>Yes, all of our digital ecosystems are fully responsive and optimized for mobile devices.</p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-item reveal fade-up">
                <button className="faq-question">
                  <span>Do you handle content posting for all services?</span>
                  <i className="ph-bold ph-caret-down"></i>
                </button>
                <div className="faq-answer">
                  <p>It is depending on services you are taking. Content posting is only available in our Total Management service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="resolution" id="contact">
          <div className="container">
            <div className="chapter-divider gsap-fade-up">
              <span className="chapter-number">Chapter IV</span>
              <div className="chapter-line"></div>
            </div>

            <div className="resolution-wrapper">
              <div className="resolution-text gsap-fade-up">
                <h2 className="editorial-heading">Ready to write the next chapter of your brand's legacy?</h2>
                <p className="editorial-text">Strategic guidance is one conversation away. Let's discuss how we can
                  transform your complex business into a compelling narrative.</p>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span className="info-label">Direct Inquiry</span>
                    <span className="info-value"><a href="mailto:[agency.grownk@gmail.com]?subject=Partnership%20Inquiry"
                      style={{ color: 'var(--accent-gold)' }}>agency.grownk@gmail.com</a></span>
                  </div>
                </div>
              </div>

              <div className="resolution-form gsap-fade-up">
                <div className="glass-panel"
                  style={{ textAlign: 'center', padding: '3rem 2rem', borderColor: 'rgba(0, 243, 255, 0.3)', boxShadow: 'var(--glow-electric)' }}>
                  <i className="ph-fill ph-whatsapp-logo"
                    style={{ fontSize: '4rem', color: 'var(--accent-electric)', marginBottom: '1rem', display: 'inline-block' }}></i>
                  <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Message Us for More Info</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Skip the forms. Message us
                    directly on WhatsApp to start building your stack immediately.</p>
                  <a href="https://wa.me/8801611510192" target="_blank"
                    className="btn btn-primary btn-large glass-btn"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, var(--accent-electric), var(--accent-gold))', color: '#000' }}>
                    <i className="ph-bold ph-chat-circle-text"></i> Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Form Success Toast */}
      <div className="form-success-toast" id="formToast">ÃƒÂ¢Ã…â€œÃ¢â‚¬Å“ Message sent successfully! We'll be in touch.</div>

      {/* Footer */}
      <footer className="site-footer section-padding"
        style={{ background: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
        <div className="container">
          <div className="footer-grid"
            style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '30px' }}>

            {/* Brand */}
            <div className="footer-brand">
              <a href="#" className="logo"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-main)', textDecoration: 'none' }}>Grown<span
                  style={{ color: 'var(--accent-gold)' }}>K</span></a>
              <p className="footer-mission"
                style={{ color: 'var(--text-muted)', marginTop: '15px', maxWidth: '300px', lineHeight: '1.6' }}>
                Transforming complex businesses into compelling narratives.</p>
            </div>

            {/* Services Links */}
            <div className="footer-links-col">
              <h4
                style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px', marginBottom: '20px' }}>
                Services</h4>
              <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#solutions" className="footer-link">Manual Service</a></li>
                <li><a href="#solutions" className="footer-link">Custom Service</a></li>
                <li><a href="#solutions" className="footer-link">Total Management</a></li>
              </ul>
            </div>

            {/* Targeted Artillery */}
            <div className="footer-links-col">
              <h4
                style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px', marginBottom: '20px' }}>
                Targeted Artillery</h4>
              <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <li><a href="#solutions" className="footer-link">FB/IG Boosting</a></li>
                <li><a href="#solutions" className="footer-link">Website Creation</a></li>
                <li><a href="#solutions" className="footer-link">SEO Marketing</a></li>
                <li><a href="#solutions" className="footer-link">App Creation</a></li>
                <li><a href="#solutions" className="footer-link">Graphic Design</a></li>
                <li><a href="#solutions" className="footer-link">Social Media Setup</a></li>
              </ul>
            </div>

            {/* Policy & Office */}
            <div className="footer-links-col" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <h4 style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px', marginBottom: '15px' }}>
                  Policy</h4>
                <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#terms" className="footer-link">Terms of Service</a></li>
                  <li><a href="#refund" className="footer-link">Refund Policy</a></li>
                </ul>
              </div>
              <div className="office-address">
                <h4 style={{ color: 'var(--text-main)', fontFamily: 'var(--font-heading)', letterSpacing: '1px', marginBottom: '10px' }}>
                  Office</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  House: 02, Block: B, Road: 04,<br/>
                  Banasree, Rampura,<br/>
                  Dhaka 1219
                </p>
              </div>
            </div>

          </div>

          <div className="footer-bottom"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <div className="copyright">
              &copy; <span id="currentYear"></span> GrownK Agency. All Rights Reserved.
            </div>
            <div className="social-text-links" style={{ display: 'flex', gap: '20px' }}>
                <a href="https://www.facebook.com/profile.php?id=61574323077446" target="_blank" rel="noopener" className="footer-link">Facebook</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="footer-link">LinkedIn</a>
                <a href="https://www.instagram.com/grownk_1/" target="_blank" rel="noopener" className="footer-link">Instagram</a>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
}

export default App;
