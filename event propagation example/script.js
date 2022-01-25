// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log('grandparent clicked' );
// },true) //capturing
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log('parent clicked' );
// },false)//bubbling
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log('child clicked' );
// },true)//capturing
//by default it is false event bubbling

//when we click #child, we call event capturing,
//bubbling is not in the capturing state, so it skips the bubbling for
//parent then go to grandparent


// when click # parent, we call bubbling ,then it goes to grandparent,
//since capturing is in not in the bubbling phase, we skip grandparent,
//and child is not clicked, so print for child

document.querySelector('#grandparent')
.addEventListener('click',()=>{
    console.log('grandparent clicked' );
},false)
document.querySelector('#parent')
.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('parent clicked' );
 
},false)
document.querySelector('#child')
.addEventListener('click',()=>{
    console.log('child clicked' );
},false)

//bubbling will stop at parent but not go to top level;
