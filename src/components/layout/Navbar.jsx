import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCurrency } from '../../contexts/CurrencyContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/career", label: "Career" },
    { to: "/blog", label: "Blog" },
    { to: "/ai-studies", label: "AI Studies" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#0b0c10]/95 backdrop-blur-[20px] border-b border-white/10'
            : 'py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-5 max-w-[1200px] flex justify-between items-center">
          <Link
            to="/"
            className="font-['Bebas_Neue'] text-[2.2rem] font-medium tracking-[2px] text-[var(--text-main)] uppercase no-underline"
          >
            <span className="notranslate">Grown<span className="text-[#F5A623] font-normal">K</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[0.8rem] uppercase tracking-[1.5px] font-medium transition-colors duration-300 no-underline ${
                  location.pathname === link.to
                    ? 'text-[var(--accent-gold)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Currency Pill Toggle */}
            <div className="flex bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)] p-0.5">
              <button 
                onClick={() => setCurrency('BDT')}
                className={`text-[0.7rem] px-3.5 py-1 rounded-full font-bold tracking-[1px] transition-all duration-300 ${currency === 'BDT' ? 'bg-[var(--accent-gold)] text-black' : 'text-[var(--text-muted)] hover:text-white bg-transparent'}`}
              >
                BDT
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                className={`text-[0.7rem] px-3.5 py-1 rounded-full font-bold tracking-[1px] transition-all duration-300 ${currency === 'USD' ? 'bg-[var(--accent-gold)] text-black' : 'text-[var(--text-muted)] hover:text-white bg-transparent'}`}
              >
                USD
              </button>
            </div>
            

          </div>

          <a
            href="https://wa.me/8801971046485"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-transparent text-[#F5A623] text-[0.75rem] px-7 py-3.5 tracking-[1.5px] uppercase font-semibold border border-[#F5A623] shadow-[0_0_10px_rgba(245,166,35,0.2)] rounded-md transition-all duration-300 hover:bg-[#F5A623] hover:text-[#0b0c10] hover:shadow-[0_0_20px_rgba(245,166,35,0.5)] active:scale-95 no-underline"
          >
            Start Your Chapter
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden block relative z-[1100] w-8 h-6 bg-transparent border-none cursor-pointer p-2.5 -m-2.5 box-content"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-full h-[1px] bg-[var(--text-main)] absolute left-0 transition-all duration-300 ${
                mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            ></span>
            <span
              className={`block w-full h-[1px] bg-[var(--text-main)] absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-full h-[1px] bg-[var(--text-main)] absolute left-0 transition-all duration-300 ${
                mobileMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0b0c10]/98 backdrop-blur-[20px] z-[1050] flex flex-col items-center justify-center transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col w-full px-8 text-center gap-2">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block font-['Bebas_Neue'] text-[clamp(2rem,7vw,3rem)] uppercase py-3 transition-all duration-300 no-underline ${
                location.pathname === link.to
                  ? 'text-[var(--accent-gold)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)] active:text-[var(--text-main)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex justify-center bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.1)] p-1 mt-4 mx-auto w-fit">
            <button 
              onClick={() => setCurrency('BDT')}
              className={`text-[1rem] px-6 py-2 rounded-full font-medium tracking-[1px] uppercase transition-all duration-300 ${currency === 'BDT' ? 'bg-[var(--accent-gold)] text-black' : 'text-[var(--text-muted)] hover:text-white bg-transparent'}`}
            >
              BDT
            </button>
            <button 
              onClick={() => setCurrency('USD')}
              className={`text-[1rem] px-6 py-2 rounded-full font-medium tracking-[1px] uppercase transition-all duration-300 ${currency === 'USD' ? 'bg-[var(--accent-gold)] text-black' : 'text-[var(--text-muted)] hover:text-white bg-transparent'}`}
            >
              USD
            </button>
          </div>



          <a
            href="https://wa.me/8801971046485"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 mx-auto w-full max-w-[320px] inline-flex items-center justify-center uppercase tracking-[1px] text-[0.9rem] font-medium font-['Inter'] transition-all duration-300 bg-[var(--accent-gold)] text-[#0b0c10] border border-[var(--accent-gold)] rounded-lg py-[18px] px-11 hover:bg-white hover:text-black hover:border-white active:scale-95 no-underline"
          >
            Start Your Chapter
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
