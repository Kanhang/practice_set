
//[start,end,ins_pos]
// x-axis:[[0, 6, 0],[0, 1, 1 ],[0,1,2],[0,5,4],[0,6,6],[1,6,3],[5,6,2]];
//y-axis: [[0,6,0],[0,6,6],[0,4,1],[4,6,3],[0,3,3],[0,4,5]];
// for(i =0; i< m; i++){
    // for( j=0;j<n;j++){}
//iterate  intersections cordinates
// the third index has to fall into the oher span(first and second index),
//say 3rd index of x-aris 1 is faled into 0-6 span,
// we need to check both x-axis, and y-axis.
// so [0,1,1] and [0,6,6] has no cordinate,because ,6 is not falling into the 0-1 span
// [[0,0],[0,6],[0,1],[0,3],[0,5]] 
// 第一步，遍历任意两条线段，得到所有的交点．
// 第二步，将这些线段分别按照x坐标和y坐标分组
// 第三步，所有x或y相同的线段，merge成non-overla‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌p,sorted intervals
// 第四步，在所有交点中任选两个交点．这两个交点认为是正方形的对角的两个点，就可以计算另外两个点的期望坐标．在交点的集合中找是否有这样两个点．有的话再查验是否是正方形而不是长方形．
// 第五步，如果上一步依然存在，查验四个点组成的正方形的四条边，是否在所对应的x坐标或y坐标的线段interval集合，被完全包含于某个interval之间．是的话就计数器加１
const xaxis = [[0, 6, 0],[0, 1, 1 ],[0,1,2],[0,5,4],[0,6,6],[1,6,3],[5,6,2]];
const yaxis= [[0,6,0],[0,6,6],[0,4,1],[4,6,3],[0,3,3],[0,4,5]];
let count =0;
function findSquare(xaxis,yaxis) {
    const cordinate = [];
    for (i=0; i<xaxis.length; i++) {
        const startX = xaxis[i][0];
        const endX = xaxis[i][1];
        const x = xaxis[i][2];
        for (j=0;j<yaxis.length;j++) {    
            const startY = yaxis[j][0];
            const endY = yaxis[j][1];
            const y = yaxis[j][2];
            if (x>= startY && x<=endY && y>=startX && y<=endX) {
                cordinate.push([x,y]);
            }
        }
    }
    console.log(cordinate);
    for(let i =0; i<cordinate.length;i++) {
        for (let j=i+1;j<cordinate.length;j++) {
          const [first,second] =  projectionCoordinates(cordinate[i],cordinate[j]);
         // console.log (first,second);
            //first and second is inside the coordiates;
            const fbool = cordinate.find((point)=>point[0]===first[0]&& point[1] ===first[1]);
            const sbool = cordinate.find((point)=>point[0]===second[0]&& point[1] ===second[1]);
            if (fbool && sbool) {
                console.log(first,second);
                if (checksquare(first,second)) {
                   
                    count+=1;
                }
            }
     
        }
    }
    console.log(count);
}


findSquare(xaxis,yaxis);
//input:[0,0] [0,6]    
//output: [6,0] [6,6]
//input: [0,3] [0,5]
//output: [2,3] [2,5] yaxis [abs(y1-y2),y1] [abs(y1-y2),y2]
////input: [3,0] [5,0]
//output: [3,2] [5,2] xaxis[x1,abs(x1-x2)] [x2,abs(x1-x2)]
// only in same line, like same x-axis or same y-axis can have projection
//if same line projection
// if different line projection
// input: [0,1] [3,2]  //[x1,y1] [x2,y2]
// output:[0,2] [1,3] //[x1,y2] ,[y1,x2]
// input :[2,3] [4,1]
//output: [2,1] [4,3]
//x1=  x[0]  ,  y1= x[1], x2=y[0],  y2= y[1];
function projectionCoordinates(x,y) {
    //same line projection
    if (x[0]===y[0]||x[1]===y[1]) {
        if(x[0]===y[0]) {
            return [[Math.abs(x[1]-y[1]),x[1]],[Math.abs(x[1]-y[1]),y[1]]];
        }
        else if(x[1]===y[1]) {
            return [[x[0],Math.abs(x[0]-x[1])],[y[0],Math.abs(x[0]-x[1])]];
        }
    } else {
        return [[x[0],y[1]],[x[1],y[0]]]
    }
} 

function checksquare(x,y) {
    //if same line coordiantes return ,it has to be a square
    //only different line coordiante need to check if it is a square;
    //[4,1] [2,3]  [math.abs(x[0]-y[0]), math.abs(x[1]-y[1])]
    if(x[0]===y[0]||x[1]===y[1]){
        return true
    } else {
        if(Math.abs(x[0]-y[0]) ===  Math.abs(x[1]-y[1])){
            return true;
        }
        else {
            return false
        }
    } 

}