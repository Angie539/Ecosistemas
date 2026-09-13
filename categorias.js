const tarjetas = document.querySelectorAll(".card");
const botones = document.querySelectorAll(".entrar");

//===============================
// BOTÓN VOLVER
//===============================

document.getElementById("volverInicio").addEventListener("click", () => {

    window.location.href = "index.html";

});

//===============================
// ENTRAR A CATEGORÍA
//===============================

botones.forEach((boton) => {

    boton.addEventListener("click", (e) => {

        e.stopPropagation();

        const categoria = boton.dataset.categoria;

        const tarjeta = boton.closest(".card");

        // Ocultar las demás tarjetas

        tarjetas.forEach((t) => {

            if (t !== tarjeta) {

                t.classList.add("oculta");

            }

        });

        // Resaltar la seleccionada

        tarjeta.classList.add("seleccionada");

        // Esperar un poco antes de cambiar

        setTimeout(() => {

            window.location.href =
                `portal.html?categoria=${categoria}`;

        }, 700);

    });

});