import { useEffect, useLayoutEffect } from 'react';
import { useAttractionsContext } from '../hooks/useAttractionsContext';
import _ from 'lodash';

// components
import ActivityDetails from '../components/ActivityDetails';

const Activities = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });
    const { attractions, dispatch } = useAttractionsContext();

    useEffect(() => {

        const fetchAttractions = async () => {
            const response = await fetch('/Activities');
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
                <h1><a href='#attraction-title'>Explore New Activities!</a></h1>
            </div>
            <div className='container'>
                <div id="attraction-title" className='attraction-title'>
                    <h2>Here you can find some different activities to visit and see what has you having enending fun!</h2>
                </div>
                {attractions && _.shuffle(attractions.filter(attraction => attraction.type === 'activity')).map((attraction) => (
                    <ActivityDetails key={attraction._id} activity={attraction} />
                ))}
            </div>
        </div>
    );
}

export default Activities;