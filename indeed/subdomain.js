let arr= ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
// Output:
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]


function cpdomain(arr){

    let m = new Map();
    for (const subdomain of arr){
        let [ count, domain ] = subdomain.split(' ');
        count -=0;
        let subdomains= domain.split('.')
        for (let i = subdomains.length-1 ;i>=0; i--){
           let sd = subdomains.slice(i).join('.');
           if ( m.has(sd)){
               m.set(sd, m.get(sd)+count);
           }else{
               m.set(sd, count);
           }

        }
    }

    const result=[];
   Array.from (m.entries()).forEach(entry=>{
    const ans = `${entry[1]} ${entry[0]}`;
    result.push(ans);
   })
   return result;
}
console.log(cpdomain(arr));