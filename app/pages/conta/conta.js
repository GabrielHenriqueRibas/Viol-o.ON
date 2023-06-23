/* global $ */

// Obtém o array de usuários do armazenamento local (localStorage)
const usuarios = JSON.parse(localStorage.getItem('usuarios'));

// Verifica se há usuários salvos e se o array não está vazio
if (usuarios && usuarios.length > 0) {
    // Atualiza o elemento "Nome"
    const elementoNome = document.getElementById('nome');
    elementoNome.textContent = usuarios[0].nome;

    // Atualiza o elemento "Email"
    const elementoEmail = document.getElementById('email');
    elementoEmail.textContent = usuarios[0].email;

    // Atualiza o elemento "Número de Telefone"
    const elementoNumero = document.getElementById('numero');
    elementoNumero.textContent = usuarios[0].num;
}

function buscarCEP() {
    let cep = $('#cep').val();
  
    // Uso API rest publica
    $.ajax({
        url: 'https://viacep.com.br/ws/' + cep + '/json/',
        type: 'GET',
        success: function(response) {
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
}
  
$(document).ready(function() {
    $('#busca-cep').click(function() {
        buscarCEP();
    });
});