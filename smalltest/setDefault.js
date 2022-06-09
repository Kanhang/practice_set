
//setDefault takes an argument of any value and returns  a function, 
//if argument is true,return true,  if argument is false ,return original argument;
//exp.setDefault(72)(true)  //return true
//setDefault('foo')(false)


function setDefault(arg){
    return function(arg2){
        if(arg2===true){
            return true
        }
        else{
            return arg;
        }
    }
}
setDefault(72)(true)  