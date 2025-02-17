function desafio1() {
    var dados = [
        document.getElementById('valor1').value,
        document.getElementById("valor2").value,
        document.getElementById("valor3").value,
        document.getElementById("valor4").value,
        document.getElementById("valor5").value,
    ];

    let decrescente = dados.reverse("");

    document.getElementById("resultado1").innerHTML = "Valores em ordem decrescente : " + decrescente.join(" - ");
}


function desafio2() {

    let quantidadeItens = document.getElementById('quantidadeItens').value;
    let array = [];

    for (let i = 0; i < quantidadeItens; i++) {
        array.push(i);
    }

    document.getElementById('resultado2').innerHTML = "Quantidade de itens no Array : " + array.join(" ");
}


function desafio3() {
    let frase = document.getElementById("frase").value;

    let numCaracter = frase.split("");

    document.getElementById("resultado3").innerHTML = "Conteúdo do vetor : " + numCaracter.join(" , ");
    document.getElementById("tamanhoVetor").innerHTML = "Tamanho do vetor : " + numCaracter.length;
}

function limparImput() {
    document.getElementById('valor1').value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("valor3").value = "";
    document.getElementById("valor4").value = "";
    document.getElementById("valor5").value = "";
    document.getElementById('quantidadeItens').value = "";
    document.getElementById("frase").value = "";
    document.getElementById("clear").style.display = "none";


}