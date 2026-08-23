export function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length || !('IntersectionObserver' in window)) { elements.forEach(el => el.classList.add('visible')); return; }
  const observer = new IntersectionObserver((entries, instance) => { entries.forEach(entry => { if (!entry.isIntersecting) return; entry.target.classList.add('visible'); instance.unobserve(entry.target); }); }, { threshold: .12 });
  elements.forEach(el => observer.observe(el));
}
