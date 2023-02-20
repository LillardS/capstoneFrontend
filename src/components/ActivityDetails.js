const ActivityDetails = ({ activity }) => {


    return (
        <div className="attraction-details">
            <img src={activity.image} alt='the activity' />
            <div className="likes">{activity.likes}</div>
            <div className="detail-list">
                <h4>Name: {activity.title}</h4>
                <h4>Hours: {activity.hours}</h4>
                <h4>Address: {activity.address}</h4>
            </div>
            <p className="description">{activity.description}</p>
            <p className="createdAt">{activity.createdAt}</p>
            {/* <span onClick={handleClick}>Delete</span> */}
        </div>
    )
}

export default ActivityDetails;