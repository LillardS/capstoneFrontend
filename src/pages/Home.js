import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeActivities from "../components/HomeActivites";
import HomePlaces from "../components/HomePlaces";
import AttractionForm from "../components/AttractionForm";
import Weather from "../components/Weather";
import { useAttractionsContext } from "../hooks/useAttractionsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const _ = require('lodash');

const Home = () => {

    // allows the use of the auth context on the home page
    const { user } = useAuthContext();

    // allows the use of attractions on the home page
    const { attractions, dispatch } = useAttractionsContext();

    // sets the weather for the weather component
    const [weather, setWeather] = useState();

    useEffect(() => {

        // Fetches and sets all attractions for the home page
        const fetchAttractions = async () => {
            const response = await fetch('https://capstone-backend-51b9.onrender.com/Home');
            const json = await response.json();

            // if fetched data is okay, set the data as attractions
            if (response.ok) {
                dispatch({ type: 'SET_ATTRACTIONS', payload: json })
            }
        }

        // calls the function to fetch and set attractions
        fetchAttractions();

    }, [dispatch]);

    useEffect(() => {

        // function to fetch the weather from open weather map
        const fetchWeather = async () => {
            const weatherResponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Cincinnati&units=imperial&APPID=8456df1c9a83bf9fd7f76496b84ac3b8')
            const weatherJson = await weatherResponse.json();

            // if the response is okay, set the data as weather
            if (weatherResponse.ok) {
                setWeather(weatherJson);
            }
            if (!weatherResponse.ok) {
                console.log("Error getting weather");
            }
        }

        // calls the function to fetch and set the weather
        fetchWeather();
    }, []);

    // html returned for the /Home page
    return (
        <div className="home">
            <h2 className="home-title"><a href="#places">Come to the Queen City and enjoy everything we have to offer!</a></h2>

            {/* displays both the weather and flight widget */}
            <div className="widgets">
                {weather && (
                    <div className="weather-widget">
                        <Weather weather={weather} />
                    </div>
                )}
                
            </div>

            {/* if a user is logged in, show them the attraction form */}
            {user && (
                <div className="container attraction-form">
                    <h3>Add a New Attraction!</h3>
                    <AttractionForm />
                </div>
            )}

            {/* only show 3 random places on the home page out of the array of attractions */}
            <div id="places" className="container places-home">
                <h2 className="places-home-title">Places To Visit!</h2>
                {attractions && _.shuffle(attractions.filter(attraction => attraction.type === 'place')).slice(0, 3).map((attraction) => (
                    <HomePlaces key={attraction._id} place={attraction} />
                ))}
                <Link to="/Places"><h2>View some of the amazing places we have to offer!</h2></Link>
            </div>

            {/* only show 3 random activities on the home page out of the array of attractions */}
            <div className="container activities-home">
                <h2>Fun Activities To Do!</h2>
                {attractions && _.shuffle(attractions.filter(attraction => attraction.type === 'activity')).slice(0, 3).map((attraction) => (
                    <HomeActivities key={attraction._id} activity={attraction} />
                ))}
                <Link to="/Activities"><h2>View some of the exciting and adventurous activities we have to offer!</h2></Link>
            </div>

            {/* link to the /About page from the ome page */}
            <div className="container about-home">
                <h2>About Us!</h2>
                <Link to="/About"><h2 className="container-details">See some fun facts to inspire others and see what our great city has to offer!</h2></Link>
            </div>

            {/* link to the /Contact page from the /Home page */}
            <div className="container contacts-home">
                <h2>Get In Contact!</h2>
                <Link to="/Contacts"><h2 className="container-details">Get in contact with me and see other projects I've worked on!</h2></Link>
            </div>
        </div>
    );
}

export default Home;