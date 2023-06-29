/* global $ */
// Uso Leitura de dados simples- string
document.addEventListener('DOMContentLoaded', function() {
    let nome = localStorage.getItem('nome');
    let conta = document.getElementById('conta');
    conta.innerHTML = 'Olá, ' + nome;
});

//Uso função com nome
function validarExperiencia() {
    let validacao;
    do {
        //Uso prompt
        validacao = prompt('Nos conte, sua experiência com a música é: básica ou avançada?');
        if (validacao === 'basica') {
            //Uso Alert
            alert('Não tem problema, aprenda notas simples com apenas um clique conosco');
        } else if (validacao === 'avançada') {
            alert('Que ótimo, esperamos atender sua expectativa');
        } else {
            alert('Escreva apenas basico ou avancado, nesse formato');
        }
    } while (validacao !== 'basica' && validacao !== 'avançada');
}

validarExperiencia();

//Uso função auto-executável
(function() {
    const tempoPropaganda = 5000;
  
    function addPropaganda() {
        const propaganda = $('#propaganda');
        //Uso Efeitos fade:
        propaganda.fadeIn();
  
        let temporizador = tempoPropaganda / 1000;
        const contador = $('#contador');
        //Uso string tamplate
        contador.text(`${temporizador}`);
        
        //Uso setInterval
        const tempo = setInterval(() => {
            temporizador--;
            contador.text(`${temporizador}`);
        }, 1000);
    
        //Uso setTimeout
        setTimeout(() => {
            clearInterval(tempo);
            propaganda.fadeOut();
        }, tempoPropaganda);
    }
    //Uso onload
    window.addEventListener('load', addPropaganda);
})();

//Uso passagem de uma função como parâmetro para outra função e getElementByName
const botao = document.getElementsByName('botao')[0];
botao.addEventListener('mouseover', function() {
    //Uso movimento mouse
    this.style.backgroundColor = 'green !important' ;
});

$(botao).click(function () { 
    //Uso de seletores CSS e Manipulação do conteúdo de um input e div usando jQuery:
    let acorde = $('#selecao-nota').val();
    $('#acordes-img').attr('src', `../../../assets/resources/img/${acorde}.jpg`);
});

$('#logo-site').mouseenter(function () {
    //Uso Manipulação do CSS via função css() e addClass() ou removeClass():
    $(this).addClass('destaque');
}).mouseleave(function () {
    $(this).removeClass('destaque');
});