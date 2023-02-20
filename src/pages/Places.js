import { useEffect, useLayoutEffect } from 'react';
import { useAttractionsContext } from '../hooks/useAttractionsContext';
import _ from 'lodash';

// components
import PlaceDetails from '../components/PlaceDetails';

const Places = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });
    const { attractions, dispatch } = useAttractionsContext();

    useEffect(() => {

        const fetchAttractions = async () => {
            const response = await fetch('/Places');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_ATTRACTIONS', payload: json })
            }
        }

        fetchAttractions();
        
    }, [dispatch]);

    return (
        <div className="attractions">
            <div className='attraction-head'>
                <h1><a href='#attraction-title'>Explore New Places!</a></h1>
            </div>
            <div className='container'>
                <div id="attraction-title" className='attraction-title'>
                    <h2>Here you can find some different places to visit and see what sparks your imagination!</h2>
                </div>
                {attractions && _.shuffle(attractions.filter(attraction => attraction.type === 'place')).map((attraction) => (
                    <PlaceDetails key={attraction._id} place={attraction} />
                ))}
            </div>
        </div>
    );
}

export default Places;