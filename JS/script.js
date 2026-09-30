console.log("Java Script conectado!");
document.getElementById("ano").textContent = new Date().getFullYear();
const secoes = document.querySelectorAll("section");
const observador= new IntersectionObserver(function (entradas) { 
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
        }
    });
}, { threshold: 0.15 });         
secoes.forEach(function (secao) {
    secao.classList.add("reveal");
});