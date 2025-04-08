import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import React, { useState } from "react";

export default function SearchBox({updateInfo}) {
    const [city , setCity] = useState("");
    const [error, setError] = useState(false);
    
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c658754c0d9c03e19322e7495f3f019e";

    let getWeatherInfo = async () => {
        try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);
        let result =  {
            city: city,
            temp: data.main.temp,
            tempMin : data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        }
        console.log(result);
        return result;
    } catch(error){
        setError("No such error in Our API");
    }
};
   

    const handleChange = (event) => {
        setCity(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        alert(`A name was submitted: ${city}`);
        setCity("");
     let newInfo = await getWeatherInfo();
     updateInfo(newInfo);
    };
    return (
     <div className="search-box">
       <form onSubmit={handleSubmit}>  
       <TextField
        id="city" 
        label="city name" 
        variant="standard"
        style={{}} 
       value={city}
        required
        onChange={ handleChange}
        />
       <br></br>
       <br></br>
     <Button variant="contained" type="submit">search</Button>
      {error && <p>No such place exist</p>}
       </form>
        </div>
    );

}