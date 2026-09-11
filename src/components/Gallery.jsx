import React, { useState, useEffect } from 'react';
import { GALLERY_DATA } from '../data/barbershopData';
import { Maximize2, X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="section-padding section-bg-charcoal" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <div className="eyebrow-container">
            <div className="eyebrow-rule"></div>
            <span className="eyebrow-text">THE CRAFT</span>
          </div>
          <h2 className="text-section-h2" style={{ color: 'var(--text-primary)' }}>
            Precision You Can See
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            A visual showcase of crisp skin fades, detailed beard sculpting, and the atmosphere inside BLACKCUT.
          </p>
        </div>

        {/* Editorial Masonry-Style Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
          }}
          className="gallery-grid"
        >
          {GALLERY_DATA.map((item) => {
            // Assign grid columns based on aspect ratio
            let colSpan = 'span 4';
            let height = '320px';
            if (item.aspect === 'aspect-portrait') {
              colSpan = 'span 4';
              height = '420px';
            } else if (item.aspect === 'aspect-landscape') {
              colSpan = 'span 8';
              height = '320px';
            } else if (item.aspect === 'aspect-square') {
              colSpan = 'span 4';
              height = '320px';
            }

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="img-bw-container gallery-tile"
                style={{
                  gridColumn: colSpan,
                  height: height,
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-hairline)',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.placeholderTag}`}
                  className="img-bw"
                />

                {/* Overlay & Label on Hover */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(10, 10, 10, 0.75)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '24px',
                    opacity: 0,
                    transition: 'opacity var(--transition-normal)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-gold)',
                        fontWeight: 700,
                      }}
                    >
                      {item.category}
                    </span>
                    <Maximize2 size={16} color="var(--text-primary)" />
                  </div>

                  <div>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                      {item.title}
                    </h4>
                    <span className="placeholder-badge" style={{ marginTop: '6px' }}>
                      {item.placeholderTag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'rgba(5, 5, 5, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 200ms ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              backgroundColor: 'var(--bg-charcoal)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-primary)',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close image modal"
            >
              <X size={20} />
            </button>

            <div style={{ maxHeight: '70vh', overflow: 'hidden', backgroundColor: '#000' }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  height: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  filter: 'grayscale(90%) contrast(115%)',
                }}
              />
            </div>

            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  {selectedImage.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginTop: '4px' }}>
                  {selectedImage.title}
                </h3>
              </div>
              <span className="placeholder-badge">
                {selectedImage.placeholderTag}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Grid Responsiveness & Hover Styles */}
      <style>{`
        .gallery-tile:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
          .gallery-tile {
            grid-column: span 6 !important;
            height: 280px !important;
          }
        }
        @media (max-width: 550px) {
          .gallery-tile {
            grid-column: span 6 !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
