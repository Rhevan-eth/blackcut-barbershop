import React from 'react';
import { SITE_CONFIG } from '../data/barbershopData';
import { Scissors, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#070707',
        borderTop: '1px solid var(--border-hairline)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        {/* 4-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            marginBottom: '64px',
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Tagline */}
          <div style={{ gridColumn: 'span 4' }} className="footer-col">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                marginBottom: '16px',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '2px',
                  border: '1px solid var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(198, 161, 91, 0.08)',
                }}
              >
                <Scissors size={16} color="var(--accent-gold)" style={{ transform: 'rotate(-45deg)' }} />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--text-primary)',
                }}
              >
                BLACK<span style={{ color: 'var(--accent-gold)' }}>CUT</span>
              </span>
            </a>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '24px', maxWidth: '300px' }}>
              Precision cuts, refined grooming, and an experience designed for men who take their appearance seriously.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                }}
                title="Instagram [PLACEHOLDER link]"
              >
                <Instagram size={18} color="var(--accent-gold)" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-hairline)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                }}
                title="WhatsApp [PLACEHOLDER link]"
              >
                <MessageCircle size={18} color="var(--accent-gold)" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ gridColumn: 'span 2' }} className="footer-col">
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}
            >
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Why Us
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  About
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div style={{ gridColumn: 'span 3' }} className="footer-col">
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}
            >
              STUDIO LOCATION
            </h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '12px', lineHeight: 1.5 }}>
              {SITE_CONFIG.address}
            </p>
            <p style={{ fontSize: '0.875rem', marginBottom: '12px' }}>
              Phone: {SITE_CONFIG.phone}
            </p>
            <span className="placeholder-badge">
              [PLACEHOLDER values]
            </span>
          </div>

          {/* Column 4: Operating Hours */}
          <div style={{ gridColumn: 'span 3' }} className="footer-col">
            <h4
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}
            >
              OPERATING HOURS
            </h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '6px' }}>
              {SITE_CONFIG.hours.weekdays}
            </p>
            <p style={{ fontSize: '0.875rem', marginBottom: '12px' }}>
              {SITE_CONFIG.hours.weekends}
            </p>
            <span className="placeholder-badge">
              [PLACEHOLDER: confirm real hours]
            </span>
          </div>
        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
            © [PLACEHOLDER: 2026] BLACKCUT BARBERSHOP. All rights reserved.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            Crafted for Men of Distinction
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
          .footer-col {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 550px) {
          .footer-col {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </footer>
  );
}
