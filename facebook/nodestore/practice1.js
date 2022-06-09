class NodeStore {

    constructor(){
        this.store = {};
    }
    get(node){
        return this.store[Symbol.for(node)]
    }
    has(node){
        return !!this.store[Symbol.for(node)];
    }
    set(node,value){
        this.store[Symbol.for(node)] =value;
    }
}