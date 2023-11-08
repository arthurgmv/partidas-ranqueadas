let vitoriaNum = 10
function quantidadeVitorias(){
    if (vitoriaNum < 10) {
        console.log("Bronze")
    } else if (vitoriaNum > 10 && vitoriaNum < 16) {
        console.log("Silver")
    } else {
        console.log("Gold")
    }
}
quantidadeVitorias()