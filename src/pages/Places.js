import { useEffect, useState } from 'react';
import { useAttractionsContext } from '../hooks/useAttractionsContext';

// components
import PlaceDetails from '../components/PlaceDetails';

const Places = () => {

    const { attractions, dispatch } = useAttractionsContext();
    const [filter, setFilter] = useState("");

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

    if (filter) {
        return (
            <div className="attractions">
                <div className='attraction-head'>
                    <h1><a href='#attraction-title'>Explore New Places!</a></h1>
                </div>
                <div className='container'>
                    <div id="attraction-title" className='attraction-title'>
                        <h2>Here you can find some different places to visit and see what sparks your imagination!</h2>
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
                    {attractions && attractions.filter(attraction => attraction.type === 'place').filter(attraction => attraction.venue === filter || attraction.rating === filter).map((attraction) => (
                        <PlaceDetails key={attraction._id} place={attraction} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="attractions">
            <div className='attraction-head'>
                <h1><a href='#attraction-title'>Explore New Places!</a></h1>
            </div>
            <div className='container'>
                <div id="attraction-title" className='attraction-title'>
                    <h2>Here you can find some different places to visit and see what sparks your imagination!</h2>
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
                {attractions && attractions.filter(attraction => attraction.type === 'place').map((attraction) => (
                    <PlaceDetails key={attraction._id} place={attraction} />
                ))}
            </div>
        </div>
    )
}

export default Places;