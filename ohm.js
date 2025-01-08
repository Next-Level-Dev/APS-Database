document.getElementById('experiment-output').innerHTML = `
  <h3>Ohm Kanunu Deneyi</h3>
  <p>Ohm kanunu: V = I * R</p>
  <label for="voltage">Volt (V):</label>
  <input type="number" id="voltage" placeholder="Volt (V)" />
  <label for="current">Akım (I):</label>
  <input type="number" id="current" placeholder="Akım (A)" />
  <label for="resistance">Direnç (R):</label>
  <input type="number" id="resistance" placeholder="Direnç (Ω)" />
  <button id="calculate-ohm">Hesapla</button>
  <div id="ohm-result"></div>
`;

document.getElementById('calculate-ohm').addEventListener('click', () => {
  const voltage = parseFloat(document.getElementById('voltage').value);
  const current = parseFloat(document.getElementById('current').value);
  const resistance = parseFloat(document.getElementById('resistance').value);

  if (!voltage && !current && !resistance) {
    document.getElementById('ohm-result').innerHTML = 'Lütfen iki değeri girin!';
  } else {
    if (voltage && current) {
      const result = voltage / current;
      document.getElementById('ohm-result').innerHTML = `Direnç (R) = ${result} Ω`;
    } else if (voltage && resistance) {
      const result = voltage / resistance;
      document.getElementById('ohm-result').innerHTML = `Akım (I) = ${result} A`;
    } else if (current && resistance) {
      const result = current * resistance;
      document.getElementById('ohm-result').innerHTML = `Volt (V) = ${result} V`;
    }
  }
});
