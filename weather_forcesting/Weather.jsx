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
