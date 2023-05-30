var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita(){             // Define uma função
    Leonardo.style = "display:none"     //Altera o Estilo do elemento Leonardo para torná-lo invisível
    Bruna.style = "display:flex"       //Altera o elemento de Bruna para torna-lá visível
    setaEsquerda.style = "display:flex; margin-top:55px " 
    setaDireita.style = "display:none"

}

function RolarParaEsquerda(){
Leonardo.style = "display:flex"
Bruna.style = "display: none"
setaDireita.style = "display:flex; margin-top: 55px"
setaEsquerda.style = "display:none"


}


