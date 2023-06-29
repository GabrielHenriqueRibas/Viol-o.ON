/* global $ */

const usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (usuarios && usuarios.length > 0) {
    const elementoNome = document.getElementsByTagName('h2')[0];
    elementoNome.textContent = usuarios[0].nome;

    const elementoEmail = document.getElementById('email');
    elementoEmail.textContent = usuarios[0].gmail;
}


function buscarCEP() {
    let cep = $('#cep').val();
  
    // Uso API rest publica
    $.ajax({
        url: 'https://viacep.com.br/ws/' + cep + '/json/',
        type: 'GET',
        success: function(response) {
            // Salvar as informações na API fake
            const endereco = {
                cep: response.cep,
                rua: response.logradouro,
                bairro: response.bairro,
                cidade: response.localidade,
            };
  
            // Chamada para atualizar as informações na API fake
            $.ajax({
                url: 'http://localhost:3000/usuarios',
                type: 'POST',
                data: JSON.stringify(endereco),
                contentType: 'application/json',
                success: function() {
                    $('#rua').text(response.logradouro);
                    $('#bairro').text(response.bairro);
                    $('#cidade').text(response.localidade);
                },
                error: function() {
                    $('#mensagem-erro').text('Erro ao buscar o CEP.');
  
                    $('#rua').text('');
                    $('#bairro').text('');
                    $('#cidade').text('');
                },
            });
        },
        error: function() {
            $('#mensagem-erro').text('Erro ao buscar o CEP.');
  
            $('#rua').text('');
            $('#bairro').text('');
            $('#cidade').text('');
        },
    });
}

$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário e recarregamento da página
        buscarCEP();
    });

    $('#busca-cep').on('click', function() {
        buscarCEP();
    });
});

$('.usuario').mouseenter(function () {
    $(this).css('background-color', 'red');
});

$(document).ready(function() {
    var divContent = $('#minhaDiv').text(); 
    $('#minhaDiv').text('Informações do Usuario');
});