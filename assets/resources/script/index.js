/* global $ */
// Leitura de JSON
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Uso confirm
const confirmacao = confirm('Você possui uma conta?');
if (!confirmacao) {
    window.location.href = '../../../app/pages/cadastro/cadastro.html';
}

// Uso função anônima com argumento
document.addEventListener('keydown', function (event) {
    if (event.key === '*') {
        window.location = '../../../app/pages/cadastro/cadastro.html';
    }
});

// Uso Arrow Function
const fazerLogin = () => {
    const email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    const usuarioCadastrado = usuarios.find(
        (usuario) => usuario.gmail === email && usuario.senha === senha,
    );

    if (usuarioCadastrado) {
        alert('Login realizado com sucesso!');
        window.location.href = '../../../app/pages/pagina-principal/pagina-principal.html';
    } else {
        alert('Usuário ou senha inválidos. Tente novamente.');
    }
};

// Uso onblur
function mudarCor(elemento) {
    elemento.style.backgroundColor = '#23238E';
}
