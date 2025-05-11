// Adiciona um destaque ao clicar no evento
document.querySelectorAll('.evento').forEach(evento => {
  evento.addEventListener('click', () => {
    evento.style.backgroundColor = "#FFF9C4";
  });
});
