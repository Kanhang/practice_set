// render a file directory tree
// dire‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌ctory1
// .. directory2
// .... file1
// .... directory3
// ...... file2
// .. directory4
// .... file 5
// ...
// ...

// 要求自己设计数据结构，写HTML/CSS/JS，不需要任何框架，VanillaJS 即可

//nary tree
// render a file directory tree
// dire‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌ctory1
// .. directory2
// .... file1
// .... directory3
// ...... file2
// .. directory4
// .... file 5
// ...
// ...
class Node {
    constructor( value,isFile) {
      this.value = value;
      this.children= [];
      this.isFile= isFile;
    }
    
  }
  
  const root = new Node(1,false);
  root.children.push(new Node(2,false));
  root.children.push(new Node(4,false));
  root.children[0].children.push(new Node(1,true));
  root.children[0].children.push(new Node(3,false));
  root.children[0].children[1].children.push(new Node(2,true));
  root.children[1].children.push(new Node(5,true));
  
  const tree = document.getElementById('tree');
  function buildTreeFileDirectory(root,lvl=0) {
    if (!root) {
      return 
    }
    let str= '';
      //add the dot
    str += '.'.repeat(2*lvl);
    if(!root.isFile) {
       str += 'Directory'
      str += root.value;
      const text = document.createTextNode(str);
      tree.appendChild(text);
       tree.appendChild(document.createElement('br'));
      for(const child of root.children) {
        buildTreeFileDirectory(child,lvl+1);
      }
    } else if (root.isFile) {
      str += 'File'
      str += root.value;
      const text = document.createTextNode(str);
      tree.appendChild(text);
      tree.appendChild(document.createElement('br'));
    }
    
  }
  buildTreeFileDirectory(root);
