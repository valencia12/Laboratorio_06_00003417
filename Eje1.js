var cad =[];
var num;
var j=1;
function ocurr(num,cad){
    for(i=0;i<cad.length;i++){
        if(num==cad[i]){
            j=j+1;
            console.log("El numero de ocurrencias son: "+j);
            break;
        }else{
            console.log("No hay ocurrencias");
        }
    }

}