const array =[]
function findPath(root,arr, target) {
    if (root === null) {
      return false;
    }
    arr.push(root.value);
    if (root.value === target){
      return true;
    }
    if (findPath(root.left,arr,target) ||
    findPath(root.right,arr,target)) {
      return true;
    }
     arr.pop();
    return false;
  
  
}



class Node {
  constructor(x) {
    this.value = x;
    this.left = null;
    this.right = null;
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left= new Node(4);
root.left.right = new Node(5);
root.right.left= new Node(6);
root.right.right = new Node(7);

findPath(root, array, 5);

console.log(array);