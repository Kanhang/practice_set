import React from 'react';
import "./style.css";


const Star=({
   key,starid, onClick,rating,onMouseEnter,onMouseLeave
})=>{
    let styleName="off";
    console.log(key);
    if (rating && starid<= rating){
    styleName="on";
    }
    console.log(styleName);
    return(<a 
        className={styleName}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >⭐
        </a>)

}
class StarWidget  extends React.Component{

    state={
        hoverState:0,
        rating:0
    }

    render()
{let styleName="stars";
    if (this.state.rating!==0){
styleName="disabled";
    }
    console.log('hoverstate',this.state.hoverState);
    console.log('rating',this.state.rating);
    //key cannot be the props
    return(
        <div className={styleName}>
        {[1,2,3,4,5].map(index=>{
          return(  
          <Star 
            key={index}
            starid={index}
            onClick={()=>this.setState({rating:index})}
            rating={this.state.hoverState || this.state.rating}
               onMouseEnter={()=>this.setState({hoverState:index})}
               onMouseLeave={()=>this.setState({hoverState:0})}
                />
           ) }

        )


        }

        </div>
    )
}
    

}


export default StarWidget;