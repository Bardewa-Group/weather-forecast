// https://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=686fa439416dfb5d1b2ad0e0813f077f

import React, { useState, useEffect } from 'react'
import WeatherDispalyer from './WeatherDispalyer';

const Weather = () => {

    const [search, setSearch] = useState('pune');
    const [info, newInfo] = useState('')

    const getWeather = async () => {
        try {
            // calling the api to get required data 
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=686fa439416dfb5d1b2ad0e0813f077f`

            const data = await (await fetch(url)).json();

            const { temp, humidity, pressure} = data.main;
            const { main: weatherCondition } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys

            const weatherInformation = {
                temp,
                humidity,
                pressure,
                weatherCondition,
                name,
                speed,
                country, 
                sunset
            }
            newInfo(weatherInformation)


        } catch (error) {
            console.log(error)
        }
    }

    const x = {
        "coord": {
            "lon": 73.8553, "lat": 18.5196
        }

        ,
        "weather": [{
            "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n"
        }

        ],
        "base": "stations",
        "main": {
            "temp": 21.36, "feels_like": 21.82, "temp_min": 21.36, "temp_max": 21.36, "pressure": 1010, "humidity": 87, "sea_level": 1010, "grnd_level": 948
        }

        ,
        "visibility": 10000,
        "wind": {
            "speed": 2.52, "deg": 257, "gust": 4.13
        }

        ,
        "clouds": {
            "all": 96
        }

        ,
        "dt": 1663698730,
        "sys": {
            "country": "IN", "sunrise": 1663721595, "sunset": 1663765346
        }

        ,
        "timezone": 19800,
        "id": 1259229,
        "name": "Pune",
        "cod": 200
    }




    useEffect(() => {
        getWeather()
    }, [])

    return (
        <>
            {/* search section  */}
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder='Enter city...' autoFocus id='Search' className='searchTerm'
                        value={search} onChange={(event) => setSearch(event.target.value)} />
                    <button className='searchButton' onClick={() => getWeather()} >Search</button>
                </div>
            </div>

            {/* display area  */}
            <WeatherDispalyer info = { info }/>

        </>

    )
}

export default Weather