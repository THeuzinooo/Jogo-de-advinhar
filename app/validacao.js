function verificarSeOChutePossuiUmValorValido (chute) {
        const numero = +chute

        if(chuteForinvalido(numero)){
                elementoChute.innerHTML += '<div> valor ivalido </div>'


        }

        if(numero > maiorValor || numero < menorValor){
                elementoChute.innerHTML = `<div>valor invalido o numero precisa estar entre ${maiorValor} e ${menorValor} </div>`
        }

        if (numero === numeroSecreto) {
                document.body.innerHTML= `
                        <h2> Voce Acertou! </div>
                        <h3> O número secreto era ${numeroSecreto}</h3>
                        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button> `
                
        }

        if(numero > numeroSecreto){
                elementoChute.innerHTML += `<div>O numero Secreto é menor que <i class="fa-solid fa-down-long"></i>  ${numero}</div>`
                
        }

        if(numero < numeroSecreto){
                elementoChute.innerHTML += `<div>O numero secreto é maior que <i class="fa-solid fa-up-long"></i>  ${numero}</div>`
        }
}

function chuteForinvalido (numero){
        return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
        if(e.target.id == "jogar-novamente"){
                window.location.reload()
        }
})

