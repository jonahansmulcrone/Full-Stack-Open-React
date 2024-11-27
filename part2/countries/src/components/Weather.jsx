import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)
    const api_key = import.meta.env.VITE_OPEN_WEATHER_KEY

    useEffect(() => {
        setTimeout(() => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api_key}`)
                .then((res) => {
                    setWeather(res.data)
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
        }, [5000])
    }, [capital])

    if (weather) {
        return (
            <div>
                <h1>Weather in {capital}</h1>
                {Object.keys(weather).map((key, index) =>
                    <div>
                        Temperature: {weather[key]}
                    </div>
                )}
            </div>
        )
    } else {
        return <div>Loading Weather..</div>
    }
}

export default Weather