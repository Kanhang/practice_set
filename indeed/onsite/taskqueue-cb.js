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

    this.delay = delay;
    }
    
    enqueue(task,id,callback){
    if (typeof task !== 'function'){
     callback(null,new Error('task has be a funciton'))
       // throw new Error('task has to be a function');
    }else{
     if (!this.running){    
     this.running = true; 
     task(this.run,id,this.delay,callback);   
    }
    else {
        this.jobs.push({task: task,id:id ,callback:callback});
    }
    }}
   abort(){

   }
    run(id,cb){
    this.running=false;
    cb(id,null);
    //console.log(`id ${id} is running`);
    if(this.jobs.length>0){
      const {task,id,callback} = this.jobs.shift();
      this.enqueue(task,id,callback);
    } 
    }
    }

    const testFn = (run,id,delay,callback)=>{
        setTimeout(()=>{
            run(id,callback);
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
    tq.enqueue(testFn,1,callback);
    tq.enqueue('haha',3,callback);
    tq.enqueue(testFn,4,callback);
    
    
    