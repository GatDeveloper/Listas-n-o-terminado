var clubes = []


function Adicionar(){

    var inpClube = document.getElementById("clube")
    var clube = inpClube.value

    console.log(clube)

    repetido = clubes.indexOf(clube)

    if(clube == ''){
        alert('Escreva um valor válido!')
        inpClube.focus()
        return
    } else if(repetido != -1){ 
        alert('Time já cadastrado!')
        inpClube.focus()      
    }else{    
        clubes.push(clube)
        inpClube.valor = ''
    } 

    

}

var botaoAdicionar = document.getElementById("btnAdicionar")
botaoAdicionar.addEventListener("click", Adicionar)

function Listar(){
    
    outSaida = document.getElementById('output')
    outSaida.innerHTML = ``    
   

    if(clubes.length == 0){
        alert("Não há clubes cadastrados!")
    } else{ 
        outSaida.style.display='block'
    }

    for(var clube in clubes){
        outSaida.innerHTML += ` ${clubes[clube]} <br>`
    }
}

var botaoListar = document.getElementById("btnListar")
botaoListar.addEventListener("click", Listar)

function Tabela(){  
    if(clubes.length == 0){
        alert("Não há clubes cadastrados!")
    }else if(clubes.length % 2 != 0){
        alert("Há um numero impar de clubes!")
    } else{ 
        
    outSaida.innerHTML = ``
        var ultimo = clubes.length - 1
        for(var i = 0; i <= clubes.length/3; i++){

            outSaida.innerHTML += ` ${clubes[i]} X ${clubes[ultimo]} <br>`
            ultimo -= 1 
        }
        
    }

}

var botaoTabela = document.getElementById("btnTabela")
botaoTabela.addEventListener("click", Tabela)
