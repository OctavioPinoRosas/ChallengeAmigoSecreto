// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nuevoAmigo = "";
let amigoAleatorio = 1;

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

function sortearAmigo(){
    if (listaAmigos.length > 1){
        amigoAleatorio = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        console.log(amigoAleatorio);
    } else if(listaAmigos.length > 0 ){
        alert("Debe de haber al menos dos nombres de amigos para poder realizarse el sorteo")
    } else{
        alert("No se han añadido nombres a la lista de amigos. Agregue dos o mas nombres para poder realizar el sorteo")
    }
    return;
}

function limpiarCaja(){
    //Borra el contenido del cuadro de texto
    document.querySelector('#amigo').value = '';
    return;
}