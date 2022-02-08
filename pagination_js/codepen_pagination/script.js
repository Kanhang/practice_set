
// 跟pagination有关的，只要写JS，不用run也不用render。
// 假设有一个API可以返回an array of data，然后把这些data展示在网页上。
// followup就是说考虑到data有很多很多，我们需要分页，然后该怎么设计这个API。我觉得就是考‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌怎么做pagination。
// 然后API有了，我JS代码要如何实现通过按一个按钮，就获取下一页的data然后展示在网页上。

const url=  `https://jsonplaceholder.typicode.com/comments`;
let arr =[];
const pageSize=10;
let pageNum=0;
let cur =1;
const commentsContainer = document.getElementById('commentsContainer');
const pageList = document.getElementById('pageList');
const prevBut= document.getElementById('prev');
const nextBut = document.getElementById('next');
fetch(url)
  .then((res)=>{
 return res.json();
})
.then((result)=>{
  //console.log(result);
  arr= result;  
  pageNum= result.length %pageSize ===0?result.length/pageSize: parseInt(Math.floor(result.length/pageSize));
  init(arr);
  create(pageNum,arr);
})

function create(pageNum,arr){
  console.log('creation initial');
  for (let i=1;i<=pageNum;i++){
   let but= document.createElement('button');
    but.innerHTML=i;
    but.onclick=function(){
      let start = (i-1)*10;
      let end = i*10;
      if(i===1){
        prevBut.disabled=true;
      }else{
        prevBut.disabled=false;
      }
      if(i===pageNum){
       nextBut.disabled= true;
      }else{
        nextBut.disabled=false;
      }
      
      console.log(start,end);
       cur= i;
      let selected= arr.slice(start,end);
            console.log(selected);
      while(commentsContainer.firstChild){
        commentsContainer.removeChild(commentsContainer.firstChild);
      }
      selected.forEach((obj)=>{
        let datum= document.createElement('div');
        datum.innerHTML='name:'+obj.name+" "+'email:'+obj.email;
       commentsContainer.append(datum);
      })
    }
    pageList.append(but);
  } 
}


function init(arr){
  let selected= arr.slice(0,10);
          prevBut.disabled=true;
     selected.forEach((obj)=>{
        let datum= document.createElement('div');
        datum.innerHTML='name:'+obj.name+" "+'email:'+obj.email;
       commentsContainer.append(datum);
       
      })
  
    
}

function prev(){
  start =(cur-2)*10;
  end =(cur-1)*10;
  cur-=1;
   if(cur===1){
        prevBut.disabled=true;
      }else{
        prevBut.disabled=false;
      }
      if(cur===pageNum){
       nextBut.disabled= true;
      }else{
        nextBut.disabled=false;
      }
       let selected= arr.slice(start,end);
  while(commentsContainer.firstChild){
        commentsContainer.removeChild(commentsContainer.firstChild);
      }
    selected.forEach((obj)=>{
        let datum= document.createElement('div');
        datum.innerHTML='name:'+obj.name+" "+'email:'+obj.email;
       commentsContainer.append(datum);
      })
  
}
function next(){
  
  start =(cur)*10;
  end =(cur+1)*10;
  cur+=1;
   if(cur===1){
        prevBut.disabled=true;
      }else{
        prevBut.disabled=false;
      }
      if(cur===pageNum){
       nextBut.disabled= true;
      }else{
        nextBut.disabled=false;
      }
       let selected= arr.slice(start,end);
  while(commentsContainer.firstChild){
        commentsContainer.removeChild(commentsContainer.firstChild);
      }
    selected.forEach((obj)=>{
        let datum= document.createElement('div');
        datum.innerHTML='name:'+obj.name+" "+'email:'+obj.email;
       commentsContainer.append(datum);
      })
  
}