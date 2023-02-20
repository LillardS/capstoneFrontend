import { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import HomeActivities from "../components/HomeActivites";
import HomePlaces from "../components/HomePlaces";
import AttractionForm from "../components/AttractionForm";
import { useAttractionsContext } from "../hooks/useAttractionsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Helmet } from 'react-helmet';
const _ = require('lodash');

const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    const { user } = useAuthContext();

    const { attractions, dispatch } = useAttractionsContext();

    useEffect(() => {

        const fetchAttractions = async () => {
            const response = await fetch('/Home');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_ATTRACTIONS', payload: json })
            }
        }
        fetchAttractions();

    }, [dispatch]);

    return (
        <div className="home">
            <h2 className="home-title"><a href="#places">Come to the Queen City and enjoy everything we have to offer!</a></h2>
            {user && (
                <div className="container attraction-form">
                    <h3>Add a New Attraction!</h3>
                    <AttractionForm />
                </div>
            )}
            <div id="places" className="container places-home">
                <h2 className="places-home-title">Places To Visit!</h2>
                {attractions && _.shuffle(attractions.filter(attraction => attraction.type === 'place')).slice(0, 3).map((attraction) => (
                    <HomePlaces key={attraction._id} place={attraction} />
                ))}
                <Link to="/Places"><h2>View some of the amazing places we have to offer!</h2></Link>
            </div>
            <div className="container activities-home">
                <h2>Fun Activities To Do!</h2>
                {attractions && _.shuffle(attractions.filter(attraction => attraction.type === 'activity')).slice(0, 3).map((attraction) => (
                    <HomeActivities key={attraction._id} activity={attraction} />
                ))}
                <Link to="/Activities"><h2>View some of the exciting and adventurous activities we have to offer!</h2></Link>
            </div>
            <div className="container about-home">
                <h2>About Us!</h2>
                <Link to="/About"><h2 className="container-details">See some fun facts to inspire others and see what our great city has to offer!</h2></Link>
            </div>
            <div className="container contacts-home">
                <h2>Get In Contact!</h2>
                <Link to="/Contacts"><h2 className="container-details">Get in contact with me and see other projects I've worked on!</h2></Link>
            </div>
            <div className="weather-widget">
                <div id="3fb7eb4b8c29bbe54ec5c070c0983fd1" className="ww-informers-box-854753"><p className="ww-informers-box-854754"><a href="https://world-weather.info/forecast/usa/cincinnati/14days/">world-weather.info/forecast/usa/cincinnati/14days/</a><br /><a href="https://world-weather.info/">world-weather.info</a></p></div>
                <Helmet><script async type="text/javascript" charset="utf-8" src="https://world-weather.info/wwinformer.php?userid=3fb7eb4b8c29bbe54ec5c070c0983fd1"></script>
                </Helmet>
            </div>
        </div>
    );
}

export default Home;