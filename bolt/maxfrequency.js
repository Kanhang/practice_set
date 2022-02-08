let arr =[1,1,2,3,1,2,3,4,2,3,2,1,2,5,5,5,5];
// let m = new Map();
// for(let i =0;i<arr.length;i++){
//     if (!m.has(arr[i])){
//         m.set(arr[i],1);
//     }else{
//         m.set(arr[i],m.get(arr[i])+1);
//     }
// }
// let bucket =new Map();

// Array.from(m.entries()).forEach(entry=>{
//     if( bucket.has(entry[1])){
//         bucket.set(entry[1],[...bucket.get(entry[1]),entry[0]])
//     }
//     else{
//         bucket.set(entry[1],[entry[0]])
//     }

// })
// k=3 ;
// let output=[];
// console.log(bucket);
// while(k>0){
// if(  bucket.get(Math.max(...bucket.keys())).length===0){
// bucket.delete(Math.max(...bucket.keys()));
// }else{
// let arr =bucket.get(Math.max(...bucket.keys()));
//     output.push(arr.shift());
//     bucket.set(Math.max(...bucket.keys()),arr);
// k-=1
// }

// }
// console.log(bucket);
// console.log(output);


//

let m2 =new Map();

for (let i =0; i< arr.length;i++){

    if (m2.has(arr[i])){
        m2.set(arr[i] ,m2.get(arr[i])+1);
    }else{
        m2.set(arr[i],1);
    }
}
console.log(m2)
let max_count =0;
let max_key= null;

Array.from(m2.entries()).forEach(entry=>{
    let key = entry[0];
    let value= entry[1];
    console.log(key,value)
    if(value>max_count){
        max_key=key;
        max_count=value;
    }
})
console.log(max_key);