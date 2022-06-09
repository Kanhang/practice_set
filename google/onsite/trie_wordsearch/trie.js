const dic =  ['geeks', 'for' , 'quiz' , 'gee'];
const boggle =  [[ 'g','i','z'], ['u', 'e' , 'k'] , ['q', 's' , 'e']];
// complexity to build a trie is O(averagesize * word length *26)
class TrieNode {
  constructor() {
    this.size= 26;
    this.isEnd = false;
    this.children = new Array(this.size);
    for (let i =0 ; i< this.size;i++) {
        this.children[i] = null; }
  }
   insert(root,key) {
     let child = root;
      for(let i= 0;i < key.length;i++) {
        const index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);

          if (child.children[index] == null) {
            child.children[index] = new TrieNode();
          }
        child = child.children[index];
   }
    child.isEnd = true;
}
  remove(root,key,depth) {
         //     console.log(key,root,depth);
      if (root === null) {
        return null;
      }

    if ( key.length === depth) {

      if (root.isEnd)
       root.isEnd = false; 
     // if this is the last word, then we need to delete this, 
      if(isEmpty(root)) {
          console.log(root,'end')
          return null;
      }
    return root;
     
    }
   const index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
    root.children[index] = this.remove( root.children[index] ,key,depth+1);
    // if the node is not leaf then we delete it.
    // and it does have any children
    if(isEmpty(root) && root.isEnd === false) {
        console.log(root,'root delete in the mid')
      return null;
    }
    return root;
  }

  search(key, root) {
      let child = root; 
      for (let i = 0; i < key.length; i++) {
        const index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (child.children[index]== null) {
            return false;
        } 
        child = child.children[index];
      }
      return child !== null && child.isEnd;
  }
  
 }
 function findWord(boogle,root,i,j,visited,res,str,m,n,ch) {
    if ( i<0 || i>m-1 || j<0 || j>n-1) {
        return ;
    }
  
    if (root === null) {
        return;
    }

    if (visited[i][j] === true) {
      return ;
  }  
         
   if (ch !== boggle[i][j]) {
     return ;
   } 
    let child = root;
   if ( child.isEnd && !res.includes(str)) {
            res.push(str);
        }
     
  
    const dir  = [[0,1],[1,0],[1,1],[0,-1],[-1,0],[-1,1],[1,-1],[-1,-1]];
    for (let a =0 ;a < 26; a++) {
   
      if (child.children[a] !== null) {
          const ch = String.fromCharCode(a+'a'.charCodeAt(0));
       visited[i][j] = true;
          for (let k = 0; k< dir.length;k++) {  
            findWord(boogle,child.children[a],i+dir[k][0],j+dir[k][1],visited,res,str+ch,m,n,ch)
          }
      } 
    }

    visited[i][j] = false;
 }
 function findWords(boogle, root) {

    let visited = new Array(boogle.length).fill().map(()=>new Array(boggle[0].length).fill(false));

    let child = root;
    let res = [];
    let str = '';
    const m = boogle.length;
    const n = boogle[0].length;
    for (let i = 0; i < boogle.length;i++) {
        for (let j = 0; j <boogle[0].length; j++) {
        
          const index = boggle[i][j].charCodeAt(0) - 'a'.charCodeAt(0)
            if (child.children[index]!==null){ // worst n words^8n
                findWord(boogle, child.children[index], i, j ,visited, res,str+boggle[i][j],m,n,boggle[i][j]);
            }
        }
    }
   return res;
 }

function isEmpty(root) {
   for (let i = 0; i <26; i++) {
     if (root.children[i] !== null) {
       return false;
     }
   }
  return true;
}

let keys =['geeks', 'for' , 'quiz' , 'gee'];
let root = new TrieNode();

for (let i = 0; i<keys.length; i++) {
  root.insert(root,keys[i]);
}

console.log(findWords(boggle,root));


// this search funciton time complexity takes O(M*N*8*7^(L-1));
// total cells O(MN) first step has 8 directions, then each we have 7 directions, because
// we cannot go back to the place where we come from, and it is L-1 step, L is the max word lenght;

// space complexity O(N^2)