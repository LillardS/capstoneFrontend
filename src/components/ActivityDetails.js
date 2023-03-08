import { useAuthContext } from '../hooks/useAuthContext';
import { useAttractionsContext } from '../hooks/useAttractionsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export const ActivityDetails = ({ activity }) => {

    // sets the user equal to the one with current authorization
    const { user } = useAuthContext();

    // allows the use of the dispatch function to delete places
    const { dispatch } = useAttractionsContext();

    // the function fired when a delete button is clicked
    const handleClick = async () => {

        // fetch the delete attraction function from the attraction controller
        const response = await fetch('https://capstone-backend-51b9.onrender.com/Activities/' + activity._id, {
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
            likes: activity.likes + 1
        }
        
        //fetch the update attraction function from the attraction controller
        const response = await fetch('https://capstone-backend-51b9.onrender.com/Activities/' + activity._id, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeAttraction)
        });
        const json = await response.json();
        
        // if the response is okay, dispatch the update action
        if (response.ok) {
            dispatch({type: 'UPDATE_ATTRACTION', payload: json})
        }
    }

    const dislike = async () => {
                // set an updated like object
                const dislikeAttraction = {
                    likes: activity.likes - 1
                }
                
                //fetch the update attraction function from the attraction controller
                const response = await fetch('https://capstone-backend-51b9.onrender.com/Activities/' + activity._id, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dislikeAttraction)
                });
                const json = await response.json();
                
                // if the response is okay, dispatch the update action
                if (response.ok) {
                    dispatch({type: 'UPDATE_ATTRACTION', payload: json})
                }
    }

    // html being returned for each activity in the array of attractions fetched at the home page
    return (
        <div className="attraction-details">
            <img src={activity.image} alt='the activity' />
            <h4>Likes:</h4>
            <div className='likes'>
            {/* if there is a user, display the like and dislike buttons */}
                {user && (
                <span onClick={() => {like(); like();}} className="material-symbols-outlined">
                    thumb_up
                </span>
                )}
                <div className="likes">{activity.likes}</div>
                {user && (
                <span onClick={() => {dislike(); dislike();}} className="material-symbols-outlined">
                    thumb_down
                </span>
                )}
            </div>
            <div className="detail-list">
                <h4>Name: {activity.title}</h4>
                <h4>Hours: {activity.hours}</h4>
                <h4>Address: {activity.address}</h4>
            </div>
            <p className="description">{activity.description}</p>
            <p className="createdAt">{formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}</p>

            {/* If the current user's email matches the email used to create the attraction, show the delete button */}
            {user && user.email === activity.userName && (
                <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
            )}


        </div>
    )
}

export default ActivityDetails;