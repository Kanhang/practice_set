//O(N) O(N);

let N = 10;

let edges = [ [ 0, 1 ], [ 0, 2 ],
              [ 0, 3 ], [ 1, 4 ],
              [ 1, 5 ], [ 3, 6 ],
              [ 6, 7 ], [ 6, 8 ],
              [ 6, 9 ] ];

let value = [ 1, 2, -1, 3, 4,
              5, 8, 6, 12, 7 ];

function maxValueNary(N, edges, value) {
  const adj = new Array(10).fill(0).map(()=>[]);

  edges.forEach((edge, index)=>{
   let k = edge[0];
   let v = edge[1];
   adj[k].push(v); 
  })

  const res= [];
  const queue = [0];
  while (queue.length >0) {
    let count = queue.length;
    let max = -Infinity;
    for(let i=0 ;i<count;i++) {
      let temp = queue.shift();
      if (value[temp] >max) {
        max = value[temp];
      }
      for (let j= 0; j<adj[temp].length;j++) {
        queue.push(adj[temp][j]);
      }
    }
    res.push(max);
  }
  return res;
}
console.log(maxValueNary(N,edges,value));