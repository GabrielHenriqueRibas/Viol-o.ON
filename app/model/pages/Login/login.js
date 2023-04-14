const confirmacao = confirm("Você possui uma conta?")
if (!confirmacao) {
    window.location.href = "/Cadastro/cadastro.html"
} else {}

function fazerLogin() {
    let email = document.getElementById("valida-email").value
    let senha = document.getElementById("senha").value
    let mensagem

    if (email == "ghr@gmail.com" && senha == "123") {
        mensagem = "Login realizado com sucesso!"
        window.location = "/index.html"
    } else {
        mensagem = "Usuário ou senha inválidos. Tente novamente."
    }
    alert(mensagem)
}

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        window.location = "/index.html"
    }
}) 