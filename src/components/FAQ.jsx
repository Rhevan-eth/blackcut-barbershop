import React, { useState } from 'react';
import { FAQ_DATA } from '../data/barbershopData';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  // First item open by default
  const [openId, setOpenId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding section-bg-charcoal" style={{ borderBottom: '1px solid var(--border-hairline)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', margin: '0 auto 64px auto', textAlign: 'center' }}>
          <div className="eyebrow-container" style={{ alignItems: 'center' }}>
            <div className="eyebrow-rule"></div>
            <span className="eyebrow-text">GOOD TO KNOW</span>
          </div>
          <h2 className="text-section-h2" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Answers to common questions about our services, booking process, and studio policies.
          </p>
        </div>

        {/* Accordion Container */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--bg-black)',
                  border: isOpen ? '1px solid var(--border-gold)' : '1px solid var(--border-hairline)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  style={{
                    width: '100%',
                    padding: '24px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ color: isOpen ? 'var(--accent-gold)' : 'var(--text-primary)', transition: 'color var(--transition-fast)' }}>
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '1px solid var(--border-hairline)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      backgroundColor: isOpen ? 'rgba(198, 161, 91, 0.1)' : 'transparent',
                      color: isOpen ? 'var(--accent-gold)' : 'var(--text-secondary)',
                      transition: 'transform 300ms var(--ease-out)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Animated Expandable Answer Panel */}
                <div
                  id={`faq-answer-${item.id}`}
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    style={{
                      padding: '0 28px 24px 28px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.65,
                      borderTop: isOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                      paddingTop: '16px',
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
