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
let wrapper= document.querySelector('.wrapper');
  // with a dot

let current_index=0;
let temp=images.slice(0,5);
temp.forEach((url)=>{
    let img = document.createElement('img');
    img.src=url;
    wrapper.append(img);
})

//we only want to do the operations on the matching 
let prev= document.querySelector('#prev');

prev.addEventListener('click',()=>{
    while (wrapper.hasChildNodes()) {
        wrapper.removeChild(wrapper.lastChild);
    }
    if (current_index===0){
        current_index=images.length-1
    }else{
        current_index-=1

    }
    temp= images.slice(current_index,current_index+5);
    if (temp.length<5){
    temp=  temp.concat(images.slice(0,5-temp.length))
    }

    temp.forEach((url)=>{
        let img = document.createElement('img');
        img.src=url;
        wrapper.append(img);
    })

});
let next= document.querySelector('#next');
next.addEventListener('click',()=>{
    while (wrapper.hasChildNodes()) {
        wrapper.removeChild(wrapper.lastChild);
    }//remove all nodes
    if (current_index===images.length-1){
        current_index=0
    }else{
        current_index+=1
    }
    temp= images.slice(current_index,current_index+5);
    if (temp.length<5){
    temp=  temp.concat(images.slice(0,5-temp.length))
    }

    temp.forEach((url)=>{
        let img = document.createElement('img');
        img.src=url;
        wrapper.append(img);
    })

});

