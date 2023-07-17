function laCajaDePandora(numero){
    // if (numero % 2 === 0){
        // let aBinario = []
        // for (let i = numero; i >= 1; i=i/2) {
        //   aBinario.push(Math.floor(i)%2)
        //   console.log(aBinario);
        // return aBinario.reverse().join('')
//         return numero.toString(2);
//         }
//     } else {
//         return numero.toString(16)
//     }
// }
if (numero % 2 === 0) {
    // Si es un número par, lo convertimos a binario
    return numero.toString(2);
  } else {
    // Si es un número impar, lo convertimos a hexadecimal
    return numero.toString(16);
  }
}

// console.log(numero);