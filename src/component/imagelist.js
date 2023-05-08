/*import React from 'react';
const imageList =()=>
{
    return(
        <div>
        my images
        </div>
    )
}
<img key={image.id} src={image.webformatURL} alt="imagees"/>
export default imageList;*/
import React from 'react';
const imageList=(props) =>
{
   //console.log(props)
   const images= props.images.map((image) =>{
       return  (<img class="ui  centered image" alt="imagesss" key={image.id} src={image.webformatURL} style={{width:500,height:500}}/>)
       
   })
    return(
        <div>
           {images}
        </div>
    )
}
export default imageList;