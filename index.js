function laCajaDePandora(numero){
    if (numero % 2 === 0){
       return numero.toString(2);
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

console.log(makarena());
console.log(laCajaDePandora(18));
console.log(laCajaDePandora(19));