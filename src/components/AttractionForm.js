import { useState } from "react";
import { useAttractionsContext } from "../hooks/useAttractionsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const AttractionForm = () => {

    // inital state of all input/select/text area field data, as well as context for the user and the dispatch action needed to create an attraction
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
    const [ success, setSuccess ] = useState('')
    const [ likes, setLikes ] = useState(0);
    const [ emptyFields, setemptyFields ] = useState([]);
    const [ userName, setUsername ] = useState(user.email);


    // on submit, prevent refresh of the page, set the attraction userName to the email of the user creating it, then attempt to post a new attraction with all the filled in data.
    const handleSubmit = async (e) => {
        e.preventDefault();

        setUsername(user.email);
        
        const attraction = {image, title, hours, address, description, type, venue, rating, likes:0, userName: userName };

        const response = await fetch('https://capstone-backend-51b9.onrender.com/Home', {
            method: 'POST',
            body: JSON.stringify(attraction, { likes: likes }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();


        // if the response is not okay (the attraction can not be created), set and display the error and the empty fields needing filling
        if(!response.ok) {
            setError(json.error);
            setemptyFields(json.emptyFields)
        }

        // if the response is okay (the attraction can be created), set the empty fields back to their inital state, then dispatch the create attraction action.
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
            setemptyFields([]);
            setLikes(0);
            setUsername('');
            setSuccess('New Attraction Added!');
            console.log('New Attraction Added', json);
            dispatch({type: 'CREATE_ATTRACTION', payload: json});
        }
    }

    // the html returned to view the form
    return (
        <form id="attraction" className="create" onSubmit={handleSubmit}>
            <label>Attraction Image(url):</label>
            <input className={emptyFields.includes('image') ? 'error' : ''} type='url' onChange={(e) => setImage(e.target.value)} value={image} />
            <label>Attraction Title:</label>
            <input className={emptyFields.includes('title') ? 'error' : ''} type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
            <label>Attraction Hours:</label>
            <input className={emptyFields.includes('hours') ? 'error' : ''} type='text' onChange={(e) => setHours(e.target.value)} value={hours} />
            <label>Attraction Address:</label>
            <input className={emptyFields.includes('address') ? 'error' : ''} type='text' onChange={(e) => setAddress(e.target.value)} value={address} />
            <label>Attraction Type:</label>
            <select className={emptyFields.includes('type') ? 'error' : ''} form_id="attraction" name="type" onChange={(e) => setType(e.target.value)} value={type}>
                <option value="">---</option>
                <option value="place">Place</option>
                <option value="activity">Activity</option>
            </select>
            <label>Attraction Venue:</label>
            <select className={emptyFields.includes('venue') ? 'error' : ''} form_id="attraction" name="venue" onChange={(e) => setVenue(e.target.value)} value={venue}>
                <option value="">---</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
            </select>
            <label>Attraction Rating:</label>
            <select className={emptyFields.includes('rating') ? 'error' : ''} form_id="attraction" name="rating" onChange={(e) => setRating(e.target.value)} value={rating}>
                <option value=''>---</option>
                <option value="family-friendly">Family-Friendly</option>
                <option value="adult">Adult</option>
            </select>
            <label>Attraction Description</label>
            <textarea className={emptyFields.includes('description') ? 'error' : ''} form_id="attraction" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>Add Attraction</button>
            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
        </form>
    );
}

export default AttractionForm;