function laCajaDePandora(numero) {
  // proximamente escribiremos codigo aqui
  if (numero % 2 === 0) {
    // Si el número es par, lo convertimos a binario
    return numero.toString(2);
  } else {
    // Si el número es impar, lo convertimos a hexadecimal
    return numero.toString(16);
  }
}

function tania() {
  return {
    nombre: "Tania",
    edad: 31,
    nacionalidad: "mexicana",
  };
}
