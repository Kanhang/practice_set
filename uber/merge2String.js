const a = 'AAAAAA';
const b = 'BBB';
// iterate the short one . 
// from o to 3 ;
// res+=a[i]
//res +=b[i]
// res+=a.slice(n,m);
const m = a.length;
const n = b.length;
let k=0;
if (m<n){
k=m;
}else{
k=n;
}
let res='';
for ( let i = 0; i<k;i++){
res+=a[i];
res +=b[i] ;
}
if ( m<n){
res+= b.slice(k,n);
}
else{
    res+= a.slice(k,m);
}
console.log(res,'jhah');