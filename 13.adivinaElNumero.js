const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
  prompt("Adivina el numero entre el 1 y el 10")
);

console.log(`Juega con el numero ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
  console.log("Adivinaste el numero");  
} else {
  console.log("Sigue participando");
}