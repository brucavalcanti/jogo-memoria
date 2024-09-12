/*Variáveis globais*/
let board = document.querySelector("#boardGame");
let listaCartas = []
let cartasTeste = [1,2,3,4,5,6,7]
let cartasTabuleiro = []

/*Funções para gerar o tabuleiro*/


function generateCard(){
  
  let number = prompt("Quantas cartas serão?");
  while(parseInt(number)%2!==0 || number<=0 || number>14)
  {
    number = prompt("Quantas cartas serão?");
  }
  /*For responsável por preencher as cartas com seus respectivos valores*/
  for(let i = 0;i<number/2;i++)
    {
      cartasTabuleiro.push(cartasTeste[i])
      cartasTabuleiro.push(cartasTeste[i])
    }
  cartasTabuleiro.sort(function(){return 0.5 - Math.random()});  

  for(let i=0;i<number;i++){
    board.innerHTML+=`<div class="card" onClick="turnCard(this)"><p>${cartasTabuleiro[i]}</p></div>`
  }

}

/*Funções da Mecânica do jogo*/
function turnCard(item){
  if(listaCartas.length<2){
    listaCartas.push(item)
    item.classList.add("turn");
  }
  if(listaCartas.length==2)
    {
      setTimeout(verificaCartas,3000)
    }
   console.log(listaCartas)
}

function verificaCartas(){
  if(listaCartas.length==2)
    {
      listaCartas.forEach(turnBack)
      listaCartas.pop()
      listaCartas.pop()
    }
}

function turnBack(item){
  item.classList.remove("turn");
}

