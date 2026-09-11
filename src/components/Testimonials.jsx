import React from 'react';
import { TESTIMONIALS_DATA } from '../data/barbershopData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding section-bg-charcoal" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
          <div className="eyebrow-container">
            <div className="eyebrow-rule"></div>
            <span className="eyebrow-text">WHAT OUR CLIENTS SAY</span>
          </div>
          <h2 className="text-section-h2" style={{ color: 'var(--text-primary)' }}>
            Client Perspectives
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Placeholder testimonial layout ready to be populated with genuine client feedback.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="card-surface"
              style={{
                padding: '36px 30px',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-hairline)',
                position: 'relative',
              }}
            >
              <div>
                <Quote size={28} color="var(--accent-gold)" style={{ opacity: 0.6, marginBottom: '16px' }} />
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    lineHeight: 1.65,
                    marginBottom: '24px',
                  }}
                >
                  "{item.quote}"
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      color: 'var(--text-primary)',
                      display: 'block',
                    }}
                  >
                    {item.clientName}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    {item.subtitle}
                  </span>
                </div>

                <span className="placeholder-badge">
                  {item.placeholderTag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
