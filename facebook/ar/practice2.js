
// const animate = (el, distance, time)=>{
// const ele = document.getElementById(el);
// ele.style.transitionDuration = `${time}ms`;
// ele.style.transform =`translateX(${distance}px)`

// }


const animate = (el, distance, time) => {
    let start =null;
    const ele = document.getElementById(el);
    const speed =distance/time;
    const move = (currentTime) => {
        if(!start) {
        start = currentTime;}
        const timeSpent = currentTime- start;
        if(timeSpent>time){return};
        ele.style.transform = `translateX(${timeSpent*speed}px)`;
        window.requestAnimationFrame(move);
}
window.requestAnimationFrame(move);
}

animate('root',1000,2000);

