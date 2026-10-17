const prompt = require("prompt-sync")();    


let opcaoEscolhida = Number(prompt("Digite a opção escolhida: "));

switch(opcaoEscolhida){
    case 1:
        console.log("crindo o painel de NOVO CADASTRO...");
        break
    case 2:
        console.log("Caregando a LISTA DE JOGADORES...")
        break
    case 3:
        console.log("Calculando a MÉDIA DA EQUIPE...");
        break
    default:
        console.log("Opção inválida. Por favor, escolha um número do menu.");
        break
}
