

const filter= ()=>{
    var input, filter, table ,tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr= table.getElementsByTagName("tr");
    for ( i =0; i<tr.length;i++){
        td = tr[i].getElementsByTagName("td")[0];
        // hide row depends on whether td is found;
        if (td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display = '';
            }
            else{
                tr[i].style.display = 'none';
            }
        }
    }
}

function sortTable(n){

    var table, rows, switching,i, x, y, shouldSwitch, dir, switchcount=0;
    table = document.getElementById('myTable');
    switching=true;
    dir='asc';
    // when this function ends? 
    // when switch never got set it back;
    //
while (switching){
    switching =false;
    rows=table.rows;
    for (i=1; i< (rows.length-1);i++){
        shouldSwitch =false; 
        x= rows[i].getElementsByTagName("TD")[n]; // n means first column or second column
        y= rows[i+1].getElementsByTagName("TD")[n];
        if (dir === "asc"){
            console.log('haha')
            if (x.innerHTML.toLowerCase()>y.innerHTML.toLowerCase()){
                shouldSwitch = true;
                break;
            }}
            else if( dir === "desc"){
                if (x.innerHTML.toLowerCase()<y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            
        }
    }
    if (shouldSwitch){
        rows[i].parentNode.insertBefore(rows[i+1],rows[i]);
        switching = true;
        switchcount ++;
    }
    else {
        if (switchcount === 0 && dir === "asc"){
            dir = "desc";
            switching = true;
        }
    }
}
}