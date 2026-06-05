'use client';

import React, { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 1,
    counter: '01/08',
    name: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    description: 'We help online stores scale revenue through targeted Meta & Google Ads, conversion-focused landing pages, and retention email campaigns that turn browsers into buyers.',
    tags: ['Meta Ads', 'Google Shopping', 'Email Flows', 'CRO'],
  },
  {
    id: 2,
    counter: '02/08',
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    description: 'From private clinics to diagnostic labs, we drive qualified patient leads through local SEO, Google Ads, and reputation management that builds trust online.',
    tags: ['Local SEO', 'Google Ads', 'Reputation Mgmt', 'Lead Gen'],
  },
  {
    id: 3,
    counter: '03/08',
    name: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    description: 'We generate high-quality property leads for developers and agents using precision-targeted campaigns, WhatsApp funnels, and compelling visual creatives.',
    tags: ['Lead Generation', 'Meta Ads', 'WhatsApp Funnel', 'Video Ads'],
  },
  {
    id: 4,
    counter: '04/08',
    name: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    description: 'Coaching academies and online platforms trust us to drive enrollments through YouTube ads, SEO content, and high-converting landing pages.',
    tags: ['YouTube Ads', 'SEO', 'Landing Pages', 'Email Nurture'],
  },
  {
    id: 5,
    counter: '05/08',
    name: 'Restaurants & Food',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    description: 'We increase footfall and online orders for restaurants through social media content, influencer marketing, and Google My Business optimization.',
    tags: ['Social Media', 'Influencer Marketing', 'GMB SEO', 'Reels'],
  },
  {
    id: 6,
    counter: '06/08',
    name: 'Automotive',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
    description: 'Car dealerships and service centers rely on us for lead generation, local search dominance, and ad creatives that drive results.',
    tags: ['Lead Gen', 'Local SEO', 'Google Ads', 'Video Creatives'],
  },
  {
    id: 7,
    counter: '07/08',
    name: 'Finance & Banking',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    description: 'We help fintech brands build credibility and acquire clients through compliant ad strategies, content marketing, and SEO.',
    tags: ['Content Marketing', 'SEO', 'LinkedIn Ads', 'Trust Building'],
  },
  {
    id: 8,
    counter: '08/08',
    name: 'Fashion & Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    description: 'Fashion brands grow with us through scroll-stopping creatives, influencer collaborations, and data-driven paid social campaigns.',
    tags: ['Instagram Ads', 'Influencer Collab', 'Retargeting', 'UGC'],
  },
];

export const IndustriesSection = () => {
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentImg, setCurrentImg] = useState(industries[0].image);
  const [nextImg, setNextImg] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.getAttribute('data-index'));
          if (index === activeIndex) return;

          const newImage = industries[index].image;

          // Start the bottom-to-top wipe reveal
          setNextImg(newImage);
          setIsRevealing(true);
          setActiveIndex(index);

          // After animation completes, swap images and reset
          setTimeout(() => {
            setCurrentImg(newImage);
            setNextImg('');
            setIsRevealing(false);
          }, 600);
        });
      },
      { threshold: 0.55 }
    );

    blockRefs.current.forEach(block => {
      if (block) observer.observe(block);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ width: '50%' }}>
        {industries.map((industry, idx) => (
          <div
            key={industry.id}
            data-index={idx}
            ref={el => { blockRefs.current[idx] = el; }}
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 80px',
              transition: 'all .4s ease',
              opacity: idx === activeIndex ? 1 : 0.35,
              borderLeft:
                idx === activeIndex
                  ? '4px solid var(--accent-blue, #00c2ff)'
                  : '1px solid var(--border-light)',
            }}
          >
            <p style={{ color: 'var(--text-muted)', marginBottom: 16, letterSpacing: '0.1em' }}>
              {industry.counter}
            </p>
            <h2
              style={{
                fontSize: '56px',
                color: idx === activeIndex ? 'var(--accent-blue, #00c2ff)' : 'var(--text-muted)',
                marginBottom: 24,
                transition: '.4s',
              }}
            >
              {industry.name}
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '18px',
                lineHeight: 1.8,
                maxWidth: '600px',
                marginBottom: 32,
              }}
            >
              {industry.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {industry.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 999,
                    border: '1px solid rgba(0,194,255,.25)',
                    background: 'rgba(0,194,255,.08)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE STICKY */}
      <div
        style={{
          width: '50%',
          height: '100vh',
          position: 'sticky',
          top: 0,
          alignSelf: 'flex-start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 50px',
          backgroundColor: 'var(--bg-primary)',
          overflow: 'hidden',
        }}
      >
        {/* IMAGE STACK CONTAINER */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '520px',
            aspectRatio: '1 / 1.3',
            borderRadius: '280px',
            border: '2px solid rgba(0,194,255,.25)',
            boxShadow: '0 0 80px rgba(0,194,255,.2)',
            overflow: 'hidden',
          }}
        >
          {industries.map((item, idx) => {
            const isActive = idx === activeIndex;
            const isPast = idx < activeIndex;

            return (
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',

                  transform: isActive
                    ? 'translateY(0%)'
                    : isPast
                    ? 'translateY(-100%)'
                    : 'translateY(100%)',

                  transition: 'transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)',
                  zIndex: isActive ? 2 : 1,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
