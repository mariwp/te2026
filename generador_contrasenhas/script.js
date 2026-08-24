// Elementos del html
const password = document.getElementById("password");
const length = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");


//cambiar el numero del tamano cuando muevo el range
length.addEventListener("input", function() {
    lengthValue.value = length.value;
});


//generar contrasena
generateButton.addEventListener("click", function() {

    let caracteres = "";
    let contrasena = "";

    if (uppercase.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numbers.checked) {
        caracteres += "0123456789";
    }

    if (symbols.checked) {
        caracteres += "!@#$%^&*";
    }

    if (caracteres == "") {
        alert("Selecciona al menos una opcion");
        return;
    }

    for (let i = 0; i < length.value; i++) {
        let numero = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[numero];
    }

    password.value = contrasena;
});


//cpiar contrasena
copyButton.addEventListener("click", function() {
    navigator.clipboard.writeText(password.value);
});