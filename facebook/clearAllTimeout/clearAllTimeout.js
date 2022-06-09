// //O(n)
// const oldSetTimeout = window.setTimeout;

// let timeoutids= [];
// window.setTimeout = function(callback,delay){
//   var id = oldSetTimeout(callback,delay);
//   timeoutids.push(id);
//   return id;
// }
// function clearAllTimeout() {
//   timeoutids.map(id=> clearTimeout(id));
//   // your code here
// }


//O(1)
/**
 * cancel all timer from window.setTimeout
 */
 const oldSetTimeout = window.setTimeout;
 const oldclearTimeout = window.clearTimeout;
 let timeoutSet = new Set();
 window.setTimeout = function (callback, delay){

 const newCallback = () => {
     if(timeoutSet.has(timeoutId)){
         callback();
         timeoutSet.delete(timeoutId);
     }
 }
 const timeoutId= oldSetTimeout(newCallback,delay);

 timeoutSet.add(timeoutId);
 return timeoutId;
 }
 window.clearTimeout = function(id){
     timeoutSet.delete(id);
     oldclearTimeout(id);
 }
 
 function clearAllTimeout(){
     timeoutSet  = new Set();
 }