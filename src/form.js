import React from 'react';

import './form.css'


function Form(){
    return(
        <div>
             <header><h1>Subscribe</h1></header>
     <h3>Sign up with your email address to recieve news and update</h3>
     <form>
       <input placeholder='First Name' type="text" ></input>
       <input placeholder='Last Name' type='text'></input>
       <input placeholder='Email' type='text'></input>
       
       <input type='submit'></input>
     </form>

        </div>
    )
}
export default Form;