import { useState } from 'react';
import InfoBox from './InfoBox.jsx';
import SearchBox from './SearchBox.jsx';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:35.88,
        humidity:37,
        temp:34.72,
        tempMax:34.72,
        tempMin:34.72,
        weather:"clear sky",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Me.</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info= {weatherInfo}/>
        </div>
    )
}