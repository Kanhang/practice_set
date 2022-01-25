fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
.then(function(res) { return res.json() })
.then(function(result) {
      const items= result.items;
      console.log(items);
    })
  .catch(function(error) {
   console.log(error);
  })


async function getItems(){
    let results;
    try{
    const response= await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    results =await response.json()

    }
    catch(e){
        return new Error("error")
    }
    return results.item; //no then next then return 

}

const items= await getItems()


async function getItems() {
  let results;
  try {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
    results = await response.json()
  } catch (e) {
    return new Error('error......')
  }

  return results.items
}
const items = await getItems()
console.log(items)