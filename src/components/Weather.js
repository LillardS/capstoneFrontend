const Weather = ({ weather }) => {

    return (
        <div className='weather'>
            <div className="header">
                {/* Name */}
                {weather.name} Weather
            </div>
            <div className="information">
                <div className="head-info">
                    {/* Clouds */}
                    <div className="clouds">{weather.weather[0].description}</div>

                    {/* Temperature */}
                    <div className="temperature">Todays Temperature: {weather.main.temp}°F.</div>

                    {/* Feels Like */}
                    <div className="feels-like">Feels Like: {weather.main.feels_like}°F </div>
                </div>
                <div className="side-info">
                    {/* humidity */}
                    <div className="humidity">Humidity: {weather.main.humidity}</div>

                    {/* wind */}
                    <div className="wind">The wind speed is {weather.wind.speed} Mp/h</div>

                    {/* max temp for the day */}
                    <div className="temp-max">Hottest Today: {weather.main.temp_max}°F</div>

                    {/* min temp for the day */}
                    <div className="temp-min">Coldest Today: {weather.main.temp_min}°F</div>
                </div>
            </div>
            <div className="closer">Sieze the day!</div>
        </div>
    )
}

export default Weather;