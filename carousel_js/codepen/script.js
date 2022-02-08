let images=[
    "https://via.placeholder.com/200x150?text=first",
    "https://via.placeholder.com/200x150?text=second",
    "https://via.placeholder.com/200x150?text=third",
    "https://via.placeholder.com/200x150?text=fourth",
    "https://via.placeholder.com/200x150?text=fifth",
    "https://via.placeholder.com/200x150?text=sixth",
    "https://via.placeholder.com/200x150?text=seventh",
    "https://via.placeholder.com/200x150?text=eighth",
    "https://via.placeholder.com/200x150?text=ninth",
    "https://via.placeholder.com/200x150?text=tenth"];
const imageContainer= document.getElementById('images');
let cur =0;
function prev(){
  if(cur!==0){
    cur-=1;
  }else{
    cur= images.length-1;
  }
 while(imageContainer.firstChild){

   imageContainer.removeChild(imageContainer.firstChild);
  }
  create()
}
function next(){
  
  if(cur!==images.length-1){
    cur+=1;
  }
  else{
    cur=0;
  }
 
  while(imageContainer.firstChild){

   imageContainer.removeChild(imageContainer.firstChild);
  }
  create()
}

function create(){
  console.log(cur);
let selectedImages= images.slice(cur,cur+5);
if(selectedImages.length<5){
selectedImages= selectedImages.concat(images.slice(0,5-selectedImages.length))
}

selectedImages.forEach((image)=>{
  const img = document.createElement('img');
  img.style.width='100px';
  img.src= image;
  imageContainer.append(img);
});}
  create();