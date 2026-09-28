const botonNo = document.getElementById("no");

let intentos = 0;

botonNo.addEventListener("mouseover", function() {

    intentos++;

    if (intentos < 5) {

        const anchoPantalla = window.innerWidth;
        const altoPantalla = window.innerHeight;

        const anchoBoton = botonNo.offsetWidth;
        const altoBoton = botonNo.offsetHeight;

        const x = Math.random() * (anchoPantalla - anchoBoton);
        const y = Math.random() * (altoPantalla - altoBoton);

        botonNo.style.position = "fixed";
        botonNo.style.left = x + "px";
        botonNo.style.top = y + "px";

    } else {

        window.location.href = "pagina2.html";

    }

});
const botonSi = document.getElementById("si");

botonSi.addEventListener("click", function() {

    /* AGUA */
    const agua = document.createElement("div");

    agua.style.position = "fixed";
    agua.style.left = "0";
    agua.style.bottom = "0";
    agua.style.width = "100%";
    agua.style.height = "0";
    agua.style.background = "white";
    agua.style.zIndex = "9998";

    agua.style.transition =
        "height 3s cubic-bezier(0.4, 0, 0.2, 1)";

    agua.style.borderRadius =
        "50% 50% 0 0 / 20px 20px 0 0";

    document.body.appendChild(agua);


    /* EMPIEZA A LLENAR */
    setTimeout(function() {

        agua.style.height = "100vh";

    }, 100);


    /* GOTAS */
    for (let i = 0; i < 100; i++) {

        const gota = document.createElement("div");

        const tamaño =
            4 + Math.random() * 14;

        gota.style.position = "fixed";

        gota.style.left =
            Math.random() * 100 + "vw";

        gota.style.top =
            "-" + (20 + Math.random() * 100) + "px";

        gota.style.width =
            tamaño + "px";

        gota.style.height =
            (tamaño * 1.8) + "px";

        gota.style.background = "white";

        gota.style.borderRadius = "50%";

        gota.style.zIndex = "9999";

        gota.style.transition =
            "top " +
            (1 + Math.random() * 2) +
            "s linear";

        document.body.appendChild(gota);


        setTimeout(function() {

            gota.style.top = "105vh";

        }, Math.random() * 1500);

    }


    /* PASAR A PAGINA 3 */
    setTimeout(function() {

        window.location.href =
            "pagina3.html";

    }, 3300);

});
/* =========================
   CUENTA REGRESIVA
========================= */

const fechaCumpleanos =
    new Date("2026-11-14T00:00:00");

function actualizarCuenta() {

    const ahora = new Date();

    const diferencia =
        fechaCumpleanos - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        document
            .getElementById("introCumple")
            .classList.add("ocultar");

        setTimeout(function() {

            document
                .getElementById("introCumple")
                .remove();

        }, 1500);

        return;
    }

    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );

    const horas =
        Math.floor(
            (diferencia /
            (1000 * 60 * 60)) % 24
        );

    const minutos =
        Math.floor(
            (diferencia /
            (1000 * 60)) % 60
        );

    const segundos =
        Math.floor(
            (diferencia / 1000) % 60
        );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

actualizarCuenta();

setInterval(actualizarCuenta, 1000);
const botonSonido = document.getElementById("sonido");

botonSonido.addEventListener("click", function() {

    video.muted = false;
    video.volume = 1;

    botonSonido.style.display = "none";

});