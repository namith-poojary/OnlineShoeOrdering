import React from 'react';
import './App.css';
import './Menu.css';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Home from './Home';
import Profile from './profile'


import AddCart from './addcart'


import Flowerr from './flowerSearch';
import { BrowserRouter, Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
      <Menu />  
      <switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       <Route path="/profile" component={Profile} />
       <Route path="/addcart" component={AddCart} />
       <Route path="/flowerr" component={Flowerr}/>
     
       </switch>
    </BrowserRouter>
  );
}
export default App;