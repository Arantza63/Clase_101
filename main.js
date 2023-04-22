//API que se utiliza para reconocer lo que decimos y convertirlo en texto.
// almacenamos esta API en una variable
var SpeechRecognition = window.webkitSpeechRecognition;
// usamos esa variable de tipo Web Speech para asignarle a otra variable, paso intermedio un puente
// new palabra clave para crear una variable de tipo WEB SPEECH API
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");

//Código JS para convertir voz en texto

//Siempre que se pulse el botón de inicio queremos que textarea esté 
//vacío. Para eso actualizamos textarea con un valor vacío
function start() {
    Textbox.innerHTML = "";
    recognition.start();

}

//función recursiva, una función que se usa dentro de otra, puede ser en algunos casos ella misma...
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    // Clase 100
    if (Content == "Toma mi selfie") {
        console.log("toma mi selfie---");
        speak();
    }

    //nuevo clase 99
    //speak();
}
/// hasta aqui se llega en la clase 98

// funcción speak() para convertir de texto a voz

function speak() {
    var synth = window.speechSynthesis;
    //Clase 99
    //speak_data = document.getElementById("textbox").value;

    //Clase 100
    speak_data = "Tomando tu selfie en 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    //El propósito de llamar la función speak() dentro de la función onresult es
    //hacer el proceso automático para decir el texto en cuanto se haga el comando
    //de voz.
    //Si llamamos a la función speak() al hacer clic en un botón, debemos hacer clic
    //manualmente para poder activar la función speak() function
    //El proceso del sitio web es - cuando presionamos el botón de inicio
    //Te pedirá permiso para acceder al micrófono.
    //Si decimos algo, lo convertirá a texto y lo mostrará en el campo de
    //texto
    //Después llamará la función speak() y tomará el valor del campo de
    //texto y activará el sistema para reproducir sonido.
    Webcam.attach(camera);
    //Clase 99 
    //El propósito de esto es automatizar el proceso para iniciar la cámara.
    //Si llamamos a la función webcam.attach() al hacer clic en el botón, tendríamos
    //que activar la función webcam.attach() manualmente

    // Clase 100 
    //Añadir la función setTimeout y retrasar la función
    //take_snapshot()
    setTimeout(function () {
        take_selfie();
        save();
    }, 5000);

}


//Clase 99 Agregar componente cámará WEB
camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90

});



// Clase 100 hacer función para tomar la selfie


//Webcam.snap() es una función predefinida en webcam.js que se utiliza para
//tomar una selfie. Esta función contiene data_uri que se utiliza para mostrar
//una vista previa de la imagen que se tomará.
//data_uri fuentes externas

function take_selfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' +data_uri+ '"/>';
    
    });
}

// Clase 100 hacer función para tomar la selfie
//Parte 5 - Escribir la función para guardar la foto y
//colocar esta función dentro de la función setTimeout
//para guardar la selfie
function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("logo_img").scr;
    link.href = image;
    //guarda en automático la imagen que acabamos de tomar
    link.click();
}