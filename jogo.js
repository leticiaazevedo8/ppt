let playerOpcao = 0;
let maquinaOpcao = 0;
let pontosMaquina = 0;
let pontosJogador = 0;
let vencedor = -1;

// 1 • pedra
// 2 • papel
// 3 • tesoura

function comecar(opcao) {
  playerOpcao = opcao;
  maquinaOpcao = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

  if ((playerOpcao == 1) && (maquinaOpcao == 1)) {
    vencedor = 0;
    alert('Esse jogo em🦆u, que tal tentar novamente? =D');
  }
    
  else if ((playerOpcao == 1) && (maquinaOpcao == 2)) {
    vencedor = 2;
    alert('o Computador escolheu papel e venceu, não foi dessa vez =(');
  }

  else if ((playerOpcao == 1) && (maquinaOpcao == 3)) {
    vencedor = 1;
    alert('O computador escolheu tesoura. Parabéns! Você venceu! =D');
  }

  else if ((playerOpcao == 2) && (maquinaOpcao == 1)) {
    vencedor = 1;
    alert('O computador escolheu pedra. Parabéns! Você venceu! =D');
  }

  else if ((playerOpcao == 2) && (maquinaOpcao == 2)) {
    vencedor = 0;
    alert('Esse jogo em🦆u, que tal tentar novamente? =D');
  }

  else if ((playerOpcao == 2) && (maquinaOpcao == 3)) {
    vencedor = 2;
    alert('O Computador escolheu tesoura e venceu, não foi dessa vez =(');
  }

  else if ((playerOpcao == 3) && (maquinaOpcao == 1)) {
    vencedor = 2;
    alert('o Computador escolheu pedra e venceu, não foi dessa vez =(');
  }

  else if ((playerOpcao == 3) && (maquinaOpcao == 2)) {
    vencedor = 1;
    alert('O computador escolheu papel. Parabéns! Você venceu! =D');
  }

  else if ((playerOpcao == 3) && (maquinaOpcao == 3)) {
    vencedor = 0;
    alert('Esse jogo em🦆u, que tal tentar novamente? =D');
  }

  document.getElementById("vezdojogador" + playerOpcao).classList.add('selecionado');

  document.getElementById("vezdamaquina" + maquinaOpcao).classList.add('selecionado');


  document.getElementById("vezdojogador-1").classList.remove('selecionado');
  document.getElementById("vezdojogador-2").classList.remove('selecionado');
  document.getElementById("vezdojogador-3").classList.remove('selecionado');

  document.getElementById("vezdamaquina-1").classList.remove('selecionado');
  document.getElementById("vezdamaquina-2").classList.remove('selecionado');
  document.getElementById("vezdamaquina-3").classList.remove('selecionado');
  
  document.getElementById("vezdojogador" + playerOpcao).classList.add('selecionado');
  document.getElementById("vezdamaquina" + maquinaOpcao).classList.add('selecionado');
}

alert('Olá, esse é o jogo pedra, papel e tesoura. Que tal jogar um pouco? =)');