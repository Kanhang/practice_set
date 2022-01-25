

import {useState, useEffect} from 'react';
import { createPortal } from 'react-dom';

export const FetchAll= () =>{
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState(null);
    const [comments, setComments] = useState(null);
    const [error,setError]= useState(null);
    const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;
    const COMMENTS_URL = `https://jsonplaceholder.typicode.com/comments`;
      
const fetchPost=()=>{
    return fetch(POSTS_URL)
    .then( res=>res.json())

}
const fetchComments =()=>{
    return fetch(COMMENTS_URL)
    .then (res=>res.json())
    
}
    useEffect(()=>{
        Promise.all([
            fetchPost(),
            fetchComments()
          ])
          .then((values)=>{  
//promise.all return only one parameter,an array containing all elements
            setPosts(values[0])
            setComments(values[1])
          })
          
        .catch(error=>{
            console.log("error"+error);
            setError(error);
        })
        .finally(()=>{
            setLoading(false);
        });

    },[])
    if(loading)
        return "Loading";
    if(error)
        return "Error!";

    console.log(comments,posts);
    
    const grabAllCommentsForPost=  postid => {
       return comments.filter(comment => comment.postId ===postid); //filter returns a result
    }
    const mappedPostWithComment = posts.reduce((acc, post)=>{
        const comments =grabAllCommentsForPost(post.id);
        acc[post.id]=comments;
        return acc;     //reduce returns an acc

    })
    
    const convertObj = (mappedPostWithComment)=>{
        let array=[];
        Object.keys(mappedPostWithComment).map(data=>{
            array.push(data);
            Object.keys(mappedPostWithComment[data]).map(key=>{
              
                if (mappedPostWithComment[data][key] &&mappedPostWithComment[data][key]['name']){
                    array.push(mappedPostWithComment[data][key]['name']);
                }
    })})
return array;}
    let arr= convertObj(mappedPostWithComment); //convert array to obj first, do not do it in render method
    console.log(arr)
    // console.log(mappedPostWithComment); //this is an object, object does not have a map function , only arrays have
    return (
        <>
       {arr.map(data=>
           <div>{data}</div>
       )}
      </>
    )
} 
export default FetchAll;