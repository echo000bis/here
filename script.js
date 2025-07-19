const video = document.getElementById('background-video');
const overlay = document.getElementById('link-overlay');

function checkTime() {
  const now = new Date();
  const cycleStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const elapsed = now - cycleStart;

  const interval = 24 * 60 * 60 * 1000; // 24h
  const showDuration = 2 * 60 * 1000;   // 2 min

  const timeInCycle = elapsed % interval;

  if (timeInCycle < showDuration) {
    overlay.style.display = 'flex';
    video.pause();
  } else {
    overlay.style.display = 'none';
    if (video.paused) video.play();
  }
}

setInterval(checkTime, 1000);
checkTime();
