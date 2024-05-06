var numeros = []


var output = document.getElementById("output")

function Adicionar (){

    var inpNumero = document.getElementById('numero')
    var Numero = inpNumero.value

    if( Numero == '' || isNaN(Numero)){
        alert('Insira um valor válido!')
        inpNumero.focus()
        return
    }else{
        numeros.push(Numero)
        output.style.display = "block"
        output.innerHTML = ``
    }

    for(var numero in numeros){
        output.innerHTML += `${numeros[numero]} `
    }

}

var btnAdicionar = document.getElementById('btnAdicionar')
btnAdicionar.addEventListener('click', Adicionar)

function Ordem(){

    var verificador = true
    var inpNumero = document.getElementById('numero')
    var Numero = inpNumero.value

    for(var numero = 0; numero <= numeros.length; numero++){
        if( numeros[numero] >= numeros[numero+1]){
            verificador = false
        }
    }

    if( Numero == '' || isNaN(Numero)){
        alert('Insira um valor válido!')
        inpNumero.focus()
        return
    }else if( verificador == false){
        alert("Os números não estão em ordem crescente")
    }else{
        alert("Os números estão em ordem crescente")
    }

}

var btnOrdem = document.getElementById('btnOrdem')
btnOrdem.addEventListener('click', Ordem)
