let validacao
do {
  validacao = prompt("Nos conte, sua experiencia com a musica é: basica ou avançada?")
  if (validacao == "basica") {
    alert("Não tem problema, aprenda notas simples com apenas um click conosco")
  } else if (validacao == "avançada") {
    alert("Que Otimo, esperamos atender sua expectatica")
  } else {
    alert("Escreva apenas, 'basico' ou 'avançado', nesse formato")
  }
} while (validacao !== "basica" && validacao !== "avançada")

const tempoPropaganda = 5000

function addPropaganda() {
  const propaganda = document.getElementById("propaganda")
  propaganda.style.display = "block"

  const tempo = setInterval(() => {
    temporizador--
    contador.textContent = `${temporizador}`
  }, 1000)

  let temporizador = tempoPropaganda / 1000
  const contador = document.getElementById("contador")
  contador.textContent = `${temporizador}`

  setTimeout(() => {
    clearInterval(tempo)
    propaganda.style.display = "none"
  }, tempoPropaganda)
}

window.addEventListener("load", addPropaganda)

const botao = document.getElementsByName("botao")
botao.addEventListener("mouseover", () => {
  botao.style.cursor = "pointer"
});