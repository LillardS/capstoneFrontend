import { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import HomeActivities from "../components/HomeActivites";
import HomePlaces from "../components/HomePlaces";
import AttractionForm from "../components/AttractionForm";
const _ = require('lodash');


const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    const [activities, setActivities] = useState(null);
    useEffect(() => {

        const fetchActivities = async () => {
            const response = await fetch('/Activities');
            const json = await response.json();

            if (response.ok) {
                setActivities(json);
            }
        }

        fetchActivities();
    }, []);
    const [places, setPlaces] = useState(null);
    useEffect(() => {

        const fetchPlaces = async () => {
            const response = await fetch('/Places');
            const json = await response.json();

            if (response.ok) {
                setPlaces(json);
            }
        }

        fetchPlaces();
    }, []);

    return (
        <div className="home">
            <h2 className="home-title"><a href="#places">Come to the Queen City and enjoy everything we have to offer!</a></h2>
            <div className="container attraction-form">
            <h3>Add a New Attraction!</h3>
                <AttractionForm />
            </div>
            <div id="places" className="container places-home">
                <h2 className="places-home-title">Places To Visit!</h2>
                {places && _.shuffle(places).slice(0, 3).map((place) => (
                    <HomePlaces key={place._id} place={place} />
                ))}
                <Link to="/Places"><h2>View some of the amazing places we have to offer!</h2></Link>
            </div>
            <div className="container activities-home">
                <h2>Fun Activities To Do!</h2>
                {activities && _.shuffle(activities).slice(0, 3).map((activity) => (
                    <HomeActivities key={activity._id} activity={activity} />
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
        </div>
    );
}

export default Home;