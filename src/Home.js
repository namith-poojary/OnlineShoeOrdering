import React from 'react';
import './Menu.css'
import image1 from './image/shoe10.jpg'
const Home=()=>
{
    return(
        <div>
            <p></p>
            <div class="ui equal width grid">
            <div class="equal width row">
            <div class="column"></div>
            <div class="column">
           
            <h2><i class="yelp icon"></i>Fashos<i class="yelp icon"></i></h2>
            <h3><i class="shopping cart icon"></i>A website for Online Shoes Ordering<i class="shopping cart icon"></i></h3>
            </div>
            <div class="column"></div>
            </div>
            </div>
            <img class="ui centered image" src={image1} alt="images" style={{width:900,height:450}}></img>
           
        </div>
    )
}
export default Home;