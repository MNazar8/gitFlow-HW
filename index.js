function laCajaDePandora(numero){
    if (numero % 2 === 0){
        let aBinario = []
        for (let i = numero; i >= 1; i=i/2) {
          aBinario.push(Math.floor(i)%2)
        return aBinario.reverse().join('')
        }
    } else {
        return numero.toString(16)
    }
}

function makarena(){
    return {
        nombre: 'Makarena',
        edad: '30',
        nacionalidad: 'Argentina'
    }
}

console.log(laCajaDePandora(18));
console.log(laCajaDePandora(5));