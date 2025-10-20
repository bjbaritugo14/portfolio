document.addEventListener("DOMContentLoaded", function () {
  const btnAboutme = document.getElementById('btn-aboutme');
  const info = document.getElementById('info');
  const intro = document.getElementById('intro');
  const toggle = document.getElementById('toggle-darkmode');

  // --- Dark Mode ---
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // --- About Me ---
  btnAboutme.addEventListener('click', function () {
    const showingInfo = !info.classList.contains('hide');
    if (showingInfo) {
      info.classList.add('hide');
      intro.classList.remove('hide');
      btnAboutme.textContent = 'ABOUT ME';
    } else {
      info.classList.remove('hide');
      intro.classList.add('hide');
      btnAboutme.textContent = 'Show Less';
    }
  });

  // --- Carousel ---
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  let currentIndex = 0;
  let autoSlideInterval;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }

  nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  startAutoSlide();

  // --- Modal Viewer ---
  const modal = document.createElement('div');
  modal.classList.add('image-modal', 'hide');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img class="modal-image" src="" alt="Full view">
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector('.modal-image');
  const closeBtn = modal.querySelector('.close-btn');

  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img) {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        modal.classList.remove('hide');
        modalImage.src = img.src;
      });
    }
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hide'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hide');
  });
});