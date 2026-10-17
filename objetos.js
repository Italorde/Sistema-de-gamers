// Crição do objeto
let jogadorEstrela = {nome:"Fallen", funcao:"Capitão", pontuacao:2500, estaAtivo: true};

// Acessando as informações com o  uso do ponto (.)

console.log("-----Perfil do Jogador---------");
console.log("Nome:" + jogadorEstrela.nome );
console.log("Rota de jogo:"+ jogadorEstrela.funcao);

jogadorEstrela.pontuacao = jogadorEstrela.pontuacao+100;
console.log("Nova pontuação:" + jogadorEstrela.pontuacao );