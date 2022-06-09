

    const oldSetTimeout = window.setTimeout;
    const oldclearTimeout = window.clearTimeout;

    let timeoutids = new Set();

    window.setTimeout = (callback, delay)=> {
        const timeoutid =  oldSetTimeout(newCallback, delay);
        const newCallback = () => {
            if( timeoutids.has(timeoutid)){
                callback(); 
                timeoutids.delete(timeoutid);
            }

        }
        timeoutids.add(timeoutid);
        return timeoutid;
    }

    window.clearTimeout = (id) => {
        timeoutids.delete(id);
        oldclearTimeout(id);
    }

    function clearAllTimeout(){
        timeoutids = new Set();
    }