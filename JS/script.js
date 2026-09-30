console.log("Java Script conectado!");
document.getElementById("ano").textContent = new Date().getFullYear();
const secoes = document.querySelectorAll("section");
const observador= new IntersectionObserver(function (entradas) { 
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
             observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.15 });         
secoes.forEach(function (secao) {
    observador.observe(secao);
    secao.classList.add("reveal");
});