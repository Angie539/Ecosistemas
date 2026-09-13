const boton = document.getElementById("comenzar");

boton.addEventListener("click", () => {

    window.location.href = "categorias.html";

});


/*=========================
PARTÍCULAS
=========================*/

const particulas = document.getElementById("particulas");

for(let i=0;i<50;i++){

    let punto=document.createElement("div");

    punto.className="particula";

    punto.style.left=Math.random()*100+"vw";

    punto.style.top=Math.random()*100+"vh";

    punto.style.animationDuration=(3+Math.random()*5)+"s";

    punto.style.animationDelay=Math.random()*5+"s";

    particulas.appendChild(punto);

}


/*=========================
HOJAS
=========================*/

const hojas=document.getElementById("hojas");

for(let i=0;i<20;i++){

    let hoja=document.createElement("div");

    hoja.className="hoja";

    hoja.style.left=Math.random()*100+"vw";

    hoja.style.animationDuration=(8+Math.random()*8)+"s";

    hoja.style.animationDelay=Math.random()*6+"s";

    hojas.appendChild(hoja);

}