

import {useState, useEffect} from 'react';

export const FetchComponent= () =>{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error,setError]= useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>{
            return response.json() //you have to return to enter next then 
        })
        .then (data=>{
            setData(data);  //each then doing one thing
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
    console.log(data);
    return (
        <>
        {data.map((datum)=>  // you data is an array use map
        <div>{datum.userId}</div>)}</>
    )
} 
export default FetchComponent;