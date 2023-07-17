function laCajaDePandora(numero){
// proximamente escribiremos codigo aqui
let decimal = parseInt(numero, 16);
let binario = decimal.toString(2);

return binario;

}
function obtenerInfo() { 
    let nombre = "Ivan Masi";
    let edad = 25;
    let nacionalidad = "Paraguaya";

    let info = {
        nombre: nombre,
        edad: edad,
        nacionalidad: nacionalidad
    };
    return info;
}

console.log(obtenerInfo())