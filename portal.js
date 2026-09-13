//========================================
// ELEMENTOS
//========================================

const tituloCategoria = document.getElementById("nombreCategoria");
const botonVolver = document.getElementById("volver");

const barra = document.querySelector(".avance");
const porcentaje = document.getElementById("porcentaje");

//========================================
// LEER CATEGORÍA
//========================================

const parametros = new URLSearchParams(window.location.search);

const categoria = parametros.get("categoria");

//========================================
// INFORMACIÓN
//========================================

const categorias = {

    transicion:{

        nombre:"Transición a Segundo",

        color:"#66BB6A",

        progreso:25

    },

    tercero:{

        nombre:"Tercero a Quinto",

        color:"#43A047",

        progreso:25

    },

    sexto:{

        nombre:"Sexto a Octavo",

        color:"#1E88E5",

        progreso:25

    },

    noveno:{

        nombre:"Noveno a Once",

        color:"#FB8C00",

        progreso:25

    }

};

//========================================
// SI NO EXISTE LA CATEGORÍA
//========================================

if(!categoria || !categorias[categoria]){

    window.location.href="categorias.html";

}

//========================================
// CARGAR DATOS
//========================================

const datos = categorias[categoria];

tituloCategoria.textContent = datos.nombre;

// Cambiar color principal

document.documentElement.style.setProperty(
"--verde",
datos.color
);

//========================================
// ANIMAR PROGRESO
//========================================

let actual = 0;

const intervalo = setInterval(()=>{

    actual++;

    barra.style.width = actual+"%";

    porcentaje.textContent = actual+"%";

    if(actual>=datos.progreso){

        clearInterval(intervalo);

    }

},20);

//========================================
// BOTÓN VOLVER
//========================================

botonVolver.addEventListener("click",()=>{

    window.location.href="categorias.html";

});
//========================================
// CONTENIDO DINÁMICO
//========================================

const contenido = document.getElementById("contenido");

const btnConoce = document.getElementById("btnConoce");
const btnMapa = document.getElementById("btnMapa");
const btnJuego = document.getElementById("btnJuego");
const btnFinal = document.getElementById("btnFinal");

//========================================
// MODAL
//========================================

const modal = document.getElementById("modalEco");

const contenidoModal = document.getElementById("contenidoModal");

const cerrarModal = document.getElementById("cerrarModal");

//========================================
// CERRAR MODAL
//========================================

cerrarModal.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";
        modal.className = "modal";

    }

});
//----------------------------------------

function mostrarContenido(titulo, texto){

    contenido.innerHTML = `

        <div class="mensajeInicial">

            <h2>${titulo}</h2>

            <p>${texto}</p>

        </div>

    `;

}
//========================================
// MISIÓN: CONOCE
//========================================

function mostrarConoce(){
    
    actualizarProgreso(25);

    let html = "";

    switch(categoria){

        case "transicion":

            html = `
            
            <div class="seccion">

                <h2>🌿 ¿Qué es un ecosistema?</h2>

                <img src="img/conoce.png" class="imagenContenido">

                <p>

                    Un ecosistema es un lugar donde viven animales, plantas, agua, tierra y aire.
                    Todos trabajan juntos para que exista vida.

                </p>

                <br>

                <h2>🐒 Algunos ecosistemas de Colombia</h2>

                <div class="ecosistemas">

                    <div class="tarjetaEco" onclick="abrirAmazonia()">

                        <img src="img/amazonia.png">

                        <div class="infoEco">

                                <h3>🌳 Amazonía</h3>

                                <p> 

                                    La selva más grande de Colombia.

                                </p>    

                                <div class="botonEco">

                                    Explorar →

                                </div>

                            </div>

                    </div>

                <div class="tarjetaEco" onclick="abrirAndes()">

                    <img src="img/andes.png">

                    <div class="infoEco">

                        <h3>🏔 Andes</h3>

                    <p>

                        Montañas llenas de vida.

                    </p>

                        <div class="botonEco">

                            Explorar →

                        </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirPacifico()">

                <img src="img/pacifico.png">

                <div class="infoEco">

                    <h3>🌊 Pacífico</h3>

                    <p>

                        Selvas y océanos llenos de animales.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirCaribe()">

                <img src="img/caribe.png">

                <div class="infoEco">

                    <h3>🏝 Caribe</h3>

                    <p>

                        Playas, corales y mucho sol.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirOrinoquia()">

                <img src="img/orinoquia.png">

                <div class="infoEco">

                    <h3>🌾 Orinoquía</h3>

                    <p>

                        Grandes llanuras y ríos.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirInsular()">

                <img src="img/insular.png">

                <div class="infoEco">

                    <h3>🏝 Insular</h3>

                    <p>

                        Islas rodeadas por un hermoso mar.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            </div>

            </div>

            `;

        break;

        case "tercero":

    html = `
    
    <div class="seccion">

        <h2>🌿 ¿Qué es un ecosistema?</h2>

        <img src="img/conoce.png" class="imagenContenido">

        <p>

            Un ecosistema es un lugar donde los seres vivos, como los animales,
            las plantas y los microorganismos, interactúan entre sí y con elementos
            como el agua, el aire, el suelo y el clima. Todos estos componentes
            trabajan juntos para mantener el equilibrio de la naturaleza.

        </p>

        <br>

        <h2>🌎 Los ecosistemas de Colombia</h2>

        <p>

            Colombia es uno de los países con mayor biodiversidad del mundo.
            Gracias a su variedad de climas y paisajes, cuenta con diferentes
            ecosistemas donde habitan miles de especies de animales y plantas.

        </p>

        <br>

        <div class="ecosistemas">

            <div class="tarjetaEco" onclick="abrirAmazonia()">

                        <img src="img/amazonia.png">

                        <div class="infoEco">

                                <h3>🌳 Amazonía</h3>

                                <p> 

                                    La selva más grande de Colombia.

                                </p>    

                                <div class="botonEco">

                                    Explorar →

                                </div>

                            </div>

                    </div>

            <div class="tarjetaEco" onclick="abrirAndes()">

                    <img src="img/andes.png">

                    <div class="infoEco">

                        <h3>🏔 Andes</h3>

                    <p>

                        Montañas llenas de vida.

                    </p>

                        <div class="botonEco">

                            Explorar →

                        </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirPacifico()">

                <img src="img/pacifico.png">

                <div class="infoEco">

                    <h3>🌊 Pacífico</h3>

                    <p>

                        Selvas y océanos llenos de animales.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirCaribe()">

                <img src="img/caribe.png">

                <div class="infoEco">

                    <h3>🏝 Caribe</h3>

                    <p>

                        Playas, corales y mucho sol.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirOrinoquia()">

                <img src="img/orinoquia.png">

                <div class="infoEco">

                    <h3>🌾 Orinoquía</h3>

                    <p>

                        Grandes llanuras y ríos.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirInsular()">

                <img src="img/insular.png">

                <div class="infoEco">

                    <h3>🏝 Insular</h3>

                    <p>

                        Islas rodeadas por un hermoso mar.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            </div>

            </div>

        <br>

        <div class="datoCurioso">

            <h3>💡 ¿Sabías que...?</h3>

            <p>

                Colombia ocupa uno de los primeros lugares del mundo en diversidad
                de aves, orquídeas, mariposas y anfibios. Cuidar los ecosistemas
                ayuda a proteger toda esta riqueza natural.

            </p>

        </div>

    </div>

    `;

break;
        case "sexto":

    html = `

    <div class="seccion">

        <h2>🌿 ¿Qué es un ecosistema?</h2>

        <img src="img/conoce.png" class="imagenContenido">

        <p>

            Un ecosistema es un sistema natural formado por los seres vivos y el medio físico donde interactúan continuamente, manteniendo un equilibrio ecológico.

        </p>

        <br>

        <h2>🌎 Ecosistemas de Colombia</h2>

        <div class="ecosistemas">

            <div class="tarjetaEco" onclick="abrirAmazonia()">

                        <img src="img/amazonia.png">

                        <div class="infoEco">

                                <h3>🌳 Amazonía</h3>

                                <p> 

                                    La selva más grande de Colombia.

                                </p>    

                                <div class="botonEco">

                                    Explorar →

                                </div>

                            </div>

                    </div>

            <div class="tarjetaEco" onclick="abrirAndes()">

                    <img src="img/andes.png">

                    <div class="infoEco">

                        <h3>🏔 Andes</h3>

                    <p>

                        Montañas llenas de vida.

                    </p>

                        <div class="botonEco">

                            Explorar →

                        </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirPacifico()">

                <img src="img/pacifico.png">

                <div class="infoEco">

                    <h3>🌊 Pacífico</h3>

                    <p>

                        Selvas y océanos llenos de animales.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirCaribe()">

                <img src="img/caribe.png">

                <div class="infoEco">

                    <h3>🏝 Caribe</h3>

                    <p>

                        Playas, corales y mucho sol.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirOrinoquia()">

                <img src="img/orinoquia.png">

                <div class="infoEco">

                    <h3>🌾 Orinoquía</h3>

                    <p>

                        Grandes llanuras y ríos.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirInsular()">

                <img src="img/insular.png">

                <div class="infoEco">

                    <h3>🏝 Insular</h3>

                    <p>

                        Islas rodeadas por un hermoso mar.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            </div>

            </div>

    `;

break;

case "noveno":

    html = `

    <div class="seccion">

        <h2>🌿 ¿Qué es un ecosistema?</h2>

        <img src="img/conoce.png" class="imagenContenido">

        <p>

            Un ecosistema es una unidad funcional en la que los organismos vivos interactúan entre sí y con los factores bióticos y abióticos, permitiendo el flujo de energía y el ciclo de la materia.

        </p>

        <br>

        <h2>🌎 Ecosistemas de Colombia</h2>

        <div class="ecosistemas">

            <div class="tarjetaEco" onclick="abrirAmazonia()">

                        <img src="img/amazonia.png">

                        <div class="infoEco">

                                <h3>🌳 Amazonía</h3>

                                <p> 

                                    La selva más grande de Colombia.

                                </p>    

                                <div class="botonEco">

                                    Explorar →

                                </div>

                            </div>

                    </div>
<div class="tarjetaEco" onclick="abrirAndes()">

                    <img src="img/andes.png">

                    <div class="infoEco">

                        <h3>🏔 Andes</h3>

                    <p>

                        Montañas llenas de vida.

                    </p>

                        <div class="botonEco">

                            Explorar →

                        </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirPacifico()">

                <img src="img/pacifico.png">

                <div class="infoEco">

                    <h3>🌊 Pacífico</h3>

                    <p>

                        Selvas y océanos llenos de animales.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirCaribe()">

                <img src="img/caribe.png">

                <div class="infoEco">

                    <h3>🏝 Caribe</h3>

                    <p>

                        Playas, corales y mucho sol.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirOrinoquia()">

                <img src="img/orinoquia.png">

                <div class="infoEco">

                    <h3>🌾 Orinoquía</h3>

                    <p>

                        Grandes llanuras y ríos.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            <div class="tarjetaEco" onclick="abrirInsular()">

                <img src="img/insular.png">

                <div class="infoEco">

                    <h3>🏝 Insular</h3>

                    <p>

                        Islas rodeadas por un hermoso mar.

                    </p>

                    <div class="botonEco">

                        Explorar →

                    </div>

                </div>

            </div>

            </div>

            </div>

    `;

break;

    }

    contenido.innerHTML = html;

}
//========================================
// MISIÓN: EXPLORA
//========================================

function mostrarMapa(){

    actualizarProgreso(50);

    let html = `
    
    <div class="seccion">

        <h2>🗺️ Explora los ecosistemas de Colombia</h2>

        <p>

            Haz clic en uno de los ecosistemas para conocer su ubicación.

        </p>

        <div class="contenedorMapa">

            <img src="img/mapa.png" class="mapaColombia">

            <button class="pin amazonia" onclick="verMapa('amazonia')">🌳</button>

            <button class="pin andes" onclick="verMapa('andes')">🏔️</button>

            <button class="pin pacifico" onclick="verMapa('pacifico')">🌊</button>

            <button class="pin caribe" onclick="verMapa('caribe')">🏝️</button>

            <button class="pin orinoquia" onclick="verMapa('orinoquia')">🌾</button>

            <button class="pin insular" onclick="verMapa('insular')">🐠</button>

        </div>

        <div class="botonesMapa">

            <button onclick="verMapa('amazonia')">🌳 Amazonía</button>

            <button onclick="verMapa('andes')">🏔 Andes</button>

            <button onclick="verMapa('pacifico')">🌊 Pacífico</button>

            <button onclick="verMapa('caribe')">🏝 Caribe</button>

            <button onclick="verMapa('orinoquia')">🌾 Orinoquía</button>

            <button onclick="verMapa('insular')">🐠 Insular</button>

        </div>

    </div>

    `;

    contenido.innerHTML = html;

}

//========================================
// MISIÓN: JUEGA
//========================================

function mostrarJuego(){

    actualizarProgreso(75);

    let html = "";

    switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            html = `

            <div class="pantallaJuego">

                <div class="introJuego">

                    <h2>🎮 Guardianes de los Ecosistemas</h2>

                    <p>

                        ¡Has llegado a la última misión!

                    </p>

                    <p>

                        Observa cada animal y arrástralo al ecosistema donde vive.

                    </p>

                    <div class="objetivo">

                        <h3>🎯 Objetivo</h3>

                        <p>

                            Reconocer los animales y ubicarlos en el ecosistema correcto.

                        </p>

                    </div>

                    <div class="objetivo">

                        <h3>⭐ Recuerda</h3>

                        <p>

                            Piensa en todo lo que aprendiste durante las misiones <b>Conoce</b> y <b>Explora</b>.

                        </p>

                    </div>

                    <button id="btnComenzarJuego">

                        🚀 Comenzar misión

                    </button>

                </div>

            </div>

            `;

        break;


        //========================================
        // TERCERO A QUINTO
        //========================================

        case "tercero":

            html = `

            <div class="pantallaJuego">

                <div class="introJuego">

                    <h2>🎮 Guardianes de los Ecosistemas</h2>

                    <p>

                        ¡Es momento de demostrar cuánto aprendiste!

                    </p>

                    <p>

                        Analiza cada animal e identifica el ecosistema colombiano al que pertenece.

                    </p>

                    <div class="objetivo">

                        <h3>🎯 Objetivo</h3>

                        <p>

                            Relacionar correctamente los animales con el ecosistema donde habitan.

                        </p>

                    </div>

                    <div class="objetivo">

                        <h3>⭐ Recuerda</h3>

                        <p>

                            Utiliza la información aprendida en <b>Conoce</b> y <b>Explora</b> para superar este reto.

                        </p>

                    </div>

                    <button id="btnComenzarJuego">

                        🚀 Comenzar misión

                    </button>

                </div>

            </div>

            `;

        break;

    }

    contenido.innerHTML = html;

    document
        .getElementById("btnComenzarJuego")
        .addEventListener("click", iniciarJuego);

}


//========================================
// INICIAR JUEGO
//========================================

function iniciarJuego(){

    let enlace = "";

    switch(categoria){

        case "transicion":

            enlace = "https://scratch.mit.edu/projects/1326184086/embed";

        break;

        case "tercero":

            enlace = "https://scratch.mit.edu/projects/1334084984/embed";

        break;

    }

    contenido.innerHTML = `

    <div class="juegoScratch">

        <h2>🎮 Guardianes de los Ecosistemas</h2>

        <p>

            ¡Buena suerte, explorador!

        </p>

        <iframe
            src="${enlace}"
            allowtransparency="true"
            allowfullscreen
            frameborder="0">
        </iframe>

        <div class="botonesJuego">

            <button id="btnReiniciar">

                🔄 Reiniciar juego

            </button>

            <button id="btnFinalizar">

                🏆 Ir a Finaliza

            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnReiniciar")
        .addEventListener("click", iniciarJuego);

    document
        .getElementById("btnFinalizar")
        .addEventListener("click", mostrarFinal);

}

//========================================
// MISIÓN: FINALIZA
//========================================

function mostrarFinal(){

    actualizarProgreso(100);

    contenido.innerHTML = `

    <div class="pantallaFinal">

        <div class="tarjetaFinal">

            <img src="img/finaliza.png" class="imgFinal" alt="Finaliza">

            <h2>🎉 ¡MISIÓN CUMPLIDA!</h2>

            <p>

                Has completado con éxito tu recorrido por los
                <b>Ecosistemas Colombianos</b>.

            </p>

            <p>

                Gracias por aprender sobre la importancia de cuidar
                la naturaleza y proteger cada uno de nuestros ecosistemas.

            </p>

            <p class="mensajeFinal">

                🌿 ¡Eres un verdadero Explorador Ambiental! 🌿

            </p>

            <button id="btnReconocimiento">

                🏆 Ver reconocimiento

            </button>

        </div>

    </div>

    `;

    const btnReconocimiento = document.getElementById("btnReconocimiento");

    btnReconocimiento.addEventListener("click", mostrarReconocimiento);
}

//========================================
// RECONOCIMIENTO
//========================================

function mostrarReconocimiento(){

    const tarjeta = document.querySelector(".tarjetaFinal");

    tarjeta.innerHTML += `

    <div class="reconocimiento">

        <div class="encabezadoReconocimiento">

            🏆

            <h2>RECONOCIMIENTO</h2>

            <p class="subtitulo">

                Explorador de los Ecosistemas Colombianos

            </p>

        </div>

        <p>

            Este reconocimiento se otorga a todo explorador que completa
            satisfactoriamente el recorrido interactivo y demuestra interés
            por el conocimiento, el respeto y la conservación de los
            ecosistemas de Colombia.

        </p>

        <p class="fraseReconocimiento">

            🌿 "Conocer la naturaleza es el primer paso para protegerla."

        </p>

        <div class="fechaReconocimiento">

            📅 Fecha de participación<br>

            <strong>${obtenerFecha()}</strong>

        </div>

        <div class="botonesReconocimiento">

            <button id="btnDescargar">

                📥 Descargar reconocimiento

            </button>

            <button id="btnInicio">

                🏠 Volver al inicio

            </button>

        </div>

    </div>

    `;

    document.getElementById("btnReconocimiento").style.display="none";

    const btnInicio = document.getElementById("btnInicio");

    btnInicio.addEventListener("click",()=>{

        window.location.href="categorias.html";

    });
    const btnDescargar = document.getElementById("btnDescargar");

    btnDescargar.addEventListener("click", descargarReconocimiento);
}
function obtenerFecha(){

    const fecha = new Date();

    return fecha.toLocaleDateString("es-CO",{

        day:"numeric",

        month:"long",

        year:"numeric"

    });

}

//========================================
// DESCARGAR RECONOCIMIENTO
//========================================

function descargarReconocimiento(){

    const reconocimiento = document.querySelector(".reconocimiento");

    html2canvas(reconocimiento,{

        scale:2,
        backgroundColor:"#fffdf6"

    }).then(canvas=>{

        const enlace=document.createElement("a");

        enlace.download="Reconocimiento_Explorador.png";

        enlace.href=canvas.toDataURL("image/png");

        enlace.click();

    });

}

function actualizarProgreso(porcentaje){

    document.querySelector(".avance").style.width = porcentaje + "%";

    document.getElementById("porcentaje").textContent = porcentaje + "%";

}

function verMapa(nombre){

    const info = document.getElementById("infoMapa");

    let html = "";

    switch(categoria){

        case "transicion":
            switch(nombre) {
                case"amazonia":
                    html=`

                    <div class="fichaMapa">

                        <h2>🌳 Región Amazónica</h2>

                        <p class="descripcionMapa">

                            La Amazonía ocupa aproximadamente el <b>42 % del territorio colombiano</b>, siendo la región natural más extensa del país.

                        </p>

                        <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Sur de Colombia.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🗺 Departamentos</h3>

                        <p>

                            Amazonas, Caquetá, Guainía, Guaviare, Putumayo y Vaupés.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Límites</h3>

                        <p>

                            Brasil, Perú, Ecuador y Venezuela.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⭐ Dato geográfico</h3>

                        <p>

                            Es la región con menor densidad de población y la mayor extensión de selva tropical del país.

                        </p>

                    </div>
                `;

            break;  

                case "andes":
                    html=`

                    <div class="fichaMapa">    

                        <h2>🏔 Región Andina</h2>

                        <p>

                            Es la región donde vive la mayor parte de la población colombiana.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Centro del país.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🗺 Departamentos</h3>

                        <p>

                            Antioquia, Boyacá, Caldas, Cundinamarca, Huila, Norte de Santander, Quindío, Risaralda, Santander, Tolima, entre otros.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>⛰ Cordilleras</h3>

                        <p>

                            Occidental, Central y Oriental.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>⭐ Dato geográfico</h3>

                        <p>

                            En esta región nacen muchos de los ríos más importantes de Colombia.

                        </p>
                    </div>
                `;

            break;

                case "pacifico":
            
                    html=`
                    <div class="fichaMapa">

                        <h2>🌊 Región Pacífica</h2>

                        <p>

                            La Región Pacífica se caracteriza por sus extensas selvas, manglares y una de las mayores cantidades de lluvia del mundo.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Occidente de Colombia, a lo largo del océano Pacífico.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>🗺 Departamentos</h3>

                        <p>

                            Chocó, Valle del Cauca, Cauca y Nariño.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Limita con</h3>

                        <p>

                            El océano Pacífico al occidente y la Región Andina al oriente.

                        </p>
                    </div>

                    <div class="bloqueInfo">
            
                        <h3>⭐ Dato geográfico</h3>

                        <p>

                            Es una de las regiones con mayor biodiversidad del planeta y recibe abundantes lluvias durante todo el año.

                        </p>
                    </div>

                `;

            break;

                case "caribe":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Caribe</h2>

                        <p>

                            La Región Caribe posee hermosas playas, desiertos, manglares y bosques secos tropicales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Norte de Colombia, junto al mar Caribe.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>🗺 Departamentos</h3>

                        <p>

                            Atlántico, Bolívar, Cesar, Córdoba, La Guajira, Magdalena, Sucre y parte de Antioquia.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Limita con</h3>

                        <p>

                            El mar Caribe al norte y las regiones Andina y Pacífica al sur.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>⭐ Dato geográfico</h3>

                        <p>

                            En esta región se encuentran lugares tan importantes como el Parque Nacional Natural Tayrona y la Sierra Nevada de Santa Marta, la montaña costera más alta del mundo.

                        </p>
                    </div>
                `;

            break;

                case "orinoquia":

                    html=`

                    <div class="fichaMapa">

                        <h2>🌾 Región Orinoquía</h2>

                        <p>

                            La Región Orinoquía está formada por grandes llanuras, sabanas y ecosistemas donde predominan los ríos, la ganadería y una gran variedad de especies animales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se encuentra al oriente de Colombia, en la zona conocida como los Llanos Orientales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🗺 Departamentos</h3>

                        <p>

                            Arauca, Casanare, Meta y Vichada.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Limita con</h3>

                        <p>

                            Venezuela al oriente, la Región Andina al occidente, la Región Amazónica al sur y la Región Caribe al norte.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>⭐ Dato geográfico</h3>

                        <p>

                            La Orinoquía cuenta con extensas sabanas donde habitan especies como el chigüiro, el venado, la danta y el jaguar. Además, sus ríos pertenecen a la cuenca del río Orinoco.

                        </p>

                    </div>

                `;

            break;

                case "insular":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Insular</h2>

                        <p>

                            La Región Insular está conformada por las islas colombianas ubicadas en los océanos y posee ecosistemas marinos con gran biodiversidad.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se encuentra en el mar Caribe y el océano Pacífico, formada por islas, cayos e islotes pertenecientes a Colombia.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🗺 Departamentos</h3>

                        <p>

                            Archipiélago de San Andrés, Providencia y Santa Catalina, además de las islas del Pacífico colombiano como Gorgona y Malpelo.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Limita con</h3>

                        <p>

                            El mar Caribe al norte y el océano Pacífico al occidente.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⭐ Dato geográfico</h3>

                        <p>

                            En esta región se encuentran ecosistemas como arrecifes de coral, manglares y bosques tropicales. La isla de Malpelo es reconocida por su gran riqueza marina y especies como tiburones martillo.

                        </p>

                    </div>
            
                `;

            break;
        }
        
        break;

            case "tercero":
                switch(nombre) {
                    case"amazonia":
                    html=`

                    <div class="fichaMapa">

                        <h2>🌳 Región Amazónica</h2>

                        <p class="descripcionMapa">

                            La Amazonía ocupa aproximadamente el <b>42 % del territorio colombiano</b>, siendo la región natural más extensa del país.

                        </p>

                        <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            La Región Amazónica está en el sur de Colombia. Limita con Brasil, Perú, Ecuador y Venezuela. Es la región más grande del país.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🏞 Relieve o paisaje</h3>

                        <p>

                            Está cubierta por una gran selva tropical, uno de los ecosistemas más importantes del mundo.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            En esta región hay ríos muy grandes, como el río Amazonas, el Caquetá y el Putumayo. Estos ríos son importantes porque ayudan a las personas a transportarse, pescar y obtener agua.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Actividades humanas</h3>

                        <ul>
                            <li>Turismo para conocer la naturaleza.</li>
                            <li>Pesca.</li>
                            <li>Cultivo de alimentos como yuca, plátano y maíz.</li>
                            <li>Elaboración de artesanías por las comunidades indígenas.</li>
                            <li>Cuidado y protección de la selva.</li>
                        </ul>
                            
                    </div>
                    <div class="bloqueInfo">

                        <h3>❤️ ¿Por qué es importante este ecosistema?</h3>

                        <p>

                            La Amazonía es muy importante porque tiene una gran cantidad de plantas y animales. Sus árboles ayudan a mantener el aire limpio y sus ríos llevan agua a muchas especies. Además, allí viven comunidades indígenas que cuidan y respetan la naturaleza desde hace muchos años.
                            
                        </p>

                    </div>
                `;

            break;  

                case "andes":
                    html=`

                    <div class="fichaMapa">    

                        <h2>🏔 Región Andina</h2>

                        <p>

                            Es la región donde vive la mayor parte de la población colombiana.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            La Región Andina está en el centro de Colombia. Es la región donde vive la mayor parte de la población del país. Allí se encuentran ciudades como Bogotá, Medellín, Cali, Bucaramanga y Manizales.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🏞 Relieve o paisaje</h3>

                        <p>

                        Su paisaje está formado por montañas, valles, volcanes y páramos. En esta región se encuentran las tres cordilleras de los Andes: Occidental, Central y Oriental.    

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                           Por la Región Andina pasan ríos muy importantes como el Magdalena, el Cauca, el Bogotá y el Suárez. Estos ríos sirven para obtener agua, producir energía y apoyar la agricultura.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🌎 Actividades humanas</h3>

                        <ul>
                            <li>Agricultura (café, papa, flores y frutas).</li>
                            <li>Ganadería.</li>
                            <li>Industria y comercio.</li>
                            <li>Turismo en pueblos, montañas y parques naturales.</li>
                            
                        </ul>
                    </div>
                    <div class="bloqueInfo">

                        <h3>❤️ ¿Por qué es importante este ecosistema?</h3>

                        <p>

                            La Región Andina es muy importante porque allí vive la mayoría de los colombianos. Produce muchos de los alimentos que consumimos y es el centro de actividades como el comercio, la educación y la industria. Además, sus montañas y páramos ayudan a cuidar el agua que llega a muchas personas.

                        </p>
                    </div>
                `;

            break;

                case "pacifico":
            
                    html=`
                    <div class="fichaMapa">

                        <h2>🌊 Región Pacífica</h2>

                        <p>

                            La Región Pacífica se caracteriza por sus extensas selvas, manglares y una de las mayores cantidades de lluvia del mundo.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            La Región Pacífica está al occidente de Colombia, junto al océano Pacífico. Está formada por los departamentos de Chocó, Valle del Cauca, Cauca y Nariño.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🏞 Relieve o paisaje</h3>

                        <p>

                        Tiene selvas muy húmedas, playas, manglares, ríos y montañas. Es una de las regiones donde más llueve en el mundo.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            Está bañada por el océano Pacífico y cuenta con ríos como el Atrato, el San Juan y el Patía. Estos ríos son importantes para el transporte, la pesca y la vida de muchas comunidades.   

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🌎 Actividades humanas</h3>

                        <ul>
                            <li>Pesca.</li>
                            <li>Agricultura (plátano, coco y cacao).</li>
                            <li>Turismo en playas y parques naturales.</li>
                            <li>Minería.</li>
                            <li>Cuidado y conservación de la naturaleza.</li>
                            
                        </ul>
                    </div>
                    <div class="bloqueInfo">

                        <h3>❤️ ¿Por qué es importante este ecosistema?</h3>

                        <p>

                            La Región Pacífica es muy importante porque tiene una gran variedad de plantas y animales. Sus manglares y selvas ayudan a proteger la naturaleza, y el océano Pacífico es una fuente de alimentos y trabajo para muchas familias. Además, esta región es reconocida por su riqueza cultural, su música y sus tradiciones.    

                        </p>
                    </div>

                `;

            break;

                case "caribe":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Caribe</h2>

                        <p>

                            La Región Caribe posee hermosas playas, desiertos, manglares y bosques secos tropicales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            La Región Caribe está al norte de Colombia, junto al mar Caribe. Incluye departamentos como Atlántico, Bolívar, Magdalena, La Guajira, Córdoba, Sucre y Cesar.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🏞 Relieve o paisaje</h3>

                        <p>

                            Tiene playas, llanuras, desiertos, manglares y montañas, como la Sierra Nevada de Santa Marta, la montaña costera más alta del mundo.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>
                        
                            Está bañada por el mar Caribe y cuenta con ríos importantes como el Magdalena, el Sinú y el Ranchería. Estos ríos ayudan a la pesca, la agricultura y el abastecimiento de agua.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🌎 Actividades humanas</h3>

                        <ul>
                            <li>Turismo en playas y ciudades históricas.</li>
                            <li>Pesca.</li>
                            <li>Agricultura (banano, algodón y arroz).</li>
                            <li>Ganadería.</li>
                            <li>Ganadería.</li>
                            
                        </ul>
                    </div>
                    <div class="bloqueInfo">

                        <h3>❤️ ¿Por qué es importante este ecosistema?</h3>

                        <p>

                            La Región Caribe es muy importante porque sus puertos facilitan el comercio con otros países. Además, es famosa por sus hermosas playas, su música, sus bailes y sus fiestas tradicionales. También alberga una gran variedad de animales y ecosistemas que debemos cuidar.    

                        </p>
                    </div>
                `;

            break;

                case "orinoquia":

                    html=`

                    <div class="fichaMapa">

                        <h2>🌾 Región Orinoquía</h2>

                        <p>

                            La Región Orinoquía está formada por grandes llanuras, sabanas y ecosistemas donde predominan los ríos, la ganadería y una gran variedad de especies animales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            La Región Orinoquía está al oriente de Colombia. También se conoce como los Llanos Orientales. Está formada por los departamentos de Arauca, Casanare, Meta y Vichada.    

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🏞 Relieve o paisaje</h3>

                        <p>

                            Su paisaje está formado por grandes llanuras, sabanas, bosques y ríos. Es una región con amplios espacios naturales donde viven muchos animales.

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            En esta región se encuentran ríos como el Orinoco, el Meta, el Arauca, el Guaviare y el Vichada. Estos ríos son importantes para la pesca, el transporte y el cuidado de los ecosistemas.   

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🌎 Actividades humanas</h3>

                        <ul>
                            <li>Agricultura (arroz, maíz y palma de aceite).</li>
                            <li>Ganadería.</li>
                            <li>Industria y comercio.</li>
                            <li>Turismo de naturaleza.</li>
                            <li>Producción de petróleo.</li>
                            <li>Pesca.</li>
                            
                        </ul>
                    </div>
                    <div class="bloqueInfo">

                        <h3>❤️ ¿Por qué es importante este ecosistema?</h3>

                        <p>

                            La Región Orinoquía es muy importante porque produce alimentos para el país y cuenta con grandes reservas de agua y una gran variedad de animales y plantas. Además, sus llanos son el hogar de tradiciones como el joropo, una música y danza muy representativas de Colombia.    

                        </p>
                    </div>

                `;

            break;

                case "insular":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Insular</h2>

                        <p>

                            La Región Insular está conformada por las islas colombianas ubicadas en los océanos y posee ecosistemas marinos con gran biodiversidad.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            La Región Insular está formada por las islas de Colombia que se encuentran en el mar Caribe y el océano Pacífico. Las más conocidas son San Andrés, Providencia y Santa Catalina.    

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🏞 Relieve o paisaje</h3>

                        <p>

                            Su paisaje tiene playas de arena blanca, arrecifes de coral, manglares, bosques y pequeñas montañas. Sus aguas son de colores azul y verde, y albergan una gran variedad de animales marinos.
                    
                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            La Región Insular está rodeada por el mar Caribe y el océano Pacífico. No tiene ríos grandes, pero sus mares son muy importantes por la gran cantidad de peces, corales y otras especies marinas que habitan allí.   

                        </p>
                    </div>
            
                    <div class="bloqueInfo">

                        <h3>🌎 Actividades humanas</h3>

                        <ul>
                            <li>Comercio.</li>
                            <li>Pesca.</li>
                            <li>Deportes acuáticos como el buceo y el snorkel.</li>
                            <li>Turismo.</li>
                            <li>Cuidado y protección de los arrecifes de coral.</li>
                            
                        </ul>
                    </div>
                    <div class="bloqueInfo">

                        <h3>❤️ ¿Por qué es importante este ecosistema?</h3>

                        <p>

                            La Región Insular es muy importante porque protege una gran diversidad de animales y plantas marinas. Sus arrecifes de coral ayudan a cuidar la vida del mar y atraen a muchos turistas. Además, sus islas son parte del territorio colombiano y tienen una cultura única, llena de música, tradiciones y gastronomía.

                        </p>
                    </div>
                
            `;

            break;
            
        }
            
                break;

        case "sexto":
            switch(nombre) {
                case"amazonia":
                    html=`

                    <div class="fichaMapa">

                        <h2>🌳 Región Amazónica</h2>

                        <p class="descripcionMapa">

                            La Amazonía ocupa aproximadamente el <b>42 % del territorio colombiano</b>, siendo la región natural más extensa del país.

                        </p>

                        <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            El ecosistema amazónico se ubica al sur de Colombia y hace parte de la selva amazónica, compartida con Brasil, Perú, Ecuador, Venezuela, Bolivia, Guyana, Surinam y Guayana Francesa. En Colombia comprende principalmente los departamentos de Amazonas, Caquetá, Guainía, Guaviare, Putumayo y Vaupés.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⛰ Relieve</h3>

                        <p>

                            Predominan las extensas llanuras cubiertas por selva tropical húmeda, con pequeñas colinas y terrazas formadas por la acción de los ríos. Es una región de baja altitud y gran cobertura vegetal.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌦 Clima</h3>

                        <p>

                            Presenta un clima ecuatorial, caracterizado por temperaturas altas (entre 24 °C y 28 °C), alta humedad y lluvias abundantes durante todo el año. Estas condiciones favorecen el crecimiento de una de las selvas más biodiversas del planeta.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            Hace parte de la cuenca del río Amazonas, la más grande del mundo. Entre sus principales ríos se encuentran el Amazonas, Caquetá, Putumayo, Apaporis, Vaupés y Guaviare, fundamentales para el transporte, el abastecimiento de agua y el equilibrio de los ecosistemas.    

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>🌱 Recursos naturales</h3>

                        <p>

                            La Amazonía posee una enorme riqueza en flora y fauna, grandes reservas de agua dulce y extensos bosques que ayudan a regular el clima del planeta al capturar dióxido de carbono. También alberga numerosas especies con valor alimenticio, medicinal y científico, además de comunidades indígenas que conservan importantes conocimientos sobre el uso sostenible de la naturaleza.    

                        </p>

                    </div>
                `;

            break;  

                case "andes":
                    html=`

                    <div class="fichaMapa">    

                        <h2>🏔 Región Andina</h2>

                        <p>

                            Es la región donde vive la mayor parte de la población colombiana.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se encuentra en el centro de Colombia y está atravesado por las cordilleras Occidental, Central y Oriental.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⛰ Relieve</h3>

                        <p>

                            Predominan las montañas, valles, volcanes, cañones y páramos. Es la región con mayor variedad de pisos térmicos del país.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌦 Clima</h3>

                        <p>

                            Presenta diferentes climas según la altitud, desde cálido hasta muy frío. En los páramos las temperaturas pueden ser inferiores a 10 °C.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            Aquí nacen importantes ríos como el Magdalena, Cauca, Bogotá, Suárez y Patía. También se encuentran numerosas lagunas y páramos que abastecen de agua a gran parte del país.    

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>🌱 Recursos naturales</h3>

                        <p>

                            Cuenta con suelos fértiles para la agricultura, importantes fuentes de agua, minerales, bosques andinos y una gran diversidad de flora y fauna.    

                        </p>

                    </div>
                `;

            break;

                case "pacifico":
            
                    html=`
                    <div class="fichaMapa">

                        <h2>🌊 Región Pacífica</h2>

                        <p>

                            La Región Pacífica se caracteriza por sus extensas selvas, manglares y una de las mayores cantidades de lluvia del mundo.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se ubica al occidente de Colombia, a lo largo de la costa del océano Pacífico, desde el departamento del Chocó hasta Nariño.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⛰ Relieve</h3>

                        <p>

                            Está formado por selvas húmedas, llanuras costeras, manglares, playas y la serranía del Baudó.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌦 Clima</h3>

                        <p>
                        
                            Es una de las regiones más lluviosas del mundo. Tiene un clima cálido y muy húmedo durante todo el año.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>
                        
                            Está bañada por el océano Pacífico y cuenta con ríos caudalosos como el Atrato, San Juan, Baudó y Patía.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>🌱 Recursos naturales</h3>

                        <p>

                            Posee bosques tropicales, manglares, recursos pesqueros, minerales como oro y platino, además de una extraordinaria biodiversidad.    

                        </p>

                    </div>

                `;

            break;

                case "caribe":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Caribe</h2>

                        <p>

                            La Región Caribe posee hermosas playas, desiertos, manglares y bosques secos tropicales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se encuentra al norte de Colombia, junto al mar Caribe, e incluye departamentos como La Guajira, Atlántico, Bolívar, Magdalena, Sucre, Córdoba y Cesar.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⛰ Relieve</h3>

                        <p>

                            Presenta playas, llanuras, manglares, ciénagas, desiertos y la Sierra Nevada de Santa Marta.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌦 Clima</h3>

                        <p>

                            Predomina un clima cálido, aunque varía según el lugar. En zonas como La Guajira es seco, mientras que en la Sierra Nevada se presentan climas templados y fríos.    

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            Está bañada por el mar Caribe y recibe importantes ríos como el Magdalena, Sinú, Ranchería y Cesar.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>🌱 Recursos naturales</h3>

                        <p>

                            Cuenta con recursos marinos, pesqueros, bosques secos, salinas, minerales y suelos aptos para diferentes cultivos.

                        </p>

                    </div>
                `;

            break;

                case "orinoquia":

                    html=`

                    <div class="fichaMapa">

                        <h2>🌾 Región Orinoquía</h2>

                        <p>

                            La Región Orinoquía está formada por grandes llanuras, sabanas y ecosistemas donde predominan los ríos, la ganadería y una gran variedad de especies animales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se ubica al oriente de Colombia y comprende los departamentos de Arauca, Casanare, Meta y Vichada.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⛰ Relieve</h3>

                        <p>

                            Predominan las extensas sabanas, llanuras y bosques de galería que acompañan el curso de los ríos.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌦 Clima</h3>

                        <p>

                            Presenta un clima cálido tropical con dos estaciones bien definidas: una lluviosa y otra seca.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            Hace parte de la cuenca del río Orinoco. Sus principales ríos son el Orinoco, Meta, Arauca, Guaviare y Vichada.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>🌱 Recursos naturales</h3>

                        <p>

                            Posee amplias sabanas para la ganadería, importantes reservas de agua, biodiversidad y recursos energéticos como el petróleo y el gas natural.

                        </p>

                    </div>

                `;

            break;

                case "insular":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Insular</h2>

                        <p>

                            La Región Insular está conformada por las islas colombianas ubicadas en los océanos y posee ecosistemas marinos con gran biodiversidad.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Está conformado por las islas colombianas ubicadas en el mar Caribe y el océano Pacífico. Entre ellas se destacan San Andrés, Providencia, Santa Catalina, Gorgona y Malpelo.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>⛰ Relieve</h3>

                        <p>

                            Presenta playas, arrecifes de coral, pequeñas montañas, manglares y costas rocosas, dependiendo de cada isla.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌦 Clima</h3>

                        <p>

                            Predomina un clima cálido tropical, con temperaturas altas durante la mayor parte del año y temporadas de lluvia.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>💧 Hidrografía</h3>

                        <p>

                            Está rodeado por el mar Caribe y el océano Pacífico. Sus ecosistemas marinos incluyen arrecifes de coral, praderas de pastos marinos y aguas de gran riqueza biológica.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>🌱 Recursos naturales</h3>

                        <p>

                            Cuenta con una gran diversidad de especies marinas, arrecifes de coral, recursos pesqueros y paisajes naturales que favorecen el turismo y la conservación ambiental.

                        </p>

                    </div>
            
                `;

            break;
            }
            break;

            case "noveno":
            switch(nombre) {
                case"amazonia":
                    html=`

                    <div class="fichaMapa">

                        <h2>🌳 Región Amazónica</h2>

                        <p class="descripcionMapa">

                            La Amazonía ocupa aproximadamente el <b>42 % del territorio colombiano</b>, siendo la región natural más extensa del país.

                        </p>

                        <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se ubica al sur de Colombia y limita con Brasil, Perú, Ecuador y Venezuela. Su ubicación facilita la cooperación internacional en temas ambientales y convierte a la región en un corredor ecológico de importancia mundial.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Características geográficas</h3>

                        <p>

                            Está conformado por una extensa selva tropical húmeda, con relieve de llanuras y una de las mayores concentraciones de biodiversidad del planeta. Hace parte de la cuenca del río Amazonas.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>👥 Población y cultura</h3>

                        <p>

                            La población es baja en comparación con otras regiones del país. Allí habitan numerosas comunidades indígenas que conservan lenguas, tradiciones y conocimientos ancestrales sobre el manejo sostenible de los recursos naturales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>Actividades económicas</h3>

                        <ul>
                            <li>Ecoturismo.</li>
                            <li>Pesca artesanal.</li>
                            <li>Agricultura de subsistencia.</li>
                            <li>Investigación científica.</li>
                            <li>Aprovechamiento sostenible de recursos forestales.</li>
                        </ul>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📊 Importancia para Colombia</h3>

                        <p>

                            Es una de las principales reservas de biodiversidad y agua dulce del país. Además, contribuye a la regulación del clima, la captura de carbono y la conservación de especies únicas.

                        </p>

                    </div>
                `;

            break;  

                case "andes":
                    html=`

                    <div class="fichaMapa">    

                        <h2>🏔 Región Andina</h2>

                        <p>

                            Es la región donde vive la mayor parte de la población colombiana.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se encuentra en el centro del país y atraviesa Colombia de sur a norte mediante las cordilleras Occidental, Central y Oriental. Es el eje político, económico y administrativo del país.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Características geográficas</h3>

                        <p>

                            Predominan montañas, valles, volcanes y páramos. La variedad de alturas genera diferentes pisos térmicos y una gran diversidad de ecosistemas.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>👥 Población y cultura</h3>

                        <p>

                            Es la región más poblada de Colombia y concentra las principales ciudades. Posee una gran diversidad cultural, gastronómica y arquitectónica.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>Actividades económicas</h3>

                        <ul>
                            <li>Ganadería.</li>
                            <li>Industria.</li>
                            <li>Agricultura.</li>
                            <li>Comercio.</li>
                            <li>Turismo.</li>
                            <li>Servicios financieros y tecnológicos.</li>
                        </ul>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📊 Importancia para Colombia</h3>

                        <p>

                            Concentra gran parte de la producción económica nacional, el gobierno, la educación superior y las principales fuentes de agua gracias a sus páramos.
                            
                        </p>

                    </div>
                `;

            break;

                case "pacifico":
            
                    html=`
                    <div class="fichaMapa">

                        <h2>🌊 Región Pacífica</h2>

                        <p>

                            La Región Pacífica se caracteriza por sus extensas selvas, manglares y una de las mayores cantidades de lluvia del mundo.

                        </p>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se ubica al occidente de Colombia, con salida al océano Pacífico, lo que facilita las relaciones comerciales con los países de Asia y Oceanía.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Características geográficas</h3>

                        <p>

                            Presenta selvas tropicales húmedas, manglares, playas y ríos caudalosos. Es una de las regiones con mayor biodiversidad y precipitación del planeta.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>👥 Población y cultura</h3>

                        <p>

                            La población está conformada principalmente por comunidades afrocolombianas e indígenas, reconocidas por su riqueza cultural, musical y gastronómica.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>Actividades económicas</h3>

                        <ul>
                            <li>Mineria.</li>
                            <li>Pesca.</li>
                            <li>Explotación forestal sostenible.</li>
                            <li>Turismo ecológico.</li>
                            <li>Comercio marítimo.</li>
                        </ul>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📊 Importancia para Colombia</h3>

                        <p>

                            Es fundamental para el comercio internacional, la conservación de la biodiversidad y la protección de ecosistemas como los manglares.
                            
                        </p>

                    </div>

                `;

            break;

                case "caribe":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Caribe</h2>

                        <p>

                            La Región Caribe posee hermosas playas, desiertos, manglares y bosques secos tropicales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se encuentra al norte de Colombia y posee costas sobre el mar Caribe, lo que favorece el intercambio comercial con América y Europa.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Características geográficas</h3>

                        <p>

                            Presenta playas, llanuras costeras, manglares, bosques secos tropicales, ciénagas y la Sierra Nevada de Santa Marta.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>👥 Población y cultura</h3>

                        <p>

                            Es una región con gran diversidad cultural, influenciada por comunidades indígenas, afrodescendientes y mestizas. Destaca por su música, festivales y tradiciones.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>Actividades económicas</h3>

                        <ul>
                            <li>Turismo</li>
                            <li>Pesca.</li>
                            <li>Agricultura.</li>
                            <li>Comercio marítimo.</li>
                            <li>Ganadería.</li>
                            <li>Industria portuaria.</li>
                        </ul>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📊 Importancia para Colombia</h3>

                        <p>

                            Es clave para el comercio exterior, el turismo nacional e internacional y la conservación de ecosistemas costeros y marinos.
                            
                        </p>

                    </div>
                `;

            break;

                case "orinoquia":

                    html=`

                    <div class="fichaMapa">

                        <h2>🌾 Región Orinoquía</h2>

                        <p>

                            La Región Orinoquía está formada por grandes llanuras, sabanas y ecosistemas donde predominan los ríos, la ganadería y una gran variedad de especies animales.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Se ubica al oriente de Colombia, en la frontera con Venezuela. Hace parte de la cuenca del río Orinoco.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Características geográficas</h3>

                        <p>

                            Predominan las sabanas tropicales, los bosques de galería y extensas llanuras que favorecen actividades agropecuarias.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>👥 Población y cultura</h3>

                        <p>

                            Su población es relativamente dispersa. La cultura llanera se caracteriza por el joropo, el trabajo ganadero y las tradiciones asociadas a la vida en los llanos.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>Actividades económicas</h3>

                        <ul>
                            <li>Ecoturismo.</li>
                            <li>Ganadería extensiva.</li>
                            <li>Agricultura.</li>
                            <li>Produccion de petróleo y gas.</li>
                            <li>Agroindustria.</li>
                        </ul>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📊 Importancia para Colombia</h3>

                        <p>

                            Es una región estratégica por su producción agropecuaria, sus recursos energéticos y su potencial para el desarrollo sostenible.
                            
                        </p>

                    </div>

                `;

            break;

                case "insular":

                    html=`

                    <div class="fichaMapa">

                        <h2>🏝 Región Insular</h2>

                        <p>

                            La Región Insular está conformada por las islas colombianas ubicadas en los océanos y posee ecosistemas marinos con gran biodiversidad.

                        </p>
                    </div>

                    <div class="bloqueInfo">

                        <h3>📍 Ubicación</h3>

                        <p>

                            Está conformado por las islas colombianas ubicadas en el mar Caribe y el océano Pacífico, fortaleciendo la presencia marítima y territorial de Colombia.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>🌎 Características geográficas</h3>

                        <p>

                            Está formado por islas, cayos, arrecifes de coral, playas, manglares y ecosistemas marinos de gran riqueza biológica.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>👥 Población y cultura</h3>

                        <p>

                            En las islas habitan comunidades con tradiciones propias, como la cultura raizal en San Andrés y Providencia, reconocida por su lengua, música y costumbres.

                        </p>

                    </div>

                    <div class="bloqueInfo">

                        <h3>Actividades económicas</h3>

                        <ul>
                            <li>Turismo.</li>
                             <li>Pesca.</li>
                            <li>Transporte marítimo.</li>
                            <li>Comercio.</li>
                            <li>Conservación de áreas marinas protegidas.</li>
                        </ul>

                    </div>
                    <div class="bloqueInfo">

                        <h3>📊 Importancia para Colombia</h3>

                        <p>

                            La región fortalece la soberanía marítima del país, protege importantes ecosistemas marinos y arrecifes de coral, y representa un importante destino turístico que impulsa la economía nacional.
                            
                        </p>

                    </div>
            
                `;

            break;
            }
        

        break;

    
        }
    contenidoModal.innerHTML = html;

    modal.style.display = "flex";

}

//========================================
// FICHA AMAZONÍA
//========================================

function abrirAmazonia(){

    switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            contenidoModal.innerHTML = `

                <h2>🌎 Amazonía</h2>

                <img src="img/amazonia.png" alt="Amazonía">

                <p>
                    La Amazonía es la selva tropical más grande de Colombia.
                </p>

                <hr>

                <h3>🐾 Animales</h3>
                <p>
                    Jaguar, mono aullador, guacamaya y delfín rosado.
                </p>

                <h3>🌱 Plantas</h3>
                <p>
                    Ceiba, orquídeas, helechos y palmas.
                </p>

                <h3>🌡 Clima</h3>
                <p>
                    Cálido y muy húmedo.
                </p>

                <h3>📍 Ubicación</h3>
                <p>
                    Sur de Colombia.
                </p>

                <h3>💡 Dato curioso</h3>
                <p>
                    Produce gran parte del oxígeno del planeta.
                </p>

            `;

        break;

        //========================================
        // TERCERO
        //========================================

        case "tercero":

            contenidoModal.innerHTML = `

                <h2>🌎 Amazonía</h2>

                <img src="img/amazonia.png" alt="Amazonía">

                <p>

                    La Amazonía es el bosque tropical más grande de Colombia y uno de los lugares con mayor biodiversidad del planeta. Miles de especies de animales y plantas viven allí formando un ecosistema único.

                </p>

                <hr>

                <h3>🐾 Fauna</h3>

                <p>

                    Jaguares, delfines rosados, monos, perezosos, tucanes, ranas e innumerables insectos habitan esta región.

                </p>

                <h3>🌿 Flora</h3>

                <p>

                    Sus árboles gigantes, palmas, orquídeas y plantas medicinales ayudan a producir oxígeno y proteger el suelo.

                </p>

                <h3>⭐ Importancia</h3>

                <p>

                    La Amazonía regula el clima, almacena agua dulce y captura dióxido de carbono, ayudando a disminuir el cambio climático.

                </p>

                <h3>⚠ Amenazas</h3>

                <p>

                    La tala indiscriminada, los incendios forestales, la minería ilegal y la contaminación de los ríos ponen en riesgo este ecosistema.

                </p>

                <h3>❤️ ¿Cómo podemos cuidarla?</h3>

                <p>

                    Reciclando, sembrando árboles, evitando el desperdicio de papel y respetando la naturaleza y las comunidades indígenas.

                </p>

            `;

        break;

        //========================================
        // SEXTO
        //========================================

        case "sexto":

            contenidoModal.innerHTML = `

                <h2>🌎 Amazonía</h2>

                <img src="img/amazonia.png" alt="Amazonía">

                <p>

                    La Amazonía es el bosque tropical más extenso del planeta y uno de los ecosistemas con mayor biodiversidad. Sus bosques regulan el clima y forman parte del ciclo del agua.

                </p>

                <hr>

                <h3>🐾 Fauna</h3>

                <p>

                    Jaguar, águila arpía, anaconda, mono churuco, delfín rosado y cientos de especies de aves, reptiles y anfibios.

                </p>

                <h3>🌿 Flora</h3>

                <p>

                    Ceibas, cauchos, yarumos, bromelias, palmas y árboles de gran altura.

                </p>

                <h3>🌡 Clima</h3>

                <p>

                    Clima ecuatorial cálido y húmedo, con temperaturas entre 24 °C y 28 °C y abundantes lluvias durante todo el año.

                </p>

                <h3>⚠ Problemáticas</h3>

                <p>

                    La deforestación y la minería ilegal afectan la biodiversidad, el suelo y las fuentes de agua.

                </p>

                <h3>🌎 Conservación</h3>

                <p>

                    La protección de los bosques amazónicos es fundamental para conservar la biodiversidad y reducir los efectos del cambio climático.

                </p>

            `;

        break;

        //========================================
// NOVENO
//========================================

case "noveno":

    contenidoModal.innerHTML = `

        <h2>🌎 Amazonía</h2>

        <img src="img/amazonia.png" alt="Amazonía">

        <p>

            La Amazonía constituye el bosque tropical más extenso del planeta y uno de los ecosistemas con mayor biodiversidad. Su papel es esencial en la regulación del clima, el ciclo del agua y la conservación de la vida a escala global.

        </p>

        <hr>

        <h3>🌎 Servicios ecosistémicos</h3>

        <p>

            La Amazonía captura grandes cantidades de dióxido de carbono, regula el ciclo hidrológico, produce humedad mediante la evapotranspiración y contribuye a estabilizar el clima de Sudamérica y del planeta.

        </p>

        <h3>🌳 Ecosistemas estratégicos</h3>

        <p>

            Sus bosques húmedos, ríos, humedales y selvas inundables albergan millones de especies de flora y fauna, muchas de ellas endémicas o aún desconocidas por la ciencia, además de comunidades indígenas que dependen directamente de estos recursos.

        </p>

        <h3>⚠ Problemáticas ambientales</h3>

        <p>

            La deforestación, la minería ilegal, la expansión de la frontera agrícola, los incendios forestales y el cambio climático reducen la biodiversidad, alteran los ciclos naturales y disminuyen la capacidad del bosque para capturar carbono.

        </p>

        <h3>🔬 Desarrollo sostenible</h3>

        <p>

            La conservación de la Amazonía requiere fortalecer las áreas protegidas, promover el manejo sostenible de los recursos naturales, apoyar a las comunidades indígenas y desarrollar actividades económicas responsables que garanticen la protección del bosque.

        </p>

    `;

break;

    }

    modal.className = "modal modal-amazonia";

    modal.style.display = "flex";

}
//========================================
// FICHA Andes
//========================================    
function abrirAndes(){

     switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            contenidoModal.innerHTML = `

                <h2>🌎 Andes</h2>

                <img src="img/andes.png" alt="Andes">

                <p>
                    La región Andina está formada por grandes montañas donde viven muchas personas, animales y plantas.
                </p>

                <hr>

                <h3>🐾 Animales</h3>
                <p>
                    Oso de anteojos, cóndor de los Andes, venado y colibrí.
                </p>

                <h3>🌱 Plantas</h3>
                <p>
                    Frailejones, robles, orquídeas y encenillos.
                </p>

                <h3>🌡 Clima</h3>
                <p>
                    Puede ser cálido, templado o frío, dependiendo de la altura.
                </p>

                <h3>📍 Ubicación</h3>
                <p>
                    Se encuentra en el centro de Colombia y está formada por tres cordilleras.
                </p>

                <h3>💡 Dato curioso</h3>
                <p>
                    En esta región viven la mayoría de los colombianos.
                </p>

            `;

        break;

        //========================================
        // TERCERO
        //========================================

        case "tercero":

            contenidoModal.innerHTML = `

                <h2>🌎 Andes</h2>

                <img src="img/andes.png" alt="Andes">

                <p>

                    La región Andina es la más poblada de Colombia. Está formada por las tres cordilleras de los Andes y posee montañas, bosques y páramos que suministran agua a millones de personas.

                </p>

                <hr>

                <h3>🏔 Relieve</h3>

                <p>

                    Está conformada por las cordilleras Occidental, Central y Oriental, donde se encuentran montañas, volcanes, valles y páramos.

                </p>

                <h3>💧 Importancia del agua</h3>

                <p>

                    En los páramos nacen muchos de los ríos más importantes del país. Estos ecosistemas almacenan y distribuyen el agua que abastece a ciudades y municipios.

                </p>

                <h3>🌾 Actividades económicas</h3>

                <p>

                    Es la principal región agrícola de Colombia. Allí se cultivan café, papa, flores, frutas y hortalizas, además de desarrollarse la industria y el comercio.

                </p>

                <h3>⚠ Amenazas</h3>

                <p>

                    La contaminación de los ríos, la tala de bosques, los incendios y la expansión de las ciudades afectan los ecosistemas andinos.

                </p>

                <h3>❤️ ¿Cómo podemos cuidarla?</h3>

                <p>

                    Ahorrando agua, protegiendo los páramos, sembrando árboles y evitando contaminar los bosques y ríos.

                </p>

            `;

        break;

        //========================================
        // SEXTO
        //========================================

        case "sexto":

            contenidoModal.innerHTML = `

                <h2>🌎 Andes</h2>

                <img src="img/andes.png" alt="Andes">

                <p>

                    La región Andina presenta una gran variedad de ecosistemas debido a la presencia de diferentes pisos térmicos. Esta diversidad permite la existencia de bosques, páramos y nevados con especies adaptadas a cada ambiente.

                </p>

                <hr>

                <h3>🌡 Pisos térmicos</h3>

                <p>

                    La temperatura cambia con la altura. Esto origina los pisos cálido, templado, frío, páramo y nival, cada uno con características propias de flora y fauna.

                </p>

                <h3>💧 Regulación hídrica</h3>

                <p>

                    Los páramos funcionan como esponjas naturales que capturan el agua de la lluvia y la liberan lentamente hacia quebradas, ríos y embalses.

                </p>

                <h3>🌿 Biodiversidad</h3>

                <p>

                    Habitan especies como el oso de anteojos, el cóndor de los Andes, el puma y una gran variedad de frailejones, orquídeas y robles.

                </p>

                <h3>⚠ Problemáticas</h3>

                <p>

                    La minería, la expansión agrícola, la deforestación y el cambio climático alteran el equilibrio de estos ecosistemas y reducen la disponibilidad de agua.

                </p>

                <h3>🌎 Conservación</h3>

                <p>

                    La protección de los páramos y bosques altoandinos garantiza el abastecimiento de agua y la conservación de numerosas especies.

                </p>

            `;

        break;

        //========================================
        // NOVENO
        //========================================

        case "noveno":

            contenidoModal.innerHTML = `

                <h2>🌎 Andes</h2>

                <img src="img/andes.png" alt="Andes">

                <p>

                    La región Andina constituye el principal eje geográfico, económico y social de Colombia. Sus ecosistemas de montaña proporcionan servicios ecosistémicos esenciales relacionados con el agua, la regulación climática, la conservación del suelo y la biodiversidad.

                </p>

                <hr>

                <h3>🏔 Formación geológica</h3>

                <p>

                    La cordillera de los Andes se originó por el choque entre placas tectónicas. Este proceso dio lugar a montañas, volcanes y valles que hoy caracterizan el relieve colombiano.

                </p>

                <h3>💧 Servicios ecosistémicos</h3>

                <p>

                    Los páramos capturan, almacenan y regulan el agua; los bosques altoandinos protegen los suelos y contribuyen a la captura de carbono y a la regulación del clima.

                </p>

                <h3>⚠ Problemáticas ambientales</h3>

                <p>

                    La urbanización, la minería, la expansión agrícola, la fragmentación de hábitats y el cambio climático amenazan la estabilidad de los ecosistemas andinos.

                </p>

                <h3>🔬 Desarrollo sostenible</h3>

                <p>

                    El futuro de la región depende de equilibrar el crecimiento económico con la conservación de los recursos naturales mediante energías limpias, restauración ecológica y una gestión responsable del agua.

                </p>

            `;

        break;

    }

    modal.className = "modal modal-andes";

    modal.style.display = "flex";

}
//========================================
// FICHA Pacifico
//========================================
function abrirPacifico(){

     switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            contenidoModal.innerHTML = `

                <h2>🌎 Pacífico</h2>

                <img src="img/pacifico.png" alt="Pacífico">

                <p>
                    La región del Pacífico tiene grandes selvas, playas y manglares donde viven muchos animales y plantas.
                </p>

                <hr>

                <h3>🐾 Animales</h3>
                <p>
                    Ballena jorobada, tortuga marina, delfín, tucán y rana.
                </p>

                <h3>🌱 Plantas</h3>
                <p>
                    Manglares, palmas, heliconias y árboles gigantes.
                </p>

                <h3>🌧 Clima</h3>
                <p>
                    Muy lluvioso, cálido y húmedo durante casi todo el año.
                </p>

                <h3>📍 Ubicación</h3>
                <p>
                    Se encuentra al occidente de Colombia, junto al océano Pacífico.
                </p>

                <h3>💡 Dato curioso</h3>
                <p>
                    Cada año llegan ballenas jorobadas para tener sus crías.
                </p>

            `;

        break;

        //========================================
        // TERCERO
        //========================================

        case "tercero":

            contenidoModal.innerHTML = `

                <h2>🌎 Pacífico</h2>

                <img src="img/pacifico.png" alt="Pacífico">

                <p>

                    La región del Pacífico es una de las más lluviosas del planeta. Sus selvas, manglares y costas albergan una enorme diversidad de animales y plantas.

                </p>

                <hr>

                <h3>🌊 Ecosistemas</h3>

                <p>

                    En esta región encontramos selvas húmedas, manglares, playas, estuarios y zonas marinas que sirven de refugio para muchas especies.

                </p>

                <h3>🐋 Importancia</h3>

                <p>

                    Los manglares protegen las costas y sirven como hogar para peces, crustáceos y aves. Además, las ballenas jorobadas visitan estas aguas cada año.

                </p>

                <h3>🐟 Beneficios</h3>

                <p>

                    El océano proporciona alimento, empleo mediante la pesca y el turismo, además de ayudar a regular el clima.

                </p>

                <h3>⚠ Amenazas</h3>

                <p>

                    La contaminación del mar, la tala de manglares y la pesca indiscriminada ponen en riesgo este ecosistema.

                </p>

                <h3>❤️ ¿Cómo podemos cuidarlo?</h3>

                <p>

                    Evitando arrojar basura al mar, respetando la fauna marina y protegiendo los manglares.

                </p>

            `;

        break;

        //========================================
        // SEXTO
        //========================================

        case "sexto":

            contenidoModal.innerHTML = `

                <h2>🌎 Pacífico</h2>

                <img src="img/pacifico.png" alt="Pacífico">

                <p>

                    La región del Pacífico combina ecosistemas terrestres y marinos con una de las mayores precipitaciones del mundo. La interacción entre selvas, ríos y océano favorece una extraordinaria biodiversidad.

                </p>

                <hr>

                <h3>🌧 Características ecológicas</h3>

                <p>

                    Presenta lluvias abundantes, alta humedad y extensos manglares que conectan los ecosistemas terrestres con los marinos.

                </p>

                <h3>🌿 Biodiversidad</h3>

                <p>

                    Habitan ballenas jorobadas, tiburones, tortugas marinas, ranas venenosas, aves tropicales y numerosas especies de peces e invertebrados.

                </p>

                <h3>🌊 Función de los manglares</h3>

                <p>

                    Los manglares reducen la erosión costera, filtran sedimentos y sirven como zonas de reproducción para muchas especies marinas.

                </p>

                <h3>⚠ Problemáticas</h3>

                <p>

                    La contaminación por plásticos, la sobrepesca, la tala de manglares y el cambio climático afectan el equilibrio de estos ecosistemas.

                </p>

                <h3>🌎 Conservación</h3>

                <p>

                    Las áreas marinas protegidas y el manejo responsable de la pesca son fundamentales para conservar la biodiversidad del Pacífico.

                </p>

            `;

        break;

        //========================================
        // NOVENO
        //========================================

        case "noveno":

            contenidoModal.innerHTML = `

                <h2>🌎 Pacífico</h2>

                <img src="img/pacifico.png" alt="Pacífico">

                <p>

                    La región del Pacífico constituye uno de los ecosistemas con mayor biodiversidad del planeta gracias a la interacción entre ambientes marinos, costeros y selváticos. Su riqueza biológica desempeña un papel esencial en el equilibrio ecológico y en la economía de las comunidades costeras.

                </p>

                <hr>

                <h3>🌊 Servicios ecosistémicos</h3>

                <p>

                    Los manglares almacenan carbono, protegen las costas frente a la erosión, mantienen la calidad del agua y sirven como criaderos naturales para numerosas especies marinas.

                </p>

                <h3>🐋 Biodiversidad marina</h3>

                <p>

                    El Pacífico colombiano alberga ballenas jorobadas, tiburones, tortugas marinas, arrecifes coralinos y una gran diversidad de organismos adaptados a ecosistemas costeros y oceánicos.

                </p>

                <h3>⚠ Problemáticas ambientales</h3>

                <p>

                    La contaminación marina, la sobrepesca, la destrucción de manglares y los efectos del cambio climático alteran el funcionamiento de estos ecosistemas.

                </p>

                <h3>🔬 Desarrollo sostenible</h3>

                <p>

                    La conservación del Pacífico requiere fortalecer las áreas marinas protegidas, promover la pesca sostenible y reducir la contaminación de ríos y océanos para garantizar la protección de su biodiversidad.

                </p>

            `;

        break;

    }

    modal.className = "modal modal-pacifico";

    modal.style.display = "flex";

}
//========================================
// FICHA CARIBE
//========================================
function abrirCaribe(){

     switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            contenidoModal.innerHTML = `

                <h2>🌎 Caribe</h2>

                <img src="img/caribe.png" alt="Caribe">

                <p>
                    La región Caribe tiene playas, mares, bosques y desiertos donde viven muchos animales y plantas.
                </p>

                <hr>

                <h3>🐾 Animales</h3>
                <p>
                    Flamenco rosado, tortuga marina, iguana y pelícano.
                </p>

                <h3>🌱 Plantas</h3>
                <p>
                    Mangle, cactus, cocoteros y trupillos.
                </p>

                <h3>🌡 Clima</h3>
                <p>
                    Generalmente es cálido y soleado durante todo el año.
                </p>

                <h3>📍 Ubicación</h3>
                <p>
                    Se encuentra al norte de Colombia, junto al mar Caribe.
                </p>

                <h3>💡 Dato curioso</h3>
                <p>
                    En esta región está el mar más grande de Colombia.
                </p>

            `;

        break;

        //========================================
        // TERCERO
        //========================================

        case "tercero":

            contenidoModal.innerHTML = `

                <h2>🌎 Caribe</h2>

                <img src="img/caribe.png" alt="Caribe">

                <p>

                    La región Caribe posee playas, arrecifes de coral, manglares, ciénagas y bosques secos tropicales. Sus ecosistemas albergan una gran variedad de especies y son fundamentales para la vida marina.

                </p>

                <hr>

                <h3>🏝 Ecosistemas</h3>

                <p>

                    En esta región encontramos playas, manglares, arrecifes de coral, bosques secos tropicales y ciénagas que sirven de refugio para numerosas especies.

                </p>

                <h3>🐠 Importancia</h3>

                <p>

                    Los arrecifes de coral protegen las costas del oleaje y son el hogar de miles de peces, moluscos y otros organismos marinos.

                </p>

                <h3>🌊 Beneficios</h3>

                <p>

                    El mar Caribe proporciona alimento, empleo mediante la pesca y el turismo, además de favorecer el transporte marítimo y el comercio.

                </p>

                <h3>⚠ Amenazas</h3>

                <p>

                    La contaminación, el turismo no responsable, la pesca excesiva y el deterioro de los arrecifes afectan este ecosistema.

                </p>

                <h3>❤️ ¿Cómo podemos cuidarlo?</h3>

                <p>

                    Evitando contaminar las playas, protegiendo los corales, reduciendo el uso de plásticos y respetando la fauna marina.

                </p>

            `;

        break;

        //========================================
        // SEXTO
        //========================================

        case "sexto":

            contenidoModal.innerHTML = `

                <h2>🌎 Caribe</h2>

                <img src="img/caribe.png" alt="Caribe">

                <p>

                    La región Caribe reúne ecosistemas marinos y terrestres que incluyen arrecifes coralinos, manglares, bosques secos tropicales y humedales. Estos ecosistemas sostienen una alta diversidad biológica y numerosas actividades económicas.

                </p>

                <hr>

                <h3>🪸 Arrecifes de coral</h3>

                <p>

                    Son ecosistemas formados por pequeños organismos llamados corales. Albergan miles de especies marinas y protegen las costas de la erosión causada por las olas.

                </p>

                <h3>🌿 Bosque seco tropical</h3>

                <p>

                    Es uno de los ecosistemas más amenazados de Colombia debido a la expansión agrícola y urbana. Sus especies están adaptadas a largos periodos de sequía.

                </p>

                <h3>🌊 Biodiversidad marina</h3>

                <p>

                    En el Caribe habitan tortugas marinas, manatíes, delfines, peces de arrecife, estrellas de mar y una gran variedad de invertebrados.

                </p>

                <h3>⚠ Problemáticas</h3>

                <p>

                    El aumento de la temperatura del mar, la contaminación, la sobrepesca y la destrucción de los corales amenazan el equilibrio de estos ecosistemas.

                </p>

                <h3>🌎 Conservación</h3>

                <p>

                    La creación de áreas marinas protegidas, la restauración de corales y el turismo responsable ayudan a conservar la riqueza natural del Caribe.

                </p>

            `;

        break;

        //========================================
        // NOVENO
        //========================================

        case "noveno":

            contenidoModal.innerHTML = `

                <h2>🌎 Caribe</h2>

                <img src="img/caribe.png" alt="Caribe">

                <p>

                    La región Caribe constituye un sistema de ecosistemas marinos y costeros de gran importancia ecológica y económica. Sus arrecifes coralinos, manglares y bosques secos proporcionan servicios ecosistémicos esenciales para la biodiversidad y las comunidades humanas.

                </p>

                <hr>

                <h3>🌊 Servicios ecosistémicos</h3>

                <p>

                    Los arrecifes y manglares protegen las costas, favorecen la reproducción de especies marinas, almacenan carbono y contribuyen al equilibrio de los ecosistemas costeros.

                </p>

                <h3>🪸 Ecosistemas estratégicos</h3>

                <p>

                    Los arrecifes coralinos son considerados uno de los ecosistemas más diversos del planeta, mientras que los bosques secos tropicales albergan numerosas especies adaptadas a condiciones de baja disponibilidad de agua.

                </p>

                <h3>⚠ Problemáticas ambientales</h3>

                <p>

                    El blanqueamiento de los corales debido al aumento de la temperatura del mar, la contaminación por residuos, la sobrepesca y el desarrollo urbano no planificado deterioran estos ecosistemas.

                </p>

                <h3>🔬 Desarrollo sostenible</h3>

                <p>

                    La conservación del Caribe requiere fortalecer las áreas protegidas, promover la pesca responsable, restaurar los arrecifes y fomentar un turismo sostenible que reduzca el impacto sobre los ecosistemas.

                </p>

            `;

        break;

    }

    modal.className = "modal modal-caribe";

    modal.style.display = "flex";

}
//========================================
// FICHA ORINOQUIA
//========================================
function abrirOrinoquia(){

     switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            contenidoModal.innerHTML = `

                <h2>🌎 Orinoquía</h2>

                <img src="img/orinoquia.png" alt="Orinoquía">

                <p>
                    La región Orinoquía está formada por grandes llanuras donde viven muchos animales y plantas.
                </p>

                <hr>

                <h3>🐾 Animales</h3>
                <p>
                    Chigüiro, venado, caimán, anaconda y garza.
                </p>

                <h3>🌱 Plantas</h3>
                <p>
                    Palmas de moriche, pastos naturales y árboles de galería.
                </p>

                <h3>🌡 Clima</h3>
                <p>
                    Es cálido y tiene una época de lluvias y otra de sequía.
                </p>

                <h3>📍 Ubicación</h3>
                <p>
                    Se encuentra al oriente de Colombia, en los Llanos Orientales.
                </p>

                <h3>💡 Dato curioso</h3>
                <p>
                    Durante el invierno muchas llanuras se inundan y forman enormes humedales.
                </p>

            `;

        break;

        //========================================
        // TERCERO
        //========================================

        case "tercero":

            contenidoModal.innerHTML = `

                <h2>🌎 Orinoquía</h2>

                <img src="img/orinoquia.png" alt="Orinoquía">

                <p>

                    La región Orinoquía está formada por extensas sabanas, ríos y bosques de galería. Sus paisajes cambian entre la temporada de lluvias y la temporada seca, permitiendo el desarrollo de una gran variedad de especies.

                </p>

                <hr>

                <h3>🌾 Ecosistemas</h3>

                <p>

                    Predominan las sabanas naturales, los humedales, los bosques de galería y grandes ríos que sirven de refugio para numerosos animales.

                </p>

                <h3>💧 Importancia</h3>

                <p>

                    Sus humedales almacenan agua durante las lluvias y proporcionan alimento y refugio a peces, aves y mamíferos.

                </p>

                <h3>🌱 Beneficios</h3>

                <p>

                    La región aporta alimentos mediante la agricultura y la ganadería, además de conservar importantes reservas de agua y biodiversidad.

                </p>

                <h3>⚠ Amenazas</h3>

                <p>

                    Los incendios, la deforestación, la contaminación de los ríos y el uso inadecuado del suelo afectan estos ecosistemas.

                </p>

                <h3>❤️ ¿Cómo podemos cuidarla?</h3>

                <p>

                    Protegiendo los humedales, evitando quemas, cuidando los ríos y respetando la fauna silvestre.

                </p>

            `;

        break;

        //========================================
        // SEXTO
        //========================================

        case "sexto":

            contenidoModal.innerHTML = `

                <h2>🌎 Orinoquía</h2>

                <img src="img/orinoquia.png" alt="Orinoquía">

                <p>

                    La región Orinoquía comprende extensas sabanas tropicales, bosques de galería y humedales. La alternancia entre épocas de lluvia y sequía determina el funcionamiento de sus ecosistemas y la distribución de las especies.

                </p>

                <hr>

                <h3>🌦 Dinámica estacional</h3>

                <p>

                    Durante la temporada de lluvias grandes áreas se inundan, mientras que en la temporada seca el agua disminuye, obligando a las especies a adaptarse a estos cambios.

                </p>

                <h3>🦜 Biodiversidad</h3>

                <p>

                    Alberga chigüiros, osos hormigueros gigantes, venados, anacondas, caimanes, delfines de río y una gran diversidad de aves acuáticas.

                </p>

                <h3>🌾 Función ecológica</h3>

                <p>

                    Las sabanas y humedales favorecen el ciclo del agua, el almacenamiento de nutrientes y la conservación de especies migratorias y residentes.

                </p>

                <h3>⚠ Problemáticas</h3>

                <p>

                    La expansión agrícola, la ganadería intensiva, los incendios forestales y la contaminación alteran el equilibrio natural de la región.

                </p>

                <h3>🌎 Conservación</h3>

                <p>

                    La protección de humedales, sabanas y bosques de galería es esencial para conservar la biodiversidad y los recursos hídricos.

                </p>

            `;

        break;

        //========================================
        // NOVENO
        //========================================

        case "noveno":

            contenidoModal.innerHTML = `

                <h2>🌎 Orinoquía</h2>

                <img src="img/orinoquia.png" alt="Orinoquía">

                <p>

                    La región Orinoquía constituye uno de los ecosistemas de sabana tropical más importantes de Suramérica. Su dinámica hidrológica, marcada por los ciclos de inundación y sequía, sostiene una alta biodiversidad y numerosas actividades productivas.

                </p>

                <hr>

                <h3>🌎 Servicios ecosistémicos</h3>

                <p>

                    Los humedales regulan el ciclo del agua, favorecen la recarga de acuíferos, almacenan carbono y proporcionan hábitats para numerosas especies de flora y fauna.

                </p>

                <h3>🌾 Ecosistemas estratégicos</h3>

                <p>

                    Las sabanas naturales, los bosques de galería y los humedales mantienen procesos ecológicos esenciales, como la migración de aves, la reproducción de peces y el equilibrio de las cadenas alimentarias.

                </p>

                <h3>⚠ Problemáticas ambientales</h3>

                <p>

                    La transformación de las sabanas para agricultura y ganadería intensiva, las quemas, la contaminación y el cambio climático generan pérdida de biodiversidad y alteran los ciclos naturales.

                </p>

                <h3>🔬 Desarrollo sostenible</h3>

                <p>

                    La gestión responsable del territorio, la conservación de los humedales y el uso sostenible de los recursos naturales son fundamentales para garantizar el equilibrio ecológico y el bienestar de las comunidades de la Orinoquía.

                </p>

            `;

        break;

    }

    modal.className = "modal modal-orinoquia";

    modal.style.display = "flex";

}
//========================================
// FICHA INSULAR
//========================================
function abrirInsular(){

     switch(categoria){

        //========================================
        // TRANSICIÓN
        //========================================

        case "transicion":

            contenidoModal.innerHTML = `

                <h2>🌎 Insular</h2>

                <img src="img/insular.png" alt="Insular">

                <p>
                    La región Insular está formada por las islas de Colombia, rodeadas por el mar y con una gran variedad de animales y plantas.
                </p>

                <hr>

                <h3>🐾 Animales</h3>
                <p>
                    Tortuga marina, pez loro, tiburón nodriza y cangrejo.
                </p>

                <h3>🌱 Plantas</h3>
                <p>
                    Cocoteros, manglares, palmeras y pastos marinos.
                </p>

                <h3>🌡 Clima</h3>
                <p>
                    Es cálido, con temperaturas agradables durante todo el año.
                </p>

                <h3>📍 Ubicación</h3>
                <p>
                    Está formada por las islas de Colombia en el mar Caribe y el océano Pacífico.
                </p>

                <h3>💡 Dato curioso</h3>
                <p>
                    Allí se encuentra uno de los arrecifes de coral más importantes de Colombia.
                </p>

            `;

        break;

        //========================================
        // TERCERO
        //========================================

        case "tercero":

            contenidoModal.innerHTML = `

                <h2>🌎 Insular</h2>

                <img src="img/insular.png" alt="Insular">

                <p>

                    La región Insular está formada por las islas oceánicas de Colombia. Sus playas, arrecifes de coral, manglares y praderas marinas albergan una gran diversidad de especies marinas.

                </p>

                <hr>

                <h3>🏝 Ecosistemas</h3>

                <p>

                    En esta región encontramos arrecifes de coral, playas, manglares, pastos marinos y aguas cristalinas que sirven de hogar para numerosos animales.

                </p>

                <h3>🐠 Importancia</h3>

                <p>

                    Los arrecifes de coral protegen las costas del oleaje y ofrecen refugio, alimento y lugares de reproducción para cientos de especies marinas.

                </p>

                <h3>🌊 Beneficios</h3>

                <p>

                    Las islas favorecen la pesca, el turismo, la investigación científica y la conservación de una gran riqueza natural.

                </p>

                <h3>⚠ Amenazas</h3>

                <p>

                    La contaminación, el turismo irresponsable, la pesca excesiva y el calentamiento del océano afectan estos ecosistemas.

                </p>

                <h3>❤️ ¿Cómo podemos cuidarla?</h3>

                <p>

                    Evitando contaminar el mar, respetando los arrecifes, reduciendo el uso de plásticos y practicando un turismo responsable.

                </p>

            `;

        break;

        //========================================
        // SEXTO
        //========================================

        case "sexto":

            contenidoModal.innerHTML = `

                <h2>🌎 Insular</h2>

                <img src="img/insular.png" alt="Insular">

                <p>

                    La región Insular comprende ecosistemas marinos y costeros de gran importancia ecológica. Los arrecifes coralinos, manglares y pastos marinos mantienen una alta biodiversidad y protegen las islas frente a la erosión.

                </p>

                <hr>

                <h3>🪸 Arrecifes coralinos</h3>

                <p>

                    Son ecosistemas muy diversos donde habitan peces, corales, moluscos y crustáceos. Además, disminuyen la fuerza de las olas y protegen las costas.

                </p>

                <h3>🌊 Ecosistemas marinos</h3>

                <p>

                    Los manglares y pastos marinos sirven como refugio y zonas de reproducción para numerosas especies de peces e invertebrados.

                </p>

                <h3>🐢 Biodiversidad</h3>

                <p>

                    En estas aguas viven tortugas marinas, rayas, tiburones, peces tropicales, corales, estrellas de mar y una gran variedad de aves marinas.

                </p>

                <h3>⚠ Problemáticas</h3>

                <p>

                    El cambio climático, el aumento de la temperatura del mar, la contaminación y el deterioro de los corales amenazan estos ecosistemas.

                </p>

                <h3>🌎 Conservación</h3>

                <p>

                    Las áreas marinas protegidas y el uso responsable de los recursos ayudan a conservar la biodiversidad de las islas.

                </p>

            `;

        break;

        //========================================
        // NOVENO
        //========================================

        case "noveno":

            contenidoModal.innerHTML = `

                <h2>🌎 Insular</h2>

                <img src="img/insular.png" alt="Insular">

                <p>

                    La región Insular representa uno de los ecosistemas marinos más valiosos de Colombia. Sus arrecifes coralinos, manglares y praderas de pastos marinos proporcionan servicios ecosistémicos esenciales para la biodiversidad, la economía y la protección de las costas.

                </p>

                <hr>

                <h3>🌎 Servicios ecosistémicos</h3>

                <p>

                    Los arrecifes reducen la energía del oleaje, los manglares almacenan carbono y los pastos marinos mejoran la calidad del agua y sirven como criaderos naturales para numerosas especies.

                </p>

                <h3>🪸 Ecosistemas estratégicos</h3>

                <p>

                    Los arrecifes coralinos son considerados uno de los ecosistemas más diversos del planeta y albergan miles de organismos que mantienen el equilibrio de la vida marina.

                </p>

                <h3>⚠ Problemáticas ambientales</h3>

                <p>

                    El blanqueamiento de los corales por el aumento de la temperatura del océano, la contaminación, la sobrepesca y el turismo no sostenible deterioran estos ecosistemas.

                </p>

                <h3>🔬 Desarrollo sostenible</h3>

                <p>

                    La conservación de la región Insular requiere fortalecer las áreas marinas protegidas, promover el turismo responsable, controlar la pesca y restaurar los arrecifes coralinos para garantizar su equilibrio ecológico.

                </p>

            `;

        break;

    }

    modal.className = "modal modal-insular";

    modal.style.display = "flex";

}

/*function abrirEcosistema(nombre, descripcion, animales, plantas, clima, ubicacion, curiosidad, color){

    contenidoModal.innerHTML = `
    
        <h2>🌎 ${nombre}</h2>

        <img src="img/${nombre.toLowerCase()}.png" alt="${nombre}">

        <p>${descripcion}</p>

        <hr>

        <h3>🐾 Animales</h3>
        <p>${animales}</p>

        <h3>🌱 Plantas</h3>
        <p>${plantas}</p>

        <h3>🌡 Clima</h3>
        <p>${clima}</p>

        <h3>📍 Ubicación</h3>
        <p>${ubicacion}</p>

        <h3>💡 Dato curioso</h3>
        <p>${curiosidad}</p>

    `;

    modal.className = "modal " + color;
    modal.style.display = "flex";
}*/

     //----------------------------------------

btnConoce.addEventListener("click", mostrarConoce);

//----------------------------------------
btnMapa.addEventListener("click", mostrarMapa);

//----------------------------------------

btnJuego.addEventListener("click",()=>{

    mostrarContenido(

        "Juega",

        "Aquí aparecerá el juego desarrollado en Scratch."

    );

});

//----------------------------------------
//========================================
// MISIÓN: FINALIZA
//========================================

function mostrarFinaliza(){

    actualizarProgreso(100);

    contenido.innerHTML = `

    <div class="pantallaFinaliza">

        <div class="introFinal">

            <h2>🏆 ¡Felicitaciones!</h2>

            <p>

                Has llegado al final del <b>Centro de Exploración de los Ecosistemas Colombianos</b>.

            </p>

            <p>

                Durante este recorrido conociste la riqueza natural de Colombia, exploraste sus regiones y pusiste a prueba tus conocimientos mediante el juego.

            </p>

            <div class="objetivo">

                <h3>🌿 Lo que lograste</h3>

                <ul>

                    <li>✅ Conociste los principales ecosistemas de Colombia.</li>

                    <li>✅ Aprendiste dónde se encuentran en el territorio nacional.</li>

                    <li>✅ Identificaste animales, plantas y características de cada región.</li>

                    <li>✅ Comprendiste la importancia de cuidar y proteger la naturaleza.</li>

                </ul>

            </div>

            <div class="objetivo">

                <h3>🎖 Reconocimiento</h3>

                <p>

                    Como reconocimiento por completar esta aventura, recibirás tu diploma como:

                </p>

                <h2 style="color:#2e7d32;">

                    🌎 Explorador de los Ecosistemas Colombianos 🌎

                </h2>

            </div>
            
            <button id="btnVerReconocimiento">

                🏆 Ver mi reconocimiento

            </button>

        </div>

    </div>

    `;

    document
        .getElementById("btnVerReconocimiento")
        .addEventListener("click", mostrarFinal);

}

btnFinal.addEventListener("click", mostrarFinaliza);

btnJuego.addEventListener("click", mostrarJuego);