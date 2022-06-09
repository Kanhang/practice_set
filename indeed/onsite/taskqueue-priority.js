// 上次昂赛后又加面了两轮前端：1.实现一个TaskQueue类，构造函数TaskQueue(delay /* ms */)
// ，有两个方法enqueue(task)和run()。
// 要求调用enqueue是将task(function)加入任务队列中，
// 调用run运行队列中的所有任务，每个任务间隔delay毫秒。
// follow up:
// 1）如果task抛出错误怎么处理
// 2）task有返回值，每个任务加上一个回调，在task完成后运行callback。即enqueue(task, callback)，callback形式为callback(result, err)
// 3）实现一个cancel方法，取消一个队列中的task，如果task已运行或正在运行，则打印警告
// 4）给每个任务设置一个prio‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌rity，即enqueue(task, callback, priority)，priority高的先运行。时间复杂度？
// 2. code review，主要涉及prototype和setTimeout/setInterval

class TaskQueue{

    constructor(delay){
    this.jobs = [];
    this.run = this.run.bind(this);
    this.enqueue = this.enqueue.bind(this);
    this.running =false;
    this.cb = null;
    this.delay = delay;
    this.abort= this.abort.bind(this);
    }
    
    enqueue(task,id,callback,priority){

            if(!this.cb){
                this.cb= callback;
            }
    if (typeof task !== 'function'){
       this.cb(null,new Error('task has be a funciton'))
       // throw new Error('task has to be a function');
    }else{
     if (!this.running){    
     this.running = true; 
     task(this.run,id,this.delay);   
    }
    else {
        this.jobs.push({task: task,id:id,p:priority});
    }
    }}
   abort(id){
   const index =this.jobs.findIndex((job)=>job.id === id)
   if(index===-1){
       console.log(`task ${id} is running and not able to abort atm`);
   }else{
      // console.log(this.jobs,index);
       console.log(`task ${this.jobs[index].id} is aborting`);
       this.jobs.splice(index,1);
       
   }
   }
    run(id){
    this.running=false;
    this.cb(id,null);
    //console.log(`id ${id} is running`);
    if(this.jobs.length>0){
        let highest = 0;
        let index =-1;
        for(let i =0; i< this.jobs.length;i++){
            if (this.jobs[i].p>highest){
                highest = this.jobs[i].p;
                index=i;
            }
        }
      const {task,id,p} = this.jobs[index];
      console.log(`${p} priority will runn`)
      this.enqueue(task,id,this.cb);
      this.jobs.splice(index,1);
    } 
    }
    }

    const testFn = (cb,id,delay)=>{
        setTimeout(()=>{
            cb(id);
        },delay)
    }
    
    function callback(result,error){
        if(result)
            console.log(`id ${result} is runninggg`)
        else
            console.log(error)

    }
    const tq = new TaskQueue(1000);
    // tq.cb= callback;
    tq.enqueue(testFn,1,callback,1);
    tq.enqueue('haha',3,callback,2);
    tq.enqueue(testFn,4,callback,3);
  //  tq.abort(1)
    tq.enqueue(testFn,2,callback,4);
    // tq.abort(4)
    
    