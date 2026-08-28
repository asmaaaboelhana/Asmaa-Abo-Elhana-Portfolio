document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const scrim = document.querySelector('.nav-scrim');

  const closeMenu = () => {
    links && links.classList.remove('open');
    toggle && toggle.classList.remove('open');
    scrim && scrim.classList.remove('open');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    links && links.classList.add('open');
    toggle && toggle.classList.add('open');
    scrim && scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.contains('open') ? closeMenu() : openMenu();
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    scrim && scrim.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  }

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('in'));
  }
});
