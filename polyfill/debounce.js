
/**
 * @param {Function} func
 * @param {number} wait
 */
// for debounce: we need to create a timer, everytime we cleartimeout and reset timer,
//after timesout;
 function debounce(func, wait) {
    // your code here
    let timer = null; 
    return function() {
      clearTimeout(timer);
      timer = setTimeout(() => {
      func.apply(this, arguments);
      },wait)
   
    }
  }

  debounce(haha,100)()