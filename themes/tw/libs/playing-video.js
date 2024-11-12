function initPlayingVideo(event) {
  const element = event.target;

  if (element.tagName !== 'VIDEO') return;

  element.paused ? element.play() : element.pause();
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', initPlayingVideo);
});
