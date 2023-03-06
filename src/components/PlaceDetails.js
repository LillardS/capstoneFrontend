import { useAuthContext } from '../hooks/useAuthContext';
import { useAttractionsContext } from '../hooks/useAttractionsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const PlaceDetails = ({ place }) => {

    // sets the user equal to the one with current authorization
    const { user } = useAuthContext();

    // allows the use of the dispatch function to delete places
    const { dispatch } = useAttractionsContext();

    // the function fired when a delete button is clicked
    const handleClick = async () => {

        // fetch the delete attraction function from the attraction controller
        const response = await fetch('/Places/' + place._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        // if the response is okay, dispatch the delete attraction case from the attractions context
        if (response.ok) {
            dispatch({ type: 'DELETE_ATTRACTION', payload: json });
        }
    }

    // function that increases like
    const like = async () => {

        // set an updated like object
        const likeAttraction = {
            likes: place.likes + 1
        }

        //fetch the update attraction function from the attraction controller
        const response = await fetch('/Places/' + place._id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeAttraction)
        });
        const json = await response.json();

        // if the response is okay, dispatch the update action
        if (response.ok) {
            dispatch({ type: 'UPDATE_ATTRACTION', payload: json })
        }
    }

    const dislike = async () => {
        // set an updated like object
        const dislikeAttraction = {
            likes: place.likes - 1
        }

        //fetch the update attraction function from the attraction controller
        const response = await fetch('/Places/' + place._id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dislikeAttraction)
        });
        const json = await response.json();

        // if the response is okay, dispatch the update action
        if (response.ok) {
            dispatch({ type: 'UPDATE_ATTRACTION', payload: json })
        }
    }

    // html being returned for each place in the array of attractions fetched at the home page
    return (
        <div className="attraction-details">
            <img src={place.image} alt='the place' />
            <h4>Likes:</h4>
            <div className='likes'>

                {/* if there is a user logged in, display the like and dislike button */}
                {user && (
                    <span onClick={() => { like(); like(); }} className="material-symbols-outlined">
                        thumb_up
                    </span>
                )}
                <div className="likes">{place.likes}</div>
                {user && (
                    <span onClick={() => { dislike(); dislike(); }} className="material-symbols-outlined">
                        thumb_down
                    </span>
                )}
            </div>
            <div className="detail-list">
                <h4>Name: {place.title}</h4>
                <h4>Hours: {place.hours}</h4>
                <h4>Address: {place.address}</h4>
            </div>
            <p className="description">{place.description}</p>
            <p className="createdAt">{formatDistanceToNow(new Date(place.createdAt), { addSuffix: true })}</p>

            {/* If the current user's email matches the email used to create the attraction, show the delete button */}
            {user && user.email === place.userName && (
                <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
            )}
        </div>
    )
}

export default PlaceDetails;