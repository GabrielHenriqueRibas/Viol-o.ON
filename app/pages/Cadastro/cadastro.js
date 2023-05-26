function validarFormulario(event) {
    event.preventDefault();

    let gmail = document.getElementById('gmail');
    let nome = document.getElementById('nome');
    let senha = document.getElementById('senha');
    let confirmaSenha = document.getElementById('confirma-senha');
  
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
    }

    else { 
        localStorage.setItem('nome', nome.value);
        window.location.href = '../../../index.html';
        return true;
    }
}

