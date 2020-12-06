import React, {useState} from 'react';
import axios from "axios";
import Weather from './weather';
import Form from './forms';
import './form.css'
const api_key = "1457b5f7f9dd52eb99023f987eca1c3f";



const User = () =>{
    
    
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    // const [icon, setIcon] = useState();
    const [description, setDescription] = useState("");
    const [temp_min, setTemp_min] = useState("");
    const [temp_max, setTemp_max] = useState("");
    const [temp, setTemp] = useState("");
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [icon, setIcon]= useState("");
    const [ pressure, setPressure] = useState("");
    const [ humidity, setHumidity] = useState("")
  


    const getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        // console.log("got here")
        if (city && country) {
            const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
            const response = await api_call;
            // console.log(response);
            // return response;
            setCity(response.data.name)
            setCountry(response.data.sys.country);
            setTemp(response.data.main.temp);
            setPressure(response.data.main.pressure);
            setHumidity(response.data.main.humidity);
            setTemp_max(response.data.main.temp_max);
            setTemp_min(response.data.main.temp_min);
            setDescription(response.data.weather[0].description);
            setIcon(response.data.weather[0].icon);
            setLat(response.data.coord.lat);
            setLon(response.data.coord.lon);
            console.log(response);

        }
    }
    

    
    return(
        <div >    
                <Form loadWeather={getWeather} />
               <Weather 
                city = {city} 
                country = {country} 
                temp = {temp} 
                temp_max = {temp_max}
                temp_min = {temp_min}
                description = {description}
                lat = {lat}
                lon = {lon}
                icon = {icon}
                pressure = {pressure}
                humidity = {humidity}
              
            />
           
        </div>
    )
}
export default User;