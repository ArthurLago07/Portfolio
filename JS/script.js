console.log("Java Script conectado!");
document.getElementById("ano").textContent = new Date().getFullYear();
const secoes = document.querySelectorAll("section");
secoes.forEach(function (secao) {
    secao.classList.add("reveal");
});