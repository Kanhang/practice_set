const oldSetTimeout = window.setTimeout;
const oldClearTimeout = window.clearTimeout;
let timeoutids = new Set();
window.setTimeout = (callback , delay) => {
    const newCallback = () => {
        if(timeoutids.has(timeoutid)){
            callback();
            timeoutids.delete(timeoutid);
        }
    }
    const timeoutid = oldSetTimeout(newCallback,delay);
    timeoutids.add(timeoutid);
}
window.clearTimeout = (id) =>{
    timeoutids.delete(id);
    oldClearTimeout(id);
}
function clearAllTimeout(){
    timeoutids= new Set();
}