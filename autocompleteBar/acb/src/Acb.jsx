import {useState, useEffect } from 'react';


export const Acb=()=>{

    // const data = [
    //     "Alligator",
    //     "Bask",
    //     "Crocodilian",
    //     "Death Roll",
    //     "Eggs",
    //     "Jaws",
    //     "Reptile",
    //     "Solitary",
    //     "Tail",
    //     "Wetlands"
    //   ];
const api ="https://raw.githubusercontent.com/nranevj/searchbar-React/master/products.json";

const [userInput,setUserInput] = useState('');
// const [suggestions,setSuggestions] = useState(data);
const [suggestions,setSuggestions] = useState([]);
const [fetchData, setfetchData] = useState([]);
useEffect(()=>{
    fetch(api)
    .then((res)=>res.json())
    .then(data=> {
   
    // setSuggestions( Object.keys(data).map(key=>data[key])['0']
    //    .map(k=>k.name))
    //how to address the obj in browser ,copy the obj ,check the propertyname, because;
    // array might exist in that key
    setfetchData(data.products.map(k=>k.name))
    }
    );
},[])
console.log(suggestions);
const handleChange  =(e)=>{
setUserInput(e.target.value);
setSuggestions(
    fetchData.filter((word)=> word.toLowerCase().startsWith(e.target.value.toLowerCase()))
)
}
// remember if use list then we need to use innerHTML[0] ,because value of list is a index
const handleClick = (e)=>{

    setUserInput(e.target.innerHTML);
    setSuggestions(
  fetchData.filter((word)=> word.toLowerCase().startsWith(e.target.innerHTML[0].toLowerCase()))
)
}
let temp = suggestions.length>0?suggestions:fetchData;

return(
<><input onChange={handleChange} value ={userInput}/>
<ul>
{temp.map((value,index)=>(
    <li onClick={handleClick}>{value}</li>)
)}
</ul>
</>

);
    }


    export default Acb;

    // const fetchPost=()=>{
    //     return fetch(POSTS_URL)
    //     .then( res=>res.json())
    
    // }
    // const fetchComments =()=>{
    //     return fetch(COMMENTS_URL)
    //     .then (res=>res.json())
        
    // } ;  Promise.all([fetchPost(),fetchComments()]).then(value=>{
    //     values[0 ]// result for first promise
    // })