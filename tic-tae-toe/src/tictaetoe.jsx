import './tictaetoe.css';
import React from 'react';
class Tictaetoe extends React.Component{

state={
    player:'X',
    board:["","","","","","","","",""],
    flag: false
}
 click= (e,index)=>{

    if(this.state.board[index]!==""){
        alert("try again, this position has been taken")
    }
    else{
     console.log(e);
    console.log(index);
    
    let next_player=this.state.player=="X"?"O":"X"    
    let board= this.state.board;
    board[index]=this.state.player;
    this.checkWin(this.state.player);
    this.setState({player:next_player, board:board})}
}
checkWin=(player)=>{
    let winning_combos=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for ( let i=0;i<winning_combos.length;i++){
       let win_column=winning_combos[i];
       let play1=win_column[0];
       let play2=win_column[1];
       let play3=win_column[2];
     let  board=this.state.board;
        if (board[play1]!==""&&board[play1]===board[play2]&&board[play2]===board[play3]&&board[play1]===board[play3]){
            alert(`winner! player is ${player}`);
            this.setState({flag:true});
             
        }
    };
}
render(){
    console.log(this.state);
return(
    <div className="board">
    {!this.state.flag?this.state.board.map(
        (square,index)=>{
        return (
            <div className="square" onClick={(e)=>this.click(e,index)}>{square}</div>
        )})
        :(<div>Gameover</div>)
        
        }
        
  </div>  
)
//Here is a note for how to pass event into click function in class components;
//index is coming from map function
//onClick= (e)=>this.click(e,index);
//if not need to pass event, ()=>{this.click(index)}
};
}
export default Tictaetoe;