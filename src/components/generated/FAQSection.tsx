"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
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
  Search,
  Target,
  Globe,
  Link,
  MapPin,
  FileText,
  DollarSign,
  Zap,
  Monitor,
  Layers,
  PenTool,
  Layout,
  Code,
  Smartphone,
  Wrench,
  Server,
  Palette,
  Eye,
  BookOpen,
  Award,
  Compass,
  RefreshCw,
  CheckCircle,
  Calendar,
  Share2,
  PieChart,
  Type,
  Mail,
  GitBranch,
  Database,
  Filter,
  Repeat,
  Activity,
} from 'lucide-react';

/* ─── Color tokens (extracted from existing codebase) ─── */
const COLORS = {
  bg: 'var(--bg-primary)',
  cardBg: 'var(--bg-card-light)',
  cardBorder: 'var(--border-light)',
  white: 'var(--text-primary)',
  grayText: 'var(--text-muted)',
  grayTextLight: 'var(--text-secondary)',
  purple: 'var(--brand-500)',
  purpleAlpha15: 'var(--brand-500-medium)',
  purpleAlpha12: 'var(--brand-500-soft)',
  blue: 'var(--brand-500)',
  blueAlpha15: 'var(--brand-500-medium)',
  blueAlpha08: 'var(--brand-500-soft)',
  font: '"Barlow", sans-serif',
};

/* ─── Types ─── */
interface FAQItem {
  icon: React.ElementType;
  question: string;
  answer: string;
}

interface FeatureRow {
  icon: React.ElementType;
  title: string;
  desc: string;
  accent: string;
}

interface FAQConfig {
  subtitle: string;
  heading: string;
  description: string;
  leftHeading: React.ReactNode;
  leftDescription: React.ReactNode;
  faqItems: FAQItem[];
  featureRows: FeatureRow[];
}

/* ─── Per-service FAQ configs ─── */
const SERVICE_FAQ_CONFIGS: Record<string, FAQConfig> = {
  'SEO & ORGANIC GROWTH': {
    subtitle: 'FAQ',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to the most common questions about our SEO and organic growth services.',
    leftHeading: (
      <>
        Everything you need
        <br />
        to know <span style={{ color: COLORS.purple }}>about SEO</span>
      </>
    ),
    leftDescription: (
      <>
        We believe in transparency and clarity.
        <br />
        Here are some common questions our
        <br />
        clients ask about SEO services.
      </>
    ),
    faqItems: [
      {
        icon: Clock,
        question: 'How long does it take to see SEO results?',
        answer:
          'SEO is a long-term investment. You can expect to see initial improvements in rankings within 3–4 months, with significant organic traffic growth typically occurring between 6–12 months depending on competition and domain authority.',
      },
      {
        icon: Search,
        question: 'How do you approach keyword research?',
        answer:
          'We use a combination of tools like Ahrefs, SEMrush, and Google Search Console to identify high-intent, high-volume keywords relevant to your business. We prioritize keywords based on search volume, competition, and commercial intent to maximize ROI.',
      },
      {
        icon: Settings,
        question: 'What does technical SEO include?',
        answer:
          'Technical SEO covers site speed optimization, mobile responsiveness, crawlability, XML sitemaps, structured data markup, canonical tags, Core Web Vitals improvements, and resolving indexing issues to ensure search engines can effectively crawl and rank your site.',
      },
      {
        icon: Link,
        question: 'How do you build high-quality backlinks?',
        answer:
          'We employ white-hat link building strategies including digital PR, guest posting on authoritative sites, broken link building, resource page outreach, and creating linkable assets like original research and infographics to earn natural, high-authority backlinks.',
      },
      {
        icon: MapPin,
        question: 'Do you offer local SEO services?',
        answer:
          'Yes. Our local SEO services include Google Business Profile optimization, local citation building, review management, local keyword targeting, and geo-specific content creation to help you dominate local search results and map packs.',
      },
      {
        icon: FileText,
        question: 'What kind of SEO reports will I receive?',
        answer:
          "You'll receive comprehensive monthly reports covering keyword rankings, organic traffic trends, backlink profile growth, technical health scores, conversion data, and actionable recommendations. We also provide real-time dashboard access for on-demand insights.",
      },
    ],
    featureRows: [
      {
        icon: TrendingUp,
        title: 'Avg. 312% Traffic Increase',
        desc: 'Within the first 12 months',
        accent: COLORS.blue,
      },
      {
        icon: Shield,
        title: '100% White-Hat Methods',
        desc: 'No risky shortcuts, ever',
        accent: COLORS.purple,
      },
      {
        icon: Globe,
        title: 'Global & Local Expertise',
        desc: 'SEO strategies for any market',
        accent: COLORS.blue,
      },
    ],
  },
  'PERFORMANCE MARKETING': {
    subtitle: 'FAQ',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to the most common questions about our performance marketing and paid advertising services.',
    leftHeading: (
      <>
        Everything you need
        <br />
        to know <span style={{ color: COLORS.purple }}>about paid ads</span>
      </>
    ),
    leftDescription: (
      <>
        We believe in transparency and clarity.
        <br />
        Here are some common questions our
        <br />
        clients ask about paid campaigns.
      </>
    ),
    faqItems: [
      {
        icon: DollarSign,
        question: 'What is the minimum ad budget you recommend?',
        answer:
          "We recommend a minimum monthly ad spend of $3,000–$5,000 for meaningful results, though this varies by industry and platform. During our strategy call, we'll analyze your market and recommend a budget that aligns with your goals and expected return.",
      },
      {
        icon: TrendingUp,
        question: 'What ROAS can I realistically expect?',
        answer:
          'ROAS varies by industry, but our clients typically achieve 4–8x ROAS within the first 90 days. E-commerce brands often see 6–12x after optimization. We set realistic benchmarks during onboarding and optimize continuously to improve performance.',
      },
      {
        icon: Target,
        question: 'Which advertising platforms do you manage?',
        answer:
          'We manage campaigns across Google Ads (Search, Display, Shopping, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, TikTok Ads, and Microsoft Ads. We recommend the optimal platform mix based on your audience and objectives.',
      },
      {
        icon: BarChart2,
        question: 'How do you handle tracking and attribution?',
        answer:
          'We implement server-side tracking, conversion APIs, and UTM frameworks to ensure accurate attribution. We set up Google Analytics 4, platform pixels, and custom dashboards so every dollar spent is tracked from click to conversion.',
      },
      {
        icon: Zap,
        question: 'How do you approach scaling campaigns?',
        answer:
          'We scale methodically — first by optimizing winning ad sets, then expanding audiences, increasing budgets incrementally (15–20% every 3–5 days), launching lookalike audiences, and testing new creative angles to maintain efficiency as spend grows.',
      },
      {
        icon: Lightbulb,
        question: 'How often do you test new ad creatives?',
        answer:
          'We run continuous A/B tests on headlines, visuals, CTAs, and formats. Typically, we test 3–5 new creative variations per week and rotate top performers to combat ad fatigue while maintaining strong click-through and conversion rates.',
      },
    ],
    featureRows: [
      {
        icon: Target,
        title: 'Precision Targeting',
        desc: 'Reach your ideal customers',
        accent: COLORS.blue,
      },
      {
        icon: Shield,
        title: '$50M+ Ad Spend Managed',
        desc: 'Across all major platforms',
        accent: COLORS.purple,
      },
      {
        icon: Zap,
        title: 'Real-Time Optimization',
        desc: 'Daily bid and budget adjustments',
        accent: COLORS.blue,
      },
    ],
  },
  'WEB DESIGN & DEVELOPMENT': {
    subtitle: 'FAQ',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to the most common questions about our web design and development services.',
    leftHeading: (
      <>
        Everything you need
        <br />
        to know <span style={{ color: COLORS.purple }}>about web design</span>
      </>
    ),
    leftDescription: (
      <>
        We believe in transparency and clarity.
        <br />
        Here are some common questions our
        <br />
        clients ask about website projects.
      </>
    ),
    faqItems: [
      {
        icon: Clock,
        question: 'How long does a typical website project take?',
        answer:
          'A standard business website takes 6–10 weeks from kickoff to launch. Complex projects with custom functionality, e-commerce, or integrations may take 12–16 weeks. We provide a detailed timeline during the proposal phase with clear milestones.',
      },
      {
        icon: Layers,
        question: 'Which CMS platforms do you work with?',
        answer:
          'We specialize in WordPress, Webflow, Shopify, and headless CMS solutions like Sanity and Strapi. We also build fully custom solutions with Next.js and React when maximum flexibility and performance are required.',
      },
      {
        icon: Smartphone,
        question: 'Will my website be fully responsive?',
        answer:
          'Absolutely. Every website we build is designed mobile-first and tested across all major devices and browsers. We ensure pixel-perfect responsiveness from smartphones to ultra-wide monitors, with optimized touch interactions for mobile users.',
      },
      {
        icon: Search,
        question: 'Are your websites built with SEO in mind?',
        answer:
          'Yes. SEO is baked into our development process — from semantic HTML structure and fast load times to proper meta tags, schema markup, image optimization, and clean URL architecture. Your site launches ready to rank.',
      },
      {
        icon: Wrench,
        question: 'Do you offer website maintenance and support?',
        answer:
          'We offer monthly maintenance packages that include security updates, plugin/theme updates, performance monitoring, daily backups, uptime monitoring, and priority bug fixes. We also provide content update support and quarterly performance reviews.',
      },
      {
        icon: Code,
        question: 'What technology stack do you use?',
        answer:
          "Our core stack includes React, Next.js, TypeScript, and Tailwind CSS for front-end, with Node.js, PostgreSQL, and various headless CMS options on the back-end. We select the optimal stack based on your project's specific requirements and scalability needs.",
      },
    ],
    featureRows: [
      {
        icon: Monitor,
        title: 'Sub-2s Load Times',
        desc: 'Optimized for Core Web Vitals',
        accent: COLORS.blue,
      },
      {
        icon: Shield,
        title: '200+ Websites Launched',
        desc: 'For startups to enterprises',
        accent: COLORS.purple,
      },
      {
        icon: Layout,
        title: 'Conversion-Focused Design',
        desc: 'Every element drives action',
        accent: COLORS.blue,
      },
    ],
  },
  'BRAND STRATEGY & IDENTITY': {
    subtitle: 'FAQ',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to the most common questions about our brand strategy and identity services.',
    leftHeading: (
      <>
        Everything you need
        <br />
        to know <span style={{ color: COLORS.purple }}>about branding</span>
      </>
    ),
    leftDescription: (
      <>
        We believe in transparency and clarity.
        <br />
        Here are some common questions our
        <br />
        clients ask about brand strategy.
      </>
    ),
    faqItems: [
      {
        icon: Eye,
        question: 'What does a brand audit involve?',
        answer:
          'Our brand audit includes a comprehensive analysis of your current brand positioning, visual identity, messaging, competitor landscape, audience perception, and market opportunities. We deliver a detailed report with strategic recommendations for brand evolution.',
      },
      {
        icon: Palette,
        question: 'What deliverables are included in a branding project?',
        answer:
          'A full branding package includes logo design (with variations), color palette, typography system, brand voice guidelines, visual identity system, business card and stationery design, social media templates, and a comprehensive brand guidelines document.',
      },
      {
        icon: Clock,
        question: 'How long does a full branding project take?',
        answer:
          'A complete brand identity project typically takes 8–12 weeks, including discovery, strategy, design exploration, refinements, and final delivery. Rebranding projects for larger organizations may take 12–16 weeks to ensure stakeholder alignment.',
      },
      {
        icon: BookOpen,
        question: "What's included in the brand guidelines?",
        answer:
          "Our brand guidelines document covers logo usage rules, color specifications (HEX, RGB, CMYK, Pantone), typography hierarchy, imagery style, tone of voice, do's and don'ts, application examples, and templates for consistent brand execution across all touchpoints.",
      },
      {
        icon: RefreshCw,
        question: 'When should a business consider rebranding?',
        answer:
          "Consider rebranding when your brand no longer reflects your market position, you're entering new markets, after a merger or acquisition, when your target audience has evolved, or when your visual identity feels outdated compared to competitors.",
      },
      {
        icon: CheckCircle,
        question: 'How do you ensure brand consistency across channels?',
        answer:
          'We create detailed brand guidelines, digital asset libraries, and template systems that make consistency effortless. We also provide team training sessions and ongoing brand governance support to ensure every touchpoint reinforces your brand identity.',
      },
    ],
    featureRows: [
      {
        icon: Award,
        title: 'Award-Winning Design',
        desc: 'Recognized by industry leaders',
        accent: COLORS.blue,
      },
      {
        icon: Shield,
        title: '150+ Brands Transformed',
        desc: 'From startups to Fortune 500',
        accent: COLORS.purple,
      },
      {
        icon: Compass,
        title: 'Strategy-Led Approach',
        desc: 'Design backed by research',
        accent: COLORS.blue,
      },
    ],
  },
  'CONTENT MARKETING': {
    subtitle: 'FAQ',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to the most common questions about our content marketing services and strategy.',
    leftHeading: (
      <>
        Everything you need
        <br />
        to know <span style={{ color: COLORS.purple }}>about content</span>
      </>
    ),
    leftDescription: (
      <>
        We believe in transparency and clarity.
        <br />
        Here are some common questions our
        <br />
        clients ask about content marketing.
      </>
    ),
    faqItems: [
      {
        icon: Lightbulb,
        question: 'How do you develop a content strategy?',
        answer:
          'We start with audience research, competitive analysis, and keyword mapping to identify content gaps and opportunities. We then create a strategic content calendar aligned with your buyer journey, business goals, and SEO objectives for maximum impact.',
      },
      {
        icon: Calendar,
        question: 'How often should we publish new content?',
        answer:
          'Publishing frequency depends on your goals and resources. We typically recommend 8–12 blog posts per month for aggressive growth, or 4–6 for steady organic gains. Quality always trumps quantity — every piece should serve a strategic purpose.',
      },
      {
        icon: Search,
        question: 'How does content marketing support SEO?',
        answer:
          'Content marketing and SEO are deeply interconnected. Strategic content targets valuable keywords, earns backlinks naturally, builds topical authority, improves dwell time, and creates internal linking opportunities — all signals that boost your search rankings.',
      },
      {
        icon: Share2,
        question: 'How do you handle content distribution?',
        answer:
          'We develop a multi-channel distribution strategy including organic social media, email newsletters, content syndication, paid amplification, influencer partnerships, and community engagement to ensure your content reaches the right audience at the right time.',
      },
      {
        icon: PieChart,
        question: 'How do you measure content marketing ROI?',
        answer:
          'We track organic traffic growth, keyword rankings, engagement metrics (time on page, bounce rate), lead generation, conversion rates, and revenue attribution. Monthly reports connect content performance directly to business outcomes and pipeline growth.',
      },
      {
        icon: Type,
        question: 'What types of content do you create?',
        answer:
          'We produce blog articles, long-form guides, case studies, whitepapers, infographics, video scripts, social media content, email sequences, landing page copy, and thought leadership pieces — all tailored to your brand voice and audience preferences.',
      },
    ],
    featureRows: [
      {
        icon: TrendingUp,
        title: '5M+ Monthly Readers',
        desc: 'Across our client portfolio',
        accent: COLORS.blue,
      },
      {
        icon: Shield,
        title: 'Expert Content Team',
        desc: 'Industry-specialized writers',
        accent: COLORS.purple,
      },
      {
        icon: Target,
        title: 'Data-Driven Strategy',
        desc: 'Every piece backed by research',
        accent: COLORS.blue,
      },
    ],
  },
  'MARKETING AUTOMATION & CRM': {
    subtitle: 'FAQ',
    heading: 'Frequently Asked Questions',
    description: 'Find answers to the most common questions about our marketing automation and CRM services.',
    leftHeading: (
      <>
        Everything you need
        <br />
        to know <span style={{ color: COLORS.purple }}>about automation</span>
      </>
    ),
    leftDescription: (
      <>
        We believe in transparency and clarity.
        <br />
        Here are some common questions our
        <br />
        clients ask about marketing automation.
      </>
    ),
    faqItems: [
      {
        icon: Database,
        question: 'How long does CRM setup and migration take?',
        answer:
          'A typical CRM setup takes 4–8 weeks depending on data complexity and customization needs. This includes data migration, custom field configuration, pipeline setup, team training, and integration testing to ensure a smooth transition from your existing systems.',
      },
      {
        icon: GitBranch,
        question: 'What kind of automation workflows can you build?',
        answer:
          'We build lead nurturing sequences, onboarding flows, abandoned cart recovery, re-engagement campaigns, internal notifications, lead routing, scoring-based triggers, and multi-channel workflows that span email, SMS, and in-app messaging.',
      },
      {
        icon: Settings,
        question: 'Which platforms do you integrate with?',
        answer:
          'We work with HubSpot, Salesforce, ActiveCampaign, Marketo, Klaviyo, and custom solutions. We integrate with 200+ tools including Zapier, Segment, Stripe, Shopify, Slack, and your existing tech stack for seamless data flow.',
      },
      {
        icon: Filter,
        question: 'How does lead scoring work?',
        answer:
          'We implement behavioral and demographic lead scoring models that assign points based on website visits, email engagement, content downloads, form submissions, and firmographic data. This ensures your sales team focuses on the most qualified, sales-ready leads.',
      },
      {
        icon: Mail,
        question: 'What email automation capabilities do you offer?',
        answer:
          'We design and implement drip campaigns, triggered sequences, dynamic personalization, A/B testing frameworks, deliverability optimization, list segmentation, and advanced email workflows with conditional logic to maximize engagement and conversions.',
      },
      {
        icon: Activity,
        question: 'What reporting and analytics do you provide?',
        answer:
          'We build custom dashboards tracking pipeline velocity, lead-to-customer conversion rates, email performance, workflow completion rates, revenue attribution, and ROI by campaign. You get full visibility into how automation impacts your bottom line.',
      },
    ],
    featureRows: [
      {
        icon: Repeat,
        title: '500+ Workflows Built',
        desc: 'Across every major platform',
        accent: COLORS.blue,
      },
      {
        icon: Shield,
        title: '40% Avg. Efficiency Gain',
        desc: 'Reduced manual tasks for teams',
        accent: COLORS.purple,
      },
      {
        icon: Users,
        title: 'Certified Experts',
        desc: 'HubSpot & Salesforce certified',
        accent: COLORS.blue,
      },
    ],
  },
};

const DEFAULT_SERVICE = 'SEO & ORGANIC GROWTH';

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
          ? 'linear-gradient(180deg, var(--brand-500-soft), var(--brand-500-soft))'
          : 'var(--bg-card)',
        border: isOpen
          ? '1px solid var(--brand-500-strong)'
          : '1px solid var(--border-light)',
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
            border: isOpen ? 'none' : '1px solid var(--border-light-alt)',
            background: isOpen ? COLORS.purple : (btnHovered ? 'var(--bg-card-light)' : 'transparent'),
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
import { PageName } from './ServicedetailPage';

export const FAQSection: React.FC<{ serviceName?: string; onNavigate?: (page: PageName) => void }> = ({ serviceName }) => {
  const router = useRouter();
  const [openIdx, setOpenIdx] = useState<number>(0);

  const config = SERVICE_FAQ_CONFIGS[serviceName || DEFAULT_SERVICE] || SERVICE_FAQ_CONFIGS[DEFAULT_SERVICE];
  const faqItems = config.faqItems;
  const featureRows = config.featureRows;

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
              {config.subtitle}
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
              {config.heading}
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
              {config.description}
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
                  {config.leftHeading}
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
                  {config.leftDescription}
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
                      alignItems: 'flex-start',
                      background: 'var(--bg-card-light)',
                      borderRadius: '16px',
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
                  border: '1px solid var(--brand-500-medium)',
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
                        className="ca-hover-popup"
                        key={num}
                        src={`https://i.pravatar.cc/40?img=${num}`}
                        alt={`Team member ${num}`}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: '2px solid var(--bg-primary)',
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
                  onClick={() => router.push('/contact')}
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
