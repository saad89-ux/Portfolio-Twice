"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServiceDetailEcosystemSection } from './ServiceDetailEcosystemSection';
import { ResultsImpactSection } from './ResultsImpactSection';
import { CaseStudiesSection } from './CaseStudiesSection';
import { FAQSection } from './FAQSection';
import { FinalCTASection } from './FinalCTASection';

export type PageName = 'Home' | 'Services' | 'Portfolio' | 'About Us' | 'Careers' | 'SEO & ORGANIC GROWTH' | 'PERFORMANCE MARKETING' | 'WEB DESIGN & DEVELOPMENT' | 'BRAND STRATEGY & IDENTITY' | 'CONTENT MARKETING' | 'MARKETING AUTOMATION & CRM' | 'Contact' | 'Blog';

interface ServicedetailPageProps {
  
  serviceName?: PageName;
}

const serviceConfigs: Record<string, {
  category: string;
  headlineWord1: string;
  headlineWord2: string;
  headlineWord3: string;
  description: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  metric3: string;
  metric3Label: string;
  metric4: string;
  metric4Label: string;
  metric5: string;
  metric5Label: string;
  challengesTitle: string;
  challenges: Array<{
    title: string;
    description: string;
    iconType: 'chart' | 'eye' | 'funnel' | 'user' | 'gear' | 'shield' | 'mail' | 'database';
  }>;
  frameworkTitle: string;
  frameworkSubtitle: string;
  frameworkSteps: Array<{
    step: string;
    title: string;
    description: string;
    image: string;
    iconType: 'search' | 'target' | 'edit' | 'chart' | 'trophy';
  }>;
  whatsIncludedSubtitle: string;
  whatsIncludedHeadline: string;
  whatsIncludedHeadlineAccent: string;
  whatsIncludedDescription: string;
  whatsIncludedImage: string;
  whatsIncludedLeftTitle: string;
  whatsIncludedLeftDescription: string;
  includedServices: Array<{
    number: string;
    title: string;
    description: string;
    iconType: 'globe' | 'layers' | 'pen' | 'code' | 'megaphone' | 'bar-chart' | 'settings' | 'zap' | 'cpu' | 'link' | 'shield' | 'mail';
  }>;
}> = {
  'SEO & ORGANIC GROWTH': {
    category: 'SEO & ORGANIC GROWTH',
    headlineWord1: 'SEO Solutions',
    headlineWord2: 'That Drive Real',
    headlineWord3: 'Organic Growth.',
    description: 'We combine keyword strategy, technical optimization, and content authority to rank your business higher and drive sustainable organic revenue.',
    metric1: '+320%', metric1Label: 'Organic Growth',
    metric2: '8.6x', metric2Label: 'Average ROI',
    metric3: '$2.45M', metric3Label: 'Organic Revenue',
    metric4: '12,043', metric4Label: 'SEO Leads',
    metric5: '+180%', metric5Label: 'CTR Increase',
    challengesTitle: 'Challenges We Solve In Organic Search',
    challenges: [
      { title: 'Low Search Visibility', description: 'Ranking on page 2 or 3 of search results means your target audience cannot find your business.', iconType: 'eye' },
      { title: 'Stagnant Organic Traffic', description: 'Monthly visits have plateaued despite creating content and optimizing basic tags.', iconType: 'chart' },
      { title: 'Unqualified Leads', description: 'Driving traffic that does not convert, resulting in high bounce rates and low pipeline ROI.', iconType: 'funnel' },
      { title: 'Algorithm Updates', description: 'Frequent changes to search algorithms cause sudden drops in search traffic and revenue.', iconType: 'shield' }
    ],
    frameworkTitle: 'A Proven Process Built for Growth',
    frameworkSubtitle: 'We follow a data-driven framework that ensures every step is strategic, measurable, and aligned with your business objectives.',
    frameworkSteps: [
      { step: '01', title: 'Research & Analysis', description: 'We dive deep into your business, audience, and market to uncover opportunities backed by real data.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
      { step: '02', title: 'Strategy & Planning', description: 'We create a tailored strategy and roadmap designed to achieve your specific growth goals.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
      { step: '03', title: 'Execution', description: 'Our expert team executes the plan with precision, leveraging the best tools, tactics, and channels.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'edit' },
      { step: '04', title: 'Monitor & Optimize', description: 'We continuously monitor results and optimize every element for maximum performance.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart' },
      { step: '05', title: 'Scale & Grow', description: 'We scale what works, eliminate what doesn\'t, and drive sustainable growth over the long term.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80', iconType: 'trophy' }
    ],
    whatsIncludedSubtitle: 'Everything you need. Nothing you don\'t.',
    whatsIncludedHeadline: 'A Complete Suite Built for ',
    whatsIncludedHeadlineAccent: 'Measurable Growth',
    whatsIncludedDescription: 'From strategic planning to execution and optimization, we handle every aspect to deliver real results.',
    whatsIncludedImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80',
    whatsIncludedLeftTitle: 'End-to-end services that drive results',
    whatsIncludedLeftDescription: 'We combine strategy, creativity, data, and technology to build powerful digital experiences that convert.',
    includedServices: [
      { number: '01', title: 'Keyword Strategy', description: 'In-depth keyword research and competitive analysis to target the highest-value search opportunities.', iconType: 'globe' },
      { number: '02', title: 'Technical SEO', description: 'Build a strong technical foundation with site speed, crawlability, and structured data optimization.', iconType: 'settings' },
      { number: '03', title: 'Content Creation', description: 'High-quality, SEO-optimized content that engages your audience and builds topical authority.', iconType: 'pen' },
      { number: '04', title: 'Link Building', description: 'Strategic outreach and link acquisition to boost domain authority and organic rankings.', iconType: 'link' },
      { number: '05', title: 'Local SEO', description: 'Optimize your presence for local searches, Google Business Profile, and geo-targeted keywords.', iconType: 'megaphone' },
      { number: '06', title: 'Analytics & Reporting', description: 'Continuous tracking, analysis, and reporting to measure performance and maximize ROI.', iconType: 'bar-chart' }
    ]
  },
  'PERFORMANCE MARKETING': {
    category: 'PERFORMANCE MARKETING',
    headlineWord1: 'Paid Campaigns',
    headlineWord2: 'That Scale Real',
    headlineWord3: 'Business ROI.',
    description: 'Data-driven paid search, social campaigns, and cost-efficient client acquisition strategies designed to scale revenue fast.',
    metric1: '+420%', metric1Label: 'Ad Conversion',
    metric2: '6.2x', metric2Label: 'ROAS Average',
    metric3: '$4.12M', metric3Label: 'Attributed Sales',
    metric4: '18,500', metric4Label: 'Paid Leads',
    metric5: '+210%', metric5Label: 'CPA Reduction',
    challengesTitle: 'Challenges We Solve In Paid Acquisition',
    challenges: [
      { title: 'Rising Acquisition Costs', description: 'Ad networks are getting more expensive, driving up CPA and shrinking margins.', iconType: 'chart' },
      { title: 'Creative Ad Fatigue', description: 'Campaign performance declines quickly as audiences get tired of seeing the same ads.', iconType: 'eye' },
      { title: 'Wasted Ad Spend', description: 'Difficulty attributing which campaigns actually drive sales and phone calls.', iconType: 'funnel' },
      { title: 'Scaling Bottlenecks', description: 'Paid campaigns lose their efficiency and cost-effectiveness as budget increases.', iconType: 'gear' }
    ],
    frameworkTitle: 'Our Paid Acquisition Framework',
    frameworkSubtitle: 'We execute structured acquisition campaigns that maximize advertising return and optimize user conversion paths.',
    frameworkSteps: [
      { step: '01', title: 'Audits & Tracking', description: 'We audit legacy ad accounts and build clean server-side analytics for exact attribution.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
      { step: '02', title: 'Funnel Strategy', description: 'Map out custom landing page sequences and build hyper-targeted audience segments.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
      { step: '03', title: 'Creative Execution', description: 'Write high-converting copywriting angles and design premium visual ads.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'edit' },
      { step: '04', title: 'A/B Optimizations', description: 'Continuously run experiments on ad creatives, budgets, and bid types.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart' },
      { step: '05', title: 'Scaling Budget', description: 'Safely increase ad budgets on top performers to drive high volume sales.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80', iconType: 'trophy' }
    ],
    whatsIncludedSubtitle: 'Everything you need. Nothing you don\'t.',
    whatsIncludedHeadline: 'A Complete Suite Built for ',
    whatsIncludedHeadlineAccent: 'Maximum ROAS',
    whatsIncludedDescription: 'From campaign architecture to creative testing and scaling, we handle every element of paid acquisition.',
    whatsIncludedImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    whatsIncludedLeftTitle: 'End-to-end campaigns that scale revenue',
    whatsIncludedLeftDescription: 'We combine strategy, creativity, data, and technology to build powerful paid campaigns that convert.',
    includedServices: [
      { number: '01', title: 'Campaign Architecture', description: 'Structured ad account setups with clean campaign hierarchies and precise audience targeting.', iconType: 'layers' },
      { number: '02', title: 'Creative Production', description: 'High-converting ad creatives, copy angles, and video assets tailored to each platform.', iconType: 'pen' },
      { number: '03', title: 'Landing Page Design', description: 'Conversion-optimized landing pages that turn ad clicks into qualified leads and sales.', iconType: 'globe' },
      { number: '04', title: 'Bid Management', description: 'Automated and manual bid strategies that maximize conversions while minimizing acquisition costs.', iconType: 'settings' },
      { number: '05', title: 'Retargeting Funnels', description: 'Multi-touch retargeting sequences that re-engage warm audiences and drive repeat conversions.', iconType: 'megaphone' },
      { number: '06', title: 'Attribution Tracking', description: 'Full-funnel analytics and attribution modeling to measure true campaign performance and ROI.', iconType: 'bar-chart' }
    ]
  },
  'WEB DESIGN & DEVELOPMENT': {
    category: 'WEB DESIGN & DEVELOPMENT',
    headlineWord1: 'Premium Sites',
    headlineWord2: 'That Deliver Real',
    headlineWord3: 'User Engagement.',
    description: 'Crafting stunning, conversion-optimized, and lightning-fast digital interfaces that captivate users and turn traffic into loyal clients.',
    metric1: '+98%', metric1Label: 'Speed Score',
    metric2: '4.5s', metric2Label: 'Lower Load Time',
    metric3: '2.5M+', metric3Label: 'Active Users',
    metric4: '9,820', metric4Label: 'Forms Submitted',
    metric5: '+140%', metric5Label: 'Engagement Rate',
    challengesTitle: 'Challenges We Solve In Digital Experience',
    challenges: [
      { title: 'High Bounce Rates', description: 'Visitors leave your site immediately due to slow loading speeds and confusing layouts.', iconType: 'chart' },
      { title: 'Poor Mobile Layouts', description: 'Web elements and navigation menus fail to scale properly on tablets and phones.', iconType: 'eye' },
      { title: 'Low Lead Conversion', description: 'A lack of clear Call-To-Action buttons and forms causes users to leave empty-handed.', iconType: 'funnel' },
      { title: 'Legacy Technical Debt', description: 'Outdated codebase makes updating content difficult and prone to breaking.', iconType: 'gear' }
    ],
    frameworkTitle: 'Our Design & Development Framework',
    frameworkSubtitle: 'We deliver ultra-responsive, beautiful, and secure web architectures built to engage users.',
    frameworkSteps: [
      { step: '01', title: 'Discovery & UX', description: 'Map out site hierarchies, build functional wireframes, and design user journeys.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
      { step: '02', title: 'Visual Mockups', description: 'Craft stunning UI themes, typography scales, and visual interfaces in Figma.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
      { step: '03', title: 'Clean Development', description: 'Write fast, semantic, and modular React code using modern CSS architectures.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'edit' },
      { step: '04', title: 'Auditing & QA', description: 'Run cross-browser tests, speed tests, and ensure core web vitals are fully green.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart' },
      { step: '05', title: 'Product Launch', description: 'Deploy your web project to reliable edge hostings and setup search console indexes.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80', iconType: 'trophy' }
    ],
    whatsIncludedSubtitle: 'Everything you need. Nothing you don\'t.',
    whatsIncludedHeadline: 'A Complete Suite Built for ',
    whatsIncludedHeadlineAccent: 'Digital Excellence',
    whatsIncludedDescription: 'From wireframes to deployment and beyond, we handle every aspect of your web presence.',
    whatsIncludedImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
    whatsIncludedLeftTitle: 'End-to-end builds that captivate users',
    whatsIncludedLeftDescription: 'We combine strategy, creativity, data, and technology to build powerful digital experiences that convert.',
    includedServices: [
      { number: '01', title: 'UX Research & Wireframes', description: 'User research, journey mapping, and wireframe prototypes to validate the ideal user experience.', iconType: 'globe' },
      { number: '02', title: 'UI Visual Design', description: 'Stunning high-fidelity mockups, design systems, and interaction patterns in Figma.', iconType: 'pen' },
      { number: '03', title: 'Frontend Development', description: 'Clean, modular React code with responsive layouts and smooth micro-animations.', iconType: 'code' },
      { number: '04', title: 'Backend & API', description: 'Scalable, fast, and secure server architecture with RESTful and GraphQL API endpoints.', iconType: 'cpu' },
      { number: '05', title: 'Speed Optimization', description: 'Core Web Vitals tuning, lazy loading, CDN setup, and performance audits for lightning-fast loads.', iconType: 'zap' },
      { number: '06', title: 'QA & Deployment', description: 'Cross-browser testing, CI/CD pipelines, and production deployment to edge hosting platforms.', iconType: 'settings' }
    ]
  },
  'BRAND STRATEGY & IDENTITY': {
    category: 'BRAND STRATEGY & IDENTITY',
    headlineWord1: 'Brand Authority',
    headlineWord2: 'That Commands Real',
    headlineWord3: 'Market Presence.',
    description: 'Creating memorable visual identities, clear brand positioning, and cohesive strategies that connect deeply with your audience.',
    metric1: '95%', metric1Label: 'Brand Recall',
    metric2: '12+', metric2Label: 'Design Awards',
    metric3: '$10M+', metric3Label: 'Brand Value Added',
    metric4: '450+', metric4Label: 'Assets Delivered',
    metric5: '+85%', metric5Label: 'Loyalty Growth',
    challengesTitle: 'Challenges We Solve In Brand Positioning',
    challenges: [
      { title: 'Weak Visual Standout', description: 'Your brand looks and feels identical to competitors, fading into market noise.', iconType: 'eye' },
      { title: 'Confused Messaging', description: 'Prospects cannot understand your core value proposition within the first 5 seconds.', iconType: 'funnel' },
      { title: 'Fragmented Collaterals', description: 'Sales decks, websites, and social channels use mismatched colors and voices.', iconType: 'gear' },
      { title: 'Low Brand Equity', description: 'Failing to establish emotional connection, leading to price-shopping and low loyalty.', iconType: 'shield' }
    ],
    frameworkTitle: 'Our Brand Identity Framework',
    frameworkSubtitle: 'We define cohesive brand guidelines and distinct positioning that makes you unforgettable.',
    frameworkSteps: [
      { step: '01', title: 'Brand Discovery', description: 'Conduct competitor research and profile target audience customer personas.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
      { step: '02', title: 'Core Positioning', description: 'Formulate brand mission statements, values, voice directives, and tone guides.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
      { step: '03', title: 'Identity Design', description: 'Develop standard logos, typography grids, core color palettes, and guidelines.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'edit' },
      { step: '04', title: 'Asset Production', description: 'Assemble sales slide designs, business cards, and social media imagery kits.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart' },
      { step: '05', title: 'Brand Launch', description: 'Enable your team to deploy your brand strategy across all digital channels.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80', iconType: 'trophy' }
    ],
    whatsIncludedSubtitle: 'Everything you need. Nothing you don\'t.',
    whatsIncludedHeadline: 'A Complete Suite Built for ',
    whatsIncludedHeadlineAccent: 'Brand Authority',
    whatsIncludedDescription: 'From brand discovery to full identity systems, we craft every element to position you as an industry leader.',
    whatsIncludedImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=700&q=80',
    whatsIncludedLeftTitle: 'End-to-end branding that resonates',
    whatsIncludedLeftDescription: 'We combine strategy, creativity, data, and technology to build powerful brand identities that connect.',
    includedServices: [
      { number: '01', title: 'Brand Discovery', description: 'Competitive research, audience profiling, and brand audit to uncover positioning opportunities.', iconType: 'globe' },
      { number: '02', title: 'Visual Identity', description: 'Logo design, color palettes, typography systems, and comprehensive brand guidelines.', iconType: 'pen' },
      { number: '03', title: 'Brand Messaging', description: 'Core value propositions, taglines, voice guidelines, and messaging frameworks.', iconType: 'megaphone' },
      { number: '04', title: 'Collateral Design', description: 'Business cards, presentation templates, social media kits, and marketing materials.', iconType: 'layers' },
      { number: '05', title: 'Brand Strategy', description: 'Market positioning, differentiation strategy, and long-term brand growth roadmap.', iconType: 'bar-chart' },
      { number: '06', title: 'Brand Guidelines', description: 'Comprehensive style guides ensuring consistent brand application across all touchpoints.', iconType: 'shield' }
    ]
  },
  'CONTENT MARKETING': {
    category: 'CONTENT MARKETING',
    headlineWord1: 'High-Value Content',
    headlineWord2: 'That Builds Real',
    headlineWord3: 'Audience Trust.',
    description: 'Publishing authority-building blogs, white papers, and social content that educate your market and nurture prospects into buyers.',
    metric1: '+280%', metric1Label: 'Readership',
    metric2: '3.4x', metric2Label: 'More Shares',
    metric3: '1.2M+', metric3Label: 'Content Views',
    metric4: '8,400', metric4Label: 'Subscribers',
    metric5: '+95%', metric5Label: 'Nurture Conversion',
    challengesTitle: 'Challenges We Solve In Editorial Authority',
    challenges: [
      { title: 'Low User Engagement', description: 'Articles are published but fail to generate views, bookmarks, or social shares.', iconType: 'eye' },
      { title: 'Inconsistent Cadence', description: 'Marketing teams struggle to regularly write and release high-quality resources.', iconType: 'gear' },
      { title: 'Poor Content Strategy', description: 'Writing about topics that fail to generate organic interest or target search keywords.', iconType: 'funnel' },
      { title: 'No Revenue Attribution', description: 'Inability to track how reading a blog post drives eventual customer sign-ups.', iconType: 'chart' }
    ],
    frameworkTitle: 'Our Content Authority Framework',
    frameworkSubtitle: 'We create authority-building resources that nurture your users and improve seo indexes.',
    frameworkSteps: [
      { step: '01', title: 'Keyword Research', description: 'Discover top search topics, evaluate search volumes, and construct briefs.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
      { step: '02', title: 'Content Calendar', description: 'Map out content pill schedules and assign writers to specific content pieces.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
      { step: '03', title: 'Expert Drafting', description: 'Research, write, and refine long-form blog guides containing custom images.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'edit' },
      { step: '04', title: 'SEO Optimization', description: 'Embed target internal links, add schema markup, and design call-to-actions.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart' },
      { step: '05', title: 'Promotion & Share', description: 'Promote articles to your email lists, social channels, and acquire backlinks.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80', iconType: 'trophy' }
    ],
    whatsIncludedSubtitle: 'Everything you need. Nothing you don\'t.',
    whatsIncludedHeadline: 'A Complete Suite Built for ',
    whatsIncludedHeadlineAccent: 'Content Authority',
    whatsIncludedDescription: 'From content strategy to distribution and analytics, we handle every aspect of editorial excellence.',
    whatsIncludedImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=80',
    whatsIncludedLeftTitle: 'End-to-end content that builds trust',
    whatsIncludedLeftDescription: 'We combine strategy, creativity, data, and technology to build powerful content engines that convert.',
    includedServices: [
      { number: '01', title: 'Content Strategy', description: 'Topic research, editorial calendars, and content pillars aligned with your business objectives.', iconType: 'globe' },
      { number: '02', title: 'Blog & Article Writing', description: 'Long-form, SEO-optimized articles and guides that establish thought leadership.', iconType: 'pen' },
      { number: '03', title: 'Social Content', description: 'Engaging social media posts, carousels, and video scripts tailored to each platform.', iconType: 'megaphone' },
      { number: '04', title: 'Email Newsletters', description: 'Compelling email sequences and newsletters that nurture subscribers into customers.', iconType: 'mail' },
      { number: '05', title: 'Content Distribution', description: 'Multi-channel promotion strategies to maximize reach, engagement, and backlink acquisition.', iconType: 'zap' },
      { number: '06', title: 'Performance Analytics', description: 'Content performance tracking, A/B testing, and data-driven optimization for continuous improvement.', iconType: 'bar-chart' }
    ]
  },
  'MARKETING AUTOMATION & CRM': {
    category: 'MARKETING AUTOMATION & CRM',
    headlineWord1: 'Smart Systems',
    headlineWord2: 'That Automate Real',
    headlineWord3: 'Pipeline Growth.',
    description: 'Streamlining customer journeys, email automation sequences, and CRM architectures to close deals automatically while you sleep.',
    metric1: '+150%', metric1Label: 'Sales Velocity',
    metric2: '92%', metric2Label: 'CRM Adoption',
    metric3: '$3.8M', metric3Label: 'Automated Pipeline',
    metric4: '14,200', metric4Label: 'Nurtured Leads',
    metric5: '+310%', metric5Label: 'Email Open Rate',
    challengesTitle: 'Challenges We Solve In Sales Operations',
    challenges: [
      { title: 'Manual Follow-ups', description: 'Sales teams spend hours copying and pasting emails instead of closing warm leads.', iconType: 'mail' },
      { title: 'Disconnected Data Silos', description: 'CRM, email tools, and website lead forms are not synced, causing lead leakage.', iconType: 'database' },
      { title: 'High Customer Churn', description: 'Onboarding flows are messy, leading to early cancellations and low retention.', iconType: 'shield' },
      { title: 'Inaccurate Reporting', description: 'Lacking full funnel tracking makes it impossible to predict next month sales volume.', iconType: 'chart' }
    ],
    frameworkTitle: 'Our Systems Automation Framework',
    frameworkSubtitle: 'We setup smart pipeline triggers that automate communication sequences and CRM updates.',
    frameworkSteps: [
      { step: '01', title: 'Process Audit', description: 'Analyze your client journey paths, evaluate lead speeds, and discover gaps.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
      { step: '02', title: 'CRM Architecture', description: 'Setup custom contact property flows, deal pipelines, and task triggers.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
      { step: '03', title: 'Sequence Creation', description: 'Write automated email onboarding series and build workflow rules.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'edit' },
      { step: '04', title: 'Tools Integration', description: 'Sync Calendly schedulers, Stripe payments, and website forms with CRM.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart' },
      { step: '05', title: 'Refining Scoring', description: 'Adjust scoring metrics, monitor spam ratings, and optimize conversions.', image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80', iconType: 'trophy' }
    ],
    whatsIncludedSubtitle: 'Everything you need. Nothing you don\'t.',
    whatsIncludedHeadline: 'A Complete Suite Built for ',
    whatsIncludedHeadlineAccent: 'Pipeline Automation',
    whatsIncludedDescription: 'From CRM architecture to automated workflows and analytics, we handle every element of your sales operations.',
    whatsIncludedImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    whatsIncludedLeftTitle: 'End-to-end systems that close deals',
    whatsIncludedLeftDescription: 'We combine strategy, creativity, data, and technology to build powerful automation pipelines that convert.',
    includedServices: [
      { number: '01', title: 'CRM Setup & Config', description: 'Custom CRM architecture with deal pipelines, contact properties, and automation triggers.', iconType: 'settings' },
      { number: '02', title: 'Email Automation', description: 'Drip campaigns, onboarding sequences, and behavior-triggered email workflows.', iconType: 'mail' },
      { number: '03', title: 'Lead Scoring', description: 'Intelligent scoring models that prioritize your hottest leads for sales team follow-up.', iconType: 'bar-chart' },
      { number: '04', title: 'Integration Setup', description: 'Connect your CRM with payment systems, calendars, forms, and third-party tools.', iconType: 'link' },
      { number: '05', title: 'Workflow Automation', description: 'Task assignment, status updates, and notification triggers that eliminate manual processes.', iconType: 'zap' },
      { number: '06', title: 'Reporting Dashboards', description: 'Custom dashboards with real-time pipeline metrics, forecasting, and conversion analytics.', iconType: 'cpu' }
    ]
  }
};

const ChallengeIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'chart':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>;
    case 'eye':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>;
    case 'funnel':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>;
    case 'user':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>;
    case 'gear':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>;
    case 'shield':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>;
    case 'mail':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>;
    case 'database':
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>;
    default:
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 4px var(--brand-500-strong))' }}>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>;
  }
};

const ChallengeCard: React.FC<{
  title: string;
  description: string;
  iconType: string;
}> = ({ title, description, iconType }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="ca-hover-popup"
      style={{
        backgroundColor: 'var(--bg-card-alt)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        border: hovered ? '1px solid var(--brand-400-strong)' : '1px solid var(--border-light)',
        padding: '32px 24px',
        boxSizing: 'border-box',
        boxShadow: hovered ? '0 15px 30px var(--brand-400-soft)' : '0 10px 25px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: '1',
        minWidth: '260px',
        cursor: 'pointer'
      }}
    >
      {/* Icon Frame */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: hovered 
          ? 'linear-gradient(135deg, var(--brand-400-strong), var(--brand-500-soft))' 
          : 'linear-gradient(135deg, var(--brand-400-medium), var(--brand-500-soft))',
        border: hovered ? '1px solid var(--brand-400-strong)' : '1px solid var(--brand-400-medium)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: hovered ? '0 0 12px var(--brand-400-strong)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <ChallengeIcon type={iconType} />
      </div>

      {/* Card Title */}
      <h3 style={{
        color: 'var(--text-primary)',
        fontSize: '18px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 700,
        margin: '20px 0 0 0',
        lineHeight: '1.3'
      }}>
        {title}
      </h3>

      {/* Card Description */}
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400,
        margin: '12px 0 0 0',
        lineHeight: '1.5'
      }}>
        {description}
      </p>
    </div>
  );
};

const toolsData = [
  { name: 'Google Analytics 4', category: 'Analytics', description: 'Comprehensive insights into user behavior, traffic sources, and conversions.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', iconType: 'chart-bar' },
  { name: 'Google Search Console', category: 'SEO', description: 'Monitor search performance, track rankings, and identify growth opportunities.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80', iconType: 'search' },
  { name: 'Ahrefs', category: 'SEO', description: 'Powerful SEO tool for keyword research, backlink analysis, and competitor insights.', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', iconType: 'target' },
  { name: 'SEMrush', category: 'SEO', description: 'All-in-one toolkit for SEO, PPC, content, and competitive research.', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80', iconType: 'globe' },
  { name: 'Google Ads', category: 'Advertising', description: 'Create, manage, and optimize ad campaigns that drive qualified traffic and conversions.', image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=600&q=80', iconType: 'megaphone' },
  { name: 'Meta Ads Manager', category: 'Advertising', description: 'Run targeted campaigns across Facebook and Instagram to maximize ROI.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80', iconType: 'users' },
  { name: 'Surfer SEO', category: 'Content', description: 'Optimize content with data-driven recommendations for higher rankings.', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80', iconType: 'pen-tool' },
  { name: 'Figma', category: 'Design & Development', description: 'Collaborative design tool for creating stunning digital experiences.', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80', iconType: 'layout' }
];

const ToolIcon = ({ type }: { type: string }) => {
  const color = "var(--brand-500-strong)";
  switch (type) {
    case 'chart-bar': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>;
    case 'search': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>;
    case 'target': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
    case 'globe': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
    case 'megaphone': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
    case 'users': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
    case 'pen-tool': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>;
    case 'layout': return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>;
    default: return null;
  }
};

const ToolsPlatformSection: React.FC<{ serviceName?: string }> = ({ serviceName }) => {
  const getDefaultCategory = () => {
    switch (serviceName) {
      case 'SEO & ORGANIC GROWTH': return 'SEO';
      case 'PERFORMANCE MARKETING': return 'Advertising';
      case 'WEB DESIGN & DEVELOPMENT': return 'Design & Development';
      case 'CONTENT MARKETING': return 'Content';
      case 'MARKETING AUTOMATION & CRM': return 'Automation';
      case 'BRAND STRATEGY & IDENTITY': return 'Design & Development'; // Or general
      default: return 'All Tools';
    }
  };
  const [activeCategory, setActiveCategory] = useState<string>(getDefaultCategory());
  const categories = ['All Tools', 'Analytics', 'SEO', 'Advertising', 'Content', 'Automation', 'Design & Development'];

  const filteredTools = activeCategory === 'All Tools' ? toolsData : toolsData.filter(t => t.category === activeCategory || (activeCategory === 'Design & Development' && t.category === 'Design'));

  return (
    <section className="tools-section" style={{ width: '100%', padding: '100px 86px', backgroundColor: 'var(--bg-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box', borderTop: '1px solid var(--border-light)' }}>
      <style>{`
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 1268px;
        }
        @media (max-width: 1024px) {
          .tools-section { padding: 60px 32px !important; }
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <span style={{ color: 'var(--brand-400-strong)', fontSize: '13px', fontFamily: '"Barlow", sans-serif', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>
        TOOLS & PLATFORMS
      </span>
      <h2 style={{ color: 'var(--text-primary)', fontSize: '42px', fontFamily: '"Barlow", sans-serif', fontWeight: 800, textAlign: 'center', margin: '0 0 16px 0', letterSpacing: '-0.5px' }}>
        Enterprise-Grade Tools. Better Results.
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '16px', fontFamily: '"Barlow", sans-serif', fontWeight: 400, textAlign: 'center', maxWidth: '600px', lineHeight: '1.6', margin: '0 0 48px 0' }}>
        We leverage industry-leading platforms and cutting-edge technologies to deliver data-driven strategies and measurable growth.
      </p>
      
      {/* Tabs */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '56px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '12px 28px',
              borderRadius: '30px',
              border: cat === activeCategory ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
              background: cat === activeCategory ? 'linear-gradient(135deg, var(--brand-400-strong), var(--brand-500-strong))' : 'var(--bg-card-light)',
              color: activeCategory === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '14px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: cat === activeCategory ? '0 8px 20px var(--brand-400-medium)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (cat !== activeCategory) {
                e.currentTarget.style.backgroundColor = 'var(--border-light)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }
            }}
            onMouseLeave={(e) => {
              if (cat !== activeCategory) {
                e.currentTarget.style.backgroundColor = 'var(--bg-card-light)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="tools-grid">
        {filteredTools.map((tool, idx) => (
          <div key={idx} className="ca-hover-popup" style={{ 
            backgroundColor: 'rgba(7, 10, 24, 0.7)', 
            border: '1px solid rgba(255, 255, 255, 0.05)', 
            borderRadius: '16px', 
            overflow: 'hidden', 
            transition: 'all 0.3s ease', 
            display: 'flex', 
            flexDirection: 'column',
            backdropFilter: 'blur(12px)',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.4), 0 0 20px var(--brand-500-soft)';
            e.currentTarget.style.borderColor = 'var(--brand-500-medium)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'var(--border-light)';
          }}
          >
            <div style={{ width: '100%', height: '180px', overflow: 'hidden', padding: '16px 16px 0', boxSizing: 'border-box' }}>
              <img src={tool.image} alt={tool.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '28px', backgroundColor: 'var(--border-light)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ToolIcon type={tool.iconType} />
                </div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '18px', fontFamily: '"Barlow", sans-serif', fontWeight: 700, margin: 0 }}>{tool.name}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontFamily: '"Barlow", sans-serif', fontWeight: 400, margin: '0 0 24px 0', lineHeight: '1.5', flex: 1 }}>{tool.description}</p>
              
              <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', border: '1px solid var(--brand-500-strong)', backgroundColor: 'var(--brand-500-soft)', color: 'var(--brand-500-strong)', fontSize: '12px', fontFamily: '"Barlow", sans-serif', fontWeight: 600, alignSelf: 'flex-start' }}>
                {tool.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const ServicedetailPage: React.FC<ServicedetailPageProps> = ({ serviceName }) => {
  const router = useRouter();

  const currentKey = serviceName && serviceConfigs[serviceName] ? serviceName : 'SEO & ORGANIC GROWTH';
  const config = serviceConfigs[currentKey];

  return <div style={{
    width: '100%',
    minHeight: '100vh',
    backgroundColor: 'var(--bg-primary)',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <style>{`
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.35; filter: drop-shadow(0 0 2px var(--brand-500-medium)); }
        50% { opacity: 0.85; filter: drop-shadow(0 0 10px var(--brand-500-strong)); }
      }
      @keyframes float-slow-1 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      @keyframes float-slow-2 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      @keyframes float-slow-3 {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @media (max-width: 1024px) {
        .hero-section-detail {
          flex-direction: column !important;
          padding: 60px 32px !important;
          gap: 48px !important;
        }
        .left-hero-content {
          width: 100% !important;
          max-width: 100% !important;
          text-align: center;
          align-items: center;
        }
        .left-hero-content h1 {
          font-size: 48px !important;
        }
        .left-hero-content p {
          margin: 0 auto !important;
        }
        .left-hero-content .cta-buttons-row {
          justify-content: center;
        }
        .right-dashboard-container {
          width: 100% !important;
          max-width: 580px !important;
          height: 520px !important;
        }
        .bottom-panel {
          flex-direction: column !important;
          padding: 32px !important;
          gap: 32px !important;
        }
        .bottom-panel > div {
          width: 100% !important;
          justify-content: center !important;
          text-align: center;
        }
      }
      @media (max-width: 1024px) {
        .challenge-section {
          padding: 60px 32px 80px !important;
        }
        .challenge-section h2 {
          font-size: 32px !important;
          margin-bottom: 36px !important;
        }
        .challenges-grid {
          display: flex !important;
          flex-direction: row !important;
          overflow-x: auto !important;
          gap: 16px !important;
          padding-bottom: 24px !important;
          width: 100% !important;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .challenges-grid > div {
          scroll-snap-align: start;
          flex-shrink: 0 !important;
          width: 280px !important;
        }
      }
      @media (max-width: 1024px) {
        .framework-section {
          padding: 60px 32px 60px !important;
        }
        .framework-section h2 {
          font-size: 32px !important;
        }
        .framework-timeline-row {
          display: none !important;
        }
        .framework-cards-grid {
          display: flex !important;
          flex-direction: row !important;
          overflow-x: auto !important;
          gap: 16px !important;
          padding-bottom: 24px !important;
          width: 100% !important;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .framework-cards-grid > div {
          scroll-snap-align: start;
          flex-shrink: 0 !important;
          width: 280px !important;
        }
        .framework-bottom-bar {
          flex-direction: column !important;
          text-align: center !important;
          padding: 24px 20px !important;
          gap: 20px !important;
        }
        .framework-bar-checks {
          justify-content: center !important;
          gap: 16px !important;
        }
      }
      @media (max-width: 768px) {
        .nav-header { padding: 0 32px !important; }
      }
      @media (min-width: 1024px) {
        .hamburger-btn { display: none !important; }
        .desktop-nav { display: flex !important; }
        .desktop-cta { display: flex !important; }
      }
    `}</style>

    {/* Service Hero Section */}
    <section className="hero-section-detail" style={{
      width: '100%',
      padding: '80px 86px 40px',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      gap: '60px',
      minHeight: '600px',
      boxSizing: 'border-box'
    }}>
      {/* Left Content */}
      <div className="left-hero-content" style={{
        flex: 1.1,
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}>
        {/* Service Category Label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--brand-400-strong)',
          fontSize: '14px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 700,
          letterSpacing: '1.5px'
        }}>
          {/* Hexagon icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-400-strong)" strokeWidth="2">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          {config.category}
        </div>

        {/* Main Headline with Gradient */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h1 style={{
            fontSize: '60px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 800,
            lineHeight: '1.15',
            margin: 0,
            color: 'var(--text-primary)',
            letterSpacing: '-1px'
          }}>
            {config.headlineWord1}
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--brand-500-strong), var(--brand-400-strong))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {config.headlineWord2}
            </span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--brand-400-strong), var(--brand-500-strong))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {config.headlineWord3}
            </span>
          </h1>

          <p style={{
            fontSize: '16px',
            fontFamily: '"Barlow", sans-serif',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            maxWidth: '520px',
            margin: 0
          }}>
            {config.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="cta-buttons-row" style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Book A Strategy Call Button */}
          <button onClick={() => router.push('/contact')} style={{
            padding: '14px 28px',
            background: 'linear-gradient(135deg, var(--brand-500-strong), var(--brand-400-strong))',
            border: 'none',
            borderRadius: '30px',
            color: 'var(--text-primary)',
            fontSize: '15px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 20px var(--brand-500-medium)'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 28px var(--brand-500-strong)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 20px var(--brand-500-medium)';
          }}>
            Book A Strategy Call
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              backgroundColor: 'var(--bg-card-light)',
              borderRadius: '50%',
              fontSize: '14px'
            }}>→</span>
          </button>

          {/* View Case Studies Link */}
          <button style={{
            padding: '14px 28px',
            backgroundColor: 'transparent',
            border: '1px solid var(--border-light)',
            borderRadius: '30px',
            color: 'var(--text-primary)',
            fontSize: '15px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--brand-500-soft)';
            e.currentTarget.style.borderColor = 'var(--brand-500-strong)';
            e.currentTarget.style.color = 'var(--brand-500-strong)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'var(--border-light)';
            e.currentTarget.style.color = 'var(--text-primary)';
          }}>
            View Case Studies
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              backgroundColor: 'var(--border-light)',
              borderRadius: '50%',
              fontSize: '12px'
            }}>▷</span>
          </button>
        </div>
      </div>

      {/* Right Content - Animated Interactive Sci-Fi Dashboard */}
      <div className="right-dashboard-container" style={{
        flex: 1.1,
        height: '580px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        {/* Orbit Paths and Connecting lines */}
        <svg width="100%" height="100%" viewBox="0 0 600 580" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
          <defs>
            <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--brand-500-strong)" />
              <stop offset="100%" stopColor="var(--brand-400-strong)" />
            </linearGradient>
          </defs>

          {/* Dotted orbits */}
          <circle cx="300" cy="290" r="150" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="300" cy="290" r="230" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" strokeDasharray="4 12" />

          {/* Dotted connecting lines from cards to central gauge */}
          <line x1="300" y1="290" x2="130" y2="110" stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="5 5" style={{ animation: 'pulse-glow 6s infinite' }} />
          <line x1="300" y1="290" x2="470" y2="130" stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="5 5" style={{ animation: 'pulse-glow 6s infinite' }} />
          <line x1="300" y1="290" x2="110" y2="290" stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="5 5" style={{ animation: 'pulse-glow 6s infinite' }} />
          <line x1="300" y1="290" x2="490" y2="320" stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="5 5" style={{ animation: 'pulse-glow 6s infinite' }} />
          <line x1="300" y1="290" x2="270" y2="480" stroke="url(#orbitGlow)" strokeWidth="1.5" strokeDasharray="5 5" style={{ animation: 'pulse-glow 6s infinite' }} />

          {/* Glowing junction nodes */}
          <circle cx="130" cy="110" r="4.5" fill="var(--brand-500-strong)" style={{ filter: 'drop-shadow(0 0 6px var(--brand-500-strong))' }} />
          <circle cx="470" cy="130" r="4.5" fill="var(--brand-400-strong)" style={{ filter: 'drop-shadow(0 0 6px var(--brand-400-strong))' }} />
          <circle cx="110" cy="290" r="4.5" fill="var(--brand-500-strong)" style={{ filter: 'drop-shadow(0 0 6px var(--brand-500-strong))' }} />
          <circle cx="490" cy="320" r="4.5" fill="var(--brand-400-strong)" style={{ filter: 'drop-shadow(0 0 6px var(--brand-400-strong))' }} />
          <circle cx="270" cy="480" r="4.5" fill="var(--brand-500-strong)" style={{ filter: 'drop-shadow(0 0 6px var(--brand-500-strong))' }} />
        </svg>

        {/* Central Glowing Gauge */}
        <div style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2
        }}>
          {/* Spinning dashed ring */}
          <div style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            border: '2px dashed var(--brand-500-medium)',
            animation: 'spin-slow 25s linear infinite'
          }} />
          {/* Glowing pulse ring */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '1.5px solid var(--brand-500-strong)',
            boxShadow: '0 0 25px var(--brand-500-medium), inset 0 0 20px var(--brand-500-medium)',
            animation: 'pulse-glow 5s ease-in-out infinite'
          }} />
          {/* Deep center core */}
          <div style={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            backgroundColor: 'rgba(7, 10, 24, 0.95)',
            border: '2px solid var(--brand-400-strong)',
            boxShadow: '0 0 30px var(--brand-400-strong)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }} className="ca-hover-popup">
            <img
              src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2f27409e-ca8b-4ecc-a6bc-ba60974bd799.png"
              alt="Brand Core"
              style={{
                width: '64px',
                height: '64px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 8px var(--brand-400-strong))'
              }}
            />
          </div>
        </div>

        {/* Orbiting Card 1: Performance Overview */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          width: '210px',
          backgroundColor: 'var(--bg-card-alt)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '16px 20px',
          boxSizing: 'border-box',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          zIndex: 3,
          animation: 'float-slow-1 6s ease-in-out infinite'
        }} className="ca-hover-popup">
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Performance Overview
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '8px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: '"Barlow", sans-serif' }}>Growth</span>
            <span style={{ fontSize: '26px', color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif', fontWeight: 800 }}>{config.metric1}</span>
          </div>
          {/* SVG Sparkline (Green Upward Trend) */}
          <svg width="100%" height="45" viewBox="0 0 170 45" style={{ marginTop: '8px' }}>
            <defs>
              <linearGradient id="greenSpark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.25)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
              </linearGradient>
            </defs>
            <path d="M 0 38 Q 30 32 60 25 T 120 18 T 170 6" fill="none" stroke="rgba(16, 185, 129, 1)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 0 38 Q 30 32 60 25 T 120 18 T 170 6 L 170 45 L 0 45 Z" fill="url(#greenSpark)" />
          </svg>
          <div style={{ fontSize: '11px', color: 'rgba(16, 185, 129, 1)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}>
            <span>▲</span> vs last 6 months
          </div>
        </div>

        {/* Orbiting Card 2: Key Metric */}
        <div style={{
          position: 'absolute',
          top: '30px',
          right: '20px',
          width: '180px',
          backgroundColor: 'var(--bg-card-alt)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          animation: 'float-slow-2 8s ease-in-out infinite'
        }} className="ca-hover-popup">
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Key Metric
            </div>
            <div style={{ fontSize: '26px', color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif', fontWeight: 800, marginTop: '4px', lineHeight: '1.2' }}>
              {config.metric2}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: '"Barlow", sans-serif', fontWeight: 500 }}>
              {config.metric2Label}
            </div>
          </div>
          {/* Mini Bar Chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3.5px', height: '40px' }}>
            {[14, 22, 18, 28, 38].map((h, i) => (
              <div key={i} style={{
                width: '4px',
                height: `${h}px`,
                backgroundColor: 'var(--brand-400-strong)',
                borderRadius: '2px',
                opacity: 0.5 + (i * 0.125)
              }} />
            ))}
          </div>
        </div>

        {/* Orbiting Card 3: Total Revenue */}
        <div style={{
          position: 'absolute',
          top: '220px',
          left: '0px',
          width: '180px',
          backgroundColor: 'var(--bg-card-alt)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          zIndex: 3,
          animation: 'float-slow-3 7s ease-in-out infinite'
        }} className="ca-hover-popup">
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {config.metric3Label}
          </div>
          <div style={{ fontSize: '24px', color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif', fontWeight: 800, marginTop: '6px' }}>
            {config.metric3}
          </div>
          {/* Blue sparkline */}
          <svg width="100%" height="32" viewBox="0 0 150 32" style={{ marginTop: '6px' }}>
            <defs>
              <linearGradient id="blueSpark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand-500-medium)" />
                <stop offset="100%" stopColor="var(--brand-500-soft)" />
              </linearGradient>
            </defs>
            <path d="M 0 25 Q 30 18 60 22 T 110 8 T 150 4" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 25 Q 30 18 60 22 T 110 8 T 150 4 L 150 32 L 0 32 Z" fill="url(#blueSpark)" />
          </svg>
          <div style={{ fontSize: '10px', color: 'var(--brand-500-strong)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, marginTop: '4px' }}>
            ▲ 145% vs last 6 months
          </div>
        </div>

        {/* Orbiting Card 4: Conversion Rate */}
        <div style={{
          position: 'absolute',
          top: '250px',
          right: '0px',
          width: '180px',
          backgroundColor: 'var(--bg-card-alt)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          zIndex: 3,
          animation: 'float-slow-1 9s ease-in-out infinite'
        }} className="ca-hover-popup">
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {config.metric5Label}
          </div>
          <div style={{ fontSize: '24px', color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif', fontWeight: 800, marginTop: '6px' }}>
            {config.metric5}
          </div>
          {/* Purple sparkline */}
          <svg width="100%" height="32" viewBox="0 0 150 32" style={{ marginTop: '6px' }}>
            <defs>
              <linearGradient id="purpleSpark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand-400-medium)" />
                <stop offset="100%" stopColor="var(--brand-400-soft)" />
              </linearGradient>
            </defs>
            <path d="M 0 28 Q 20 30 50 16 T 100 18 T 150 4" fill="none" stroke="var(--brand-400-strong)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 0 28 Q 20 30 50 16 T 100 18 T 150 4 L 150 32 L 0 32 Z" fill="url(#purpleSpark)" />
          </svg>
          <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontWeight: 500, marginTop: '4px' }}>
            vs last 6 months
          </div>
        </div>

        {/* Orbiting Card 5: Qualified Leads */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '130px',
          width: '190px',
          backgroundColor: 'var(--bg-card-alt)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: '1px solid var(--border-light)',
          padding: '16px',
          boxSizing: 'border-box',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          animation: 'float-slow-2 7s ease-in-out infinite'
        }} className="ca-hover-popup">
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {config.metric4Label}
            </div>
            <div style={{ fontSize: '24px', color: 'var(--text-primary)', fontFamily: '"Barlow", sans-serif', fontWeight: 800, marginTop: '4px' }}>
              {config.metric4}
            </div>
            <div style={{ fontSize: '10px', color: 'rgba(16, 185, 129, 1)', fontFamily: '"Barlow", sans-serif', fontWeight: 600, marginTop: '2px' }}>
              ▲ +278% vs last 6m
            </div>
          </div>
          {/* Overlapping client avatars mockup */}
          <div style={{ display: 'flex', position: 'relative', width: '56px', height: '24px' }}>
            {[1, 2, 3].map((num) => (
              <img
                key={num}
                src={`https://i.pravatar.cc/40?img=${num + 10}`}
                alt="Client avatar"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '2px solid rgba(7, 10, 24, 1)',
                  position: 'absolute',
                  left: `${(num - 1) * 12}px`,
                  objectFit: 'cover'
                }}
              />
            ))}
          </div>
        </div>

        {/* Orbiting Card 6: Pill Badge */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '30px',
          borderRadius: '30px',
          backgroundColor: 'rgba(7, 10, 24, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-light)',
          padding: '10px 20px',
          boxSizing: 'border-box',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 3,
          animation: 'float-slow-3 10s ease-in-out infinite'
        }} className="ca-hover-popup">
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--brand-400-strong)',
            boxShadow: '0 0 8px var(--brand-400-strong)'
          }} />
          <span style={{
            fontSize: '11px',
            color: 'var(--text-secondary)',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            letterSpacing: '0.5px'
          }}>
            Data-Driven. Result-Focused.
          </span>
        </div>
      </div>
    </section>

    {/* Bottom Trusted Brands & Stats Panel */}
    <div className="bottom-panel" style={{
      width: '100%',
      maxWidth: '1268px',
      margin: '0 auto 60px',
      backgroundColor: 'rgba(7, 10, 24, 0.4)',
      backdropFilter: 'blur(10px)',
      borderRadius: '24px',
      border: '1px solid var(--border-light)',
      padding: '32px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '40px',
      boxSizing: 'border-box'
    }}>
      {/* Left: Trusted Brands */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flex: '1',
        minWidth: '280px'
      }}>
        <span style={{
          color: 'var(--text-muted)',
          fontSize: '11px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }}>
          Trusted by Growing Brands Worldwide
        </span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          opacity: 0.75
        }}>
          {[
            { name: 'Acme Corp', icon: '◈' },
            { name: 'CloudHub', icon: '☁' },
            { name: 'EchoLab', icon: '◖◗' },
            { name: 'IdeaFlow', icon: '⚡' },
            { name: 'Penta', icon: '⬔' },
            { name: 'Quotient', icon: '❝' }
          ].map((logo) => (
            <div
              key={logo.name}
              className="ca-hover-popup"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-primary)',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer'
              }}
            >
              <span style={{ color: 'var(--brand-500-strong)', fontSize: '18px' }}>{logo.icon}</span>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Statistics */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '48px',
        flexWrap: 'wrap',
        flexShrink: 0
      }}>
        {[
          { value: '250+', label: 'Happy Clients', color: 'var(--brand-500-strong)' },
          { value: '$100M+', label: 'Revenue Generated', color: 'var(--brand-400-strong)' },
          { value: '98%', label: 'Client Retention', color: 'var(--brand-500-strong)' }
        ].map((stat, idx) => (
          <div key={idx} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <span style={{
              fontSize: '36px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              background: `linear-gradient(135deg, ${stat.color}, var(--text-primary))`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1'
            }}>
              {stat.value}
            </span>
            <span style={{
              color: 'var(--text-muted)',
              fontSize: '13px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 500
            }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* The Challenge Section */}
    <section className="challenge-section" style={{
      width: '100%',
      padding: '100px 86px 100px',
      backgroundColor: 'rgba(3, 3, 3, 1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      borderTop: '1px solid var(--border-light)'
    }}>
      {/* Subtitle */}
      <span style={{
        color: 'var(--brand-400-strong)',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 700,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        marginBottom: '16px',
        textAlign: 'center'
      }}>
        The Challenge
      </span>

      {/* Main Section Title */}
      <h2 style={{
        color: 'var(--text-primary)',
        fontSize: '40px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 800,
        textAlign: 'center',
        margin: '0 0 54px 0',
        lineHeight: '1.2',
        letterSpacing: '-0.5px'
      }}>
        {config.challengesTitle}
      </h2>

      {/* Responsive Grid/Flex wrapper of challenges */}
      <div className="challenges-grid" style={{
        width: '100%',
        maxWidth: '1268px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        boxSizing: 'border-box'
      }}>
        {config.challenges.map((challenge, idx) => (
          <ChallengeCard
            key={idx}
            title={challenge.title}
            description={challenge.description}
            iconType={challenge.iconType}
          />
        ))}
      </div>

      {/* Carousel dots pagination */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '48px'
      }}>
        {[0, 1, 2, 3].map((dotIndex) => (
          <div
            key={dotIndex}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: dotIndex === 0 ? 'var(--brand-400-strong)' : 'var(--bg-card-light)',
              boxShadow: dotIndex === 0 ? '0 0 8px var(--brand-400-strong)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>

    {/* OUR FRAMEWORK Section */}
    <section className="framework-section" style={{
      width: '100%',
      padding: '100px 86px 80px',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--brand-400-soft) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Section Subtitle */}
      <span style={{
        color: 'var(--brand-500-strong)',
        fontSize: '14px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '16px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        Our Framework
      </span>

      {/* Section Title */}
      <h2 style={{
        color: 'var(--text-primary)',
        fontSize: '42px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 800,
        textAlign: 'center',
        margin: '0 0 12px 0',
        lineHeight: '1.2',
        letterSpacing: '-0.5px',
        position: 'relative',
        zIndex: 1
      }}>
        {config.frameworkTitle}
      </h2>

      {/* Section Description */}
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '16px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400,
        textAlign: 'center',
        maxWidth: '680px',
        lineHeight: '1.6',
        margin: '0 0 56px 0',
        position: 'relative',
        zIndex: 1
      }}>
        {config.frameworkSubtitle}
      </p>

      {/* Timeline Indicators Row */}
      <div className="framework-timeline-row" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1268px',
        marginBottom: '0',
        position: 'relative',
        zIndex: 2
      }}>
        {config.frameworkSteps.map((step, idx) => (
          <React.Fragment key={`timeline-${idx}`}>
            {/* Step Circle */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: idx === 0
                ? 'linear-gradient(135deg, var(--brand-500-strong), var(--brand-400-strong))'
                : 'rgba(7, 10, 24, 0.9)',
              border: idx === 0
                ? 'none'
                : '2px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: idx === 0
                ? '0 0 20px var(--brand-500-strong), 0 0 40px var(--brand-400-medium)'
                : '0 4px 12px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{
                color: 'var(--text-primary)',
                fontSize: '14px',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}>
                {step.step}
              </span>
            </div>

            {/* Connecting dotted line */}
            {idx < config.frameworkSteps.length - 1 && (
              <div style={{
                flex: 1,
                height: '2px',
                backgroundImage: 'linear-gradient(to right, var(--brand-500-strong) 6px, transparent 6px)',
                backgroundSize: '14px 2px',
                backgroundRepeat: 'repeat-x',
                margin: '0 4px'
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Framework Step Cards Grid */}
      <div className="framework-cards-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
        width: '100%',
        maxWidth: '1268px',
        marginTop: '0',
        position: 'relative',
        zIndex: 1
      }}>
        {config.frameworkSteps.map((step, idx) => {
          const iconColors = [
            'var(--brand-500-strong)',
            'var(--brand-400-strong)',
            'var(--brand-500-strong)',
            'var(--brand-400-strong)',
            'var(--brand-500-strong)'
          ];
          const FrameworkStepIcon: React.FC = () => {
            switch (step.iconType) {
              case 'search':
                return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColors[idx]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>;
              case 'target':
                return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColors[idx]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
              case 'edit':
                return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColors[idx]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
              case 'chart':
                return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColors[idx]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>;
              case 'trophy':
                return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColors[idx]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>;
              default:
                return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={iconColors[idx]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>;
            }
          };

          return (
            <div
              key={`card-${idx}`}
              className="framework-step-card ca-hover-popup"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border-light)',
                backgroundColor: 'var(--bg-card-alt)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px var(--brand-500-soft), 0 0 20px var(--brand-400-soft)';
                e.currentTarget.style.borderColor = 'var(--brand-500-strong)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {/* Image Header */}
              <div style={{
                width: '100%',
                height: '140px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                {/* Image overlay gradient */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50px',
                  background: 'linear-gradient(to top, var(--bg-card-alt), transparent)',
                  pointerEvents: 'none'
                }} />
              </div>

              {/* Overlapping Icon Circle */}
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(7, 10, 24, 0.95)',
                border: `2px solid ${iconColors[idx]}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '115px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                boxShadow: `0 0 12px ${iconColors[idx]}40`
              }}>
                <FrameworkStepIcon />
              </div>

              {/* Card Body */}
              <div style={{
                padding: '32px 18px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: 1
              }}>
                {/* Step Title */}
                <h3 style={{
                  color: 'var(--text-primary)',
                  fontSize: '16px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  margin: '0 0 10px 0',
                  lineHeight: '1.3'
                }}>
                  {step.title}
                </h3>

                {/* Step Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: '1.55'
                }}>
                  {step.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div style={{
                width: '100%',
                height: '3px',
                background: idx % 2 === 0
                  ? 'linear-gradient(to right, var(--brand-500-strong), var(--brand-400-strong))'
                  : 'linear-gradient(to right, var(--brand-400-strong), var(--brand-500-strong))'
              }} />
            </div>
          );
        })}
      </div>

      {/* Bottom Comparison Bar */}
      <div className="framework-bottom-bar" style={{
        width: '100%',
        maxWidth: '1268px',
        marginTop: '48px',
        backgroundColor: 'var(--bg-card-alt)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        border: '1px solid var(--border-light)',
        padding: '28px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        boxSizing: 'border-box',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Left Title */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          minWidth: '220px'
        }}>
          <span style={{
            color: 'var(--text-primary)',
            fontSize: '17px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 700,
            lineHeight: '1.3'
          }}>
            What Makes Our Framework Different?
          </span>
          <span style={{
            color: 'var(--text-muted)',
            fontSize: '13px',
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 400
          }}>
            Every step is strategic, measurable, and ROI-focused.
          </span>
        </div>

        {/* Right Checkmarks */}
        <div className="framework-bar-checks" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          {[
            'Data-Driven Decisions',
            'Transparent Process',
            'Agile & Adaptive',
            'Focused on ROI'
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              {/* Checkmark icon */}
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: idx % 2 === 0
                  ? 'linear-gradient(135deg, var(--brand-500-medium), var(--brand-500-soft))'
                  : 'linear-gradient(135deg, var(--brand-400-medium), var(--brand-400-soft))',
                border: idx % 2 === 0
                  ? '1px solid var(--brand-500-strong)'
                  : '1px solid var(--brand-400-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={idx % 2 === 0 ? 'var(--brand-500-strong)' : 'var(--brand-400-strong)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 500,
                whiteSpace: 'nowrap'
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT'S INCLUDED Section */}
    <section className="whats-included-section" style={{
      width: '100%',
      padding: '100px 86px 100px',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      borderTop: '1px solid var(--border-light)'
    }}>
      {/* Section Label */}
      <span style={{
        color: 'var(--brand-500-strong)',
        fontSize: '13px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginBottom: '20px',
        textAlign: 'center',
        padding: '6px 16px',
        borderRadius: '20px',
        border: '1px solid var(--brand-500-medium)',
        backgroundColor: 'var(--brand-500-soft)'
      }}>
        What&apos;s Included
      </span>

      {/* Subtitle */}
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '16px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400,
        textAlign: 'center',
        margin: '0 0 12px 0',
        lineHeight: '1.5'
      }}>
        {config.whatsIncludedSubtitle}
      </p>

      {/* Main Headline */}
      <h2 style={{
        color: 'var(--text-primary)',
        fontSize: '42px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 800,
        textAlign: 'center',
        margin: '0 0 16px 0',
        lineHeight: '1.2',
        letterSpacing: '-0.5px'
      }}>
        {config.whatsIncludedHeadline}
        <span style={{
          background: 'linear-gradient(135deg, var(--brand-500-strong), var(--brand-400-strong))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {config.whatsIncludedHeadlineAccent}
        </span>
      </h2>

      {/* Description */}
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '15px',
        fontFamily: '"Barlow", sans-serif',
        fontWeight: 400,
        textAlign: 'center',
        maxWidth: '560px',
        lineHeight: '1.6',
        margin: '0 0 56px 0'
      }}>
        {config.whatsIncludedDescription}
      </p>

      {/* Main Container Card */}
      <div className="included-main-container" style={{
        width: '100%',
        maxWidth: '1268px',
        backgroundColor: 'var(--bg-card-alt)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        border: '1px solid var(--border-light)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.25)',
        display: 'flex',
        boxSizing: 'border-box'
      }}>

        {/* Left Panel */}
        <div className="included-left-panel" style={{
          width: '320px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid var(--border-light)',
          boxSizing: 'border-box'
        }}>
          {/* Image */}
          <div style={{
            width: '100%',
            height: '220px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img
              src={config.whatsIncludedImage}
              alt="Dashboard preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
            {/* Bottom gradient fade */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to top, var(--bg-card-alt), transparent)',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Text Content */}
          <div style={{
            padding: '24px 28px 32px',
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '22px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 800,
              margin: '0 0 14px 0',
              lineHeight: '1.3'
            }}>
              {config.whatsIncludedLeftTitle}
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '14px',
              fontFamily: '"Barlow", sans-serif',
              fontWeight: 400,
              margin: '0 0 24px 0',
              lineHeight: '1.6'
            }}>
              {config.whatsIncludedLeftDescription}
            </p>

            {/* CTA Link */}
            <button
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--brand-500-strong)',
                fontSize: '13px',
                fontFamily: '"Barlow", sans-serif',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: 0,
                marginTop: 'auto',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--brand-400-strong)';
                e.currentTarget.style.gap = '14px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--brand-500-strong)';
                e.currentTarget.style.gap = '10px';
              }}
            >
              Explore All Services
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: 'var(--brand-500-medium)',
                border: '1px solid var(--brand-500-strong)',
                fontSize: '12px',
                transition: 'all 0.3s ease'
              }}>→</span>
            </button>
          </div>
        </div>

        {/* Right Panel - 3x2 Grid of Service Cards */}
        <div className="included-right-grid" style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          boxSizing: 'border-box'
        }}>
          {config.includedServices.map((service, idx) => {
            const IncludedIcon: React.FC = () => {
              const iconColor = 'var(--brand-500-strong)';
              switch (service.iconType) {
                case 'globe':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
                case 'layers':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
                case 'pen':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
                case 'code':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
                case 'megaphone':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
                case 'bar-chart':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
                case 'settings':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
                case 'zap':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
                case 'cpu':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>;
                case 'link':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
                case 'shield':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
                case 'mail':
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
                default:
                  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>;
              }
            };

            // Determine border styles for the grid cells
            const isTopRow = idx < 3;
            const isLeftCol = idx % 3 === 0;
            const isRightCol = idx % 3 === 2;

            return (
              <div
                key={`included-${idx}`}
                className="included-service-card"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  borderBottom: isTopRow ? '1px solid var(--border-light)' : 'none',
                  borderRight: !isRightCol ? '1px solid var(--border-light)' : 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-500-soft)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--brand-500-soft)',
                  border: '1px solid var(--brand-500-medium)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <IncludedIcon />
                </div>

                {/* Number */}
                <span style={{
                  color: 'var(--brand-500-strong)',
                  fontSize: '14px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}>
                  {service.number}
                </span>

                {/* Title */}
                <h4 style={{
                  color: 'var(--text-primary)',
                  fontSize: '17px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: '1.3'
                }}>
                  {service.title}
                </h4>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  fontFamily: '"Barlow", sans-serif',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: '1.55',
                  flex: 1
                }}>
                  {service.description}
                </p>

                {/* Arrow button */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '4px'
                }}>
                  <div
                    className="ca-hover-popup"
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-card-light)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--brand-500-soft)';
                      e.currentTarget.style.borderColor = 'var(--brand-500-strong)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--bg-card-light)';
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--brand-500-strong)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <ServiceDetailEcosystemSection serviceName={currentKey} />
    <ResultsImpactSection serviceName={currentKey} />
    <CaseStudiesSection serviceName={currentKey} />
    <ToolsPlatformSection serviceName={currentKey} />
    <FAQSection serviceName={currentKey} />
    <FinalCTASection serviceName={currentKey} />
  </div>;
};
