
Array.prototype.newSort = function (compareFn){
    return mergeSort(this);

    
    function mergeSort(arr){
        //end condition
        if (arr.length ===1){
            return arr;
        }
        const mid = Math.floor(arr.length/2);
        const left = arr.slice( 0 , mid );
        const right = arr.slice(mid , left);

        return merge( 
            mergeSort(left),
            mergeSort(right)
        )

    
    }

    function merge(left,right){

        let result =[];
        let left_index = left[index]
    }
}