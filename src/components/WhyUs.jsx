import React from 'react';
import { WHY_US_DATA } from '../data/barbershopData';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding section-bg-black" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
          <div className="eyebrow-container">
            <div className="eyebrow-rule"></div>
            <span className="eyebrow-text">THE DIFFERENCE</span>
          </div>
          <h2 className="text-section-h2" style={{ color: 'var(--text-primary)' }}>
            Why Choose BLACKCUT
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            We reject rushed, generic haircuts in favor of deliberate craftsmanship, high standards, and personal consistency.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
          }}
        >
          {WHY_US_DATA.map((item) => (
            <div
              key={item.number}
              className="why-us-card"
              style={{
                backgroundColor: 'var(--bg-charcoal)',
                border: '1px solid var(--border-hairline)',
                borderTop: '2px solid var(--border-hairline)',
                padding: '36px 28px',
                borderRadius: 'var(--radius-sm)',
                position: 'relative',
                transition: 'all var(--transition-fast)',
              }}
            >
              {/* Oversized Number */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3.25rem',
                  fontWeight: 700,
                  color: 'rgba(198, 161, 91, 0.25)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '20px',
                }}
              >
                {item.number}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gold Top Border Hover Accent */}
      <style>{`
        .why-us-card:hover {
          border-top-color: var(--accent-gold) !important;
          border-color: var(--border-gold);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
