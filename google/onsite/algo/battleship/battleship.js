// 战舰游戏，给一个二维矩阵，初始值只包含0或1,0代表水，1代表舰，
//舰只能是一条横或一条竖，并且舰跟舰不会相邻
// 实现两个操作
// isShot， 检查某个格子是否被射击过，如果是返回 true; 反之，false
// shoot，向某个格子射击，返回值要求 water | shot | sank
// 一个格子只能被射击一次，重复射击需要报错
// water = 射击的格子是水，shot = 射击打在了船上， sank = 这次射击之后船沉了
// 跟进问是如果优化 shoot function 要求O(1)时间复杂度

const board = [[0,0,0,0,0,0,0,0],
               [1,1,0,1,1,1,0,0],
               [0,0,0,0,0,0,1,1],
               [0,0,0,0,0,0,0,0],
               [0,1,0,0,0,0,0,0],
               [0,1,0,0,0,0,0,0]]
// we create a visited board same as the board given 
// we mark it with false,
//if we shot it with that box we check on the visited board,
//if true, throw Error,  else  marked the box with the true
// if we shot the at the box, check the value if 0 then return water,
//if 1, we need to check the 4 directions, if no 1 nearby, then return sank.
// else we need to return shot, and mark that 1 to be 0.
class Game {
    constructor(board) {
        this.board = board;
        this.m = board.length;
        this.n = board[0].length;
        this.visited = Array(this.m).fill(true).map(() => Array(this.n).fill(false));
        this.checkone=this.checkone.bind(this);
    }
 
    isShoot(x,y) {
        if (x < 0 || x > this.m - 1 || y < 0 || y > this.n - 1) {
            throw Error('out of border');
        }
             return this.visited[x][y];
    }

    shoot (x,y) {
        if (x < 0 || x > this.m - 1 || y < 0 || y > this.n - 1) {
            throw Error('out of border');
        }
        if (this.visited[x][y] === true) {
            throw Error('repeat shoot');
        } 
        
        if (this.board[x][y] === 0) {
            this.visited[x][y] = true;
            return 'water';
        }

        if (this.board[x][y] === 1) {
            this.visited[x][y] = true;
            const hasone = this.checkone(x-1,y) ||  this.checkone(x+1,y) ||  this.checkone(x,y+1) ||  this.checkone(x,y-1);
            this.board[x][y] = 0;
            if (hasone) {
                return 'shot';
            }
            else {
                return 'sank';
            }
        }

       
    }
    checkone(x,y) {
        if (x < 0 || x > this.m - 1 || y < 0 || y > this.n - 1 || this.board[x][y] === 0) {
            return false;
        }
        return true;
    }
}

const game  = new Game(board);
console.log(game.isShoot(0,1));
console.log(game.shoot(0,1));
console.log(game.isShoot(0,1));
console.log(game.shoot(4,1));
console.log(game.shoot(5,1));


