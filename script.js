const btn = document.getElementById('dark-mode-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    btn.innerText = '☀️ Modo Claro';
  } else {
    btn.innerText = '🌙 Modo Oscuro';
  }
});
