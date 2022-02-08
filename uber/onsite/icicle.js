//                                     a                
// ab               ac                          ad                           ae       
// abf         acg         ach        adi           adj        adk       ael   aem
//                     achn   acho                  adjp       adkp      aelr
//                                                  adjps
//                                                  adjpst adjpsu adjpsv
// 1           3                        5                                  2

// 11

const data= {
    content: 'a',
    children:[
        {content:'ab' , 
        children:[
            {
                content:'abf',
                children:[]
            }
        ]
        },
        {content:'ac' , 
        children:[
            {
                content:'acg',
                children:[
                ]
            },
            {
                content:'ach',
                children:[
                    {
                        content:'achn',
                        children:[]
                    } ,
                    {
                        content:'acho',
                        children:[]
                    } 
                ]
            } 
        ]
        },
        {content:'ad' , 
        children:[
            {
                content:'adi',
                children:[]
            },
            {
                content:'adj',
                children:[
                    {
                        content:'adjp',
                        children:[
                            {
                                content:'adjps',
                                children:[
                                    {
                                        content:'adjpst',
                                        children:[]
                                    } ,
                                    {
                                        content:'adjpsu',
                                        children:[]
                                    },
                                    {
                                        content:'adjpsv',
                                        children:[]
                                    } 
                                ]
                            }  
                        ]
                    } 
                ]
            },
            {
                content:'adk',
                children:[
                    {
                        content:'adkq',
                        children:[]
                    } 
                ]
            }
        ]
        },
        {content:'ae' , 
        children:[
            {
                content:'ael',
                children:[
                    {
                        content:'aelr',
                        children:[]
                    } 
                ]
            },
            {
                content:'aem',
                children:[]
            }
        ]
        }
    ]
}
var count =0;
let lvl=1;
let max_lvl= 1;
let m = new Map();
const dfs = (data,lvl)=>{
    if(data.children.length ===0){
        return 1
    }
    if(!m.has(lvl)){
        m.set(lvl, [data])
    }  else{
        m.set(lvl, [...m.get(lvl),data])
    }
    max_lvl= Math.max(lvl,max_lvl);

    for ( let i =0; i<data.children.length;i++){
        
     //   console.log(data.content,data.children.length)
       let temp =dfs(data.children[i],lvl+1)
     if(temp){  
        count+=temp;
        }
           
    }
   // console.log(data.content,data.children,data.children.length)

}
dfs(data,lvl);
 
console.log(count,max_lvl);
console.log(m);
let height= 100/max_lvl; 
let width = 100/count;
let container =document.getElementById('container');

for(let i=1; i<=max_lvl;i++){
    let row= document.createElement('div');
    row.id= 'row-'+i;
    row.style.height=height+'vh';
    row.style.backgroundColor='red';
    row.style.border="1px solid black";
    row.style.display='flex';
    row.style.flexDirection= 'row';
    container.append(row);

}

const creation = (data)=>{

}