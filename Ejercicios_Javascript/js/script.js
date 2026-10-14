// Ejercicio 1
// ------------

let vida = 100;
const limiteSuperior = 100;
const limiteInferior = 50;
let pociones = 5;


const intervalo = setInterval(() => {
  vida -= 5;
  console.log("La vida del jugador es: " + vida);

  if (vida <= 0) {
    clearInterval(intervalo);
    console.log("Game Over");
    return;
  }

  if (vida < limiteInferior && pociones > 0) {
    vida = Math.min(vida + 30, limiteSuperior);
    pociones--;

    console.log("El jugador utilizo una pocion de curacion");
    console.log("La vida del jugador es: " + vida);
    console.log("Pociones restantes: " + pociones);
  }
}, 2000);





// ------------
// Ejercicio 2
// ------------
/*
const pokedex = [
  { nombre: "Pokeball", cantidad: 5, tipo: "Normal" },
  { nombre: "Quick Attack", cantidad: 2, tipo: "TM" },
  { nombre: "Repel", cantidad: 3, tipo: "Normal" },
  { nombre: "Soda", cantidad: 10, tipo: "Consumible" },
  { nombre: "Surf", cantidad: 3, tipo: "TM" },
];

function organizarBolsa(elementos) {
  const normales = elementos.filter((elemento) => elemento.tipo === "Normal");
  const tms = elementos.filter((elemento) => elemento.tipo === "TM");
  const consumibles = elementos.filter((elemento) => elemento.tipo === "Consumible");

  normales.sort((a, b) => b.cantidad - a.cantidad);
  tms.sort((a, b) => b.cantidad - a.cantidad);
  consumibles.sort((a, b) => b.cantidad - a.cantidad);

  console.log("Elementos normales: " + normales);

  console.log("Maquinas tecnicas (TM): " + tms);

  console.log("Consumibles: " + consumibles);
}

organizarBolsa(pokedex);
*/ 





// ------------
// Ejercicio 3
// ------------
/*
const bulbasaur = {
  nombre: "Bulbasaur",
  tipo: "Planta",
  ataque: "Latigo Cepa",
  daño: 15,
  vida: 40,
  defensa: 10
};

const charmander = {
  nombre: "Charmander",
  tipo: "Fuego",
  ataque: "Ascuas",
  daño: 15,
  vida: 40,
  defensa: 5
};

function mostrarEstadisticas(pokemon) {
  console.log("Nombre: " + pokemon.nombre);
  console.log("Tipo: " + pokemon.tipo);
  console.log("Ataque: " + pokemon.ataque);
  console.log("Daño: " + pokemon.daño);
  console.log("Vida: " + pokemon.vida);
  console.log("Defensa: " + pokemon.defensa);
}

function atacar(atacante, defensor) {
  console.log(atacante.nombre + " ataco a " + defensor.nombre);
  console.log(atacante.nombre + "uso: " + atacante.ataque);

  let dañoFinal = atacante.daño - defensor.defensa;

  if (dañoFinal < 0) {
    dañoFinal = 0;
  }

  defensor.vida -= dañoFinal;

  if (defensor.vida < 0) {
    defensor.vida = 0;
  }

  console.log("EL pokemon defensor recibio " + dañoFinal + " puntos de daño");
  console.log("Vida actual de " + defensor.nombre + ": " + defensor.vida);
}

function combate(atacante, defensor) {
  atacar(atacante, defensor);

  if (defensor.vida === 0) {
    console.log(
      "Combate finalizado. " + defensor.nombre + " esta fuera de combate."
    );
    return;
  }

  setTimeout(() => {
    combate(defensor, atacante);
  }, 2000);
}

console.log("Estadisticas de los pokemones:");
mostrarEstadisticas(bulbasaur);
mostrarEstadisticas(charmander);

console.log("Fight!");
combate(bulbasaur, charmander);
*/