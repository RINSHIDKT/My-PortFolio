// typingTextEffect.js

export const typingTextEffect = () => {
    const sentences = [
      'Typing text effect',
      'Enhance your site with dynamic text',
      'Animate messages effortlessly',
      'Add elegance with versatile text',
      'Bring words to life on your site'
    ];
  
    let currentIndex = 0;
    let offset = 0;
    const sentenceElement = document.querySelector('.sentence');
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;
    const speed = 70;
  
    const updateSentence = () => {
      sentenceElement.textContent = sentences[currentIndex].substring(0, offset);
    };
  
    const handleAnimation = () => {
      if (forwards) {
        if (offset >= sentences[currentIndex].length) {
          if (++skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else if (offset === 0) {
        forwards = true;
        currentIndex = (currentIndex + 1) % sentences.length;
      }
  
      if (skipCount === 0) {
        forwards ? offset++ : offset--;
      }
  
      updateSentence();
    };
  
    setInterval(handleAnimation, speed);
  };
  
  // Example of how to use the exported function
  // import { typingTextEffect } from './typingTextEffect.js';
  // typingTextEffect();
  