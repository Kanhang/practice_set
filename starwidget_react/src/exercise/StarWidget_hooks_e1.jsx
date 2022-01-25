import {useState} from 'react';
import './style.css';
//key cannot be props
const Star = ({onMouseEnter, onMouseLeave, onClick, rating, starId})=>{
    let styleName="off";
    if (rating &&starId<=rating){
        styleName="on";
    }
    //error found here
    return (<>  
        <span className={styleName}
             onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            >⭐</span>
    </>)

}


const StarWidget = ()=>{
 const [rating, setRating]= useState(0);
 const [hover,setHover]= useState(0);
 const stars=[1,2,3,4,5];
 let styleName='stars';
 if (rating !==0){
     styleName='disabled';
 }

return(<div   className={styleName}>
{stars.map(index=>
    <Star
 
    onMouseEnter={() => setHover(index)}
    onMouseLeave={() => setHover(0)}
    onClick={() => setRating(index)}
    rating={hover||rating}
    key={index}
    starId={index}
    />
    
    )}

</div>)

};


export default StarWidget;