// 给你二维数组长和宽，起点坐标，终点坐标
// 。一开始从起点按照(+1, +1)的方式走，x坐标出界就取相反数，
// y出界同理，走到角落就同时取反。
// 问走到终点的步数，如果走不到返回-1.

//[10,10]  start [3,5 ], end [8,8] +1 +1
//x direct y direct
// it hits p0s[0]  <=0  xdirect =1   pos[0]>=width x dirrect=-1
// it hits p0s[1]  <=0  ydirect =1   pos[1]>=height y dirrect=-1

//increase
