import React from 'react'

const WeatherDispalyer = ({ info }) => {

    const [mood, setMood] = React.useState('');

    const {
        temp,
        humidity,
        pressure,
        weatherCondition,
        name,
        speed,
        country,
        sunset
    } = info;


    React.useEffect(() => {
        switch (weatherCondition) {
            case "Cloud": 
                setMood('wi-day-cloudy')
                break;
            case "Haze": 
                setMood('wi-fog')
                break;
            case "Clear": 
                setMood('wi-day-sunny')
                break;
            case "Mist": 
                setMood('wi-dust')
                break;
            default:
                setMood('wi-day-rain')
                break;
        }

    }, [weatherCondition])

    let x = new Date(sunset * 1000);
    const y = x.getHours() + ":" + x.getMinutes();

    return (
        <>
            <article className='widget'>

                <div className="weatherIcon">
                    <i className={`wi ${mood}`}></i>
                </div>

                {/* middle section  */}
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weatherCondition}</div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>

                <div className="date">{new Date().toLocaleString()}</div>

                {/* footer section  */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className="wi wi-sunset"></i></p>
                            <p className="extra-info-leftside">
                                {y} AM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className="wi wi-humidity"></i></p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>

                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className="wi wi-rain"></i></p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className="wi wi-strong-wind"></i></p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>

                    </div>

                </div>

            </article>
        </>
    )
}

export default WeatherDispalyer