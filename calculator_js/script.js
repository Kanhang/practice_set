const erase= document.querySelector('#erase');
const user= document.querySelector("#user");
const ops= document.querySelectorAll(".ops");//queryselector return nodelist l
                                            //getElementsByClassName returns html collections
const equals = document.querySelector(".equals");
const num = document.querySelectorAll('.number');
const period = document.querySelector('#period');

let calculation=[];
let previousNum='';
let currentNum="";
let operator=null;

// this is to show the current num in user area
// including the period operation
//

const updateNum = (e)=>{
    //restore the previous num
    if(operator === ''&& previousNum!==""){
        previousNum = "";
    }

    const numText = e.target.innerText;
    // if there is no currentNum and we pressed "."
    if (currentNum ==="" && numText==='.'){
        currentNum="0";
        user.innerHTML=currentNum;
    }
    //to skip the repeative
        else if (numText ==='.' &&currentNum.includes('.')){
            numText=null;
        }
        else{
            currentNum+=numText;
            user.innerHTML=currentNum;
        }
}

const selectOperator = (e)=>{
    if (previousNum !== ""){
        calculation.push(previousNum);
        //this means if dont have an operation in the calculation stack, we push one
        if (calculation[calculation.length-1]!==("+"||"-"||"*"||"/")){
            operator = e.target.innerText;
            calculation.push(operator);
        }
            previousNum="";//retore the currentNum to Null
    }
    if(currentNum !==""){
        calculation.push(currentNum);
        if (calculation[calculation.length-1]!==("+"||"-"||"*"||"/")){
            operator = e.target.innerText;
            calculation.push(operator);
        }
    }
    currentNum='';//retore the currentNum to Null
}
const getResult = (e)=>{
    if (currentNum !==""){
        calculation.push(currentNum);
    }
    const result = eval(calculation.join("").toString());
user.innerHTML= result;
previousNum= result;
currentNum ="";
calculation =[];
operator= null;
 
}



//add eventlistener
for (let i =0; i<num.length;i++){
    num[i].addEventListener('click', updateNum);
}
//calucation and updating current only happens here
for (let i=0 ;i<ops.length;i++){
    ops[i].addEventListener('click',selectOperator);

}
equals.addEventListener('click',getResult);

erase.onclick=()=>{
    user.innerHTML="0";
    currentNum ="";
    previousNum="";
    calculation=[];
};