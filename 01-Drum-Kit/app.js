 window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return // stop the function if no audio
    audio.currentTime = 0; // rewind the sound to start
    audio.play();
});
