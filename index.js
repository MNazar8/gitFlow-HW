function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (numero % 2 === 0) {
    // El número es par
    return numero.toString(2); // Convierte a binario
  } else {
    // El número es impar
    return numero.toString(16); // Convierte a hexadecimal
  }
}

function antonella() {
  return {
    name: "antonella",
    age: "25",
    nationality: "Argentina",
  };
}
