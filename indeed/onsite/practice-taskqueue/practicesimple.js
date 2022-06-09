

class TQ{



    run(){

const  task = queue.shift(0);

        Promise.resolve(task()).then((resolve,reject)=>{
            task.resolve();

        })

        })
    }
}
