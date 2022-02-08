
const container =document.getElementById('container');
const button = document.createElement('button');
button.innerHTML= "press";

const throttled= throttle(createPb,2000);
function throttle(func, delay){
  let waiting = false, lastArgs = null;
  return function(...args){
    if(!waiting){
      func.apply(this, args)
      waiting = true;
      let timeout = () => setTimeout(() => {
        waiting = false;
        if(lastArgs){
          func.apply(this, lastArgs);
          waiting = true;
          lastArgs = null;
          timeout();
        }
      }, delay);
      timeout();
    }
    else 
      lastArgs = args
  }
}
button.addEventListener('click',throttled);
  function createPb(){
  let progress= document.createElement('div');
  progress.classList.add('progressBar');
  let width=1;
 let timer= setInterval(()=>{
    width++;
    progress.style.width=width+'%';
    progress.innerHTML= width+"%";
    if(width>=100){
      clearInterval(timer);
       
       }
  },30)
  container.append(progress);
}
container.append(button);

