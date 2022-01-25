
Array.prototype.newFlat= function(){
    //this means array here
    let flatArray=[];  //this.length returns array parameters.size
    for (let i =0; i< this.length; i++){ //this[i] access array element
        if (Array.isArray(this[i])){              //this[i] is the new this
           flatArray=[...flatArray,...this.newFlat.call(this[i])];
        }else{
            flatArray.push(this[i]);
        }
    }
    return flatArray;
    };
    
    //const nestedArr = [[1], [[1, 4, [5, 3]], [1, 2, 3, 4]]] => [1, 1, 4, 5, 3, 1, 2, 3, 4]
    const nestedArr = [[1], [[1, 4, [5, 3]], [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4]]]
    //const nestedArr = [1, 2, 3, 4, [1]]
    const flat = nestedArr.newFlat();
    console.log(flat);

//use reduce and map
Array.prototype.newFlat = function(depth){

    return depth >0 ? 
   this.reduce((accumulator, value)=>{
    return [...accumulator, ...(Array.isArray(value)?value.newFlat(depth-1):[value])]
   },[]):
    this
    };