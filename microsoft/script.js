function solution(){
    const tables = document.getElementsByTagName('table');
    console.log(tables);
    let max= 0;
    for (let i =0; i<tables.length;i++){
        const tbody= tables[i].children[0];
        const rows =tbody.children;
        console.log(rows);
        var count =0; 
        for (let j=0; j<rows.length;j++){
            
            count += rows[j].children.length;
        }
        max= Math.max(count, max);
    }
    console.log(max);
    return max;

}
solution()