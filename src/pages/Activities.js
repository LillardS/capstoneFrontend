import { useEffect, useState, useLayoutEffect } from 'react';

// components
import ActivityDetails from '../components/ActivityDetails';

const Activities = () => {
    useLayoutEffect(() => {
        window.scrollTo(0,0);
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
    
    return (
        <div className="attractions">
            <div className='attraction-head'>
                <h1><a href='#attraction-title'>Explore New Activities!</a></h1>
            </div>
            <div className='container'>
                <div id="attraction-title" className='attraction-title'>
                    <h2>Here you can find some different activities to visit and see what has you having enending fun!</h2>
                </div>
                {activities && activities.map((activity) => (
                    <ActivityDetails key={activity._id} activity={activity} />
                ))}
            </div>
        </div>
    );
}

export default Activities;