
// A B C E
// S A C S
// A B C E

let board = [["A","B","C","E"],["S","A","C","S"],["A","B","C","E"]]
let word = "ABC"
console.log(wordFinds(board,word));

function wordFinds(board, word){

let visited = new Set();
let result=new Set();
for (let i = 0; i< board.length; i++){
    console.log(i)
    for (let j= 0; j < board[0].length;j++){
        dfs(i,j,word,[]);
    }
    visited.clear();

}
return Array.from(result);


function dfs( i ,j,word, path ){
    const coordinate = `${i},${j}` 
    if(word ===""  ){
     
        result.add(path.join('-'));
        return;
    }
console.log(coordinate,visited,word,path)
 if (i<0 ||i>board.length-1 || j<0|| j>board.length-1|| visited.has(coordinate)){
     return;
 }

 if(board[i][j]!==word[0]){
    return; 
 }
visited.add(coordinate);

//dfs(i-1, j,word.slice(1),[...path,coordinate])
dfs(i+1, j,word.slice(1),[...path,coordinate])
//dfs(i, j-1,word.slice(1),[...path,coordinate])
dfs(i, j+1,word.slice(1),[...path,coordinate])
visited.delete(coordinate);
}
}  b