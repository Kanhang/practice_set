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

  create();
}
function next(){
  
  if(cur!==images.length-1){
    cur+=1;
  }
  else{
    cur=0;
  }
  create();
}

function create(){
  if(imageContainer.firstChild){
    console.log(imageContainer.firstChild);
  imageContainer.removeChild(imageContainer.firstChild);
  }
  const img = document.createElement('img');
  img.style.width='100px';
  img.src= images[cur];
  imageContainer.append(img);
};
  create();