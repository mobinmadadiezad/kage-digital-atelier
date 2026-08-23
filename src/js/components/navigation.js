export function initNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length || !links.length) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; const id = entry.target.id; links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`)); }), { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(section => observer.observe(section));
}
