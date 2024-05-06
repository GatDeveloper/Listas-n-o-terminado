
var lista = []

output = document.getElementById("output")

function Adicionar(){

    var noticia = document.getElementById("inpNoticia").value
    
    if( noticia == ''){
        alert('Digite um valor válido!')
        return
    }

    lista.push(noticia)

    Listar()

    console.log(lista)
}

var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener('click', Adicionar)

function Listar(){

    output.innerHTML = ``
    output.style.display = 'block'

    output.innerHTML = `<h3> ${lista.length} Noticias cadastradas </h3>`

    for(var i = 0; i < lista.length; i++){
        output.innerHTML += ` ${ i+1 }º) ${lista[i]} <br/>`
    }

}

function Ultimas(){

    if( lista.length == 0){
        alert('Não tem noticias cadastradas!')
        return
    }

    do{
        var quantidade = parseInt(prompt("Quantas noticias deseja ver: "))

        if( quantidade > lista.length){
            alert("Quantidade superior a de noticias cadastradas")
        }
    }while(quantidade > lista.length)     

    lista.reverse()

    output.innerHTML = ``
    output.style.display = 'block'

    output.innerHTML = `<h3> ${lista.length} Noticias cadastradas </h3>`
    output.innerHTML += `<h4> ${quantidade} últimas noticias </h4>`

    for(var i = 0; i < quantidade; i++){
        output.innerHTML += ` ${ i+1 }º) ${lista[i]} <br/>`
    }

}

var btnUltimas = document.getElementById("btnUltimas")
btnUltimas.addEventListener('click', Ultimas)    
