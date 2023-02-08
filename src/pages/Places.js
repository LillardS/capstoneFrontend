import { useEffect, useState, useLayoutEffect } from 'react';

// components
import PlaceDetails from '../components/PlaceDetails';

const Places = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });
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
        <div className="attractions">
            <div className='attraction-head'>
                <h1><a href='#attraction-title'>Explore New Places!</a></h1>
            </div>
            <div className='container'>
                <div id="attraction-title" className='attraction-title'>
                    <h2>Here you can find some different places to visit and see what sparks your imagination!</h2>
                </div>
                {places && places.map((place) => (
                    <PlaceDetails key={place._id} place={place} />
                ))}
            </div>
        </div>
    );
}

export default Places;