import {useState} from 'react';
import '../tictaetoe.css';
const Tictaetoe1 = () => {
    const [board, setBoard] =useState(['','','','','','','','','']);  
    const [player, setPlayer] = useState('X');
    const [flag, setFlag] = useState(false);    
 
const onClick = (e, index)=>{
    if(board[index]=== "" && !flag){
        let temp =board;
        temp[index]= player;
        setPlayer(player === "X"? "O" : "X");
        setBoard(temp);
        checkWin();
    }


}
const checkWin = ()=>{
const winning_combos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
winning_combos.forEach((arr)=>{
if (board[arr[0]]!=="" &&arr[arr[1]]!==""&&arr[arr[2]]!==""&&board[arr[0]]=== board[arr[1]] && board[arr[2]] === board[arr[1]]){
    setFlag(true);
    alert (`${player} is win`);
}
})

}
console.log(flag);
return (
    <div className="board">
        {console.log(typeof board)}
        {/* state obj can be use operator */}
        { [...board].map((value, index)=> (
   
    <div className="square" onClick={(e)=>onClick(e,index)}> 
    {value}  
    </div>
    
))}
</div>
);
}

export default Tictaetoe1;