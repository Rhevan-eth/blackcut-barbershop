import React from 'react';
import { SERVICES_DATA, SITE_CONFIG } from '../data/barbershopData';
import { Clock, Check } from 'lucide-react';

export default function Services() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section id="services" className="section-padding section-bg-black" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
          <div className="eyebrow-container">
            <div className="eyebrow-rule"></div>
            <span className="eyebrow-text">WHAT WE OFFER</span>
          </div>
          <h2 className="text-section-h2" style={{ color: 'var(--text-primary)' }}>
            Services Built Around You
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Every haircut and grooming service is tailored to your unique features, personal style, and routine.
          </p>
        </div>

        {/* Services List / Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="card-surface"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: service.featured ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                backgroundColor: service.featured ? 'rgba(22, 22, 22, 0.95)' : 'var(--bg-charcoal)',
              }}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    backgroundColor: 'var(--accent-gold)',
                    color: '#0A0A0A',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.6875rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '2px',
                  }}
                >
                  MOST BOOKED
                </div>
              )}

              <div>
                {/* Service Number & Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    borderBottom: '1px solid var(--border-hairline)',
                    paddingBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: service.featured ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    }}
                  >
                    {service.id}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Clock size={14} color="var(--accent-gold)" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="text-card-h3" style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {service.name}
                </h3>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
                  {service.description}
                </p>
              </div>

              <div>
                {/* Price & Action */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-hairline)',
                    marginTop: '20px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-secondary)', display: 'block' }}>
                      Price
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: '10px 18px', fontSize: '0.75rem' }}
                    title={`Book ${service.name} via WhatsApp`}
                  >
                    Select Service
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
          }}
        >
          <span>Prices may vary — </span>
          <span className="placeholder-badge">[PLACEHOLDER: confirm final pricing]</span>
        </div>
      </div>
    </section>
  );
}
