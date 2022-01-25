import {useState, useEffect} from 'react';


export const FetchAsync = ()=>{
    const [data,setData]= useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(async()=>{
        let result;
        try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        result =await response.json();//whenever trying to get a value or varaible from async function, need to use keyword async
        setData(result)
    }

        catch(error){
            console.log("error"+error);
            setError(error); 
        }
        finally{
            setLoading(false);
        }
 
    },[])
    if (error){
        return error;
    }
    if (loading){
        return loading;
    }

    return(<>
        {data.map((datum)=>
        <div>{datum.userId}</div>)}
            </>)
}


export default FetchAsync;