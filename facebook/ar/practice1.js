
// let animate = (el, milliseconds, distance) => {
//     const ele = document.getElementById(el);
//     ele.style.transitionDuration = `${milliseconds}ms`;
//     ele.style.transform = `translateX(${distance}px)`
// }
const animate = (el, distance, time ) => {

let start = null;
const speed = distance/ time; 

const move = (currentTime)=>{
    if(!start) {
        start = currentTime;
    }
    const timeSpent = currentTime -start;
    if(timeSpent*speed >distance ){
        return;
    }
    el.style.transform = `translateX(${timeSpent*speed}px)`;
    window.requestAnimationFrame(move);
}
window.requestAnimationFrame(move);



}