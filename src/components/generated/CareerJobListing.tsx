import React, { useState } from 'react';
interface JobData {
  id: number;
  title: string;
  icon: string;
  salary: string;
  experience: string;
  deadline: string;
  skills: string;
}
const JOBS: JobData[] = [{
  id: 1,
  title: 'Web Designer',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/401f588e-6a0a-439d-9fe7-ed5ea0241b07.svg',
  salary: '$45,000 - $60,000 per year',
  experience: '1+ year',
  deadline: '30/09/2025',
  skills: 'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.'
}, {
  id: 2,
  title: 'Mobile App Developer',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/2e8f9d2d-ff42-4e6f-ae48-965b4c392f0b.svg',
  salary: '$55,000 - $75,000 per year',
  experience: '2+ years',
  deadline: '15/10/2025',
  skills: 'Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.'
}, {
  id: 3,
  title: 'Digital Marketing Specialist',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/8cae1c20-b4a4-4a98-930d-4ad5a4a12cd8.svg',
  salary: '$50,000 - $65,000 per year',
  experience: '3+ years',
  deadline: '20/11/2025',
  skills: 'Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.'
}, {
  id: 4,
  title: 'Project Manager',
  icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/8503f9d0-5d21-4f7d-bf9a-0b2d6dff54bb.svg',
  salary: '$60,000 - $80,000 per year',
  experience: '5+ years',
  deadline: '05/12/2025',
  skills: 'Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.'
}];
const ActionButton = ({
  children,
  width = 'auto',
  height = 'auto',
  fontSize = '14px'
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
  fontSize?: string;
}) => <button className="ca-interactive-btn" style={{
  width,
  height,
  backgroundColor: '#00c2ff',
  color: 'var(--text-primary)',
  padding: '14px 24px',
  borderRadius: '10px',
  border: 'none',
  fontSize,
  fontFamily: '"Barlow", sans-serif',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.2s ease, background-color 0.2s ease',
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}} onMouseEnter={e => {
  e.currentTarget.style.backgroundColor = '#0070E0';
  e.currentTarget.style.transform = 'translateY(-2px)';
}} onMouseLeave={e => {
  e.currentTarget.style.backgroundColor = '#00c2ff';
  e.currentTarget.style.transform = 'translateY(0)';
}}>
    {children}
  </button>;
const FilterDropdown = ({
  label
}: {
  label: string;
}) => <button style={{
  width: '220px',
  height: '56px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  backgroundColor: 'var(--bg-primary)',
  borderRadius: '100px',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease'
}} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#252525'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#191919'}>
    <span style={{
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    fontFamily: '"Barlow", sans-serif'
  }}>{label}</span>
    <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/ec74158c-7da8-4bc0-8f13-2c646777f865.svg" alt="Arrow Down" style={{
    width: '16px',
    height: '16px'
  }} />
  </button>;
const JobCard = ({
  job
}: {
  job: JobData;
}) => <div className="ca-interactive-card" style={{
  display: 'flex',
  flexDirection: 'column',
  padding: '50px',
  gap: '40px',
  backgroundColor: 'var(--bg-primary)',
  borderRadius: '14px',
  border: '1px solid transparent',
  cursor: 'pointer'
}}>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '14px'
  }}>
      <div style={{
      padding: '20px',
      backgroundColor: 'var(--bg-primary)',
      border: '1px solid #333333',
      borderRadius: '12px'
    }}>
        <img src={job.icon} alt={job.title} style={{
        width: '34px',
        height: '34px'
      }} />
      </div>
      <h3 style={{
      color: '#F9EFEC',
      fontSize: '30px',
      fontFamily: '"Roboto Flex", sans-serif',
      fontWeight: 500,
      margin: 0,
      textTransform: 'uppercase'
    }}>
        {job.title}
      </h3>
    </div>

    <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  }}>
      {[{
      label: 'Salary',
      value: job.salary
    }, {
      label: 'Experience',
      value: job.experience
    }, {
      label: 'Deadline',
      value: job.deadline
    }].map((info, idx) => <div key={idx} style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px 16px',
      gap: '8px',
      backgroundColor: 'var(--bg-primary)',
      borderRadius: '45px'
    }}>
          <span style={{
        color: 'var(--text-muted)',
        fontSize: '18px',
        fontFamily: '"Roboto Flex", sans-serif'
      }}>{info.label}</span>
          <div style={{
        width: '4px',
        height: '4px',
        backgroundColor: '#00c2ff',
        borderRadius: '50%'
      }} />
          <span style={{
        color: 'var(--text-muted)',
        fontSize: '18px',
        fontFamily: '"Roboto Flex", sans-serif',
        fontWeight: 500
      }}>{info.value}</span>
        </div>)}
    </div>

    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <h4 style={{
      color: '#F9EFEC',
      fontSize: '24px',
      fontFamily: '"Roboto Flex", sans-serif',
      fontWeight: 500,
      margin: 0,
      textTransform: 'uppercase'
    }}>Skills</h4>
      <p style={{
      color: 'var(--text-muted)',
      fontSize: '18px',
      fontFamily: '"Roboto Flex", sans-serif',
      lineHeight: '27px',
      margin: 0
    }}>{job.skills}</p>
    </div>

    <button style={{
    width: '100%',
    height: '63px',
    backgroundColor: '#00c2ff',
    color: 'var(--text-primary)',
    borderRadius: '12px',
    border: 'none',
    fontSize: '18px',
    fontFamily: '"Roboto Flex", sans-serif',
    fontWeight: 500,
    cursor: 'pointer',
    textTransform: 'capitalize',
    transition: 'background-color 0.2s ease'
  }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#0070E0'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#00c2ff'}>
      Apply Now
    </button>
  </div>;
export const CareerJobListing = () => {
  const [search, setSearch] = useState('');
  return <div style={{
    width: '100%',
    backgroundColor: 'var(--bg-primary)',
    position: 'relative',
    overflowX: 'hidden'
  }}>
      {/* Hero Section */}
      <section style={{
      width: '100%',
      maxWidth: '1254px',
      margin: '53px auto 0',
      height: '376px',
      backgroundColor: 'var(--bg-primary)',
      borderRadius: '48px',
      position: 'relative',
      overflow: 'hidden'
    }}>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9c556e01-75ad-4ab2-94cb-af93bb50c3b5.png" alt="Hero Visual" style={{
          width: '511px',
          height: '376px',
          objectFit: 'cover',
          position: 'absolute',
          left: 0,
          top: 0
        }} />
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/9c556e01-75ad-4ab2-94cb-af93bb50c3b5.png" alt="Hero Visual Overlay" style={{
          width: '511px',
          height: '376px',
          objectFit: 'cover',
          position: 'absolute',
          left: '287px',
          top: '95px',
          opacity: 0.8
        }} />
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/506f6fe1-7c2e-41d1-b608-6c2ddf2ee945.png" alt="Hero Logo" style={{
          position: 'absolute',
          width: '320px',
          right: '-40px',
          top: '18px',
          opacity: 0.6
        }} />
        </div>

        <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '93px 66px'
      }}>
          <h1 style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '40px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 700,
          margin: '0 0 28px 0',
          maxWidth: '420px'
        }}>
            Build the Future with Us
          </h1>
          <p style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: 400,
          margin: '0 0 50px 0',
          maxWidth: '567px',
          lineHeight: '1.5'
        }}>
            We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.
          </p>
          <ActionButton width="210px" height="42px">Explore Open Positions</ActionButton>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
      width: '100%',
      backgroundColor: 'var(--bg-primary)',
      marginTop: '74px',
      padding: '50px 88px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '16px',
      boxSizing: 'border-box'
    }}>
        <FilterDropdown label="Departments" />
        <FilterDropdown label="Experience" />
        <FilterDropdown label="Job Type" />
        <FilterDropdown label="Workplace Type" />
        
        <div style={{
        flex: 1,
        minWidth: '300px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg-primary)',
        borderRadius: '100px',
        padding: '10px 10px 10px 20px',
        gap: '10px'
      }}>
          <input className="ca-interactive-input" type="text" placeholder="Search by keywords..." value={search} onChange={e => setSearch(e.target.value)} style={{
          flex: 1,
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          fontSize: '16px',
          fontFamily: '"Barlow", sans-serif',
          outline: 'none'
        }} />
          <button className="ca-interactive-btn ca-interactive-icon" style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: '#00c2ff',
          border: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/01f555ea-5e77-49a5-b438-e733e85fd207.svg" alt="Search" style={{
            width: '20px'
          }} />
          </button>
        </div>
      </section>

      {/* Job Grid */}
      <section style={{
      maxWidth: '1266px',
      margin: '77px auto 0',
      padding: '0 20px'
    }}>
        <h2 style={{
        color: '#F9EFEC',
        fontSize: '36px',
        fontFamily: '"Roboto Flex", sans-serif',
        fontWeight: 600,
        textAlign: 'center',
        marginBottom: '50px',
        textTransform: 'capitalize'
      }}>
          Open Positions
        </h2>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(580px, 1fr))',
        gap: '20px'
      }}>
          {JOBS.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
      maxWidth: '1097px',
      margin: '160px auto',
      padding: '0 20px'
    }}>
        <div style={{
        width: '100%',
        height: '282px',
        backgroundImage: `url("https://storage.googleapis.com/storage.magicpath.ai/user/411851438805884928/figma-assets/95580a3e-6194-4a51-a034-149b30f2198e.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '64px',
        boxShadow: '2px 4px 15px rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        padding: '48px'
      }}>
          <h2 style={{
          color: 'var(--text-primary)',
          fontSize: '36px',
          fontWeight: 600,
          fontFamily: '"Barlow", sans-serif',
          textTransform: 'uppercase',
          margin: 0,
          textAlign: 'center'
        }}>Ready to discuss</h2>
          <p style={{
          color: 'var(--text-primary)',
          fontSize: '20px',
          fontWeight: 600,
          fontFamily: '"Barlow", sans-serif',
          textTransform: 'capitalize',
          margin: 0,
          textAlign: 'center'
        }}>your product needs with Catalyst Analytic experts?</p>
          <div style={{
          marginTop: '10px'
        }}>
            <ActionButton width="198px">Get In Touch</ActionButton>
          </div>
        </div>
      </section>
    </div>;
};
