const container = document.getElementById('container');
const subContainer= document.getElementById('subContainer');
const tabContainer = document.getElementById('tabContainer');

const contentContainer = document.createElement('section');
contentContainer.setAttribute('class','content');//new way to add class
subContainer.appendChild(contentContainer);
const contentParagraph= document.createElement('p');
contentContainer.appendChild(contentParagraph);

const response = [{ tabName: 'tab 1', content: 'content 1'}, { tabName: 'tab 2', content: 'content 2'}, { tabName: 'tab 3', content: 'content 3'}, { tabName: 'tab 4', content: 'content 4'}, { tabName: 'tab 5', content: 'content 5'}];

for(let i = 0; i<response.length;i++){
    let tab= document.createElement('section');
    tab.setAttribute('id','tab-'+i);
    tab.setAttribute('class','tab');

    if(i === 0){
        tab.classList.add('activeTab');
        contentParagraph.textContent=response[i].content;
    }
    else{
        tab.classList.add('inactiveTab');
    }
    let tabName = document.createElement('h2');
    tabName.textContent=response[i].tabName;
    tab.appendChild(tabName);
    tabContainer.appendChild(tab);
    console.log(tabContainer.childNodes);
    tab.addEventListener('click',()=>{
        console.log(document.getElementsByClassName('tab'));
     Array.from(document.getElementsByClassName('tab')).forEach(
          (element)=>{
              element.classList.add('inactiveTab');
          }
      );
    

    tab.classList.remove("inactiveTab");
     tab.classList.add("activeTab");
    handlerContent(response[i]);})
}  

function handlerContent(item) {
    contentParagraph.textContent = '';
    contentParagraph.textContent = item.content;
}