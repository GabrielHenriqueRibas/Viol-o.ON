let nome = localStorage.getItem('nome');
let conta = document.getElementById('conta');
conta.innerHTML = 'Olá, ' + nome;

let validacao;
do {
    validacao = prompt('Nos conte, sua experiência com a música é: básica ou avançada?');
    if (validacao === 'basica') {
        alert('Não tem problema, aprenda notas simples com apenas um clique conosco');
    } else if (validacao === 'avançada') {
        alert('Que ótimo, esperamos atender sua expectativa');
    } else {
        alert('Escreva apenas basico ou avancado, nesse formato');
    }
} while (validacao !== 'basica' && validacao !== 'avançada');

const tempoPropaganda = 5000;

function addPropaganda() {
    const propaganda = document.getElementById('propaganda');
    propaganda.style.display = 'block';

    let temporizador = tempoPropaganda / 1000;
    const contador = document.getElementById('contador');
    contador.textContent = `${temporizador}`;

    const tempo = setInterval(() => {
        temporizador--;
        contador.textContent = `${temporizador}`;
    }, 1000);

    setTimeout(() => {
        clearInterval(tempo);
        propaganda.style.display = 'none';
    }, tempoPropaganda);
}

window.addEventListener('load', addPropaganda);

const botao = document.getElementsByName('botao')[0];
botao.addEventListener('mouseover', () => {
    botao.style.cursor = 'pointer';
});
