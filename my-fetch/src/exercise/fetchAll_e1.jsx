import {useState, useEffect} from 'react';


export const FetchAll_e1= ()=>{
    const [posts,setPosts] = useState(null);
    const [comments,setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
    const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;
    
    const fetchPost= ()=>{
        return fetch(POSTS_URL)
        .then(res=>res.json())
    }
    const fetchPostAsync= async (POSTS_URL)=>{
        const response = await fetch(POSTS_URL);
        return response.json()
    }
    const fetchComments= ()=>{
   return fetch(COMMENTS_URL)
        .then(res=>res.json())
    }

    useEffect(()=>{
        Promise.all([fetchPost(),fetchComments()])
        .then(result =>{
            setPosts(result[0])
            setComments(result[1])
            
        })
        .catch(error=>{
            setError(error);
        })
        
        .finally(()=>{
            setLoading(false);}
        )
    },[])

    if (loading){
        return 'loading';
    }
    if (error){
        return error;
    }
    console.log(typeof comments , comments);
    console.log(posts);
    //filter
const getComments = (postid) => {
  return  comments.filter((comment)=>{
     return comment.postId=== postid
  })
}
//reduce
// this mapCommentstoPost is a funciton
const mapCommentstoPost =
    posts.reduce((acc,post)=>{
    const comments= getComments(post.id);
    acc[post.id]= comments;
    return acc;
    })

const convertObjToArray = ()=>{
    let arr =[];
    Object.keys(mapCommentstoPost).map( index=>{
        arr.push(index)
       Object.keys(mapCommentstoPost[index]).map( data=>{
           console.log(mapCommentstoPost[index][data].name)
           if (mapCommentstoPost[index] &&mapCommentstoPost[index][data].name){
            arr.push (mapCommentstoPost[index][data].name)
           }
 
       })
    })
    return arr;
}
const final_data= convertObjToArray();
console.log(final_data);
console.log(mapCommentstoPost)
//error here , if want to use {}, you need to add return.
    return (<>
    {final_data.map(datum=>  
<div>{datum}</div>
    )}
    </>)
};



export default FetchAll_e1;