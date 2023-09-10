// Captura o elemento do slider
const intensitySlider = document.getElementById('intensity');
// Captura o elemento que mostrará o valor da intensidade
const intensityValue = document.getElementById('intensity-value');

// Adiciona um ouvinte de evento de mudança ao slider
intensitySlider.addEventListener('input', () => {
    // Atualiza o valor da intensidade exibido
    intensityValue.textContent = intensitySlider.value;
});
