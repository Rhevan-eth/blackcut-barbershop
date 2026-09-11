import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SITE_CONFIG } from '../data/barbershopData';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
      }}
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1920&auto=format&fit=crop"
          alt="[PLACEHOLDER: hero image — barber mid-cut or moody barbershop interior]"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%) contrast(125%) brightness(40%)',
          }}
        />
        {/* Gradients for readable text overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.85) 100%),
              linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, transparent 40%, rgba(10,10,10,0.95) 100%)
            `,
          }}
        />
      </div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '960px',
        }}
      >
        {/* Recurring Gold Eyebrow Motif */}
        <div className="eyebrow-container" style={{ marginBottom: '16px' }}>
          <div className="eyebrow-rule"></div>
          <span className="eyebrow-text">{SITE_CONFIG.tagline}</span>
        </div>

        {/* Large Editorial Headline */}
        <h1
          className="text-hero-h1"
          style={{
            color: 'var(--text-primary)',
            marginBottom: '24px',
            textShadow: '0 4px 30px rgba(0,0,0,0.7)',
          }}
        >
          SHARP CUTS.<br />
          <span style={{ color: 'var(--accent-gold)' }}>STRONG PRESENCE.</span>
        </h1>

        {/* Supporting Copy */}
        <p
          style={{
            maxWidth: '560px',
            fontSize: 'clamp(1.05rem, 1.3vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}
        >
          Precision cuts, refined grooming, and an experience designed for men who take their appearance seriously.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            title="Book an Appointment via WhatsApp [PLACEHOLDER: WhatsApp link]"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            onClick={handleScrollToServices}
            className="btn btn-ghost"
          >
            Explore Services
          </a>
        </div>

        {/* Developer / Client Placeholder Marker */}
        <div style={{ marginTop: '24px' }}>
          <span className="placeholder-badge">
            [PLACEHOLDER: hero image — barber mid-cut or moody barbershop interior]
          </span>
        </div>
      </div>

      {/* Subtle Bottom Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.7,
        }}
      >
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          Scroll
        </span>
        <ArrowDown size={16} color="var(--accent-gold)" style={{ animation: 'fadeIn 1.5s infinite alternate' }} />
      </div>
    </section>
  );
}
