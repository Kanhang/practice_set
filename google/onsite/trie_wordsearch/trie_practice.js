class TrieNode {

constructor() {
    this.size = 26;
    this.children = new Array(26);
    for (let i = 0; i < this.size; i++) {
        this.children[i] = null;
    }
    this.isEnd = false; 
 }

 insert(root,key) {
     let child = root; 
    for ( let i = 0; i < key.length; i++) {
        const index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (child.children[index] === null) {
            child.children[index] = new TrieNode();
        }
        child = child.children[index];
   }
   child.isEnd = true;
      
 }

 remove(root, key, depth) {
    if (!root) {
        return rpot;
    }
    //when 
    if (depth === key.length) {
        if (root.isEnd ) {
            root.isEnd = false
        }
        if (isEmpty(root)) {
            root = null
        }
        return root;
    }
    const index = key[depth].charCodeAt(0)- 'a'.charCodeAt(0);
    root.children[index] = remove(root.children[index],key, depth+1);
    if (isEmpty(root) && root.isEnd === false) {
        return null;
    }
    return root;
}

search(root, key) {
    let child = root;
    for( let i = 0; i< key.length; i++) {
        const index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if( child.children[index] === null) {
            return false;
        }
        child = child.children[index];
    }
    return child !== null && child.isEnd;
}
isEmpty(root) {
    for (let i =0; i <26; i++) {
        if (root.children[i] !==null) {
            return false;
        }
    }
    return true;
}
}

const root = new TrieNode();

let keys = [ "the", "a", "there",
                 "answer", "any", "by",
                 "bye", "their", "hero", "heroplane" ];

for(let i = 0;i<keys.length;i++) {
    root.insert(root,keys[i]);
}
console.log(root);
console.log(root.search(root,'heroplne'));
