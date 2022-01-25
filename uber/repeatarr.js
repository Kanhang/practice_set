// Given a list of numbers, return number of sub-arrays that satisfies the following condition:

// All elements in the sub-array appear at-least 2 times.

// Examples:

// Given a list, [1,2,1,2,4], your code should return 1 : ([1,2,1,2]),
// Given a list, [1,2,3,3,3,2,4], your code should return 4 ([3,3], [3,3], [3,3,3], [2,3,3,3,2])

// [ 1,2,1,2,4] 
function solution (arr ){

    let result =[];
  
  // i 0-2   2-4
    for ( let i = 0; i <arr.length-2;i++){
        for (let j =i+2; j <=arr.length;j++){
            let temp = arr.slice(i, j);
       //   console.log(temp);
            let hashmap =new Map();
 
            for ( num of temp){
         //     console.log(num)
                console.log(temp,'arr');
                if (hashmap.has(num)){
                    hashmap.set(num,hashmap.get(num)+1);
              
            }else{
                hashmap.set(num,1);
            }}
         //     console.log(hashmap)
            let flag =true;

              console.log(hashmap,'c')
             for ( let value of hashmap.values()){
               console.log(value)
        
                 if(value <2){
                         
                 flag=false;
                    console.log(temp ,flag)
                 }
             }
             if (flag===true){
                  console.log(temp,'temp')
               // console.log([...hashmap.values()])
               // console.log(hashmap)
               console.log(i,j)
                 result.push(temp)
             }
        
     }
    }
    return result;
}
let res =solution([1,2,1,2,4]);
let resa= solution([1,2,3,3,3,2,4]);
console.log(res,'haha');     
console.log(resa,'haha');
            