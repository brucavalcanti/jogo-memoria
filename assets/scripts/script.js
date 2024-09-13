/*Variáveis globais*/
let board = document.querySelector("#boardGame");
let listaCartas = []
let cartasTeste = ["assets/img/bobrossparrot.gif","assets/img/explodyparrot.gif","assets/img/metalparrot.gif","assets/img/revertitparrot.gif","assets/img/tripletsparrot.gif","assets/img/unicornparrot.gif","assets/img/fiestaparrot.gif"]
let cartasTabuleiro = []
let contadorEndGame=0, contadorJogadas=0, relogio=0,number;

/*Funções para gerar o tabuleiro*/


function generateCard(){
  
  number = prompt("Quantas cartas serão?");
  while(parseInt(number)%2!==0 || number<4 || number>14)
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
    
      board.innerHTML+=`<div class="card" onClick="turnCard(this)"><p class="valor">
      <img class="back"src ="${cartasTabuleiro[i]}"></img>
      <img class="frente" src = "assets/img/front.png"></p>
      </div>
    `
    }
  }


/*Funções da Mecânica do jogo*/
function turnCard(item){
  if(listaCartas.length<2){
    listaCartas.push(item)
    item.classList.add("turn");
    item.removeAttribute("onclick")
    setTimeout(function(){item.querySelector(".valor .back").classList.add("toFront")
      item.querySelector(".valor .frente").classList.add("back")},700)

  }
  if(listaCartas.length==2)
    {
      setTimeout(verificaCartas,3000)
    }
}

function verificaCartas(){
  if(listaCartas.length==2)
    {
      
      if(listaCartas[0].querySelector(".valor").innerHTML == listaCartas[1].querySelector(".valor").innerHTML)
        {
          listaCartas.pop()
          listaCartas.pop()
          contadorJogadas++
          contadorEndGame++
        }else{
          listaCartas.forEach(turnBack)
          contadorJogadas++
          setTimeout(changeImages,500)
          console.log(listaCartas)
        }
    }
  
  if(contadorEndGame == (number/2)){
    alert("Você ganhou!!! em apenas " + contadorJogadas + " Jogadas")
  }  
}

function changeImages(){
  listaCartas[0].querySelector("p.valor .back").classList.remove("toFront")
  listaCartas[0].querySelector("p.valor .frente").classList.remove("back")
  listaCartas[1].querySelector("p.valor .back").classList.remove("toFront")
  listaCartas[1].querySelector("p.valor .frente").classList.remove("back")
  listaCartas.pop()
  listaCartas.pop()

}

function turnBack(item){
  item.classList.remove("turn");
  item.setAttribute("onClick","turnCard(this)")
  
}

