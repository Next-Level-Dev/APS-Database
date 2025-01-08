document.getElementById('load-experiment').addEventListener('click', () => {
  const experiment = document.getElementById('experiment-selector').value;
  const output = document.getElementById('experiment-output');

  if (experiment === 'ohm') {
    loadScript('js/ohm.js', () => {
      output.innerHTML = '<h3>Ohm Kanunu Deneyi Yüklendi!</h3>';
    });
  } else if (experiment === 'pressure') {
    loadScript('js/pressure.js', () => {
      output.innerHTML = '<h3>Katı Basıncı Deneyi Yüklendi!</h3>';
    });
  } else {
    output.innerHTML = '<h3>Bir deney seçin!</h3>';
  }
});

function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}
