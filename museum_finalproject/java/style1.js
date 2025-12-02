$(document).ready(function () {
  const audio = $('#audio').get(0);
  let playing = false;


  $('.poem-line').each(function () {
    const words = $(this).text().split(' ');
    $(this).empty();
    words.forEach(word => {
      $(this).append(`<span>${word}</span> `);
    });
  });

  $('#playButton').on('click', function () {
    if (!playing) {
      audio.play();
      playing = true;
      animatePoem();
    } else {
      audio.pause();
      playing = false;
      resetPoem();
    }
  });

  function animatePoem() {
    $('.poem-line').each(function (i) {
      const line = $(this);
      line.find('span').each(function (j) {
        const word = $(this);
        setTimeout(function() {
          if (playing) word.addClass('active');
        }, (i * 2000) + (j * 400)); // stagger by line + word
      });
    });
  }

  function resetPoem() {
    $('.poem-line span').removeClass('active');
  }
});
