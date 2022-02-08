// it takes a concurrency to initialize 
// it has a push method that pushs job into queue takes execution function and priority
// it has a done method that after exectuion of fn , it starts to get execute the function with highest priority;
//  the overall shall not surpass concurrency;


class Runner {
    constructor(concurrency){
       this.concurrency = concurrency; 
       this. jobs = [];
       this. running =0;
       this.done= this.done.bind(this);
    }
    done(){
        this.running -=1;

        if(this.jobs.length>0){
           this.jobs= this.jobs.sort((a,b)=>a.priority-b.priority)
        const temp_obj=this.jobs.shift( );
      
        console.log(`priority of temp_obj is ${temp_obj.priority}`);
        this.push(temp_obj.f, temp_obj.priority);
    }}
    //if less then concurrency, we start to execute the function immdiately
    push(fn, priority){
        
        if(this.running < this.concurrency){
            this.running +=1;
            fn(this.done); //when pass into the fn, we bind it first so we can use the property of class
        }
        else{
            this.jobs.push({f:fn,priority});
    }
        
    }


}

const executionTask = (done)=>{
    setTimeout(()=>{
        console.log( 'the task is executing');
        done();
    },1000)
}

const R = new Runner(2);
R.push(executionTask,4)
R.push(executionTask,5)
R.push(executionTask,3)
R.push(executionTask,2)
R.push(executionTask,6)
R.push(executionTask,1)