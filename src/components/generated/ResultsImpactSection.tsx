import React from 'react';

const BarlowFont = '"Barlow", sans-serif';
const InterFont = '"Inter", sans-serif';

// ── Shared SVG icons (reused across services) ──────────────────────────────

const icons = {
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  ),
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  barChart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="18" y="3" width="4" height="18" rx="1" />
      <rect x="10" y="8" width="4" height="13" rx="1" />
      <rect x="2" y="13" width="4" height="8" rx="1" />
    </svg>
  ),
  bolt: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  megaphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12-8.58 3.91a2 2 0 0 1-1.66 0L2 12" />
      <path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L2 17" />
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  palette: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  penTool: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19 7-7 3 3-7 7-3-3z" />
      <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="m2 2 7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  fileText: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <line x1="10" x2="8" y1="9" y2="9" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
    </svg>
  ),
  share: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  mail: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  workflow: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  ),
  dollar: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  server: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  award: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  ),
};

// ── Per‑service configuration ───────────────────────────────────────────────

interface ServiceConfig {
  topStats: { value: string; label: string; icon: React.ReactNode }[];
  caseStudyStats: { value: string; label: string }[];
  caseStudy: {
    clientName: string;
    industry: string;
    headline: string;
    description: string;
    tooltipValue: string;
    tooltipLabel: string;
    quote: string;
    author: string;
    role: string;
    avatarId: number;
  };
  logos: string[];
  bottomFeatures: { title: string; desc: string; icon: React.ReactNode }[];
  headerLine1: string;
  headerLine2: string;
  subtext: string;
}

const serviceConfigs: Record<string, ServiceConfig> = {
  'SEO & ORGANIC GROWTH': {
    headerLine1: "We Don't Just Optimize Pages.",
    headerLine2: 'We Dominate Search Results.',
    subtext:
      'Our data-driven SEO strategies, technical expertise, and content optimization drive sustainable organic growth for brands across the globe.',
    topStats: [
      { value: '3,000+', label: 'Happy Clients', icon: icons.users },
      { value: '10M+', label: 'Keywords Ranked', icon: icons.chart },
      { value: '25+', label: 'Countries', icon: icons.globe },
      { value: '95%', label: 'Retention', icon: icons.target },
    ],
    caseStudyStats: [
      { value: '+420%', label: 'Organic Traffic' },
      { value: '+280%', label: 'Keyword Rankings' },
      { value: '-52%', label: 'Bounce Rate' },
      { value: '8.5x', label: 'ROI Achieved' },
    ],
    caseStudy: {
      clientName: 'TechVault',
      industry: 'E-Commerce',
      headline: 'Scaling TechVault\nto Search Dominance',
      description:
        'TechVault partnered with us to dominate organic search in the competitive e-commerce space. In just 12 months, we helped them achieve exponential traffic growth through technical SEO and content strategy.',
      tooltipValue: '420%',
      tooltipLabel: 'GROWTH',
      quote:
        'Their SEO strategy completely transformed our organic presence. We went from page five to dominating the first page for every key term.',
      author: 'Marcus Chen',
      role: 'CMO, TechVault',
      avatarId: 11,
    },
    logos: ['Ahrefs', 'SEMrush', 'Moz', 'Google', 'Yoast', 'Screaming Frog', 'Surfer', 'Majestic'],
    bottomFeatures: [
      {
        title: 'Data-Driven SEO',
        desc: 'We use real data, advanced keyword research, and technical audits to make informed decisions that drive organic results.',
        icon: icons.barChart,
      },
      {
        title: 'Sustainable Rankings',
        desc: 'Every optimization is built for long-term stability — no black-hat tactics, just proven white-hat strategies.',
        icon: icons.shield,
      },
      {
        title: 'Long-Term Growth',
        desc: "We don't just chase quick wins — we build compounding organic growth that strengthens over time.",
        icon: icons.rocket,
      },
    ],
  },

  'PERFORMANCE MARKETING': {
    headerLine1: "We Don't Just Run Ads.",
    headerLine2: 'We Engineer Revenue.',
    subtext:
      'Our performance-driven campaigns, advanced targeting, and relentless optimization deliver measurable ROI across every platform.',
    topStats: [
      { value: '2,500+', label: 'Campaigns', icon: icons.megaphone },
      { value: '$50M+', label: 'Ad Spend Managed', icon: icons.dollar },
      { value: '15+', label: 'Platforms', icon: icons.layers },
      { value: '4.2x', label: 'Avg ROAS', icon: icons.target },
    ],
    caseStudyStats: [
      { value: '6.8x', label: 'ROAS' },
      { value: '-38%', label: 'CPA Reduction' },
      { value: '+210%', label: 'Conversions' },
      { value: '$2.1M', label: 'Revenue Generated' },
    ],
    caseStudy: {
      clientName: 'FreshCart',
      industry: 'DTC Brand',
      headline: 'Scaling FreshCart\nto Revenue Records',
      description:
        'FreshCart partnered with us to scale their DTC brand through multi-platform paid media. In just 8 months, we helped them achieve record-breaking ROAS through advanced targeting and creative optimization.',
      tooltipValue: '6.8x',
      tooltipLabel: 'ROAS',
      quote:
        'Their paid media strategy turned our ad spend into a predictable revenue engine. The results exceeded every projection we had.',
      author: 'Sarah Mitchell',
      role: 'VP Marketing, FreshCart',
      avatarId: 32,
    },
    logos: ['Google Ads', 'Meta', 'LinkedIn', 'TikTok', 'Twitter', 'Snapchat', 'Pinterest', 'Amazon'],
    bottomFeatures: [
      {
        title: 'ROI-Focused Campaigns',
        desc: 'Every campaign is built with one goal: to maximize your return on ad spend with data-backed strategies.',
        icon: icons.barChart,
      },
      {
        title: 'Multi-Platform Mastery',
        desc: 'We orchestrate campaigns across 15+ platforms, optimizing each channel for peak performance.',
        icon: icons.layers,
      },
      {
        title: 'Revenue Acceleration',
        desc: "We scale what works and cut what doesn't — driving exponential revenue growth quarter over quarter.",
        icon: icons.bolt,
      },
    ],
  },

  'WEB DESIGN & DEVELOPMENT': {
    headerLine1: "We Don't Just Build Websites.",
    headerLine2: 'We Craft Digital Experiences.',
    subtext:
      'Our conversion-first design philosophy, cutting-edge development, and performance optimization create websites that drive real business results.',
    topStats: [
      { value: '500+', label: 'Websites Launched', icon: icons.monitor },
      { value: '98%', label: 'On-Time Delivery', icon: icons.clock },
      { value: '40+', label: 'Industries', icon: icons.globe },
      { value: '99.9%', label: 'Uptime', icon: icons.server },
    ],
    caseStudyStats: [
      { value: '+185%', label: 'Conversions' },
      { value: '0.8s', label: 'Load Time' },
      { value: '+320%', label: 'Engagement' },
      { value: '12x', label: 'ROI Achieved' },
    ],
    caseStudy: {
      clientName: 'Luxe Interiors',
      industry: 'Interior Design',
      headline: 'Redesigning Luxe Interiors\nfor Maximum Impact',
      description:
        'Luxe Interiors partnered with us for a complete website redesign. In just 4 months, we delivered a conversion-optimized, lightning-fast site that transformed their digital presence.',
      tooltipValue: '185%',
      tooltipLabel: 'CONVERSIONS',
      quote:
        'The new website is stunning and performs beyond anything we imagined. Our leads tripled within the first month of launch.',
      author: 'Elena Rossi',
      role: 'Founder, Luxe Interiors',
      avatarId: 47,
    },
    logos: ['React', 'Next.js', 'WordPress', 'Shopify', 'Webflow', 'Figma', 'Vercel', 'AWS'],
    bottomFeatures: [
      {
        title: 'Conversion-First Design',
        desc: 'Every pixel is placed with purpose — designed to guide visitors toward action and maximize conversions.',
        icon: icons.penTool,
      },
      {
        title: 'Performance Optimized',
        desc: 'Sub-second load times, Core Web Vitals excellence, and buttery-smooth interactions on every device.',
        icon: icons.bolt,
      },
      {
        title: 'Scalable Architecture',
        desc: 'Built on modern tech stacks that grow with your business — from startup to enterprise scale.',
        icon: icons.code,
      },
    ],
  },

  'BRAND STRATEGY & IDENTITY': {
    headerLine1: "We Don't Just Design Brands.",
    headerLine2: 'We Build Legacies.',
    subtext:
      'Our strategic positioning, visual identity systems, and brand frameworks create lasting impressions that resonate with audiences worldwide.',
    topStats: [
      { value: '300+', label: 'Brands Built', icon: icons.award },
      { value: '50+', label: 'Industries', icon: icons.globe },
      { value: '95%', label: 'Brand Recall Improvement', icon: icons.target },
      { value: '100%', label: 'Satisfaction', icon: icons.users },
    ],
    caseStudyStats: [
      { value: '+240%', label: 'Brand Recognition' },
      { value: '+180%', label: 'Engagement' },
      { value: '+65%', label: 'Trust Score' },
      { value: '5.2x', label: 'ROI Achieved' },
    ],
    caseStudy: {
      clientName: 'Meridian Finance',
      industry: 'Financial Services',
      headline: 'Rebranding Meridian\nfor Market Leadership',
      description:
        'Meridian Finance partnered with us for a complete brand overhaul. In 6 months, we delivered a strategic rebrand that repositioned them as the premium choice in financial services.',
      tooltipValue: '240%',
      tooltipLabel: 'RECOGNITION',
      quote:
        'The rebrand completely transformed how clients perceive us. We went from a regional player to a nationally recognized brand.',
      author: 'David Park',
      role: 'CEO, Meridian Finance',
      avatarId: 53,
    },
    logos: ['Adobe', 'Figma', 'Canva', 'Pantone', 'Brandpad', 'Frontify', 'Coolors', 'InDesign'],
    bottomFeatures: [
      {
        title: 'Strategic Positioning',
        desc: 'We define your unique market position through research, competitive analysis, and audience insight.',
        icon: icons.search,
      },
      {
        title: 'Visual Excellence',
        desc: 'Every visual element is crafted to communicate your brand story with clarity and emotional impact.',
        icon: icons.palette,
      },
      {
        title: 'Brand Consistency',
        desc: 'Comprehensive brand systems that ensure cohesive expression across every touchpoint and channel.',
        icon: icons.shield,
      },
    ],
  },

  'CONTENT MARKETING': {
    headerLine1: "We Don't Just Create Content.",
    headerLine2: 'We Drive Conversations.',
    subtext:
      'Our content-led strategies, SEO-optimized storytelling, and multi-channel distribution build authority and generate qualified leads at scale.',
    topStats: [
      { value: '10,000+', label: 'Pieces Published', icon: icons.fileText },
      { value: '50M+', label: 'Impressions', icon: icons.chart },
      { value: '30+', label: 'Niches', icon: icons.globe },
      { value: '3.5x', label: 'Avg Engagement', icon: icons.target },
    ],
    caseStudyStats: [
      { value: '+380%', label: 'Organic Traffic' },
      { value: '+520%', label: 'Blog Engagement' },
      { value: '+190%', label: 'Leads Generated' },
      { value: '7.1x', label: 'ROI Achieved' },
    ],
    caseStudy: {
      clientName: 'HealthSync',
      industry: 'Health-Tech',
      headline: 'Growing HealthSync\nThrough Content Authority',
      description:
        'HealthSync partnered with us to build thought leadership in the competitive health-tech space. In 10 months, we transformed their blog into a lead-generation powerhouse through strategic content.',
      tooltipValue: '380%',
      tooltipLabel: 'TRAFFIC',
      quote:
        'Their content strategy turned our blog from an afterthought into our #1 lead source. The quality and consistency have been remarkable.',
      author: 'Dr. Lisa Nguyen',
      role: 'CEO, HealthSync',
      avatarId: 25,
    },
    logos: ['WordPress', 'HubSpot', 'Notion', 'Grammarly', 'Canva', 'Buffer', 'SEMrush', 'BuzzSumo'],
    bottomFeatures: [
      {
        title: 'Content-Led Growth',
        desc: 'We build content ecosystems that attract, educate, and convert your ideal audience at every stage.',
        icon: icons.fileText,
      },
      {
        title: 'SEO-Optimized Content',
        desc: 'Every piece is strategically crafted to rank, drive traffic, and establish topical authority.',
        icon: icons.search,
      },
      {
        title: 'Multi-Channel Distribution',
        desc: 'We amplify your content across blogs, social, email, and syndication networks for maximum reach.',
        icon: icons.share,
      },
    ],
  },

  'MARKETING AUTOMATION & CRM': {
    headerLine1: "We Don't Just Automate Tasks.",
    headerLine2: 'We Orchestrate Growth.',
    subtext:
      'Our intelligent automation workflows, CRM integrations, and lead management systems turn manual processes into scalable revenue engines.',
    topStats: [
      { value: '1,000+', label: 'Workflows Built', icon: icons.workflow },
      { value: '5M+', label: 'Leads Processed', icon: icons.chart },
      { value: '20+', label: 'Integrations', icon: icons.settings },
      { value: '89%', label: 'Efficiency Gain', icon: icons.target },
    ],
    caseStudyStats: [
      { value: '+340%', label: 'Lead Conversion' },
      { value: '-67%', label: 'Response Time' },
      { value: '+450%', label: 'Email Engagement' },
      { value: '9.3x', label: 'ROI Achieved' },
    ],
    caseStudy: {
      clientName: 'ScaleUp SaaS',
      industry: 'SaaS',
      headline: 'Automating ScaleUp\nfor Hypergrowth',
      description:
        'ScaleUp SaaS partnered with us to automate their entire lead-to-revenue pipeline. In 6 months, we built intelligent workflows that eliminated manual bottlenecks and supercharged conversions.',
      tooltipValue: '340%',
      tooltipLabel: 'CONVERSION',
      quote:
        'Their automation expertise transformed our sales pipeline overnight. What used to take our team hours now happens instantly.',
      author: 'James Rivera',
      role: 'COO, ScaleUp SaaS',
      avatarId: 60,
    },
    logos: ['HubSpot', 'Salesforce', 'ActiveCampaign', 'Zapier', 'Mailchimp', 'Klaviyo', 'GoHighLevel', 'Marketo'],
    bottomFeatures: [
      {
        title: 'Intelligent Automation',
        desc: 'We design smart workflows that respond to behavior, score leads, and trigger actions automatically.',
        icon: icons.workflow,
      },
      {
        title: 'Lead Lifecycle Management',
        desc: 'From first touch to closed deal — we map and optimize every stage of the buyer journey.',
        icon: icons.users,
      },
      {
        title: 'Revenue Attribution',
        desc: 'Full-funnel tracking that connects every touchpoint to revenue, so you know exactly what drives growth.',
        icon: icons.dollar,
      },
    ],
  },
};

// ── Component ───────────────────────────────────────────────────────────────

interface ResultsImpactSectionProps {
  serviceName?: string;
}

export const ResultsImpactSection: React.FC<ResultsImpactSectionProps> = ({ serviceName }) => {
  const config = serviceConfigs[serviceName || ''] || serviceConfigs['SEO & ORGANIC GROWTH'];

  const { topStats, caseStudyStats, caseStudy, logos, bottomFeatures, headerLine1, headerLine2, subtext } = config;

  return (
    <section
      style={{
        width: '100%',
        maxWidth: '100%',
        padding: '100px clamp(24px, 6vw, 90px)',
        backgroundColor: 'var(--bg-primary)',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '1440px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '64px',
          zIndex: 2,
        }}
      >
        {/* Top Header & Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '48px', alignItems: 'flex-start' }}>
          {/* Left Text */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span
                style={{
                  color: 'var(--brand-500)',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontFamily: BarlowFont,
                }}
              >
                RESULTS & IMPACT
              </span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border-light-alt)' }} />
            </div>

            <h2
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontFamily: InterFont,
                fontWeight: 800,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {headerLine1}
              <br />
              <span style={{ color: 'var(--brand-500)' }}>{headerLine2}</span>
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: BarlowFont,
                margin: 0,
                maxWidth: '600px',
              }}
            >
              {subtext}
            </p>
          </div>

          {/* Right Stats Grid */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {topStats.map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ color: 'var(--brand-500)' }}>
                  {stat.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <span style={{ color: 'var(--text-primary)', fontSize: '28px', fontWeight: 800, fontFamily: InterFont }}>
                    {stat.value}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont }}>
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Area: Case Study & Quote */}
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', position: 'relative' }}>
          
          {/* Right side glowing background graphic (positioned absolute to span right area) */}
          <div
            style={{
              position: 'absolute',
              right: '-10%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '600px',
              height: '600px',
              zIndex: 0,
              pointerEvents: 'none',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--brand-500-medium) 0%, transparent 60%)',
              boxShadow: '0 0 100px var(--brand-500-soft)',
            }}
          >
            {/* Swirling energy rings */}
            <div style={{ position: 'absolute', inset: '10%', borderRadius: '50%', border: '2px solid var(--brand-500-strong)', filter: 'blur(4px)', transform: 'scaleY(0.5) rotate(20deg)' }} />
            <div style={{ position: 'absolute', inset: '15%', borderRadius: '50%', border: '1px solid var(--brand-500-strong)', filter: 'blur(2px)', transform: 'scaleY(0.4) rotate(40deg)' }} />
            <div style={{ position: 'absolute', inset: '5%', borderRadius: '50%', border: '1px dashed var(--brand-500-medium)', transform: 'scaleY(0.6) rotate(-10deg)', animation: 'spin 40s linear infinite' }} />
          </div>

          {/* Left Case Study Card */}
          <div
            style={{
              flex: '1 1 500px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: '24px',
              border: '1px solid var(--border-light)',
              padding: '48px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 24px 48px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                <span style={{ color: 'var(--brand-500)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', fontFamily: BarlowFont, textTransform: 'uppercase' }}>
                  CASE STUDY SPOTLIGHT
                </span>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '32px', fontWeight: 800, fontFamily: InterFont, lineHeight: 1.2, whiteSpace: 'pre-line' }}>
                  {caseStudy.headline}
                </h3>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: '24px', fontFamily: BarlowFont, flex: '1 1 200px' }}>
                {caseStudy.description}
              </p>
            </div>

            {/* Stats row inside card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
              {caseStudyStats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: 'var(--brand-500)', fontSize: '24px', fontWeight: 800, fontFamily: InterFont }}>{stat.value}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: BarlowFont }}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Chart Graphic Area */}
            <div style={{ position: 'relative', width: '100%', height: '160px', marginBottom: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 600 160" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 40, 80, 120, 160].map((y, i) => (
                  <g key={y}>
                    <line x1="40" y1={y} x2="600" y2={y} stroke="var(--border-light)" strokeWidth="1" />
                    <text x="20" y={y + 4} fill="var(--text-muted)" fontSize="10" fontFamily={InterFont} textAnchor="end">
                      {400 - (i * 100)}
                    </text>
                  </g>
                ))}
                
                {/* Gradient Fill */}
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--brand-500-strong)" />
                    <stop offset="100%" stopColor="var(--brand-500-soft)" />
                  </linearGradient>
                </defs>
                <path
                  d="M40 140 L90 125 L140 130 L190 110 L240 115 L290 85 L340 90 L390 75 L440 80 L490 50 L540 55 L580 20 L580 160 L40 160 Z"
                  fill="url(#chartGlow)"
                />
                
                {/* Line */}
                <path
                  d="M40 140 L90 125 L140 130 L190 110 L240 115 L290 85 L340 90 L390 75 L440 80 L490 50 L540 55 L580 20"
                  fill="none"
                  stroke="var(--brand-500)"
                  strokeWidth="3"
                />
                
                {/* Data Points */}
                {[
                  [40, 140], [90, 125], [140, 130], [190, 110], [240, 115], 
                  [290, 85], [340, 90], [390, 75], [440, 80], [490, 50], [540, 55], [580, 20]
                ].map((pt, i) => (
                  <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="var(--bg-primary)" stroke="var(--brand-500)" strokeWidth="2" />
                ))}

                {/* X Axis Labels */}
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                  <text key={m} x={40 + (i * 49)} y="155" fill="var(--text-muted)" fontSize="10" fontFamily={InterFont} textAnchor="middle">
                    {m}
                  </text>
                ))}
              </svg>

              {/* Tooltip Popup */}
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '-10px',
                  backgroundColor: 'var(--brand-500)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: 'var(--bg-primary)', fontSize: '14px', fontWeight: 800, fontFamily: InterFont }}>{caseStudy.tooltipValue}</span>
                <span style={{ color: 'rgba(5,8,22,0.7)', fontSize: '9px', fontWeight: 700, fontFamily: BarlowFont, letterSpacing: '0.05em' }}>{caseStudy.tooltipLabel}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
              <button
                className="ca-hover-popup"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: BarlowFont,
                  letterSpacing: '0.1em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                VIEW FULL CASE STUDY
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--bg-card-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-500)' }}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </button>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', border: '1px solid var(--border-light)', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', border: '1px solid var(--border-light)', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Area Quote */}
          <div style={{ flex: '1 1 400px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--brand-500)', marginBottom: '24px' }}>
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
            
            <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '28px', fontWeight: 600, fontFamily: BarlowFont, lineHeight: 1.4, marginBottom: '32px' }}>
              {caseStudy.quote}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src={`https://i.pravatar.cc/100?img=${caseStudy.avatarId}`}
                alt={caseStudy.author}
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: 700, fontFamily: InterFont }}>{caseStudy.author}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '13px', fontFamily: BarlowFont }}>{caseStudy.role}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brands Strip */}
        <div
          style={{
            backgroundColor: 'var(--bg-card-light)',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '24px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginTop: '16px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
            {logos.map((logo, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontWeight: 700, fontFamily: InterFont, fontSize: '18px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'var(--bg-card)', border: '1px solid var(--border-light)' }} />
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Banner */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {bottomFeatures.map((feat, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--brand-500-soft)',
                  border: '1px solid var(--brand-500-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-500)',
                  flexShrink: 0,
                }}
              >
                {feat.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '16px', fontWeight: 700, fontFamily: InterFont }}>
                  {feat.title}
                </span>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', lineHeight: '22px', fontFamily: BarlowFont }}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
