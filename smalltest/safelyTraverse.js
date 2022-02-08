//safely traverse which takes an object as first parameter, and array of string as second parameter;
 // the function should return the value found,after traversing the obj, the function should return undefined'


//safelyTraverse({first:{second:2}},['first','second']); // return 2
//safelyTraverse({},['a','b']);//return undefined;

function safelyTraverse(obj ,arr){

    let temp =obj;
    for(let i =0 ; i<arr.length;i++){
        if (temp[arr[i]]!==undefined){
            temp= temp[arr[i]];
        }else{
            return undefined;
        }
    }
    return temp
}