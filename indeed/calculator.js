 
let expression = "2+3-999";
console.log(basicCalculator(expression));
function basicCalculator(expression) {
    let stack =[];
    let sign = 1 ;
    let res =0 ;
    let cur = '';
    for (let i =0; i< expression.length ;i++){
      if (isNumber(expression[i])){
        cur+= expression[i];
      }
      else{
         if(expression[i] === "+"){
      //     console.log(cur,'+');
           res+= cur!==''?sign*parseInt(cur):0;
           sign = 1;
           cur ='';
         }
         else if (expression[i] === '-'){
           res+= cur!==''?sign*parseInt(cur):0;
           sign = -1;
           cur ='';
         }
         else if (expression[i]==='('){
          // console.log(res,"(")
           stack.push(res);
           stack.push(sign);
           res= 0;
           sign = 1;
         }
         else if (expression[i]===")"){
           res+= cur!==''?sign*parseInt(cur):0;
           cur ='';
           let psign= stack.pop();
           let pres= stack.pop();
           res =res*psign+pres;
        //   console.log(psign,pres,res);
         }
      }
    }
     
    return res+ (cur!==''?parseInt(cur)*sign:0)
    }
     
     
    function isNumber(c){
      return c>='0' && c<='9';
    }
    