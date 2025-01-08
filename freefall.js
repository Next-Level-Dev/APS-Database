document.getElementById('experiment-output').innerHTML = `
  <h3>Serbest Düşme Deneyi</h3>
  <svg width="400" height="300">
    <!-- Cisim -->
    <circle id="object" cx="200" cy="50" r="20" fill="purple" />
    <line x1="200" y1="80" x2="200" y2="250" stroke="black" stroke-dasharray="5,5" />
  </svg>
  <div style="margin-top: 20px;">
    <label>Yükseklik (m):</label>
    <input type="number" id="height" />
    <label>Kütle (kg):</label>
    <input type="number" id="mass" />
    <button id="simulate-fall">Simüle Et</button>
  </div>
  <p id="fall-result"></p>
`;

document.getElementById('simulate-fall').addEventListener('click', () => {
  const height = parseFloat(document.getElementById('height').value);
  const mass = parseFloat(document.getElementById('mass').value);
  const g = 9.8; // Yerçekimi ivmesi (m/s²)

  if (!height || !mass) {
    document.getElementById('fall-result').innerText = 'Lütfen tüm değerleri girin!';
    return;
  }

  const time = Math.sqrt((2 * height) / g).toFixed(2); // Süre
  const velocity = (g * time).toFixed(2); // Hız

  document.getElementById('fall-result').innerText = `
    Süre: ${time} saniye, Hız: ${velocity} m/s
  `;

  // Animasyon
  const object = document.getElementById('object');
  object.style.transition = `all ${time}s ease-in`;
  object.setAttribute('cy', '250');
});
