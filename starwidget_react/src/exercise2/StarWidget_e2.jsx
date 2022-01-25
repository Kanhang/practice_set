import { useState} from 'react';
import './style.css';
const Star= ({onMouseEnter,onMouseLeave,rating, starid, onClick})=>{
    let styleName="off";
    if (rating && starid<=rating ){
        styleName="on";
    }

    return (<><span className={styleName}
        onMouseEnter={onMouseEnter}
        onMouseLeave= {onMouseLeave}
        onClick={onClick}
    >⭐ </span></>)
}

 const StarWidget= ()=>{
    const [hover,setHover]= useState(0);
    const [rating,setRating]= useState(0);


    const arr=[1,2,3,4,5];
    console.log(arr);
    let styleName="stars";
    if (rating !== 0){
        styleName="disabled";
    }
    //style of 'disabled should on parent div not on the star
    return (
        <div  className={styleName}>
    {arr.map((value,index)=>{
     return( <Star
        key={index } 
        onMouseEnter={()=>setHover(index)}
        onMouseLeave = {()=>setHover(0)}
        rating={hover ||rating}
        starid={index} 
        onClick= {()=>setRating(index)}     
      /> )
     }) }
    </div>
    )
}
export default StarWidget;