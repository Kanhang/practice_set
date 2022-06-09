class Runner{   
constructor (concurrency){
    this.running =0;
    this.concurrency = concurrency;
    this.jobs = [];
    this.done= this.done.bind(this);
}
done(){
    this.running --; 
    console.log("the function is executing");
    if ( this.jobs.length>0 ){
        let lowest = Infinity;
        let index = 0; 
        for (let i = 0;i<this.jobs.length;i++){
            if( this.jobs[i].p < lowest){
                lowest= this.jobs[i].p;
                index =i;
            }
        }
        this.push(this.jobs[index].fn,lowest );

        this.jobs.splice(index,1);
    }
 
};
push(fn, priority ){
if (this.running < this.concurrency){
    this.running ++ ;
    console.log(`task with ${priority} will run`);
    fn(this.done);
}else{
    this.jobs.push({fn:fn, p:priority});
}

};
}


function test (done){
    setTimeout(()=>{
        done();

    },2000)
}

const R = new Runner(2);
R.push(test,5);
R.push(test,1);

R.push(test,2);
R.push(test,3);

R.push(test,6);
R.push(test,4);