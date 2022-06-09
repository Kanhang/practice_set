// const findCorrespondingNode = (rootA, rootB, target) =>{
//     if( rootA=== target){
//         return rootB;
//     }
//     for(let i=0 ; i<rootA.children.length;i++){
//      const res = findCorrespondingNode(rootA.children[i], rootB.children[i],target);
//      if(res){
//          return res;
//      }
//     }
// }

// const findCorrespondingNode = (rootA, rootB, target) =>{
//     const stack = [[rootA,rootB]];
//     while ( stack.length>0){
//         const [left, right ]= stack.pop();
//         if(left === target){
//             return right;
//         }
//         for(let i = 0;i< left.children.length; i++){
//             stack.push([left.children[i],right.children[i]]);
//         }
//     }
// }

const findCorrespondingNode = (rootA, rootB, target) =>{
    if (rootA === target){
        return rootB;
    }
    const path =[]; 
    let node = target; 
    while(node!==rootA){
        let parent = node.parentElement;
        const children = Array.from(parent.children);
        const index = children.indexOf(node);
        path.push(index);
        node= parent;

    }

    return path.reduceRight((result,index)=>result.children[index],rootB)

}