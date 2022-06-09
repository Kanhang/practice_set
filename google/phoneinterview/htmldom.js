// Q1：
//    <div id='1'>
//             <span id = '2'>Hello </span>
//             <span id = '3'>World </span>
//   </div>
//   Given the root element of a website and a string id, create a function to 
//  return element
// by id, the element is unique. you can't use built-in function getElementById().  
//          
// Q2:
//       类似Q1
//    <div class='1'>
//             <span class= '2'>
//                        Hello
//                     <h1 class = '3'>Giao</h1>           
//            </span>
//             <span class= '3'>World </span>
//   </div>
// Given the root element of a website and a string class, create a function to return
// elements by class. There could be more than one‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌ nodes that have class = '3', you 
//can't use built-in function getElementByClass();

//  <div id='1'>
//             <span id = '2'>Hello
//    <span id = '4'>Hell
   
//    </span>
//    </span>
//             <span id = '3'>World </span>
//  </div>
// const root = document.getElementById('1');
// function findElement(root,id){
//   if (root.id=== id){

//     console.log(root)
//     return root;
//   }
  
//   for (const child of root.childNodes){
//   findElement(child,id);
//   }
  
// }

// findElement(root,'4');



   <div class='1'>
            <span class= '2'>
                       Hello
                    <h1 class = '3'>Giao</h1>           
           </span>
            <span class= '3'>World </span>
  </div>

// const root = document.getElementById('1');

// const arr = [];
// function getElements(root, className) {
//   if (root.className === className){
//     arr.push(root);
//   }
//   for (const child of root.childNodes) {
//     getElements(child,className);
//   }
  
// }

// getElements(root,'3');
// console.log(arr)