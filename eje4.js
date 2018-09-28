var eje4 = function(arreglo){
    var cont = arreglo.length -1 ;
    aux = [];
    for(let i= 0; i < (Math.round(arreglo.length/2)) ; i++){
        aux.push(arreglo[i] + arreglo[cont]);
        cont--;
    }
    
    return aux;
}