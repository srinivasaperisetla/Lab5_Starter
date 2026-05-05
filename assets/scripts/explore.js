// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const faceImage = document.querySelector('#explore > img');
  const textInput = document.querySelector('#text-to-speak');
  const voiceSelect = document.querySelector('#voice-select');
  const talkButton = document.querySelector('#explore button');

  let voices = [];

  const setSpeakingFace = (isSpeaking) => {
    faceImage.src = isSpeaking ? 'assets/images/smiling-open.png' : 'assets/images/smiling.png';
  };

  const populateVoiceOptions = () => {
    voices = synth.getVoices();

    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = String(index);
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  };

  populateVoiceOptions();
  synth.addEventListener('voiceschanged', populateVoiceOptions);

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedIndex = Number(voiceSelect.value);

    if (!Number.isNaN(selectedIndex) && voices[selectedIndex]) {
      utterance.voice = voices[selectedIndex];
    }

    utterance.addEventListener('start', () => setSpeakingFace(true));
    utterance.addEventListener('end', () => setSpeakingFace(false));
    utterance.addEventListener('error', () => setSpeakingFace(false));

    synth.cancel();
    synth.speak(utterance);
  });
}