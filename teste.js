var str = "Saraiva"; 
var codifica = '';
function criptografa(){ 
    codifica = str.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('u','ufat').replaceAll('o','ober');
    console.log(codifica)
}

criptografa();




var texto = "Saraivai";
var newtexto = '' ; 
for(i=0;i<texto.length;i++){
   if(texto[i] == "a"){ 
        texto[i] = 1
   }
}
console.log(texto);

// Expressão regular  



