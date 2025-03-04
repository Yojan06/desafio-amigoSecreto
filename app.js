// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo(){
   let nombre = document.querySelector(".input-name").value;

   if (nombre.length === 0){
    alert("Por favor, inserte un nombre.");
   } else{
    nombresAmigos.push(nombre);
   }
   console.log(nombresAmigos);
   document.getElementById("amigo").value = "";
}