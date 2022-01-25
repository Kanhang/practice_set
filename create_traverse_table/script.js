
function generate_table(){
var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
table.className = 'table';
table.style="border:1px solid; width:1000px;height:200px";
for (let i =0; i<Math.random()*100;i++){
    // console.log(i);
    var row = document.createElement('row');
    for (let j =0 ; j<Math.random()*100;j++){
        // console.log(j);
        var cell = document.createElement('td');
        cell.style="border:1px solid;color:red;padding:5px; width:10px;height:10px;";
        let value = Math.floor(Math.random()*10000);
        cell.innerHTML= `${value}`
        row.appendChild(cell)
    }
    table.appendChild(row);
}

body.appendChild(table);
}

generate_table();
generate_table();
generate_table();
generate_table();
generate_table();
generate_table();
// function findmax(){
// var max =-1;
// var rows =document.getElementsByTagName('row');
// console.log(rows);
// for ( let i =0 ; i< rows.length;i++){

//     var cells = rows[i].children;
 
//     for ( let j = 0; j<cells.length;j++){    
//         max= Math.max(max, cells[j].innerHTML-0);
//     }

// }

// console.log(max);
// }

// findmax()

function findMaxCellCount(){
  var max= 0;
    var tables = document.getElementsByTagName('table');
    for (let i =0 ; i<tables.length ;i++){
       var  rows=tables[i].children;
       var count =0;
       for ( let j=0 ; j<rows.length ;j++){
           console.log()
          count+= rows[j].children.length;
       }
       console.log(count)
      max= Math.max(count,max);
        
    }

console.log(max)
}
findMaxCellCount()