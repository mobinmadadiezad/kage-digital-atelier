export function initCursor() {
  const cursor = document.querySelector('.cursor');
  const follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower || !window.matchMedia('(pointer: fine)').matches) return;
  let mouseX=0, mouseY=0, followerX=0, followerY=0;
  window.addEventListener('mousemove', e => { mouseX=e.clientX; mouseY=e.clientY; cursor.style.left=`${mouseX}px`; cursor.style.top=`${mouseY}px`; });
  const animate = () => { followerX += (mouseX-followerX)*.12; followerY += (mouseY-followerY)*.12; follower.style.left=`${followerX}px`; follower.style.top=`${followerY}px`; requestAnimationFrame(animate); };
  animate();
  document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter',()=>follower.classList.add('hover')); el.addEventListener('mouseleave',()=>follower.classList.remove('hover')); });
}
