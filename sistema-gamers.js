const prompt = require("prompt-sync")();
let time = [];
let continuar = true;
function mostrarMenu(){
    console.log("\n========================");
    
    console.log("------ SISTEMA DE GAMERS-------");
    console.log("1- Cadastrar");
    console.log("2- Deletar");
    console.log("3- Mostrar Equipe");
    console.log("4- Pesquisar jogador");
    console.log("5- Atualizar Pontos");
    console.log("6- Calculo da Média da Equipe");
    console.log("7- Sair");
    console.log("----------------------");

}

function mostrarEquipe(){
    if(time.length === 0){
        return;
    }
    for(let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i+1)+". "+ jogador.nome + "|Função : " + jogador.funcao + "|Pontuação: " + jogador.pontuacao);

    }
}

function cadastrarJogador(){
    let nomeJogador = prompt("Digite o nome do Jogador: ");
    let funcaojogador = prompt("Digite a Função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a sua pontuação: "))
    
    if(isNaN(pontuacaoJogador)){
        console.log("Pontuação inválida!");
        return;
    }else{
        let recruta = {
            nome: nomeJogador,
            funcao: funcaojogador,
            pontuacao: pontuacaoJogador
        }
        time.push(recruta);

        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso");
        console.log('---------------------------');
}
    
    }

        
function deletarJogador(){
    if (time.length === 0){
            console.log("Nunhum jogador cadastrado.");
            return; 
        }
    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;

    for (let i=0; i<time.length; i++){
        if(time[i].nome === nomeDeletado){
            indexDeletado = i;
            break;
        }
    }

    
    if(indexDeletado === -1){
            console.log("Jogador não encontrado");
            return;
    }
    
    time.splice(indexDeletado,1); 
    console.log("jogador deletado com sucesso");
    console.log('---------------------------');

}
function calculoMedia(){
     if (time.length === 0){
            console.log("Nunhum jogador cadastrado.");
            return; 
        }
    let totalPontos = 0;

    for (let i= 0; i<time.length; i++){
        totalPontos = totalPontos + time[i].pontuacao;

    }
    let mediaPontos = totalPontos/time.length;
    console.log("O time possui uma pontuação média de: ", mediaPontos)

}
function pesquisarJogador(){
    if(time.length===0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let jogadorPesquisado = prompt( "Digite o nome do jogador que deseja pesquisar: ");
    for(let i = 0; i<time.length; i++){
        if(jogadorPesquisado===time[i].nome){
            jogador = time[i];
            console.log("------------Perfil do Jogador Pesquisado---------");
            console.log("|Nome: "+jogador.nome+"|Função: "+jogador.funcao+"|Pontuação:"+jogador.Pontuacao);
            return;
        }
    }
    console.log("Jogador não encontrado.")
}
function atualizarPontuação(){
    if(time.length===0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }
    let jogador = prompt("Qual jogador deseja atualizar a pontuação?:");
    for(let i=0; i<time.length;i++){
        if(jogador===time[i].nome){
            let maisPontuacao = Number(prompt("Quantos pontos o jogador "+time[i].nome+" ganhou?"));
            let novaPontuacao = time[i].pontuacao + maisPontuacao;
            time[i].pontuacao = novaPontuacao;
            console.log("SUCESSO! A pontucação de "+ time[i].nome+" subiu para "+ novaPontuacao);
            return;
        }
    }console.log("jogador não encontrado");
}

while(continuar === true){
    mostrarMenu();
    let opcao = prompt("Digite sua opção:");

   if(opcao==="1"){
        cadastrarJogador();
            
    }else if(opcao==="2"){
        deletarJogador();
        

    }else if(opcao==="3"){
        mostrarEquipe();

       
    }else if(opcao==="4"){
        pesquisarJogador();
    
    }else if(opcao==="5"){
        atualizarPontuação(); 

    }else if(opcao==="6"){
        calculoMedia();        
       
    }else if(opcao==="7"){
    continuar = false;
        
    } else{
        console.log("Opção inválida, digite outra ...");
    }
   }
   
