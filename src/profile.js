import React from 'react';
import image1 from './image/shoe1.jpg'
import image2 from './image/shoe2.jpg'
import image3 from './image/shoes3.jpg'
import image4 from './image/shoe4.jpg'
import image5 from './image/shoe5.jpg'
import image6 from './image/shoe6.jpg'

import UserCard from './userCard';
const Profile =() =>
{
  return(
  
      <div class="ui equal width grid">
      
      <div class="equal width row">
      <div class="column"><UserCard image={image4} name="500 Rs" statement='Canvas'/></div>
      <div class="column"><UserCard image={image1} name="999 Rs" statement='Campus'/></div>
      <div class="column"><UserCard image={image2} name="750 rs" statement='Sparx'/></div>
    </div>
    <div class="equal width row">
      <div class="column"><UserCard image={image3} name="650 Rs" statement='Puma'/></div>
      <div class="column"><UserCard image={image5} name="1200 Rs" statement='Adidas'/></div> 
      <div class="column"><UserCard image={image6} name=" 1200 Rs" statement='Fila'/></div>     
    </div>
  </div>
  )
}
export default Profile;