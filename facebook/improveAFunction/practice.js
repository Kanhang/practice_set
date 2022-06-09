let items = [
    {color: 'red', type: 'tv', age: 18}, 
    {color: 'silver', type: 'phone', age: 20},
    {color: 'blue', type: 'book', age: 17}
  ] 
  
  // an exclude array made of key value pair
  const excludes = [ 
    {k: 'color', v: 'silver'}, 
    {k: 'type', v: 'tv'}, 
  ] 
  

function excludeItems(items, excludes) {
    const map = new Map();
    excludes.forEach(({k,v})=>{
                if(!map.has(k)){
            map.set(k,new Set());
        }
        map.get(k).add(v);
    })  //O(M) O(M)      
          
       
  console.log(map.get('color'));
    //check each item,
// return the item that does not match in the map;

//(o(nk))
return items.filter((item)=>{ 
    return !Object.keys(item)
    .some(k=> map.has(k) && map.get(k).has(item[k]))
})
}