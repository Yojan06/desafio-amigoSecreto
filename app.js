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

   actualizarListaAmigos();
  
}


function actualizarListaAmigos(){
   listaDeAmigos = document.querySelector(".name-list");
   listaDeAmigos.innerHTML= "";

   for (let i = 0; i < nombresAmigos.length; i++) {
      let elemento = document.createElement("li");
      elemento.textContent = nombresAmigos[i];
     // console.log("Eres" + elemento[i]);
      listaDeAmigos.appendChild(elemento);
      
   }

}

