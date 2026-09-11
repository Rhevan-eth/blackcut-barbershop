import React from 'react';
import { TEAM_DATA } from '../data/barbershopData';

export default function Team() {
  return (
    <section id="team" className="section-padding section-bg-black" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
          <div className="eyebrow-container">
            <div className="eyebrow-rule"></div>
            <span className="eyebrow-text">MEET THE TEAM</span>
          </div>
          <h2 className="text-section-h2" style={{ color: 'var(--text-primary)' }}>
            The Hands Behind the Craft
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Experienced barbers committed to precise craftsmanship and personalized service.
          </p>
        </div>

        {/* 3-Column Team Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="card-surface team-card"
              style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image Container */}
              <div
                className="img-bw-container"
                style={{
                  height: '360px',
                  position: 'relative',
                }}
              >
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="img-bw"
                />
              </div>

              {/* Info Container */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                    {member.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)' }}>
                    {member.role}
                  </span>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Specialty: <span style={{ color: 'var(--text-primary)' }}>{member.specialty}</span>
                </p>

                <div style={{ marginTop: '4px' }}>
                  <span className="placeholder-badge">
                    {member.placeholderTag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
