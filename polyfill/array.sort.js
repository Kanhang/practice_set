//the built accepts sort function or no sort function 
//,then we use our own functions


Array.prototype.newSort = function(compareFn) {
    return mergeSort(this)
    // Split the array into halves and merge them recursively 
    // until the arr length is one
    function mergeSort(arr) {
        if (arr.length === 1) {
            // return once we hit an array with a single item
            return arr
        }
        const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
        const left = arr.slice(0, middle) // items on the left side
        const right = arr.slice(middle) // items on the right side
        return merge(
            mergeSort(left),
            mergeSort(right)
        )
    }
    // compare the arrays item by item and return the concatenated result
    function merge(left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0
        while (indexLeft < left.length && indexRight < right.length) {

            //this part is got evoked when there is compare provided.
            //compareFn ? compareFn =()=> left[indexLeft] < right[indexRight] : compareFn
            //this line is just an abeviation
            let _left = left[indexLeft]
            let _right = right[indexRight]
            if (compareFn)
                compareFn = composeCompareFn(compareFn(left, right))
        //you might got confused here, because composecompareFn is a return ,
        //so code below wont execute if you have a compare function
            compareFn = (l, r) => l < r
            if (compareFn(_left, _right)) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                indexRight++
            }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    }
    function composeCompareFn(compareResult) {
        if (Math.sign(compareResult) == -1)
            return false
        if (Math.sign(compareResult) == 1)
            return true
        if (compareResult == 0)
            return false
    }
}