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
    secao.classList.add("reveal");
    });
    setTimeout(function () {
        secoes.forEach(function (secao) {
            observador.observe(secao);
        });
    }, 100);

    const botaoTopo = document.querySelector(".voltar-topo");
    window.addEventListener("scroll", function(){
        if (window.scrollY > 400) {
            botaoTopo.classList.add("ativo");
        } else {
            botaoTopo.classList.remove("ativo");
        }
    });
