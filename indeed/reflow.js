

let wordList= ['hello','world','word','expensive','interesting','requirements','lift','life','happy'];
let max_len =23;
reflow(wordList,max_len);
function reflow(wordList, max_len) {
const result =[];
let path = [];
let i=0;
while (i<wordList.length){
path.push(wordList[i]);
if ( path.join('-').length>max_len){
     path.pop();
     i--;
    result.push(path.join('-'));
    path =[];
}
i++;}
if (path){
    result.push(path.join('-'));

}
console.log(result);
const final=[];
for ( let p of result){
    if(!p.includes('-')){
        final.push(p);
        continue
    }
    let len = p.trim().length;
    let arr= p.split('-');
    const diff = max_len- len;
    const spaceOfintervals=  Math.floor(diff / (arr.length-1));
    const reminder=diff %  (arr.length-1);
    for ( let i=0;i<arr.length-1;i++){
        arr[i]+="-".repeat(spaceOfintervals);
    
    }
    for(let i=0 ; i<reminder;i++){
        arr[i]+='-';
    }

    final.push(arr.join('-'));
}

return final;


}
