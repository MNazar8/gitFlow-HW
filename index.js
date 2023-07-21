
// para que reciba como parámetro un número entero. Si es un número par, debe convertirlo a binario y retornarlo, y si es impar, convertirlo a hexadecimal y retornarlo.


function laCajaDePandora(numero){
// proximamente escribiremos codigo aqui
  if (numero % 2 === 0) {
    // Si el número es par, lo convertimos a binario
    return numero.toString(2);
  } else {
    // Si el número es impar, lo convertimos a hexadecimal
    return numero.toString(16);
  }
}

console.log(laCajaDePandora(10));




// En el mismo archivo index.js debes crear una función con tu nombre y debe retornar un objeto con tu nombre, tu edad y tu nacionalidad. (recuerda hacer commit y push)
function AlejoC137() {
    return {
      nombre: 'Alejandro Patiño',
      edad: '28',
      nacionalidad: 'Colombiana'
    };
  }