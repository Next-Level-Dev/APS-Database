function loadOhmExperiment() {
  // Clear the output area
  const output = document.getElementById('experiment-output');
  output.innerHTML = `
    <h3>Ohm Kanunu Deneyi</h3>
    <svg id="circuit" width="400" height="300">
      <!-- Battery -->
      <rect x="50" y="100" width="40" height="100" fill="gray" />
      <text x="70" y="160" id="voltage-text">V = ?</text>

      <!-- Wire -->
      <line x1="90" y1="150" x2="250" y2="150" stroke="black" stroke-width="3" />

      <!-- Resistor -->
      <rect x="250" y="120" width="60" height="60" fill="orange" id="resistor" />
      <text x="280" y="150" id="resistance-text">R = ?</text>

      <!-- Current -->
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

  // Calculation logic
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

    // Animate resistor color change based on current
    const resistor = document.getElementById('resistor');
    resistor.style.transition = 'fill 0.5s ease-in-out';
    resistor.setAttribute('fill', current > 5 ? 'red' : 'orange');
  });
}

// Run the experiment setup
loadOhmExperiment();
