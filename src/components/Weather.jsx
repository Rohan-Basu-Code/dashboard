import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { themeContext } from '../context/themeContext';

export default function Weather({location}){
    const key = `451d2db032cd4c88a29125752252604`;
    const base = `http://api.weatherapi.com/v1/current.json`
    const wlocation = location? location:`jalpaiguri`

    const[isLightTheme] = useContext(themeContext)

    const [weather, setweather] = useState(null);
    const [isWLoading, setisWloading] = useState(true);
    useEffect(()=>{
        const link = `${base}?key=${key}&q=${wlocation}`

        const fetchWeather= async()=>{
            try{
                const response = await fetch(link);
                const weatherData = await response.json();
                setweather(weatherData);
                setisWloading(false)
            }
            catch(error){
                console.log(`error: ${error}`);
                errorHandle('quote');
                setisWloading(false)
            }
        }
        fetchWeather();

    },[])
    return(
        <>
        {
            isWLoading?(
                <p>Weather is Loading </p>
                ):(
                    <div className='flex flex-wrap justify-between'>
                        <div>
                            <p  className='text-xs font-bold'>{wlocation}</p>
                            <p className='text-md sm:text-2xl'>{weather.current.temp_c}°c</p>
                            <p className='text-xs'>Feels like: {weather.current.feelslike_c}°c</p>
                        </div>
                        <img className={`brightness-0 opacity-80 ${!isLightTheme && 'invert'}`} src={`https:${weather.current.condition.icon}`} alt="" />
                    </div>
                    )
            }
        </>
    )
}