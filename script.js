document.addEventListener('DOMContentLoaded', () => {

  const playBtn = document.getElementById('playBtn');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeBtn');
  const goProjects = document.getElementById('goProjects');
  const backBtn = document.getElementById('backBtn');

  playBtn.addEventListener('click', () => {
    overlay.classList.add('show');
    document.body.style.overflow = 'auto';
  });

  closeBtn.addEventListener('click', () => overlay.classList.remove('show'));

  goProjects.addEventListener('click', () => {
    overlay.classList.remove('show');
    const projectsSection = document.getElementById('projects');
    setTimeout(() => {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  });

  backBtn.addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  });

  const track = document.getElementById('carouselTrack');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (!track || !nextBtn || !prevBtn) return;

  const slides = Array.from(track.children);
  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
});