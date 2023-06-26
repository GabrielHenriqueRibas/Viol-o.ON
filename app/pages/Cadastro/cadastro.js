/* global $ */
import { Usuario } from '../../model/Usuario.js';

$(document).ready(function() {
    $('#numero').mask('(00) 0000-0000');
});

const button = document.getElementById('botao');

const validarFormulario = (event) => {
    event.preventDefault();
  
    const gmail = document.getElementById('gmail');
    const nome = document.getElementById('nome');
    const num = document.getElementById('numero');
    const senha = document.querySelector('#senha');
    const confirmaSenha = document.getElementById('confirmaSenha');
  
    if (nome.value === '') {
        return false;
    }
  
    // Verifica se já existe a matriz 'usuarios' no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    if (!usuarios) {
        usuarios = [];
    }
  
    if (senha.value !== confirmaSenha.value) {
        senha.setCustomValidity('As senhas não correspondem');
        confirmaSenha.setCustomValidity('As senhas não correspondem');
        return false;
    } else {
        let usuario = new Usuario(nome.value, gmail.value, senha.value);
  
        // Adiciona o novo usuário à matriz de usuários
        usuarios.push(usuario);
  
        // Armazena a matriz atualizada no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
        gmail.value = '';
        num.value = '';
        nome.value = '';
        senha.value = '';
  
        alert('Cadastro realizado com sucesso!');
  
        window.location.href = '../../../index.html';
  
        return true;
    }
};
  

button.addEventListener('click', validarFormulario);

const showMessage = () => {
};

const formSubmit = () => {
    showMessage();
};

formSubmit();
