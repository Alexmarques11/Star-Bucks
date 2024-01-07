export const playSound = (soundId) => {
    const audio = document.getElementById(soundId);
    if (audio) {
      audio.play();
    }
  };
