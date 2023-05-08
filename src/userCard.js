import React from 'react';


const usercard=(props)=>{
 console.log(props);
return(
<div className='ui card'>
<div className='content'>
<div className='header'>{props.statement}</div>
<div ><img class="ui centered image" src={props.image} alt="profilepicture" style={{width:300,height:200}}/></div>
  <div className='description'>
  {props.name}</div>
    <div className='ui button'>
        <i className='add icon'></i>Order Now
    </div>
  
</div>
</div>

)
}
export default usercard;
