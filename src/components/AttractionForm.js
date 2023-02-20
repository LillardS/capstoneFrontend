import { useState } from "react";
import { useAttractionsContext } from "../hooks/useAttractionsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const AttractionForm = () => {
    const { dispatch } = useAttractionsContext();
    const { user } = useAuthContext();
    const [ image, setImage ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ hours, setHours ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ type, setType ] = useState('');
    const [ venue, setVenue ] = useState('');
    const [ rating, setRating ] = useState('');
    const [ error, setError ] = useState(null);
    const [ likes, setLikes ] = useState(0);
    const [ userName, setUsername ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const attraction = {image, title, hours, address, description, type, venue, rating, likes:0, userName };

        const response = await fetch('/Home', {
            method: 'POST',
            body: JSON.stringify(attraction, { likes: likes, userName: userName }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        if(response.ok) {
            setImage('');
            setTitle('');
            setHours('');
            setAddress('');
            setType('');
            setVenue('');
            setRating('');
            setDescription('');
            setError(null);
            setLikes(0);
            setUsername(user.email);
            console.log('New Attraction Added', json);
            dispatch({type: 'CREATE_ATTRACTION', payload: json});
        }
    }

    return (
        <form id="attraction" className="create" onSubmit={handleSubmit}>
            <label htmlFor="image">Attraction Image(url):</label>
            <input id="image" type='url' onChange={(e) => setImage(e.target.value)} value={image} />
            <label htmlFor="title">Attraction Title:</label>
            <input id="title" type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
            <label htmlFor="hours">Attraction Hours:</label>
            <input id="hours" type='text' onChange={(e) => setHours(e.target.value)} value={hours} />
            <label htmlFor="address">Attraction Address:</label>
            <input id="address" type='text' onChange={(e) => setAddress(e.target.value)} value={address} />
            <label htmlFor="type">Attraction Type:</label>
            <select form_id="attraction" id="type" name="type" onChange={(e) => setType(e.target.value)} value={type}>
                <option value="">---</option>
                <option value="place">Place</option>
                <option value="activity">Activity</option>
            </select>
            <label htmlFor="venue">Attraction Venue:</label>
            <select form_id="attraction" id="venue" name="venue" onChange={(e) => setVenue(e.target.value)} value={venue}>
                <option value="">---</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
            </select>
            <label htmlFor="rating">Attraction Rating:</label>
            <select form_id="attraction" id="rating" name="rating" onChange={(e) => setRating(e.target.value)} value={rating}>
                <option value=''>---</option>
                <option value="family-friendly">Family-Friendly</option>
                <option value="adult">Adult</option>
            </select>
            <label htmlFor="description">Attraction Description</label>
            <textarea id="description" form_id="attraction" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>Add Attraction</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default AttractionForm;