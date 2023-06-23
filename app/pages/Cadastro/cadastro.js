/* global $ */
function validarFormulario(event) {
    event.preventDefault();
  
    //Uso getElementById
    const gmail = document.getElementById('gmail');
    const nome = document.getElementById('nome');
    //Uso querySelector
    const num = document.getElementById('numero');
    const senha = document.querySelector('#senha');
    const confirmaSenha = document.getElementById('confirmaSenha');
  
    if (nome.value === '') {
        return false;
    }
  
    if (gmail.value === '') {
        return false;
    }
  
    if (senha.value != confirmaSenha.value) {
        senha.setCustomValidity('As senhas não correspondem');
        confirmaSenha.setCustomValidity('As senhas não correspondem');
        return false;
    } else {
        const usuario = {
            nome: nome.value,
            num : num.value,
            email: gmail.value,
            senha: senha.value,
        };
        
        localStorage.setItem('nome', nome.value);

        //Leitura e escrita de JSON - dado transformado a partir de um objeto
        const usuarios = [];
        usuarios.push(usuario);
        
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
        gmail.value = '';
        num.value = '';
        nome.value = '';
        senha.value = '';
  
        //Uso alert
        alert('Cadastro realizado com sucesso!');
  
        // Redirecionar para a próxima página
        window.location.href = '../../../index.html';
  
        return true;
    }
}
  
const formSubmit = () => {
    //Uso Arrow Function
    const showMessage = () => {
    };
  
    showMessage();
};
formSubmit();

//Uso mask jquery
$(document).ready(function() {
    $('#numero').mask('(00) 0000-0000');
});