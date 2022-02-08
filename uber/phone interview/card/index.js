// 题目就是给了一叠卡片，数字是从1到52，又两个玩家，
// 轮流从卡片里面抽，然后比较大小，大的玩家就收走两个卡片，
// 最后谁的卡片多，谁就赢了。要求模拟整个游戏的过程，
// 最后打印出来赢家。楼主就是用randomization来做的，
// 用一个数组检查randomization里面是否有重复，有的话就再进行一次。
// 写完之后运行了一下，运行成功。
// 然后面试官问如何能证明整个游戏是正确的，楼主说可以打印出来每轮的游戏情况来audit，并且最后可以打印出这个数组，证明每个数都被选到了，面试官说，I like that idea，let's do both。然后楼主打印了每轮的进程，发现了一些index忘记+1 -1的小bug，很快就修复好了。又打印了最后card 数组里面证明每一个数都被选到了，又run了几次，一切都正常
// 然后面试官follow up问，怎么把整个函数分区，楼主说可以分三个部分，initialization，进行游戏，验证游戏，然后warp成了不同的函数。
// 接着面试官follow up问，如果不是52张牌，而是可以自由决定多少张牌，该怎么做，楼主修改了代码，支持自定义卡牌数量，并且修改了验证的部分，运行代码，正确。
// ‍‍‍‌‌‌‍‌‍‍‍‍‌‍‌‌‌‌‌
// 接着面试官follow up问，如果不是两个玩家，而是可以自由决定游戏玩家人数，该怎么做，楼主又修改了代码，支持多人游戏，并且修改了验证的部分，运行代码，有几个小typo，改了之后，正确。
function randomNumber(){
    return Math.floor(Math.random()*52);
}
function cardGame(){
const s =new Set();
const cards= 52;
let player1=0;
let player2=0;

for (let i=0; i<26;i++){
let numberA = randomNumber();
    while(s.has(numberA)){
    numberA =randomNumber();
};
s.add(numberA);

let numberB = randomNumber();
    while(s.has(numberB)){
    numberB =randomNumber();
};
s.add(numberB);

if(numberA>numberB){
    player1+=2;
}else{
    player2+=2;
}
}

if(player1>player2){
    console.log('player1win',player1,player2);
}else{
    console.log('player2win',player1,player2);
}
}
// cardGame();

//if there are 10 people 
// use an array to store each people's cardnum, 
//multiple game and input different # of cards

class CardGame{
    constructor(peopleNum,cardNum){
        this.peopleNum= peopleNum;
        this.score=[];
        for (let i=0;i<peopleNum;i++){
            this.score.push(0);
        }
        this.set = new Set();
        this.cardNum= cardNum;
         this.random=  this.random.bind(this);
         this.startGame = this.startGame.bind(this);
         this.eachround = this.eachround.bind(this);
         this.validateGame= this.validateGame.bind(this);
    }

    random(){
        return Math.floor(Math.random()*this.cardNum);
    }
  startGame(){
    if(this.validateGame()){
       
        let roundNum= this.cardNum/this.peopleNum;
        for(let i=0;i<roundNum;i++){
            this.eachround();
        }
    let winner = this.score.indexOf(Math.max(...this.score));
    console.log(this.score);
    console.log(`winner is ${winner+1}`);

    }
    else{
        console.log('the game is invalid');
    }
  }
    eachround(){
        let array=[];
        for(let i=0;i<this.peopleNum;i++){
          let random= this.random();
          while(this.set.has(random)){
            random= this.random(); 
          }
          this.set.add(random);
          array.push(random);
        }  
        let max=  Math.max(...array);
        let index =array.indexOf(max);
        this.score[index]+=this.peopleNum;
    }
    validateGame(){
        if(this.peopleNum<2 && this.cardNum%this.peopleNum !==0 && this.cardNum<this.peopleNum ){
        return false;
        }
        else{
            return true;
        }
    }


}

const cg =new CardGame(20,1000);
cg.startGame();
//each round 