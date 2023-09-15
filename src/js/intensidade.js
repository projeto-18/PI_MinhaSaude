// Captura o elemento do slider
const intensitySlider = document.getElementById('intensity');
// Captura o elemento que mostrará o valor da intensidade
//const intensityValue = document.getElementById('intensity-value');

// Captura o elemento que mostra o emoji do humor
const moodEmoji = document.getElementById('mood-emoji');

// Mapeia os emojis correspondentes aos níveis de intensidade
const moodEmojis = {
    0: '😭', // Extremamente Triste
    1: '😢',
    2: '😞',
    3: '😐', // Neutro
    4: '😊',
    5: '😄',
    6: '😃',
    7: '😁' // Extremamente Feliz
};

// Adiciona um ouvinte de evento de mudança ao slider
intensitySlider.addEventListener('input', () => {
    const intensityValue = intensitySlider.value;
    moodEmoji.textContent = moodEmojis[intensityValue];
});