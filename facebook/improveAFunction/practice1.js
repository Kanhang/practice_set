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

  function excludeItem(items, excludes){
    const map = new Map();
    for(const{k,v } of excludes){
        if(!map.has(k)){
            map.set(k, new Set());
        }
        map.get(k).add(v);
    }
    console.log(map.get('color'));
    return items.filter(item=>{
        return !Object.keys(item).some(k =>
            map.has(k)&& map.get(k).has(item[k]))
    })
  }
  console.log( excludeItem(items, excludes));