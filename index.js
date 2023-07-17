function laCajaDePandora(numero) {
    // proximamente escribiremos codigo aqui
    if (numero % 2 === 0) {
        // Número par
        return numero.toString(2); // Conversión a binario
    } else {
        // Número impar
        return numero.toString(16); // Conversión a hexadecimal
    }
}
// console.log(laCajaDePandora(10)); 
console.log(laCajaDePandora(15)); 

