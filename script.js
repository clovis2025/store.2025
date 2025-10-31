
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;
let timer; // declaração do timer

function update(direction) {
  // remove ativo atual
  items[active].classList.remove('active');
  dots[active].classList.remove('active');

  // define direção
  if (direction > 0) {
    active++;
    if (active >= total) active = 0; // volta ao início
  } else if (direction < 0) {
    active--;
    if (active < 0) active = total - 1; // vai pro final
  }

  // adiciona o novo ativo
  items[active].classList.add('active');
  dots[active].classList.add('active');

  // atualiza número
  numberIndicator.textContent = active + 1;

  // reinicia o timer automático
  clearInterval(timer);
  timer = setInterval(() => update(1), 5000);
}

// eventos dos botões
prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));

// eventos do teclado
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    update(1); // seta direita
  } else if (event.key === 'ArrowLeft') {
    update(-1); // seta esquerda
  }
});

// mostra o número inicial
numberIndicator.textContent = active + 1;

// inicia o timer automático
timer = setInterval(() => update(1), 5000);
