import React from 'react';
import { SITE_CONFIG } from '../data/barbershopData';
import { MapPin, Phone, Clock, Navigation, Instagram, MessageCircle } from 'lucide-react';

export default function Location() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`;

  return (
    <section id="location" className="section-padding section-bg-black" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Dark Map Visual / Embed Simulation */}
          <div style={{ gridColumn: 'span 6' }} className="location-col">
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '400px',
                backgroundColor: 'var(--bg-charcoal)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-sm)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
                backgroundImage: 'radial-gradient(#2A2A2A 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                  }}
                >
                  LOCATION MAP
                </span>
                <span className="placeholder-badge">
                  [PLACEHOLDER: embedded map visual]
                </span>
              </div>

              {/* Map Marker Graphic */}
              <div
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(198, 161, 91, 0.12)',
                    border: '1px solid var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'pulse 2s infinite',
                  }}
                >
                  <MapPin size={28} color="var(--accent-gold)" />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                  BLACKCUT BARBERSHOP
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '280px' }}>
                  Senopati, Jakarta Selatan
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Navigation size={16} color="var(--accent-gold)" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Address, Hours & Contact Details */}
          <div style={{ gridColumn: 'span 6' }} className="location-col">
            <div className="eyebrow-container">
              <div className="eyebrow-rule"></div>
              <span className="eyebrow-text">VISIT US</span>
            </div>

            <h2 className="text-section-h2" style={{ color: 'var(--text-primary)', marginBottom: '32px' }}>
              Find Your Chair
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Address Row */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} color="var(--accent-gold)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    ADDRESS
                  </span>
                  <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                    {SITE_CONFIG.address}
                  </p>
                  <span className="placeholder-badge" style={{ marginTop: '6px' }}>
                    [PLACEHOLDER: replace with real address]
                  </span>
                </div>
              </div>

              {/* Phone Row */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={18} color="var(--accent-gold)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '1rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <div style={{ marginTop: '6px' }}>
                    <span className="placeholder-badge">
                      [PLACEHOLDER: +62 XXX-XXXX-XXXX]
                    </span>
                  </div>
                </div>
              </div>

              {/* Hours Row */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-hairline)',
                    backgroundColor: 'var(--bg-charcoal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={18} color="var(--accent-gold)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-gold)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    OPENING HOURS
                  </span>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                    {SITE_CONFIG.hours.weekdays}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                    {SITE_CONFIG.hours.weekends}
                  </p>
                  <div style={{ marginTop: '6px' }}>
                    <span className="placeholder-badge">
                      [PLACEHOLDER: confirm real hours]
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-hairline)',
                }}
              >
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Connect:</span>
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
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-col {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}
