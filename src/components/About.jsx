import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-padding section-bg-charcoal" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Moody Barbershop Interior Image */}
          <div style={{ gridColumn: 'span 6' }} className="about-col">
            <div
              className="img-bw-container"
              style={{
                borderRadius: 'var(--radius-sm)',
                height: '460px',
                border: '1px solid var(--border-hairline)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1000&auto=format&fit=crop"
                alt="[PLACEHOLDER: barbershop interior — dark wood, leather chairs, moody lighting]"
                className="img-bw"
              />
            </div>
            <div style={{ marginTop: '8px' }}>
              <span className="placeholder-badge">
                [PLACEHOLDER: barbershop interior image]
              </span>
            </div>
          </div>

          {/* Right Column: Philosophy Text */}
          <div style={{ gridColumn: 'span 6' }} className="about-col">
            <div className="eyebrow-container">
              <div className="eyebrow-rule"></div>
              <span className="eyebrow-text">OUR PHILOSOPHY</span>
            </div>

            <h2
              className="text-section-h2"
              style={{
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}
            >
              More Than a Haircut
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}
            >
              BLACKCUT was built around a simple idea: a great haircut should do more than make you look sharp — it should change how you carry yourself.
            </p>

            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              We bring together classic barbering traditions with modern techniques, providing a space where men can unwind, refine their personal style, and leave feeling confident for whatever lies ahead.
            </p>

            <div
              style={{
                padding: '20px 24px',
                borderLeft: '2px solid var(--accent-gold)',
                backgroundColor: 'rgba(198, 161, 91, 0.05)',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                }}
              >
                "Consistency in craft. Precision in every cut."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
