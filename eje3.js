function Tipeo(n){
    var acu=0,unde=0,nul=0,booli=0,stri=0,symb=0,num=0,obj=0;
    var arrayx=[];
    for(let i=0;i<n.length;i++){
        acu=n[i]
        arrayx.push(typeof(acu));
    }
    console.log(arrayx);

    for(let j=0;j<arrayx.length;j++){
        
        if(arrayx[j] == "number"){
            num=num+1;   
        }
        if(arrayx[j] == "boolean"){
            booli=booli+1;   
        }
        if (arrayx[j] = "string") {
            stri=stri+1;
        }
        if(arrayx[j] = "symbol"){
            symb=symb+1;
        }
        if(arrayx[j] = "object"){
            obj=obj+1;
        }

    }
   
    console.log("Numeros: " +num);
    console.log("Booleanos: "+booli);
    console.log("Strings: "+stri);
    console.log("Symbols: "+symb);
    console.log("Object: "+obj);
}