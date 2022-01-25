class Runner{
    constructor(concurrency){
        this.concurrency = concurrency;
        this.jobs=[];
        this.running =0;
    }
    done(){
     this.running -=1;
        if (this.jobs.length>0){
            let lowest = Infinity;
            var index = 0;
            for (let i=0;i<this.jobs.length;i++){
                if (this.jobs[i].p<lowest){
                    lowest= this.jobs[i].p;
                    index=i;
                }
            }
            this.push(this.jobs[index].func);
            console.log("next job priority is " +this.jobs[index].p)
            this.jobs.splice(index,1);
        }
      }
    
    
    
    push(fn,priority){
        if (this.running < this.concurrency){
            this.running +=1;
            fn(this.done.bind(this))
          console.log('ha')
        }
        else{
            this.jobs.push({func:fn, p:priority })
        }
        //whenever we need to call the fn inside the obj, class, or function is a property ,
        // we need to tuse this
     
    }
    }
    
    function expFn(done){
        setTimeout(function(){
         console.log('start to execute the task');
            done();  
        },2000)
    }
    
    
    const r=new Runner(1);
    r.push(expFn,1);
    r.push(expFn,4);
    r.push(expFn,5);
    r.push(expFn,2);
    r.push(expFn,6);
    r.push(expFn,3);