/**
 * @param {number[][]} grid
 * @return {number}
 */

// 0 1 0 
// 0 0 0
// 0 0 1


//1 1 1 1 1
//1 0 0 0 1
//1 0 1 0 1
//1 0 0 0 1
//1 1 1 1 1

// 0 0 0 1 1 0 0
// 0 0 0 1 0 0 0
// 0 0 0 1 0 0 0
// 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0
// 0 1 0 0 0 0 0
// 0 1 1 0 0 0 0
// first find first 1 we encounter , 
//and using dfs to mark every 1 that connected with 1 to 2, and push the i j to queue
// in the queue we try to find 4 directions of that point, we check the border of point , we use find next 1, so if it is 0 , we marked it as B in the gird, and push it into queue, and if it is 1 we return distance,
const input =[[0,0,0,1,1,0,0],[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,1,0,0,0,0,0],[0,1,1,0,0,0,0]]
shortestBridge(input)

function shortestBridge(grid) {
    let firstFound ;
    const queue =[];
    if (grid.length===2){
        return 1;
    }
    for (let i =0; i<grid.length;i++){
        for (let j =0 ;j < grid[0].length;j++ ){
            if (grid[i][j]=== 1){
                firstFound= [i,j];         
            }
        }
        }
    
    //to mark the board connected with first found with 1
    dfs(firstFound[0],firstFound[1])
    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    let res= 0;

    while(queue.length>0){
        const temp =queue.length

        for( let i = 0;i<temp;i++){
          
      let [row, col]= queue.shift();

        for (const dir of dirs ){
            row+=dir[0]
            col+=dir[1]
            
            if( row >=0 && row <= grid.length-1 && col>=0 && col<= grid.length-1 && grid[row][col] !==2&&grid[row][col] !=="B"){
                console.log(grid)
              
                if ( grid[row][col] ===0 ){
                    grid[row][col] ="B";
                    queue.push([row,col])
                }
                else if ( grid[row][col] === 1){
                    return res
                }
      
            }
        }}
       res+=1
    }

    function dfs(row,col){
    if ( row<0 || row> grid.length-1|| col<0 ||  col>grid.length-1|| grid[row][col]===0||grid[row][col]===2){
        return;
    }
    grid[row][col]= 2 
    queue.push([row,col])
    dfs(row-1,col)
    dfs(row+1,col)
    dfs(row,col-1)
    dfs(row,col+1)
    }
};