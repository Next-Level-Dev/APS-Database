function loadOhmExperiment() {
  // Çıkış alanını temizle
  const output = document.getElementById('experiment-output');
  output.innerHTML = `
    <h3>Ohm Kanunu Deneyi</h3>
    <svg id="circuit" width="400" height="300">
      <!-- Pil -->
      <rect x="50" y="100" width="40" height="100" fill="gray" />
      <text x="70" y="160" id="voltage-text">V = ?</text>

      <!-- Kablo -->
      <line x1="90" y1="150" x2="250" y2="150" stroke="black" stroke-width="3" />

      <!-- Direnç -->
      <rect x="250" y="120" width="60" height="60" fill="orange" />
      <text x="280" y="150" id="resistance-text">R = ?</text>

      <!-- Akım -->
      <text x="160" y="140" id="current-text">I = ?</text>
    </svg>
    <div style="margin-top: 20px;">
      <label>Voltaj (V):</label>
      <input type="number" id="voltage" />
      <label>Direnç (R):</label>
      <input type="number" id="resistance" />
      <button id="calculate-ohm">Hesapla</button>
    </div>
    <p id="ohm-result"></p>
  `;

  // Hesaplama işlemi
  document.getElementById('calculate-ohm').addEventListener('click', () => {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);

    if (!voltage || !resistance) {
      document.getElementById('ohm-result').innerText = 'Lütfen tüm değerleri girin!';
      return;
    }

    const current = voltage / resistance;
    document.getElementById('current-text').innerText = `I = ${current.toFixed(2)} A`;
    document.getElementById('voltage-text').innerText = `V = ${voltage} V`;
    document.getElementById('resistance-text').innerText = `R = ${resistance} Ω`;
    document.getElementById('ohm-result').innerText = `Akım (I) = ${current.toFixed(2)} A`;
  });
}

// Deney yüklendiğinde çalıştır
loadOhmExperiment();
