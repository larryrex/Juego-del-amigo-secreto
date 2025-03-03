let amigoSecreto = 0;
let listaJugadores = [];
let listaJugadoresSorteados = [];
let nuevoJugador = 0;

function asignarTextoElemento(elemento, texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

function sortearAmigo(){
   let parametroAleatorio= Math.floor(Math.random()*listaJugadores.length);
   let amigoSecreto = listaJugadores [ parametroAleatorio ];

   if (listaJugadores.length === 0){
      asignarTextoElemento('p' , 'No hay jugadores ingresados');
   }  else {
     if (listaJugadoresSorteados.length === listaJugadores.length){
         alert("Se sortearon todos los jugadores");
   }    else { if (listaJugadoresSorteados.includes(amigoSecreto)){
                 return sortearAmigo ();
            }    else {
                  listaJugadoresSorteados.push(amigoSecreto);
            }     asignarTextoElemento('p' , `Su amigo secreto es ${amigoSecreto}`);
   }
}
}

function limpiarCaja() {
  let valorCaja = document.querySelector('#amigo');
  valorCaja.value ='';
}

function agregarJugadores(){
  let nuevoJugador = document.getElementById('amigo').value.trim();
  console.log(listaJugadores);

   if (nuevoJugador === ''){
      alert("Ingrese un nombre valido");
   } else {
             if (listaJugadores.includes(nuevoJugador)) {
               asignarTextoElemento('p' , 'Ese Nombre ya está incluido, agregarle Apellido')
               return agregarJugadores ();
            } else {
                listaJugadores.push(nuevoJugador);
                asignarTextoElemento('p' , `Jugador ${nuevoJugador} agregado a la lista`);
                const listaJugadoresElement = document.getElementById('listaJugadores');
                const nuevoJugadorElement = document.createElement('li');
                nuevoJugadorElement.textContent = nuevoJugador;
                listaJugadoresElement.appendChild(nuevoJugadorElement);
                limpiarCaja ()
               }
       }
   }
//}

function condicionesIniciales (){
    asignarTextoElemento('h1', 'Juego del amigo secreto');
}
