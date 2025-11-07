 const bg = document.querySelector('.background');
    const links = document.querySelectorAll('.line-item');
    const bpmNumber = document.querySelector('.bpm-indicator .number');

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const speed = link.dataset.speed;
        switch (speed) {
          case 'slowest':
            bg.style.animationDuration = '12s';
            bpmNumber.textContent = '85';
            break;
          case 'slow':
            bg.style.animationDuration = '9s';
            bpmNumber.textContent = '100';
            break;
          case 'medium':
            bg.style.animationDuration = '6s';
            bpmNumber.textContent = '128';
            break;
          case 'fast':
            bg.style.animationDuration = '3s';
            bpmNumber.textContent = '150';
            break;
          case 'fastest':
            bg.style.animationDuration = '1.5s';
            bpmNumber.textContent = '180';
            break;
        }
      });
      link.addEventListener('mouseleave', () => {
        bg.style.animationDuration = '6s';
        bpmNumber.textContent = '128';
      });
    });