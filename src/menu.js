import React from 'react';

import {Link} from 'react-router-dom';
import './app.css'

function Menu(){
    const navStyle ={
        color: 'black',
        
        
    
    }
   return(
    <div>
        <nav>
            <h3>Portfolio</h3>
            <ul className='nav-links'>
                <li><Link style= {navStyle} to="/">Home</Link></li>
                <li>  <Link style= {navStyle} to="/form">About</Link></li>
                <li> <Link style={navStyle} to="/user">User</Link></li>
            </ul>
        </nav>
    
  
   
 </div>
   )
}

 export default Menu;