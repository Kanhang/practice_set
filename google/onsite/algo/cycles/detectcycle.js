// Graph题 请大家看看怎么解, 如果符合所有条件就return True：input: list of‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌ points
// (1 N 2)，
// (2 N 3),
// (3 N 1) # return False
// 这只是个简单例子 一共有8个方向 东南西北 加4个角落面试官说这是个很普遍的detect cycle in graph 但我没刷到过这题 郁闷 看来还是个菜鸡
// 1 在 2 的北面
// 2 在 3 的北面
// 3 在 1 的北面  （不可能因为1>2>3）
// 如果是 3 在 1 的南面 就可以return true ( 3 S 1)

//parent list  1: []
//adj list 
//1: [2,3] []
//2: [3]
//create a parent list  for node and update it when there is a new node added
//create an adj list to to add kind of relation
//N S E W  NW NE SE SW
// N only be with S
// E can only with W
// NW can only with SE
// NE can only be with SW 
 // it could 
//  N -> S  E->W NW -> SE  NE -> NW 
// [N, E ,NW ,NE]

// const points = ['1 N 2', '2 N 3', '3 N 1']
// function detectNodes(points){
//     const parentMap = new Map();
//     const adjacent = new Map();
//     for (const point of points) {
//        const arr = point.split(' ');
//        let parent = arr[0];
//        let relation = arr[1];
//        let child = arr[2];
//         if(!parentMap.has(child)) {
//             parentMap.set(child,new Set());
//         }
//         parentMap.get(child).add(parent);
//         Array.from(parentMap.get(child)).forEach((p)=>{
//             if(parentMap.has(p))
//                 parentMap.get(p).add(child)
//         })
//     }
//     console.log(parentMap);
//     for (const point of points) {

//     }
// }



const points = ['1 N 2', '2 N 3', '1 N 3']
function detectNodes(points){
    // distinguish the dirctions
    const NSlist = [];
    const WElist = []; 
    for(const point of points) {
        let arr = point.split(' ');
        if (arr[1] === 'N') {
            NSlist.push([arr[0],arr[2]]);
        } else if (arr[1] === 'S') {
            NSlist.push([arr[2],arr[0]]);
        }
        else if (arr[1] === 'E') {
            WElist = push([arr[0],arr[2]]); 
        }
        else if (arr[1] === 'W') {
            WElist.push([arr[2],arr[0]]);
        }
    }

    return   detectLoops(WElist) || detectLoops(NSlist);



    function detectLoops( points ) {
        let map = new Map();
        let visited = new Map();
        let flag = false;
        for (const point of points) {
            if (!map.has(point[0])) {
                map.set(point[0],[]);
                visited.set(point[0],0);
            }
            if (!visited.has(point[1])) {
                visited.set(point[1],0);
            }
            map.get(point[0]).push(point[1]);
        }
        // console.log(map, visited,'gg')
        //vistied 1 non-visited 0  
        Array.from(map.keys()).forEach(key=>{
            if (dfs(visited, key, map)) {
                console.log('fk');
                flag= true;
            }
        })
        return flag;
    }  //1 2 1 3  2 3 
    
    function dfs(visited, key, map) {
     //   console.log(key)
        const arr = map.get(key);
       // console.log(key, arr,visited.get(key))
        for (const k of arr) {
        //    console.log(visited.get(k),k,'g')
            if (visited.get(k) ===1) {
             //   console.log('wowo')
                return true;
            } 
            else {
                visited.set(k,1);
            }
           // console.log(key,k,visited.get(k))
        }
        visited.set(visited.get(key),1);
        return false;
    }
}
console.log(detectNodes(points))
