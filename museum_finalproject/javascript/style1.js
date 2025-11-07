// Scroll-triggered animation for both words and reflections
const pairs = document.querySelectorAll('.text-pair');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const word = entry.target.querySelector('.word');
      const reflection = entry.target.querySelector('.reflection');

      word.classList.add('active');
      reflection.classList.add('active');
    }
  });
}, { threshold: 0.4 });

pairs.forEach(pair => observer.observe(pair));

// Pulse effect on title (100 BPM)
const beatText = document.querySelector('.beat-text');
setInterval(() => {
  beatText.style.transform = 'scale(1.1)';
  setTimeout(() => beatText.style.transform = 'scale(1)', 300);
}, 600);
