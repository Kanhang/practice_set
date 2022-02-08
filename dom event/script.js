
var input =document.getElementById('input');
// input.addEventListener('keydown',presskey)

//when you trying to use it as property it becomes,
//onXXXX ,and use function inside, you cannot call it with a string function name;
//you also cannot use a functionname, you have to define function inside it;
//input.addEventListener('click',functionname) is preferred way;
input.onkeydown =function presskey(e){
    console.log(e.key);
};

<button onclick = "functionname()"/>

