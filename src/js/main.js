import { loadComponents } from './utils/load-components.js';
import { initHeader } from './components/header.js';
import { initMobileMenu } from './components/mobile-menu.js';
import { initReveal } from './components/reveal.js';
import { initNavigation } from './components/navigation.js';
import { initCursor } from './components/cursor.js';

const components = {
  '#site-header':'./components/layout/Header.html',
  '#mobile-menu':'./components/layout/MobileMenu.html',
  '#hero':'./components/sections/Hero.html',
  '#marquee':'./components/sections/Marquee.html',
  '#work':'./components/sections/Work.html',
  '#about':'./components/sections/About.html',
  '#services':'./components/sections/Services.html',
  '#contact':'./components/sections/Contact.html',
  '#site-footer':'./components/layout/Footer.html',
};

async function bootstrap() {
  try {
    await loadComponents(components);
    initHeader(); initMobileMenu(); initReveal(); initNavigation(); initCursor();
  } catch (error) { console.error('KAGE failed to initialize:', error); }
}

bootstrap();
