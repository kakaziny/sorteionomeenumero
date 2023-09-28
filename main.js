const btnSortear = document.querySelector(".sortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".reultado")

function pegarDadosFormulario(){
    const valorCampo = textarea.value; //Pega os valores do textarea
    const listaNomes = valorCampo.split(","); //Separa todos os nomes através da vírgula
    const tamanhoArray = listaNomes.length; //Conta a quantidade de nomes
    const posicaoNome = gerarNomeAleatorio(tamanhoArray); //Escole uma posição aleatória(numero aleatorio)
    const nome = listaNomes[posicaoNome]; //Guarda o nome sorteado ( guarda posição escolhida)
    mostrarResultado(nome); //mostra o resultado

    textarea.value = "" //limpa o textarea
}

btnSortear.addEventListener("click", pegarDadosFormulario)

function gerarNomeAleatorio(tamanhoArray){
    //RETORNA O NOME 
    return Math.floor(Math.random()*(tamanhoArray - 0)+ 0) //Para fazer o random é o máximo multiplicando menos o mínimo mais o mínimo
}

function mostrarResultado(nome) {
    tagResultado.innerHTML = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")

}