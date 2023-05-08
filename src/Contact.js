import React from 'react';
import './Menu.css'
import image1 from './image/contact.jpg'

const Contact=()=>
{
    return(
        <div>
             <img class="ui  centered image" src={image1} alt="images" style={{width:1200,height:500}}></img>
             <br></br>
             <div class="ui equal width grid">
        <div class="equal width row">
        <div class="column"> <h3> <i class="id card icon"></i>Name: Namith</h3> </div>
        <div class="column">
           
            <h3><i class="phone icon"></i>Contact Number: 99888888080808</h3>
           
        </div>
       
        <div class="column"> <h3><i class="envelope icon"></i>Email: namith@gmail.com</h3></div>
        </div>
        </div>        
        </div>
    )
}
export default Contact;