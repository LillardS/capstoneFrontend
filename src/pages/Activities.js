import { useEffect, useState } from 'react';
import { useAttractionsContext } from '../hooks/useAttractionsContext';

// components
import ActivityDetails from '../components/ActivityDetails';

const Activities = () => {
    const { attractions, dispatch } = useAttractionsContext();
    const [filter, setFilter] = useState("");

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

    console.log();
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