// ABRIR VÍDEO
function showVideo(id) {
  document.getElementById('home').style.display = 'none';

  const sections = document.querySelectorAll('.video-section');
  sections.forEach(sec => {
    sec.style.display = 'none';
    const iframe = sec.querySelector('iframe');
    if (iframe) iframe.src = '';
  });

  const section = document.getElementById(id);
  const iframe = section.querySelector('iframe');
  iframe.src = iframe.dataset.src;
  section.style.display = 'flex';
}

// VOLTAR PARA GALERIA
function backHome() {
  const sections = document.querySelectorAll('.video-section');
  sections.forEach(sec => {
    sec.style.display = 'none';
    const iframe = sec.querySelector('iframe');
    if (iframe) iframe.src = '';
  });
  document.getElementById('home').style.display = 'block';
}

// CARROSSEL
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});
nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});


