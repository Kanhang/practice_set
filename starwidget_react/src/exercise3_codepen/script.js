// import {useState} from 'react';
const {useState}= React;

const Star= ({onMouseEnter,onMouseLeave,rating, starid,onClick})=>{
  let stylename='off';
  if (rating && rating>=starid){
    stylename='on';
  }
  return(<>
      <span className={stylename}
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}
   onClick={onClick}> ⭐</span>
   </>
  )}

const StarWidget = ()=>{
 const [rating,setRating]= useState(0);
 const [hover,setHover] = useState(0);
 const arr =[1,2,3,4,5];
  let styleName= 'stars';
  if(rating!==0){
    styleName='disabled';
  }
return (
  <div className={styleName}>

    {arr.map((el,index)=>(
    
      <Star onMouseEnter={()=>setHover(index)}       
      onMouseLeave={()=>setHover(0)}
      rating= {hover||rating}
      starid={index}
      onClick={()=>setRating(index)}
      />
  ))}
  </div>
)
}
ReactDOM.render(<StarWidget/>,document.getElementById('root'));