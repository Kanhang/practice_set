const container = document.getElementById('rowsContainer');
const rowsNum= document.getElementById('rows');
const colsNum= document.getElementById('cols');

function submit(){
 const total= (rowsNum.value-0)*(colsNum.value-0);
 for (let i =1; i <=rowsNum.value-0;i++){
   let row= document.createElement('div');
   row.id= 'row'+i;
   console.log(row.id)
   row.style.backgroundColor='red'
   container.append(row);
 }
  for (let j=1; j<=total; j++){
    let mod = j%(rowsNum.value-0);
    if(mod===0){
      mod= rowsNum.value;
    }
    document.getElementById('row'+mod).innerHTML+=j+'&nbsp';
  }
}




// <div> # of rows:
//   <input id ='rows'/></div>


// <div> # of columns:
//   <input id ='cols'/></div>
// <button onclick="submit()">submit</button>

// <div id= 'rowsContainer'>
  
// </div> 
