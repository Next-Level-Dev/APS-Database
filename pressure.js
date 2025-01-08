document.getElementById('experiment-output').innerHTML = `
  <h3>Katı Basıncı Deneyi</h3>
  <p>Basınç: P = F / A</p>
  <label for="force">Kuvvet (F):</label>
  <input type="number" id="force" placeholder="Kuvvet (N)" />
  <label for="area">Alan (A):</label>
  <input type="number" id="area" placeholder="Alan (m²)" />
  <button id="calculate-pressure">Hesapla</button>
  <div id="pressure-result"></div>
`;

document.getElementById('calculate-pressure').addEventListener('click', () => {
  const force = parseFloat(document.getElementById('force').value);
  const area = parseFloat(document.getElementById('area').value);

  if (!force || !area) {
    document.getElementById('pressure-result').innerHTML = 'Lütfen her iki değeri girin!';
  } else {
    const pressure = force / area;
    document.getElementById('pressure-result').innerHTML = `Basınç (P) = ${pressure} Pa`;
  }
});
