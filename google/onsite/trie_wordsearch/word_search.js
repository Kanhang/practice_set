const dic =  ['geeks', 'for' , 'quiz' , 'go'];
const boggle =  [[ 'g','i','z'], ['u', 'e' , 'k'] , ['q', 's' , 'e']];
let count =0;
console.log(findStrs(dic,boggle));
console.log(count)
function findStrs( dictionary, boggle) {
var m =  boggle.length;
var n = boggle[0].length;
const res = [];

for ( let i = 0; i < m; i++) {
	for (let j = 0; j < n; j++) {
let visited = Array(m).fill(false).map(() => Array(n).fill(false));
    // console.log(visited);
	let str = '';
		findWord(visited, str, res, boggle, i, j, m, n);
}
}
return res;
}

function findWord(visited,str, res, boggle, i, j, m, n ) {

	if( i > m-1 || i < 0 || j > n-1 || j <0) {
           return;
} 

	if (visited [i] [j] === true) {
	return  ;
};
      //console.log(i,j);
	visited[i][j]=true;
if (isWord(str)) {

   	if (!res.includes(str))
 res.push(str);
}
const dir = [[-1,0],[-1,-1],[-1,1],[0,1],[1,0],[1,1],[1,-1],[0,-1]];
for ( let k =0 ; k< dir.length;k++) {

	findWord(visited, str+boggle[i][j],res,boggle, i+dir[k][0], j+dir[k][1], m,n)
}
  	visited[i][j]=false;
}


function isWord (str) {
  count+=1;
  console.log(str)
  for (let i =0; i<dic.length;i++) {
    if (dic[i] ===str) {
     return true ;
    }
  }
  return false;
}




