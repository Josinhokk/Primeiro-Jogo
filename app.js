//colocar uns console.log
alert ('Bem vindos ao jogo do numéro secreto')
let limiteNumeros = 1000
let numeroSecreto = parseInt(Math.random() * limiteNumeros + 1);
// a variavel é colocada aqui pra ser reconhecida no while
let chute
let tentativas = 1
console.log(numeroSecreto)
while (chute != numeroSecreto){
    chute = prompt (`Digite um numéro de 1 a ${limiteNumeros}`)
        if (numeroSecreto == chute) {
            //break é responsavel por sair do while quando a condição for atendida
            break;
        } else {
        if (chute > numeroSecreto){

            alert("O numero secreto é mais baixo")
        }
        else{
            alert("O numero secreto é maior")
        }
      tentativas++
    }
    
}
//  operador ternario
let nTentativas = tentativas > 1 ? "tentativas":"tentativa"
    alert(`Isso ai! descobriur o numero secreto ${numeroSecreto} com ${tentativas} ${nTentativas}.` )   