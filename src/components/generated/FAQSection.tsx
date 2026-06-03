"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  TrendingUp,
  Lightbulb,
  BarChart2,
  Settings,
  MessageSquare,
  Clock,
  Shield,
  Users,
  ArrowRight,
  Plus,
  Minus,
} from 'lucide-react';

/* ─── Color tokens (extracted from existing codebase) ─── */
const COLORS = {
  bg: 'rgba(3, 3, 3, 1)',
  cardBg: 'rgba(255, 255, 255, 0.03)',
  cardBorder: 'rgba(255, 255, 255, 0.08)',
  white: '#ffffff',
  grayText: 'rgba(235, 239, 255, 0.72)',
  grayTextLight: 'rgba(235, 239, 255, 0.78)',
  purple: '#00c2ff',
  purpleAlpha15: 'rgba(0, 194, 255, 0.15)',
  purpleAlpha12: 'rgba(0, 194, 255, 0.12)',
  blue: '#00c2ff',
  blueAlpha15: 'rgba(0, 194, 255, 0.15)',
  blueAlpha08: 'rgba(0, 194, 255, 0.08)',
  font: '"Barlow", sans-serif',
};

/* ─── FAQ data ─── */
const faqItems = [
  {
    icon: Send,
    question: 'What digital marketing services do you offer?',
    answer:
      'We offer a full range of digital marketing services including SEO, PPC, Social Media Marketing, Content Marketing, Email Marketing, Conversion Rate Optimization, and Analytics.',
  },
  {
    icon: TrendingUp,
    question: 'How long does it take to see results?',
    answer:
      'Results vary by service. SEO typically takes 3-6 months, while PPC and Social Media campaigns can show measurable results within the first 2-4 weeks.',
  },
  {
    icon: Lightbulb,
    question: 'What makes your digital marketing strategies different?',
    answer:
      'We combine deep data analytics with creative strategy. Every campaign is custom-built for your business — no copy-paste templates, no guesswork.',
  },
  {
    icon: BarChart2,
    question: 'Do you work with businesses of all sizes?',
    answer:
      'Yes. We work with startups, SMEs, and enterprise brands. Our packages are flexible and scale with your business goals and budget.',
  },
  {
    icon: Settings,
    question: 'How do you measure the success of campaigns?',
    answer:
      'We track KPIs including ROAS, CTR, conversion rate, cost per lead, and revenue attribution. You receive a detailed monthly report with full transparency.',
  },
  {
    icon: MessageSquare,
    question: 'Can I customize the services I need?',
    answer:
      'Absolutely. We offer modular service packages — you pick what you need. No forced bundles, no paying for what you don\'t use.',
  },
];

/* ─── Feature rows data ─── */
const featureRows = [
  {
    icon: Clock,
    title: 'Quick Responses',
    desc: 'We reply within 24 hours',
    accent: COLORS.blue,
  },
  {
    icon: Shield,
    title: 'Trusted by 500+ Brands',
    desc: 'Delivering real results, globally',
    accent: COLORS.purple,
  },
  {
    icon: Users,
    title: 'Expert Support',
    desc: 'Our team is here to help',
    accent: COLORS.blue,
  },
];

/* ─── Scroll-in animation wrapper ─── */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms: Record<string, string> = {
    up: 'translateY(40px)',
    left: 'translateX(-50px)',
    right: 'translateX(50px)',
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0)' : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ─── Single Accordion Item ─── */
const AccordionItem = ({
  icon: Icon,
  question,
  answer,
  isOpen,
  onClick,
}: {
  icon: React.ElementType;
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxH(contentRef.current.scrollHeight);
    }
  }, [answer]);

  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      style={{
        background: isOpen
          ? 'linear-gradient(180deg, rgba(0, 194, 255, 0.12), rgba(0, 194, 255, 0.08))'
          : 'rgba(15, 15, 15, 1)',
        border: isOpen
          ? '1px solid rgba(0, 194, 255, 0.5)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, background 0.3s ease',
      }}
    >
      <button
        onClick={onClick}
        style={{
          all: 'unset',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '20px 24px',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      >
        {/* Icon container */}
        <div
          style={{
            width: '40px',
            height: '40px',
            minWidth: '40px',
            borderRadius: '10px',
            background: isOpen ? COLORS.purple : COLORS.purpleAlpha15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
          }}
        >
          <Icon size={18} color={COLORS.white} strokeWidth={2} />
        </div>

        {/* Question text */}
        <span
          style={{
            flex: 1,
            padding: '0 16px',
            color: COLORS.white,
            fontSize: '15px',
            fontWeight: 600,
            lineHeight: 1.4,
            fontFamily: COLORS.font,
          }}
        >
          {question}
        </span>

        {/* Toggle circle */}
        <div
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          style={{
            width: '32px',
            height: '32px',
            minWidth: '32px',
            borderRadius: '50%',
            border: isOpen ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
            background: isOpen ? COLORS.purple : (btnHovered ? 'rgba(255,255,255,0.06)' : 'transparent'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          {isOpen ? (
            <Minus size={16} color={COLORS.white} strokeWidth={2.5} />
          ) : (
            <Plus size={16} color={COLORS.white} strokeWidth={2.5} />
          )}
        </div>
      </button>

      {/* Answer with smooth max-height transition */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${maxH}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <div
          style={{
            padding: '0 24px 20px 80px',
            color: COLORS.grayTextLight,
            fontSize: '14px',
            lineHeight: '24px',
            fontFamily: COLORS.font,
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   ███  MAIN FAQ SECTION COMPONENT
   ═══════════════════════════════════════════════ */
export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: COLORS.bg,
        padding: '80px 24px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* ─── HEADER ─── */}
        <ScrollReveal direction="up" delay={0}>
          <div
            style={{
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            <span
              style={{
                display: 'block',
                color: COLORS.purple,
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontFamily: COLORS.font,
                marginBottom: '16px',
              }}
            >
              FAQ
            </span>
            <h2
              style={{
                color: COLORS.white,
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                fontFamily: COLORS.font,
                margin: '0 0 16px 0',
                lineHeight: 1.1,
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              style={{
                color: COLORS.grayText,
                fontSize: '16px',
                lineHeight: '28px',
                maxWidth: '600px',
                margin: '0 auto',
                fontFamily: COLORS.font,
              }}
            >
              Find answers to the most common questions about our digital
              marketing services and process.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── TWO COLUMNS ─── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '35% 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* ──── LEFT COLUMN ──── */}
          <ScrollReveal direction="left" delay={0.1}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px',
              }}
            >
              {/* Heading */}
              <div>
                <h3
                  style={{
                    color: COLORS.white,
                    fontSize: 'clamp(26px, 3vw, 36px)',
                    fontWeight: 800,
                    fontFamily: COLORS.font,
                    margin: '0 0 14px 0',
                    lineHeight: 1.15,
                  }}
                >
                  Everything you need
                  <br />
                  to know{' '}
                  <span style={{ color: COLORS.purple }}>about us</span>
                </h3>
                <p
                  style={{
                    color: COLORS.grayText,
                    fontSize: '15px',
                    lineHeight: '26px',
                    margin: 0,
                    fontFamily: COLORS.font,
                  }}
                >
                  We believe in transparency and clarity.
                  <br />
                  Here are some common questions our
                  <br />
                  clients ask before getting started.
                </p>
              </div>

              {/* 3 feature rows */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '24px',
                  borderRadius: '20px',
                  background: COLORS.cardBg,
                  border: `1px solid ${COLORS.cardBorder}`,
                }}
              >
                {featureRows.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '14px 12px',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.02)',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        minWidth: '44px',
                        borderRadius: '14px',
                        background: item.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <item.icon size={20} color={COLORS.white} strokeWidth={2} />
                    </div>
                    <div>
                      <div
                        style={{
                          color: COLORS.white,
                          fontSize: '15px',
                          fontWeight: 700,
                          fontFamily: COLORS.font,
                          marginBottom: '2px',
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          color: COLORS.grayText,
                          fontSize: '13px',
                          fontFamily: COLORS.font,
                          lineHeight: '20px',
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Still have questions card */}
              <div
                style={{
                  padding: '20px 22px',
                  borderRadius: '20px',
                  background: COLORS.blueAlpha08,
                  border: '1px solid rgba(0, 194, 255, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  {/* Overlapping avatars */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {[1, 2, 3, 4].map((num, idx) => (
                      <img
                        key={num}
                        src={`https://i.pravatar.cc/40?img=${num}`}
                        alt={`Team member ${num}`}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: '2px solid rgba(3, 3, 3, 1)',
                          marginLeft: idx > 0 ? '-10px' : '0',
                          objectFit: 'cover',
                          position: 'relative',
                          zIndex: 4 - idx,
                        }}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <div>
                    <div
                      style={{
                        color: COLORS.white,
                        fontSize: '15px',
                        fontWeight: 700,
                        fontFamily: COLORS.font,
                        marginBottom: '2px',
                      }}
                    >
                      Still have questions?
                    </div>
                    <div
                      style={{
                        color: COLORS.grayText,
                        fontSize: '13px',
                        fontFamily: COLORS.font,
                      }}
                    >
                      Talk to our growth experts.
                    </div>
                  </div>
                </div>

                {/* Arrow button */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    minWidth: '42px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.purple})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <ArrowRight size={18} color={COLORS.white} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ──── RIGHT COLUMN — ACCORDION ──── */}
          <ScrollReveal direction="right" delay={0.15}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  icon={item.icon}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIdx === idx}
                  onClick={() => handleToggle(idx)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ─── Responsive styles injected via <style> tag ─── */}
      <style>{`
        @media (max-width: 860px) {
          .faq-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
