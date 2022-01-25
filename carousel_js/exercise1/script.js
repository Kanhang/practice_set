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


const wrapper= document.querySelector('.wrapper');

let curIndex= 0;

let initial_array=images.slice(0,5);
initial_array.forEach((img)=>{
    let new_img= document.createElement('img');
    new_img.src=img;
    wrapper.append(new_img);
})

const prev = document.querySelector('.prev');
prev.onclick=()=>{
    console.log("hah");
    while(wrapper.hasChildNodes()){
        wrapper.removeChild(wrapper.firstChild);
    }
    if (curIndex===0){
        curIndex= images.length-1;
    }  else{
        curIndex-=1;
    }
    let new_arr= images.slice(curIndex,curIndex+5);
    if (new_arr.length<5){
        new_arr= new_arr.concat(images.slice(0,5-new_arr.length))
    }
    new_arr.forEach((image)=>{
        let new_img= document.createElement('img');
        new_img.src=image;
        wrapper.append(new_img);
    })

}
const next = document.querySelector('.next');

next.onclick=()=>{
    while(wrapper.hasChildNodes()){
        wrapper.removeChild(wrapper.firstChild);
    }
    if (curIndex===images.length-1){
        curIndex= 0;
    }  else{
        curIndex+=1;
    }
    let new_arr= images.slice(curIndex,curIndex+5);
    if (new_arr.length<5){
        new_arr= new_arr.concat(images.slice(0,5-new_arr.length))
    }
    new_arr.forEach((image)=>{
        let new_img= document.createElement('img');
        new_img.src=image;
        wrapper.append(new_img);
    })

}