const response = [{ tabName: 'tab 1', content: 'content 1'}, { tabName: 'tab 2', content: 'content 2'}, { tabName: 'tab 3', content: 'content 3'}, { tabName: 'tab 4', content: 'content 4'}, { tabName: 'tab 5', content: 'content 5'}];

const content= document.createElement('div');
content.innerHTML= 'content 1';
content.setAttribute('class','content');
const tabContainer= document.createElement('div');
tabContainer.setAttribute('class','tabContainer');
const root= document.getElementById('root');

for (let i= 0 ; i<response.length;i++){
  let tab = document.createElement('div');
  tab.id = response[i].tabName;
  tab.setAttribute('class', 'tab');
  tab.innerHTML =response[i].tabName;

  if(i===0){
    tab.classList.add('active');
  }
    else{
     tab.classList.add('inactive');
    }
  tab.onclick = function(){
 const tabs= document.getElementsByClassName('tab');
    Array.from(tabs).forEach(tab=>{
      tab.classList.add('inactive');
      tab.classList.remove('active');
    })
    tab.classList.remove('inactive');
  tab.classList.add('active');
      content.innerHTML=response.find(obj=>obj.tabName === tab.id).content;
  } 

  tabContainer.append(tab);
  
}
root.append(tabContainer);
root.append(content);