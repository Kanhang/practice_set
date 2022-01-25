import React, {useState , useEffect } from "react";
import './style.css';
//here you are not familar with react functional components anymore,
// so if you want accept the functions from parent functional component you need to include the function name with {},
// for example ({onClick,rating}) if you are missing {},it will recognized as an object but not a function



//i
//selector eeors
const Star= ({starId,onClick,rating,onMouseEnter,onMouseLeave})=>{
    let styleName="off";
    if (rating &&starId<=rating){
        styleName='on';
    }
    return (
           <a className={styleName}
           onMouseEnter={onMouseEnter} 
           onMouseLeave={onMouseLeave} 
           onClick={onClick}>⭐</a>

    )
}


// const handleClicked=(e,value)=>{
//     //e.preventDefault();
//     console.log(value); 
//     }
const StarWidget=()=>{
    const [rating ,setRating] = useState(0);
    const [hoverState,setHoverState] = useState(0);
   let styleName="stars";
    const stars=[1,2,3,4,5];
    if (rating!==0){
        styleName="disabled";
    }

    return(//()=>setRating(index)
        <div className={styleName}>
      { stars.map((value,index)=>( 
      <Star
      key={index} 
      starId={index}
      rating ={hoverState|| rating} 
      onMouseEnter={()=>setHoverState(index)}
      OnMouseLeave={()=>setHoverState(0)}
      onClick={()=>setRating(index)}/>
      
      ))  } 
        </div>   
    )
}

export default StarWidget;