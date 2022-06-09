class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor(){
   this.store ={};
   }
 
   set(node, value) {
   this.store[Symbol.for(node)]=value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    return this.store[Symbol.for(node)]
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     return !!this.store[Symbol.for(node)]
     
   }
 }