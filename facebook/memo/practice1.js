function memo (func,resolver){
    const map = new Map();
    const cacheKey = resolver();
    return function(...args){
        if (map.has(cacheKey)){
            return map.get(cacheKey);
        } else {
          const res=   func.apply(this,args);
          map.set(cacheKey,res);
          return res;
        }
    }
}