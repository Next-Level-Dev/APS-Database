const experiments = [
  { id: 'ohm', name: 'Ohm Kanunu' },
  { id: 'pressure', name: 'Katı Basıncı' },
  { id: 'freefall', name: 'Serbest Düşme' },
  { id: 'heat', name: 'Isı Yayılımı' }
];

const listContainer = document.getElementById('experiment-list');
const output = document.getElementById('experiment-output');

experiments.forEach(exp => {
  const listItem = document.createElement('li');
  listItem.textContent = exp.name;
  listItem.addEventListener('click', () => loadExperiment(exp.id));
  listContainer.appendChild(listItem);
});

function loadExperiment(experimentId) {
  output.innerHTML = `<h3>${experimentId.replace(/\b\w/g, c => c.toUpperCase())} Deneyi Yüklendi!</h3>`;
  // Load the corresponding JS file
  const script = document.createElement('script');
  script.src = `${experimentId}.js`;
  document.body.appendChild(script);
}

document.getElementById('quiz-button').addEventListener('click', () => {
  alert('Quiz başlatıldı! Bu alan geliştirilebilir.');
});

document.getElementById('download-certificate').addEventListener('click', () => {
  alert('Sertifika indiriliyor! Bu alan geliştirilebilir.');
});
