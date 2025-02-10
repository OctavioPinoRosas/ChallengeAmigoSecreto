// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nuevoAmigo = "";
let resultado = 1;

function agregarAmigo(){
    //Evitar que se agregue un campo vacio
    if (document.getElementById('amigo').value.trim() === ""){
        alert("No puedes dejar el campo vacio. Intenta de nuevo");
        limpiarCaja();
    } else{
        //Si el nombre del amigo ya ha sido agregado a la lista se pide otro nombre
        nuevoAmigo = capitalizarNombre(document.getElementById('amigo').value);
        if(listaAmigos.includes(nuevoAmigo)){
            alert("El nombre del amigo ya ha sido agregado. Intente con otro nombre");
            limpiarCaja();
        } else{
            //Añade el nuevo nombre del amigo al final del array listaAmigos
            listaAmigos.push(nuevoAmigo);
            asignarTextoElemento('ul',`Lista de amigos: ${listaAmigos}`);
            limpiarCaja();
        }
    }
    return;
}

function sortearAmigo(){
    //Si hay dos o mas amigos en la lista se hace el sorteo
    if (listaAmigos.length > 1){
        resultado = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        asignarTextoElemento('ul',`El amigo secreto es: ${resultado}`);
    } else if(listaAmigos.length > 0 ){
        //Si hay menos de dos nombres de amigos en la lista no se puede realizar el sorteo
        alert("Debe de haber al menos dos nombres de amigos para poder realizarse el sorteo")
    } else{
        //Si no hay nombes de amigos en la lista no se puede hacer el sorteo
        alert("No se han añadido nombres a la lista de amigos. Agregue dos o mas nombres para poder realizar el sorteo")
    }
    return;
}

function limpiarCaja(){
    //Borra el contenido del cuadro de texto
    document.querySelector('#amigo').value = '';
    return;
}

function asignarTextoElemento(elemento, texto){
    //Asignar elemento que mostrar en la pantalla principal
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function capitalizarNombre(nombre) {
    // Convierte todo a minúsculas y luego capitaliza la primera letra de cada palabra
    return nombre
        .toLowerCase() // Convertir toda la cadena a minúsculas
        .split(' ') // Separar la cadena por espacios
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitalizar la primera letra de cada palabra
        .join(' '); // Volver a unir las palabras con un solo espacio
}