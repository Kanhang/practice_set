class STQ {

    /**
     * @param {number} [concurrencyLimit]
     */
    constructor(concurrencyLimit) {
        if (concurrencyLimit == null) {
            this._maxConcurrency = 1;
        } else if (typeof concurrencyLimit === 'number') {
            this._maxConcurrency = concurrencyLimit;
        } else {
            throw new Error('concurrencyLimit must be a number or nothing');
        }

        this._currentConcurrency = 0;
        this._queue              = [];
    }

    /**
     * Add callback to queue.
     * @param {Function} callback
     * @param {...} args
     * @returns {Promise}
     */
    add(callback, ...args) {
        return new Promise((resolve, reject) => {
            this._queue.push({
                callback,
                args,
                resolve,
                reject
            });

            this._run();
        });
    }

    /**
     * Wrap callback for work in queue.
     * @param {Function} callback
     * @returns {Function}
     */
    wrap(callback) {
        const that = this;
        return function(...args) {
            that.add(callback, ...args);
        };
    }

    _run() {
        if (this._currentConcurrency === this._maxConcurrency) {
            return;
        }

        this._currentConcurrency++;

        const task = this._queue.shift();

        try {
            Promise.resolve(task.callback()).then(result => {
                task.resolve(result);
                this._currentConcurrency--;
                this._run();
            }, err => {
                task.reject(err);
                this._currentConcurrency--;
                this._run();
            });

        } catch(err) {
            task.reject(err);
            this._currentConcurrency--;
            this._run();
        }
    }



    
    getSize() {
        return this._queue.length;
    }

};
const queue = new STQ(2);

for (let i = 0; i < 5; i++) {
    queue.add(() => {
        console.log(`START ${i} ${Date.now()}`);
        return new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
    }).then(() => {
        console.log(`END   ${i} ${Date.now()}`);
    });
}