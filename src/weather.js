import React from 'react';
import './form.css';



const Weather = 
    ({ 
        city, 
        country,
        temp,
        temp_max,
        temp_min,
        description,
        lat,
        lon,
        icon,
        pressure,
        humidity,
        
        loadWeather
    }) => {
        return (
            <>
                <div >  
                    { city && country ? <span><h2>{ city }, { country }</h2></span> : null } 
                     {lat && lon ?<span><h3>Lat: {lat}&deg;, Lon: {lon}&deg;</h3></span> : null}
                    <div className='container'> 
                  
                        <div className='card'>
                        { temp ? <span><h3>Temperature</h3><br /><h3>{ Math.floor(temp) }&deg;</h3></span> : null }
                         { temp_min && temp_max 
                                                    ? <span><h3>{ Math.ceil(temp_min) }&deg;- { Math.ceil(temp_max) }&deg;</h3>
                                                    </span>
                                                    : null 
                                                }
                        {icon ?<span><img src={`http://openweathermap.org/img/w/${icon}.png`}  alt='meme'></img></span> : null}

                         <span><h3>{ description }</h3></span>
                        </div>
                        <div className='card'>
                            {pressure ? <span><h3>Pressure</h3><br /><h3>{pressure}&deg;</h3></span> : null}
                          
                      
                        </div>
                        <div className='card'>
                              {humidity ? <span><h3>humidity</h3><br /><h3>{humidity}</h3></span> : null}
                      
                        </div>  

                    </div>
                   
                   
                </div>
            </>
        );
}

export default Weather;