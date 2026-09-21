fetch('/api/health')
  .then(response => response.json())
  .then(() => {
    const status = document.querySelector('#status');
    status.textContent = 'Online';
    status.className = 'ok';
  })
  .catch(() => {
    const status = document.querySelector('#status');
    status.textContent = 'Indisponível';
    status.className = 'error';
  });
