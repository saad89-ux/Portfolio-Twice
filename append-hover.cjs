const fs = require('fs');

const css = `
/* Global Picture Hover Effect for Landing Page */
.landing-page img:not(.logo-img):not(.value-icon):not(.clients-marquee-img):not(.hero-glow):not(.hero-robot) {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.landing-page img:not(.logo-img):not(.value-icon):not(.clients-marquee-img):not(.hero-glow):not(.hero-robot):hover {
  transform: scale(1.05);
}
`;

fs.appendFileSync('src/index.css', css);
console.log('Appended hover styles successfully');
