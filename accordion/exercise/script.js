const titles = document.querySelectorAll('.title');
console.log(titles);


titles.forEach((title)=>{
    title.onclick=()=>{
    const panel= title.nextElementSibling; //nextElementSibling is a property;
    console.log(panel);
 title.classList.toggle("active");
if(panel.style.display==="block"){
    panel.style.display="none";
}else{
    panel.style.display="block";
}
    }
})