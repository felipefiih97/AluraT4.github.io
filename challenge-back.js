//função void. 
/* Recebe os valores do textarea e o retorna para qualquer função que a chamar */
function recebeValores(){ 
   let str = document.querySelector("#texto").value;
   return str
}; 

/* Essa função recebe os valores(a string) do textarea e os criptografa através do metodo
    replaceAll que substitui os todas as ocorrencias desse caractere no texto.
*/
function criptografa(){  
    let str = recebeValores();
    let newtext = str.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('u','ufat').replaceAll('o','ober');
    mostraNaTela(newtext);
};

function descriptografa(){ 
    let str = recebeValores();
    let textcript = str.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ufat','u').replaceAll('ober','o');
    mostraNaTela(textcript);
};

/*Função void responsavel por pegar o texto e printar no output  */ 
function mostraNaTela(textoFinal){ 
    output.innerHTML = textoFinal;
    trocaImagem();   
}
/* Essa função pega os valores que estão tanto no input quanto no output 
e atrbui um valor vazio para ambas. ela só é ativada quando acionado o click no botão. 
*/
function limpar(){
    let limpaoutput = output.innerHTML = " "; 
    let limpainput = document.querySelector("#texto").value = " ";  
    location.reload()
    
    return limpainput , limpaoutput
}

/*Função responsavel pela ação de trocar o conteudo pelo texto criptografado de saida 
    ,ele esconde o conteudo (none) e mostra o botao-copiar e output com valor block.
*/ 
function trocaImagem(){
    document.getElementById("conteudo-retangulo-lateral").style.display = 'none';
    document.getElementById("botao-copiar").style.display = 'block';
    document.getElementById("output").style.display = 'block';
    return
}


function copy(){
    var copiado = document.getElementById("output").innerHTML; 

    
   /* aqui nós ultilizamos as funções do navegador(navigator)
        manipulando a area de transferencia (clipboard)
        e para escrever nessa area de transferencia nós 
        ultilizamos o comando (writeText(escrever texto)) 
   */
    if(navigator.clipboard.writeText(copiado)){ 
        document.getElementById('botao-copiar').textContent = "Copiado";
    }

    /* Aqui eu determinei que uma função deve ser acioanada após 3seg  */ 
    setInterval(function(){ 
        document.getElementById('botao-copiar').textContent = "Copiar";
    },4000
    );

} 











