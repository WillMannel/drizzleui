document.addEventListener('DOMContentLoaded', () => {
    const addVibeButton = document.getElementById('addVibeBtn');
    if (addVibeButton) {
      addVibeButton.addEventListener('click', () => {
        window.location.href = 'create-vibe.html';
      });
    }
  
    const vibeForm = document.getElementById('vibesForm');
    if (vibeForm) {
      vibeForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        // Construct a new Vibe object
        const newVibe = {
          name: document.getElementById('vibeName').value,
          styles: document.getElementById('vibeStyles').value,
          // Add more fields as necessary
        };
  
        // Save the new vibe
        const vibes = JSON.parse(localStorage.getItem('vibes')) || [];
        vibes.push(newVibe);
        localStorage.setItem('vibes', JSON.stringify(vibes));
  
        window.location.href = 'index.html';
      });
    }
  
    const vibesListScreen = document.querySelector('.vibes-list-screen');
    if (vibesListScreen) {
      const vibes = JSON.parse(localStorage.getItem('vibes')) || [];
      vibes.forEach((vibe, index) => {
        const vibeElement = document.createElement('div');
        vibeElement.classList.add('vibe-item');
        vibeElement.innerHTML = `
          <div class="vibe-info">
            <h3 class="vibe-name">${vibe.name}</h3>
            <p class="vibe-styles">${vibe.styles}</p>
            <!-- Add other elements as necessary -->
          </div>
        `;
        vibesListScreen.appendChild(vibeElement);
      });
    }
  });
  