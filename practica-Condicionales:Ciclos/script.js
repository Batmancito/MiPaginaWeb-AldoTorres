
let edad = prompt("Ingresa tu edad:");
edad = Number(edad);

if (edad > 18) {
  console.log("Eres mayor de edad");
} else if (edad === 18) {
  console.log("Tienes exactamente 18 años");
} else {
  console.log("Eres menor de edad");
}

// 3. Diferencia entre === y ==
// === compara el valor Y el tipo de dato, sin convertir nada (comparación estricta).
// == compara solo el valor, convirtiendo el tipo si es necesario (comparación no estricta).
console.log(edad === 18);
console.log(edad == "18");


for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}