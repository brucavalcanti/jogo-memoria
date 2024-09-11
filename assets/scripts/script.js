


let board = document.querySelector("#boardGame");

function generateCard(){
  
  let number = prompt("Quantas cartas serão?");
  while(parseInt(number)%2!==0 || number<0)
  {
    number = prompt("Quantas cartas serão?");
  }

  for(let i=0;i<number;i++){
    board.innerHTML+=`<div class="card" onClick="turnCard(this)"><p>Frente da Carta</p></div>`
  }

}
let contador = 0
let listaCartas = []
function turnCard(item){
  if(listaCartas.length<2){
    listaCartas.push(item)
    item.classList.add("turn");
    setTimeout(verificaCartas,2000)
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