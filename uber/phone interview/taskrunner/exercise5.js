
class TaskRunner{
 constructor(concurrency){
     this.running =0;
     this.concurrency =concurrency;
     this.jobs= [];
    this.push = this.push.bind(this);
    this.done = this.done.bind(this);
 }   
done(){
    this.running--;
    if(this.jobs.length>0){
        let lowest=Infinity;
        let index= 0;
        for(let i=0;i< this.jobs.length;i++){
            if(this.jobs[i].p<lowest){
                lowest= this.jobs[i].p;
                index= i;
            }
        }

        this.push(this.jobs[index].fn, this.jobs[index].p);
        this.jobs.splice(index, 1);
    }

}
push(fn, priority ){
  //  console.log(this.jobs)
 if(this.running<this.concurrency){
    this.running++;
    //print before next 
    console.log(`next task is ${priority}`)
    fn.call(this,this.done);
 }
 else{
     this.jobs.push({fn:fn, p:priority});
 }
}
}


function test(done){
    setTimeout(()=>{
        console.log('the task is executing')
        done();
    },2000);
}

const runner =new TaskRunner(2);
runner.push(test, 5);
runner.push(test, 4);
runner.push(test, 2);
runner.push(test, 3);
runner.push(test, 1);