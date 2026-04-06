import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0c10] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-[2.5rem] font-['Bebas_Neue'] text-[var(--text-main)] tracking-[1px] leading-none no-underline">
              <span className="notranslate">Grown<span className="text-[var(--accent-gold)]">K</span></span>
            </Link>
            <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed max-w-[280px]">
              Transforming complex businesses into compelling narratives.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-['Bebas_Neue'] text-lg text-[var(--text-main)] tracking-[1.5px] uppercase">Services</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li><a href="/#solutions" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Manual Service</a></li>
              <li><a href="/#solutions" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Custom Service</a></li>
              <li><a href="/#solutions" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Total Management</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-4">
            <h4 className="font-['Bebas_Neue'] text-lg text-[var(--text-main)] tracking-[1.5px] uppercase">Pages</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              <li><Link to="/about" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">About</Link></li>
              <li><Link to="/career" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Career</Link></li>
              <li><Link to="/blog" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Blog</Link></li>
              <li><Link to="/ai-studies" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">AI Studies</Link></li>
              <li><Link to="/contact" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Contact</Link></li>
            </ul>
          </div>

          {/* Policy & Office */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-['Bebas_Neue'] text-lg text-[var(--text-main)] tracking-[1.5px] uppercase mb-3">Policy</h4>
              <ul className="flex flex-col gap-2 list-none p-0 m-0">
                <li><Link to="/privacy-policy" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Terms & Conditions</Link></li>
                <li><Link to="/refund-policy" className="text-[var(--text-muted)] hover:text-[var(--accent-gold)] transition-colors text-[0.9rem] no-underline">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Bebas_Neue'] text-lg text-[var(--text-main)] tracking-[1.5px] uppercase mb-2">Office</h4>
              <p className="text-[var(--text-muted)] text-[0.85rem] leading-relaxed">
                House: 02, Block: B, Road: 04,<br />
                Banasree, Rampura, Dhaka 1219
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[rgba(255,255,255,0.05)] text-[var(--text-dim)] text-sm gap-4">
          <p>&copy; {currentYear} <span className="notranslate">GrownK</span> Agency. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61574323077446" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-gold)] transition-colors uppercase tracking-widest text-[0.7rem] font-bold no-underline text-[var(--text-dim)]">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-gold)] transition-colors uppercase tracking-widest text-[0.7rem] font-bold no-underline text-[var(--text-dim)]">LinkedIn</a>
            <a href="https://www.instagram.com/grownk_1/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-gold)] transition-colors uppercase tracking-widest text-[0.7rem] font-bold no-underline text-[var(--text-dim)]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
