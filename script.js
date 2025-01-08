const experiments = [
  { id: 'ohm', name: 'Ohm Kanunu' },
  { id: 'pressure', name: 'Katı Basıncı' }
];

const listContainer = document.getElementById('experiment-list');
const output = document.getElementById('experiment-output');

// Deneyleri listele
experiments.forEach(exp => {
  const listItem = document.createElement('li');
  listItem.textContent = exp.name;
  listItem.addEventListener('click', () => loadExperiment(exp.id));
  listContainer.appendChild(listItem);
});

function loadExperiment(experimentId) {
  output.innerHTML = '<h3>Yükleniyor...</h3>';
  const script = document.createElement('script');
  script.src = `${experimentId}.js`;
  document.body.appendChild(script);
}
