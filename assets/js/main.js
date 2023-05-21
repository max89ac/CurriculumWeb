// Validación formulario de contacto

function form_contacto() {
    var email = document.miformulario.correo.value;
    var mensaje = document.miformulario.mensaje.value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == null || email == "") {
        document.getElementById("erroremail").innerHTML = "El campo de email es obligatorio";
        return false;
    } else if (regex.test(email) === false) {
        document.getElementById("erroremail").innerHTML = "Por favor introduce una dirección de correo válida";
        return false;
    } else if (mensaje == null || mensaje == "") {
        document.getElementById("errormensaje").innerHTML = "El campo de mensaje es obligatorio";
        return false;
    } else if (mensaje.length < 10) {
        document.getElementById("errormensaje").innerHTML = "El campo de mensaje debe contener al menos 10 letras";
        return false;
    } else {
        document.getElementById("erroremail").innerHTML = "";
        document.getElementById("errormensaje").innerHTML = "";
    }
}

// Cambio a modo oscuro

function darkMode() {
    // Cambios body
    var cambiosbody = document.body;
    cambiosbody.classList.toggle("body-dark");

    // Titulos sección
    var titulosseccion = document.getElementsByClassName("titulo-section");
    Array.from(titulosseccion).forEach(titulo => {
        titulo.classList.toggle("titulo-section-light");
        titulo.classList.toggle("titulo-section-dark");
    });

    // Fondos grises
    var fondosgrises = document.getElementsByClassName("grisdark");
    Array.from(fondosgrises).forEach(fondogris => {
        fondogris.classList.toggle("fondogris-light");
        fondogris.classList.toggle("fondogris-dark");
    });

    // Color enlaces
    var colorlinks = document.getElementsByClassName("haylinks");
    Array.from(colorlinks).forEach(enlacecolor => {
        enlacecolor.classList.toggle("links-light");
        enlacecolor.classList.toggle("links-dark");
    });

    // Barras habilidades
    var progresohabilidades = document.getElementsByClassName("progress-bar");
    Array.from(progresohabilidades).forEach(progresocolor => {
        progresocolor.classList.toggle("progress-bar-light");
        progresocolor.classList.toggle("progress-bar-dark");
    });

    // Logos redes sociales
    var redessociales = document.getElementsByClassName("redes");
    Array.from(redessociales).forEach(redescolor => {
        redescolor.classList.toggle("redes-light");
        redescolor.classList.toggle("redes-dark");
    });

}

// Cambio botón modo oscuro

function classToggle() {
    document.getElementById("toggle").classList.toggle('fa-sun');
    document.getElementById("toggle").classList.toggle('fa-moon');
}
document.querySelector('#toggle').addEventListener('click', classToggle);

// Formación Académica - Paso de JSON al html a través de Fetch API

const formacionacademica = document.querySelector('.json-fa');

fetch('./assets/json/formacionacademica.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            formacionacademica.insertAdjacentHTML('beforeend', `
            <h4 class="titulo-1-s">${post.titulo}</h4>
            <h4 class="titulo-2-s">${post.lugar}</h4><br>
            `);
        });
    });

// Otros Cursos - Paso de JSON al html a través de Fetch API

const otroscursos = document.querySelector('.json-oc');

fetch('./assets/json/otroscursos.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            otroscursos.insertAdjacentHTML('beforeend', `
            <h4 class="titulo-1-s">${post.titulo}</h4>
            <h4 class="titulo-2-s">${post.lugar}</h4><br>
            `);
        });
    });


// Usar la función getDate() para calcular la edad de la sección "Sobre mi"

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log('age: ' + getAge("1989/12/31"));

document.getElementById("fecha").innerHTML = "<strong>Edad:</strong> " + getAge("1989/12/31") + " años";

// Usar la función Math() para calcular un año en la sección "Experiencia laboral"

document.getElementById("mates").innerHTML = "Moonland Studio | Febrero 2012 - Abril " + Math.round(2019.9);

// Cambiar el color y tamaño de fuente del título del jumbotron a través de variables

document.getElementById("titulo-jumbo").style.color = "white";
document.getElementById("titulo-jumbo").style.fontSize = "350%";
document.getElementById("titulo-jumbo").style.fontFamily = "'Raleway', sans-serif";

// Easter Egg: Cambio de imagen al pulsar 5 letras especificas seguidas

var targetLetters = ['S', 'H', 'R', 'E', 'K'];
var currentLetters = [];

function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("assets/img/sobremi.jpg")) {
        Image_Id.src = "assets/img/sobremi2.jpg";
    }
    else {
        Image_Id.src = "assets/img/sobremi.jpg";
    }
}

document.addEventListener('keydown', function (event) {
    var pressedKey = event.key.toUpperCase();

    currentLetters.push(pressedKey);

    if (currentLetters.length === 5 && arraysMatch(currentLetters, targetLetters)) {
        imagefun()
    }
    if (currentLetters.length > 5) {
        currentLetters.shift();
    }
});

function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


