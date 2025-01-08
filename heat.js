function loadHeatExperiment() {
  const output = document.getElementById('experiment-output');
  output.innerHTML = `
    <h3>Isı Yayılımı Deneyi</h3>
    <svg width="400" height="300">
      <rect id="surface1" x="50" y="100" width="100" height="100" fill="red" />
      <rect id="surface2" x="250" y="100" width="100" height="100" fill="blue" />
    </svg>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px;">
      <label>Sıcaklık 1 (°C):</label>
      <input type="number" id="temp1" />
      <label>Sıcaklık 2 (°C):</label>
      <input type="number" id="temp2" />
      <button id="calculate-heat" style="grid-column: span 2;">Hesapla</button>
    </div>
    <p id="heat-result"></p>
  `;

  document.getElementById('calculate-heat').addEventListener('click', () => {
    const temp1 = parseFloat(document.getElementById('temp1').value);
    const temp2 = parseFloat(document.getElementById('temp2').value);

    if (isNaN(temp1) || isNaN(temp2)) {
      document.getElementById('heat-result').innerText = 'Lütfen tüm değerleri girin!';
      return;
    }

    const finalTemp = ((temp1 + temp2) / 2).toFixed(2); // Ortalama sıcaklık

    document.getElementById('heat-result').innerText = `
      Nihai Sıcaklık: ${finalTemp} °C
    `;

    const surface1 = document.getElementById('surface1');
    const surface2 = document.getElementById('surface2');
    const gradient = `linear-gradient(to right, red, blue)`;
    surface1.style.transition = 'fill 0.5s ease-in-out';
    surface2.style.transition = 'fill 0.5s ease-in-out';
    surface1.setAttribute('fill', finalTemp >= 25 ? 'purple' : 'red');
    surface2.setAttribute('fill', finalTemp >= 25 ? 'purple' : 'blue');
  });
}

loadHeatExperiment();
