    
class TaskRunner{
    constructor(concurrency){
        this.running =0;
        this.concurrency =concurrency;
        this.jobs= [];
        this.res=[];
        this.flag= true;
        this.cb=null;
        this.i= null;
        this.length;
       this.push = this.push.bind(this);
       this.done = this.done.bind(this);
    }   
   done(userid){
       this.running--;
       this.i+=1;
       this.res.push(userid);
       if(this.i ===this.length){
        this.cb(this.res);
       }
     if(this.jobs.length>0){
     const {fn, id} =this.jobs.shift();

    this.push(fn,id);
     }
   
   }
   push(fn,id ){
     //  console.log(this.jobs)
    if(this.running<this.concurrency){
       this.running++;
       //print before next 
       fn(id,this.done);
     //  console.log(id)
    }
    else{
        this.jobs.push({fn:fn,id:id});
    }
   }
   
   }
function getNameById(id, callback) {
      // simulating async request
      const randomRequestTime = Math.floor(Math.random() * 100) + 200;
      
      setTimeout(() => {
        callback("User" + id)
      }, randomRequestTime);
    }
    function mapLimit(inputs, limit, iterateeFn, callback) {
       // implement here
    const tr= new TaskRunner(limit);
    if(!tr.cb){
        tr.cb= callback;
    }
    tr.length=inputs.length;
        for( const input of inputs){
           tr.push(iterateeFn,input); 
        }
 
    }
    mapLimit([1,2,3,4,5], 2, getNameById, (allResults) => {
      console.log(allResults) // ["User1", "User2", "User3", "User4", "User5"]
    })

