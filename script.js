const dynamicText = document.querySelector("h1 span");
const words = ["Chronicles of Eternity",
    "Luminous Reverie",
    "Echoes in the Abyss",
    "Whispers of the Celestial",
    "Spectral Serenity",
    "Aurora Ascension",
    "Infinite Odyssey",
    "Enigma's Embrace",
    "Pandora's Labyrinth",
    "Celestial Alchemy",
    "Vortex of Dreams",
    "Nebula Nomad",
    "Ethereal Equinox",
    "Mystic Mirage",
    "Quantum Quasar",
    "Symbiotic Symphony",
    "Astral Resonance",
    "Nexus Nexus",
    "Quantum Quill",
    "Epicenter of Eternity"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 75);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();