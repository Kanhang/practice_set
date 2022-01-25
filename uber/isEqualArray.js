function isEqualArray(a, b){
    if ( a === b){ //if the array is a copy of anohter
        return true; 
    }
    if ( a ==null || b ==null ){
        return false;
    }
    if(a.length !== b.length){
        return true;
    }
    for ( let i =0 ;i<a.length ; i++){
        if (a[i]!== b[i]){
            return false;
        }
    }
    return true;
}