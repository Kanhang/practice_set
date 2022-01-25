import {useState, useEffect} from 'react';



export  const FetchAll_e2= () => {
const [posts, setPosts] = useState(null);
const [comments,setComments] = useState(null);
const [loading,setLoading] = useState(true);
const [error, setError] = useState(null);
const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;

// const fetchPost= async ()=>{
//     const response = fetch(POSTS_URL)
//     return response.json()
// }

const fetchPost = ()=> {
    return fetch(POSTS_URL)
          .then(response=> response.json()) //return a promise for 
}

const fetchComment = () => {
    return fetch(COMMENTS_URL)
          .then(response => response.json())

}

useEffect( ()=>{
    Promise.all([fetchPost(),fetchComment()]) //evoke the function
       .then(response => {  //result response array
           setPosts(response[0])
           setComments(response[1])
       })
       .catch(error =>{
           setError(error);
       })
       .finally(()=> setLoading(false) )
   },[])
if(loading){
    return 'loading';

}
if (error){
    return "error";
}
console.log(posts,comments);
console.log(posts['1']);
const mapCommentToPost =
// 直接obj.reduce就好
//posts is array not obj

  posts.reduce((acc ,post )=>{
    const filteredComments= comments.filter((comment)=>{
     return   comment.postId=== post.id
    })
    acc[post.id]= filteredComments; 
    return acc
    },[])

console.log(mapCommentToPost);
console.log(typeof mapCommentToPost);
const convertObjToArray = ()=>{
    let arr =[];
    Object.keys(mapCommentToPost).map((index)=>{
        arr.push(index );
        if(posts[index]){
arr.push(posts[index].title);}
        console.log(typeof mapCommentToPost[index]);
        //this is data is actually key, because we are using Object.keys()
    Object.keys(mapCommentToPost[index]).map(data =>{
      if(mapCommentToPost[index] &&  mapCommentToPost[index][data]) {
          arr.push(mapCommentToPost[index][data].name );
      }

    })
    })
    return arr;
}
const final= convertObjToArray();
console.log(final);
return(<>
    {
        final.map(data=>{
        return    <div>{data}</div>
        })
    }
</>)
    




};
export default FetchAll_e2
