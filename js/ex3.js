var lista = []
lista[0] = {nome: "teste", numero:0} 

var output = document.getElementById('output')
var inpCandidato = document.getElementById('inpCandidato')


function Adicionar(){
        
    var candidato = inpCandidato.value

    var inpAcertos = document.getElementById('inpAcertos')
    var acertos = inpAcertos.value

    if( candidato == '' || acertos =='' || isNaN(acertos)){
        alert('Digite valores válidos!')
        inpCandidato.focus()
        return
    }else{ 
        output.innerHTML = ``
        output.style.display = 'block'
    }

    lista.push({nome: candidato, numero: acertos})

    for(var i = 0; i <= lista.length; i++){
        output.innerHTML += `<strong>   ${lista[i].nome} </strong> -  <strong> ${lista[i].numero}  </strong> de acertos <br/> `
    }
}

var btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', Adicionar)


function Aprovados(){

    if(lista.length <= 0){
        alert('Digite valores válidos!')
        inpCandidato.focus()
        return
    }

    var regua = prompt("Qual o minimo de acertos para a segunda fase: ")

    var aprovados = []

    for(var i = 0; i <= lista.length; i++){
        if( lista[i].numero > regua){
           aprovados.push({nome: lista[i].nome, numero: lista[i].numero})
       }

    }

   alert('cheguei aqui')
    output.innerHTML = '<h3> APROVADOS </h3>'
    
    for(var i = 0; i <= aprovados.length; i++){
        output.innerHTML += ` <br/> <strong>   ${aprovados[i].nome} </strong> -  <strong> ${aprovados[i].numero}  </strong> de acertos <br/> `
    }


}

var btnAprovados = document.getElementById('btnAprovados')
btnAprovados.addEventListener('click', Aprovados)
