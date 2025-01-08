function loadOhmExperiment() {
  const output = document.getElementById('experiment-output');
  output.innerHTML = `
    <h3>Ohm Kanunu Deneyi</h3>
    <svg id="circuit" width="400" height="300">
      <rect x="50" y="100" width="40" height="100" fill="gray" />
      <text x="70" y="160" id="voltage-text" fill="black">V = ?</text>
      <line x1="90" y1="150" x2="250" y2="150" stroke="black" stroke-width="3" />
      <rect x="250" y="120" width="60" height="60" fill="orange" id="resistor" />
      <text x="280" y="150" id="resistance-text" fill="black">R = ?</text>
      <text x="160" y="140" id="current-text" fill="black">I = ?</text>
    </svg>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px;">
      <label>Voltaj (V):</label>
      <input type="number" id="voltage" />
      <label>Direnç (R):</label>
      <input type="number" id="resistance" />
      <button id="calculate-ohm" style="grid-column: span 2;">Hesapla</button>
    </div>
    <p id="ohm-result"></p>
  `;

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

    const resistor = document.getElementById('resistor');
    resistor.style.transition = 'fill 0.5s ease-in-out';
    resistor.setAttribute('fill', current > 5 ? 'red' : 'orange');
  });
}

loadOhmExperiment();
