import { useEffect, useState } from 'react';
import { useAttractionsContext } from '../hooks/useAttractionsContext';

// components
import ActivityDetails from '../components/ActivityDetails';

const Activities = () => {

    // set the attractions equal to the ones fetched for the attraction context, and set the filter to be empty to start
    const { attractions, dispatch } = useAttractionsContext();
    const [filter, setFilter] = useState("");

    useEffect(() => {

        // on load fetch all attractions and set them for the attraction context.
        const fetchAttractions = async () => {
            const response = await fetch('/Activities');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_ATTRACTIONS', payload: json })
            }
        }

        // call the function that fetches and sets the attractions
        fetchAttractions();

    }, [dispatch]);
    
    // if there is a filter active, display only the filtered activities
    if (filter) {
        return (
            <div className="attractions">
                <div className='attraction-head'>
                    <h1><a href='#attraction-title'>Explore New Activities!</a></h1>
                </div>
                <div className='container'>
                    <div id="attraction-title" className='attraction-title'>
                        <h2>Here you can find some different activities to visit and see what has you having everlasting fun!</h2>
                        <div className="filter">
                            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                                <option value="">Select...</option>
                                <option value="inside">Inside</option>
                                <option value="outside">Outside</option>
                                <option value="family-friendly">Family-Friendly</option>
                                <option value="adult">Adult</option>
                            </select>
                        </div>
                    </div>
                    {attractions && attractions.filter(attraction => attraction.type === 'activity').filter(attraction => attraction.venue === filter || attraction.rating === filter).map((attraction) => (
                        <ActivityDetails key={attraction._id} activity={attraction} />
                    ))}
                </div>
            </div>
        );
    }

    // if there is no value for filter, display all activities
    return (
        <div className="attractions">
            <div className='attraction-head'>
                <h1><a href='#attraction-title'>Explore New Activities!</a></h1>
            </div>
            <div className='container'>
                <div id="attraction-title" className='attraction-title'>
                    <h2>Here you can find some different activities to visit and see what has you having everlasting fun!</h2>
                    <div className="filter">
                        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                            <option value="">Select...</option>
                            <option value="inside">Inside</option>
                            <option value="outside">Outside</option>
                            <option value="family-friendly">Family-Friendly</option>
                            <option value="adult">Adult</option>
                        </select>
                    </div>
                </div>
                {attractions && attractions.filter(attraction => attraction.type === 'activity').map((attraction) => (
                    <ActivityDetails key={attraction._id} activity={attraction} />
                ))}
            </div>
        </div>
    )
}


export default Activities;