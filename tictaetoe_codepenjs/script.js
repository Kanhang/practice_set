const board = document.getElementById('board');

let player= 'X';
let flag =true;
const winningCombos= [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,7],[1,5,9],[3,5,7]];
for (let i =0 ; i< 9;i++){
const square = document.createElement('div');
    square.classList.add('square');
    square.id= "square"+i;
    square.addEventListener('click',clickSquare);

board.append(square);
}

function clickSquare(e){
if (!e.target.innerHTML &&flag){
e.target.innerHTML= player;
    player= player==="X"?'O':"X";
    checkWinner();
}	
}

function checkWinner(){
    console.log(board.childNodes[1].innerHTML)
    for( i =0 ;i<winningCombos.length;i++){
        let winCondition = winningCombos[i];
        const player1= board.childNodes[winCondition[0]].innerHTML;
        const player2= board.childNodes[winCondition[1]].innerHTML;
        const player3= board.childNodes[winCondition[2]].innerHTML;
 if(player1===player2 && player2 ===player3 && player1!==""){
        flag= false;
     alert(`player${player1} is the winner)`);
 }
    }


}
