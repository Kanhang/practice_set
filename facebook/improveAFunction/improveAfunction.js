function excludeItems(items, excludes) {
    const map = new Map();
    excludes.forEach( ({k,v})=> {
      console.log(k,v)
      if(!map.has(k)){
        map.set(k, new Set());
      }
      map.get(k).add(v);
    })
  
  return items.filter(item => {
    return !Object.keys(item).some(k => 
    map.has(k) && map.get(k).has(item[k]))
  })
}

// Time complexity: O(m) + O(nk) for 1) 
//building excludesMap takes O(m) and for 2) filtering items take O(nk)

// Space complexity: O(m)