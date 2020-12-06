  
import React from "react";


const Form = ({ loadWeather }) => (
    <>
        <form  onSubmit={loadWeather}>
            <input type="text" name="city" placeholder="Enter city"/>
            <input type="text" name="country" placeholder="Enter country" /><br />
            <span ><button type="submit" value="search">Get Weather</button></span>
        </form>
    </>
)

export default Form;


