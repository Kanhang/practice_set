


class Runner{
constructor(concurrency){
this.concurrency = concurrency;
this.running = 0 
this.jobs =[];
this.done = this.done.bind(this);
}
done(){
    this.running--;
    if(this.jobs.length>0){
    let lowest = Infinity;
    let index=0;
    for (let i =0; i< this.jobs.length;i++){
        if (this.jobs[i].p < lowest) {
            lowest = this.jobs[i].p;
            index =i;
        }
    }
    this.push(this.jobs[index].fn,this.jobs[index].p);
    this.jobs.splice(index,1); 
    }}
push(fn ,priority ){
//    console.log(this.jobs);
    if (this.running<this.concurrency ){ 
        this.running++;
        fn(this.done);
        console.log( `task with ${priority} is running `);
    }else{
        this.jobs.push({fn:fn,p:priority});
    }
}


}
function test( done){
    setTimeout(()=>{
        done()
        console.log(" starting to execute the task");
    },2000)

}

const r = new Runner(2);
r.push(test, 5);
r.push(test, 4);
r.push(test, 2);
r.push(test, 3);
r.push(test, 1);