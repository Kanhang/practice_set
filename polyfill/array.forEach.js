

Array.prototype.newForEach= function (callback){
    for (let i = 0; i<this.length;i++){
       callback.call(this, this[i],i, this);
    }
}

const words = ["adam", "ate", "an", "apple"]
const upperCaseList = []
words.newForEach((word, index, context) => {
  upperCaseList.push(word.toUpperCase())
})
console.log(upperCaseList)