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

const imageContainer = document.getElementById('slider');
const prevBut = document.getElementById('prev');
const nextBut = document.getElementById('next');
prevBut.addEventListener('click',prev);
nextBut.addEventListener('click',next);
let index =0 ;

create();
function create(){
	while(imageContainer.firstChild){
		imageContainer.removeChild(imageContainer.firstChild);
	}
	const img_url = images[index];
	const img = document.createElement('img');
	img.src= img_url;
	imageContainer.append(img);
}
function next (){
	if (index < images.length-1){
		index+=1
	}else{
		index=0
	}
	create();
}
function prev (){
	if (index >0){
		index-=1;
	}else{
		index=images.length-1;
	}
	create();
}

//create multiple images
function create(){
	while(imageContainer.firstChild){
		imageContainer.removeChild(imageContainer.firstChild);
	}
	let selected = images.slice(index,index+5);
	if(selected.length<5){
		
	selected=	selected.concat(images.slice(0, 5- selected.length))
	}
	for (let i = 0; i<5; i++){
	const img = document.createElement('img');

	img.src= selected[i];
	imageContainer.append(img);}
}