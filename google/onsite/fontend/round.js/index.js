// const arr = [10,20,30];
// const row = document.getElementById('row');

// function createCircles (arr) {
  
//   for (let i = 0 ; i < arr.length; i++) {
//     let span = document.createElement('div');
    
//     span.style.width=arr[i]*2+'px';
//     span.style.height= arr[i]*2+'px';
//     span.style.borderRadius='50%';
//     span.classList.add('circle')
//     span.style.backgroundColor='red';           
  
//     span.addEventListener('mouseenter',function(){
//       let width = this.style.width.slice(0,-2)-0;
//   console.log(width);
//       const area = Math.floor(width*width*Math.PI/2);
//       this.style.width=(width+10)+'px';
//       this.style.height=(width+10)+'px';
//       this.innerHTML=area;
//     })
//     //   span.addEventListener('mouseleave',function(){
//     //   let width = this.style.width.slice(0,-2)-0;
//     //   this.style.width=(width-10)+'px';
//     //   this.style.height=(width-10)+'px';
//     //   this.innerHTML='';
//     // })
//       span.addEventListener('click',function(){
//         const parent = span.parentElement;
//         console.log(parent.children[0]);
//         for (let i =0 ; i< parent.children.length; i++) {
//            let width = parent.children[i].style.width.slice(0,-2)-0;
//           console.log(width,i); parent.children[i].innerHTML=Math.floor(width*width*Math.PI/2);
//          if (parent.childNodes[i] === span) {
//            break;
//          }
          
//         }
//       })
//     row.append(span);
    
//   }
// }
// createCircles(arr);
// #row {
//     width: 100px;
//     display: flex;
//     flex-wrap:wrap;
//   /*  overflow:hidden; */
//   }
  
//   <div id= 'row'>
  
// </div>
  