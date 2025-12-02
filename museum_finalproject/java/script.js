$(document).ready(function () {
  const $bg = $('.background');
  const $links = $('.line-item');
  const $bpmNumber = $('.bpm-indicator .number');
  const $pulse = $('.pulse');

  const DEFAULT_DURATION = '6s';
  const DEFAULT_BPM = 128;

  const speedSettings = {
    slowest: { duration: '12s', bpm: 85 },
    slow:    { duration: '9s',  bpm: 100 },
    medium:  { duration: '6s',  bpm: 128 },
    fast:    { duration: '3s',  bpm: 150 },
    fastest: { duration: '1.5s', bpm: 180 }
  };

  $links.on('mouseenter', function () {
    const speed = $(this).data('speed');
    const setting = speedSettings[speed] || speedSettings.medium;

    // treadmill speed
    $bg.css('animation-duration', setting.duration);

    // BPM 
    $bpmNumber.text(setting.bpm);

    // pulse animation speed
    const msPerBeat = 60000 / setting.bpm;
    $pulse.css('animation-duration', msPerBeat + 'ms');
  });

  $links.on('mouseleave', function () {
    $bg.css('animation-duration', DEFAULT_DURATION);
    $bpmNumber.text(DEFAULT_BPM);

    const defaultPulse = 60000 / DEFAULT_BPM;
    $pulse.css('animation-duration', defaultPulse + 'ms');
  });
});
