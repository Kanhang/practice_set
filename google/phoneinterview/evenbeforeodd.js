// 第一题给一个array，里面只有integer，保证even number在odd number前面，
//比如 [2, 4, 6, 1, 3] 求输出第一个odd number的index
// 这题用类似binary search 做了，但是我嘴贱，多讲了几个test case，做完之后19分钟过去了。

// naive approach 
// O(n)
 function bruteForce(arr){
    for(let i =0 ; i< arr.length; i++){
        if (arr[i] %2 ===1){
                return i;
        }
    }
}

//o(log n )
function binary(arr){
let l =0;
let h = arr.length-1; 
let first = Infinity;
while (l<h){
    mid = Math.floor((l+h)/2);
    if (arr[mid]%2===1){
        if(mid<first){
            first = mid; 
        }
        h= mid-1;
    } else {
        l=mid+1;
    }
}

return first;
}
let arr =[2,4,6,1,3];
console.log(binary(arr));