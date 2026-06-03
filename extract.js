const fs = require('fs');

const path = 'src/components/generated/LandingPage.tsx';
const content = fs.readFileSync(path, 'utf8');

function findBlock(str, startSearch, openChar = '{', closeChar = '}') {
  const startIndex = str.indexOf(startSearch);
  if (startIndex === -1) return null;
  let count = 0;
  let started = false;
  let i = startIndex;
  for (; i < str.length; i++) {
    if (str[i] === openChar) {
      count++;
      started = true;
    } else if (str[i] === closeChar) {
      count--;
    }
    if (started && count === 0) {
      break;
    }
  }
  return str.substring(startIndex, i + 1);
}

function findTag(str, startSearch) {
  const startIndex = str.indexOf(startSearch);
  if (startIndex === -1) return null;
  const closeIndex = str.indexOf('</section>', startIndex) + '</section>'.length;
  return str.substring(startIndex, closeIndex);
}

const serviceCards = findBlock(content, 'const serviceCards =', '[', ']');
const portfolioStats = findBlock(content, 'const portfolioStats =', '[', ']');
const portfolioCategories = findBlock(content, 'const portfolioCategories =', '[', ']');
const portfolioProjects = findBlock(content, 'const portfolioProjects =', '[', ']');
const caseStudyCategories = findBlock(content, 'const caseStudyCategories =', '[', ']');
const caseStudyStats = findBlock(content, 'const caseStudyStats =', '[', ']');
const caseStudyFeatured = findBlock(content, 'const caseStudyFeatured =', '{', '}');
const caseStudyCards = findBlock(content, 'const caseStudyCards =', '[', ']');
const blogStats = findBlock(content, 'const blogStats =', '[', ']');
const blogPosts = findBlock(content, 'const blogPosts =', '[', ']');
const valueItems = findBlock(content, 'const valueItems =', '[', ']');
const clientAvatars = findBlock(content, 'const clientAvatars =', '[', ']');
const trustStats = findBlock(content, 'const trustStats =', '[', ']');
const trustAvatars = findBlock(content, 'const trustAvatars =', '[', ']');
const testimonialsData = findBlock(content, 'const testimonialsData =', '[', ']');
const bubblePositions = findBlock(content, 'const bubblePositions =', '[', ']');

const trustSectionComp = findBlock(content, 'const TrustSection: React.FC = () => {', '{', '}');
const testimonialsSectionComp = findBlock(content, 'const TestimonialsSection = () => {', '{', '}');

const heroSection = findTag(content, '<section id="home"');
const servicesSection = findTag(content, '<section id="services"');
const portfolioSection = findTag(content, '<section id="portfolio-showcase"');
const caseStudiesSection = findTag(content, '<section id="case-studies"');
const brandsSection = findTag(content, '<section className="clients-marquee"');
// Wait, is it <section className="clients-marquee"? I need to verify.
// Let's just dump these coordinates to a JSON file so we can view them exactly.

fs.writeFileSync('extract_info.json', JSON.stringify({
  clientAvatars: !!clientAvatars,
  heroSection: !!heroSection,
  servicesSection: !!servicesSection,
  portfolioSection: !!portfolioSection,
  caseStudiesSection: !!caseStudiesSection,
}, null, 2));

console.log("Extraction analysis saved.");
