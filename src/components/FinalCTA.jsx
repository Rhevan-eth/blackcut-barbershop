import React from 'react';
import { SITE_CONFIG } from '../data/barbershopData';
import { MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundColor: '#0A0A0A',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-hairline)',
      }}
    >
      {/* Subtle Restrained Gold Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(198, 161, 91, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '760px',
        }}
      >
        <div className="eyebrow-container" style={{ alignItems: 'center', marginBottom: '16px' }}>
          <div className="eyebrow-rule"></div>
          <span className="eyebrow-text">READY WHEN YOU ARE</span>
        </div>

        <h2
          className="text-hero-h1"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}
        >
          READY FOR YOUR <span style={{ color: 'var(--accent-gold)' }}>NEXT CUT?</span>
        </h2>

        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}
        >
          Book your appointment and leave looking sharper than when you walked in. Direct booking available via WhatsApp.
        </p>

        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{
              padding: '18px 40px',
              fontSize: '0.9375rem',
              boxShadow: '0 8px 32px rgba(198, 161, 91, 0.25)',
            }}
            title="Book an Appointment via WhatsApp [PLACEHOLDER: WhatsApp link]"
          >
            <MessageCircle size={18} />
            Book an Appointment
          </a>
        </div>

        <div style={{ marginTop: '20px' }}>
          <span className="placeholder-badge">
            [PLACEHOLDER: WhatsApp Number: +62 812-3456-7890]
          </span>
        </div>
      </div>
    </section>
  );
}
