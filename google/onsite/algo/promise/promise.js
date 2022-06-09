// (Promise)
// 给一个array，其中包含了api url, 根据以下规则实现
// array order代表了每一个api的优先级
// 找到优先级最高的success result
// 如果所有的api 都reject，那就handle reject
// do api calls in parallel

const array = ['url1','url2','url3'];
const n = array.length - 1;
const fetchfunc = (url) => {
    console.log(url)
    if(url!== 'url1') {
        return  Promise.reject(url)
    } else {
        return Promise.resolve(url)
    }

    // .then(data=>data.json())
} 
// tryOneByOne(n)
// function tryOneByOne(index) {
    
//     if (index>-1) {
//         fetchfunc(array[index])
//         .then((data)=>{
//             console.log(data);
//         })
//         .catch(e=>{
//             tryOneByOne(index-1)
//         })   
//     }  else {
//         throw new Error('allreject');
//     }
// }


//pralle
const promiseArray = [];
for (let i = 0; i < array.length; i++) {
    promiseArray.push(fetchfunc(array[i]));
}
Promise.allSettled(promiseArray)
.then(data => {
    let flag = false; 
    for (let i= data.length - 1; i >-1; i--) {
        //console.log(data[i]);
        
        if (data[i].status === 'fulfilled'){
            flag=true;
            console.log(data[i]);
            break;
        } 
    }
    if (!flag) {
        throw Error( 'all rejected');
    }
}) 