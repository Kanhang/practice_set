// input
// [
//   ["3234.html", "xys.html", "7hsaa.html"], // user1
//   ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"] // user2
// ]

const history1 =["3234.html", "xys.html", "7hsaa.html"];
const history2=  ["3234.html", "sdhsfjdsh.html", "xys.html", "7hsaa.html"];
function longestCommonContinuousHistory(history1,history2){

    const h1 = history1.length;
    const h2 = history2.length; 
    console.log(h1,h2);

    const memo = new Array(h1+1).fill(0).map(()=>new Array(h2+1).fill(0));
    let count =0;
    let result =[];
    for ( let i = 1; i<memo.length; i++){
        for ( let j =1 ;j<memo[0].length;j++){
        if( history1[i-1]===history2[j-1]){
            memo[i][j] = memo[i-1][j-1]+1;
            console.log(memo);
            if (memo[i][j]>count){
                count = memo[i][j];
                result = history1.slice(i-count,i);
            }
        }         

}}
return result;}
console.log(longestCommonContinuousHistory(history1,history2));