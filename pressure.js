function loadPressureExperiment() {
  // Çıkış alanını temizle
  const output = document.getElementById('experiment-output');
  output.innerHTML = `
    <h3>Katı Basıncı Deneyi</h3>
    <svg id="pressure-simulation" width="400" height="300">
      <!-- Zemini Çiz -->
      <line x1="50" y1="250" x2="350" y2="250" stroke="black" stroke-width="3" />
      <!-- Küpler -->
      <rect id="cube1" x="170" y="200" width="50" height="50" fill="blue" />
      <rect id="cube2" x="170" y="150" width="50" height="50" fill="blue" />
      <text x="180" y="230" fill="white">Küp 1</text>
      <text x="180" y="180" fill="white">Küp 2</text>
    </svg>
    <div style="margin-top: 20px;">
      <label>Kuvvet (N):</label>
      <input type="number" id="force" />
      <label>Alan (m²):</label>
      <input type="number" id="area" />
      <button id="calculate-pressure">Hesapla</button>
    </div>
    <p id="pressure-result"></p>
  `;

  // Hesaplama işlemi
  document.getElementById('calculate-pressure').addEventListener('click', () => {
    const force = parseFloat(document.getElementById('force').value);
    const area = parseFloat(document.getElementById('area').value);

    if (!force || !area) {
      document.getElementById('pressure-result').innerText = 'Lütfen tüm değerleri girin!';
      return;
    }

    const pressure = force / area;
    document.getElementById('pressure-result').innerText = `Basınç (P) = ${pressure.toFixed(2)} Pa`;

    // Basınç görseli için renk değişimi
    const cube1 = document.getElementById('cube1');
    const cube2 = document.getElementById('cube2');
    if (pressure > 50) {
      cube1.setAttribute('fill', 'red');
      cube2.setAttribute('fill', 'red');
    } else {
      cube1.setAttribute('fill', 'green');
      cube2.setAttribute('fill', 'green');
    }
  });
}

// Deney yüklendiğinde çalıştır
loadPressureExperiment();
