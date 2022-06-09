    function nextIterator(start,end,step){
        let iteratorCount =0;
        let nextIterator = start;
        const iterator = {
            next : function () {
                if (nextIterator< end){
                    iteratorCount+=1;
                    nextIterator+=step;
                    return {
                        value: nextIterator,
                        done: false
                    }
                }
                return {
                    value: iteratorCount,
                    done: true
                }
            }
        }
        return iterator;
    }


    const iterator = nextIterator(0,5,1);
    let result = iterator.next();
    while (!result.done) {
        console.log(result.value);
        result= iterator.next();
    }
    console.log(result.value);