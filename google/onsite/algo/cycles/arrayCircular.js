let arr = [2,-1,1,2,2];

// create adjancent list 
// adjacent list shall be a 2d array;
// inside the each index, it shall have the index it jump to next index 
// O(N)
function isCircularLoop(arr) {
    const n = arr.length;
    const adj = new Array(n).fill(0).map(()=>[]);
    for (let i = 0; i< n; i++) {
        if ((i + n + arr[i])% n  !==i) {
            adj[i].push((i + n + arr[i])% n);
        }
    }
    let visited = new Array(n).fill(0);

    
    for (let i =0; i< n; i++) {
        if (checkLoop(i)) {
            return true
        }
    }
    return false;
    function checkLoop(i) {
        visiting[i] = true;
        visited[i] = true;
      
          if (visited[adj[i][0]] === false) {
              if (checkLoop(adj[i][0])) {
                  return true;
              } else if (visited[adj[i][0]] && visiting[adj[i][0]]) {
                  return true;
              }
          
        visiting[i]= false;
        return false;
        }
    }
}


//detect cycle
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//O(N) O (N)
// var circularArrayLoop = function(nums) {
//     const n = nums.length;
//     const adj = new Array(n).fill(0).map(()=>[]);
//     for (let i = 0; i <n ; i++) {
//         let next_index = (i  + nums[i])%n;
//         if(next_index<0) {
//            next_index = n+ next_index; 
//         }
//         if (next_index !== i && nums[i]*nums[next_index]>0) { //self loop and redirection
//                adj[i].push(next_index);
//         }
//     }

//     let visited = new Array(n).fill(0);
//     for (let i =0; i<n ;i++) {
//          if (checkLoop(i)) {
//             return true;
//          }     
// }
//     return false;
    
    
//     function checkLoop(i) {
//         if (visited[i]===1) {
//             return false;
//         }
//         if (visited[i]===-1) {
//             return true;
//         }
//         visited[i] = -1;
//         for (let j = 0; j<adj[i].length ;j++) {
//           if(checkLoop(adj[i][j])) {
//               return true;
//          } 
//          } 
//         visited[i] = 1
//         return false;
//     }
// }; 

var circularArrayLoop = (nums) => {
    //convert self-loop index to 0;
    const n = nums.length;
    for (let i =0;i <n; i++) {
        let val = (i+nums[i])%n;
        if (val <0) {
            val += n;
        }
        if (val === i) {
            nums[i] = 0;
        }
    }
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (findLoop(i)) {
              return true;
            }
            else {
              zeroConversion(i);   
            } 
        } 

    }
    return false;   
    function findLoop(index){
       // start as same index
        let fast = index;
        let slow = index;
        let start = nums[index];
        while (true) {
     
            for (let i =0; i<2; i++) {    
                fast = (fast + nums[fast]) % n;
                
                if (fast < 0) {
                   fast = n + fast;
                }
        
              //  console.log(start,nums)
                if (start * nums[fast] <= 0 ) {
                    
                    return false
                }  // if means there is no loop    
            }
            slow = (slow + nums[slow]) % n;
            if (slow < 0) {
                   slow = n + slow;
            }
       //  console.log(fast,slow,'')
     
            if (slow === fast) {
                return true;
            }
        }

        return false
    }
    function zeroConversion(index){
        let start = nums[index]; //first element
        let next_index = (index+start)%n; // next index
        if (next_index < 0)
            next_index = n+next_index;
        nums[index] = 0; //set the first num to 0 
        while (start * nums[next_index] > 0) { 
            ///console.log('haha');
            index= next_index
            next_index = (index +nums[index]) % n;
            if (next_index < 0)
                next_index = n + next_index;
            nums[index] = 0;   
        }
      //   console.log(nums)
    }

}