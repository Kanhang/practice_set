// given array  nums = [-1,18 ,3,1,5]
//return 4 , because there 4 sets nums[i]+nums[j] is a full square
//[(0,3),(0,4)(2,3),(1,1)]const nums = [-1,18,3,1,5,2,1,3,4,5,2,4,5,6];

let count =0;
for ( let i =0;i< nums.length;i++){
    for (let j =i; j< nums.length; j++ ){
        if (helper(nums[i] +nums[j])){
            console.log(i,j)
          count+=1
        }

    }
}
console.log(count)

function helper(num){
  if (num===0){
    return true;
  }
    for (let i = 1; i <=num; i++){
             let s= Math.floor(num/i) ;
 
        if (s*i ===num && s===i){
    
            return true;
        }
    }
    return false;
}