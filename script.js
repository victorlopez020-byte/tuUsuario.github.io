console.log("Tu primera web ya está funcionando 🚀");
alert("¡Bienvenido a tu primera página web!");
document.querySelector("h1").addEventListener("click", function() {
    alert("¡Gracias por visitar mi sitio, capo!");
});
const botonArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const proyectos = document.querySelectorAll(".proyecto");

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = 1;
            entrada.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

proyectos.forEach(proyecto => {
    proyecto.style.opacity = 0;
    proyecto.style.transform = "translateY(40px)";
    proyecto.style.transition = "all 0.6s ease";
    observer.observe(proyecto);
});
