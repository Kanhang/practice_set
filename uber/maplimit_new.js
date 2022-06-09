
class MapLimit {
  constructor(limit, callback,input ,iterFn) {
    this.limit = limit;
    this.callback = callback;
    this.mycb = this.mycb.bind(this);
    this.res = [];
    this.cur = 0;
    this.size = input.length;
    this.input = input;
    this.iterFn= iterFn;
    this.add = this.add.bind(this);
  }
 
    mycb(str) {
      this.res.push(str);
      if (this.res.length === this.size) {
        this.callback(this.res);
      } else {
      this.cur--;
      this.add()
      }
    }
  
    add() {
      if( this.input.length>0 && this.cur < this.limit) {
        this.cur ++ ;
        const id = this.input.shift();
        console.log(id)
        this.iterFn(id,this.mycb);
      }
    }
 
}
function getNameById(id, callback) {
      // simulating async request
      const randomRequestTime = Math.floor(Math.random() * 100) + 200;
      
      setTimeout(() => {
        callback("User" + id)
      }, randomRequestTime);
    }

function callback(str) {
  
}
    function mapLimit(inputs, limit, iterateeFn, callback) {
       // implement here
        const ML = new MapLimit(limit,callback, inputs,iterateeFn);
        ML.add();
    }
    mapLimit([1,2,3,4,5], 2, getNameById, (allResults) => {
      console.log(allResults) // ["User1", "User2", "User3", "User4", "User5"]
    })
