import React from 'react';

export default function BrandIntro() {
  return (
    <section className="section-padding section-bg-charcoal" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Asymmetric Editorial Header & Text */}
          <div style={{ gridColumn: 'span 7' }} className="brand-intro-col-left">
            <div className="eyebrow-container">
              <div className="eyebrow-rule"></div>
              <span className="eyebrow-text">OUR APPROACH</span>
            </div>

            <h2
              className="text-section-h2"
              style={{
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            >
              CRAFTED WITH <span style={{ color: 'var(--accent-gold)' }}>PRECISION.</span>
            </h2>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.25vw, 1.2rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                maxWidth: '540px',
              }}
            >
              BLACKCUT focuses on detailed cuts, modern styling, and premium grooming — every visit built around precision, consistency, and an unhurried experience.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-hairline)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                  }}
                >
                  100%
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Detail-focused cuts & tailored styling
                </p>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.75rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                  }}
                >
                  PRIVATE
                </span>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Refined environment for men
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detail Image */}
          <div style={{ gridColumn: 'span 5' }} className="brand-intro-col-right">
            <div className="img-bw-container" style={{ borderRadius: 'var(--radius-sm)', height: '420px', border: '1px solid var(--border-hairline)' }}>
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop"
                alt="[PLACEHOLDER: detail image — barber tools or haircut precision]"
                className="img-bw"
              />
            </div>
            <div style={{ marginTop: '8px' }}>
              <span className="placeholder-badge">
                [PLACEHOLDER: brand approach detail image]
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .brand-intro-col-left {
            grid-column: span 12 !important;
          }
          .brand-intro-col-right {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
