var imagem1 = window.document.getElementById("imagem-1")
var imagem2 = window.document.getElementById("imagem-2")
var imagem3 = window.document.getElementById("imagem-3")

function TrocarParaImagem2() {
    imagem1.style ="display:none"
    imagem2.style ="display:flex"
    imagem3.style ="display:none"
}

function TrocarParaImagem3() { 
    imagem1.style ="display:none"
    imagem2.style ="display:none"
    imagem3.style ="display:flex"
}

function TrocarParaImagem1() {
    imagem1.style ="display:flex"
    imagem2.style ="display:none"
    imagem3.style ="display:none"
}