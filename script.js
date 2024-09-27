// Geluidsbestanden toevoegen
const sounds = {
    sound1: new Audio('sounds/Oof.mp3'),
    sound2: new Audio('sounds/Eating.mp3'),
    sound3: new Audio('sounds/Poition.mp3'),
    sound4: new Audio('sounds/Chest.mp3'),
    sound5: new Audio('sounds/Cave.mp3'),
    sound6: new Audio('sounds/Glass.mp3'),
    sound7: new Audio('sounds/Tnt.mp3'),
    sound8: new Audio('sounds/Villager.mp3'),
    sound9: new Audio('sounds/Zombie.mp3')
};

// Event listener voor knoppen
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sound = button.getAttribute('data-sound');
        sounds[sound].currentTime = 0; // Reset het geluid als het al speelt
        sounds[sound].play();
    });
});

// Dark mode toggle
const modeToggleBtn = document.getElementById('mode-toggle');
const body = document.body;

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = '☀️ Light Mode';
    } else {
        modeToggleBtn.textContent = '🌙 Dark Mode';
    }
});
function openCustomizePage() {
    window.location.href = 'customize.html';
}
function goBack() {
    window.history.back("index.html");
}

document.getElementById('sound-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Loop door de geluidsbestanden
    for (let i = 1; i <= 9; i++) {
        const fileInput = document.getElementById('sound' + i);
        const file = fileInput.files[0];
        if (file) {
            // Gebruik localStorage om de geluidsbestanden op te slaan
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('sound' + i, e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
    alert('Geluidsinstellingen opgeslagen!');
    goBack();
});

// In de hoofdpagina, laad aangepaste geluiden bij het starten
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 9; i++) {
        const soundData = localStorage.getItem('sound' + i);
        if (soundData) {
            sounds['sound' + i] = new Audio(soundData);
        }
    }
});
