// the image has random shapes filled with 0s, separated by 1s.
// Find all the shapes. Each shape is represented by coordinates
// of all the elements inside.

// find 4 directions 
// iterate the 2d array , once found 0 , start to  dfs for 4 directions,
// if reach 1 or out of border return , else mark it as 1. push the path array
// 
                //0-13
let board= [[1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,1,1,0,0,0,0,1,1,1,1],
            [1,1,0,0,1,1,1,1,0,1,1,0,0,1],
            [1,1,0,1,1,1,1,1,0,1,1,0,1,1]]


console.log(findMultipleShape(board))
function findMultipleShape(board){
  if (board.length===0 && board[0].length===0){
      return []
  }
  const dfs=(x,y,path)=>{
    if (x<0||x>=board.length || y<0 ||y>=board[0].length || board[ x][y]===1){
        return ;
    }
    board[x][y]=1;
    path.push([x,y])
    dfs(x+1,y,path);
    dfs(x-1,y,path);
    dfs(x,y-1,path);
    dfs(x,y+1,path);

}
  const result =[];
  let path =[];
  for(let i=0;i<board.length;i++){
      for (let j=0; j<board[0].length;j++){
       
          if ( board[i][j]===0){
            path=[];
              dfs(i,j,path);
              result.push(path);
          }
      }
  }
    


return result;
}