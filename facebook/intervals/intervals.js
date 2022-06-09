
function helper(intervals,input){
    //create a new map first 
    // 0: ['b'],
    // 1: ['b'],
    // 2: ['b','i'],
    // 3: ['i']

    const remapped= new Map();  
     
     for ( let [start,end,tag] of intervals) {
        while(start< end) {
          if(!remapped.has(start)){
            remapped.set(start,[])
          }
          remapped.get(start).push(tag);
          start+=1;
        }
       
     }
//create  a prev to mark previous tag;
//
    let prev = null;
    let res='';
    //if first tag
    for (const [key, value] of remapped.entries()) {
        if (!prev) {
            for(const tag of value ){
                res+=`<${tag}>`;
            }
            res+=`${input[key]}`;
        }
       
       else{ //not same tag so
           //close it and append new tag with input 
        if (value.toString() !== prev.toString()){
            for(const tag of prev.reverse()){
            res+=`</${tag}>`;
            }
            for(const tag of value) {
                res += `<${tag}>`
            }
            res+=`${input[key]}`;
        } 
        //if same tag then just directly append to it
        else {   
            res+= `${input[key]}`;
        }
    }
        prev = value;
    }
//if comes to end , we need to add the closing tag
    if(prev) {
        for(const tag of prev.reverse()){
            res+=`</${tag}>`;
            }
    }
    return res;
    }
    
    console.log(helper([[0,3, 'b'], [2, 4,'i']],'abcedfg'));