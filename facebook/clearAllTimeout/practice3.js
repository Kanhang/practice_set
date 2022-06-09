const oldSetTimeout = window.setTimeout; 
const oldClearTimeout = window.clearTimeout;

const timesetids = new Set();

window.setTimeout = (callback, delay) => {
    const newCallback = ()=> {
        if(timesetids.has(timeid)){
          callback();
          timesetids.delete(timeid);
        }
    }
   const timeid = oldSetTimeout(newCallback,delay);
   timesetids.add(timeid);
   return timeid;
  }

window.clearTimeout = (id) => {
    timesetids.delete(id);
    oldClearTimeout(id);
}

function clearAllTimeout() {
    timesetids =new Set();
}