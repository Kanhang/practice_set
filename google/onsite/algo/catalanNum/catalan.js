// catalan # formula
//C(N) = sum of C(i)*C(n-1-i) where i is 0 to n-1;


function catalan (n) {

    if (n <=0) {
        return 1;
    }
    let res = 0;    
    for ( let i = 0; i < n; i++) {
        res += catalan(i)* catalan(n-1-i);
    }
    return res;
}

 //0 1 2 3 4 5
// 1 1 2 5 14 42
console.log(catalan(5));