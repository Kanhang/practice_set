//compare current element with previous one
//this is plain javascript algorithm
function insertionSort(arr){
    for (let i = 1; i < arr.length;i++){
        for (let j=0 ;j < i ;j++){
            const current =arr[i];
            const prev = arr[j];
            if (current  < prev){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }
    }

}


let  arr = [5,4,3,2,1];

arr.sort(insertionSort(arr));

console.log(arr); //[1,2,3,4,5];