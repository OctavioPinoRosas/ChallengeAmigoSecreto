// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nuevoAmigo = "";

function agregarAmigo(){
    //Evitar que se agregue un campo vacio
    if (document.getElementById('amigo').value.trim() === ""){
        alert("No puedes dejar el campo vacio. Intenta de nuevo");
        limpiarCaja();
    } else{
        //Añade el nuevo nombre del amigo al final del array listaAmigos
        listaAmigos.push(nuevoAmigo = document.getElementById('amigo').value);
        console.log(listaAmigos);
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //Borra el contenido del cuadro de texto
    document.querySelector('#amigo').value = '';
    return;
}