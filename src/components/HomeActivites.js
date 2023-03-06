const HomeActivities = ({ activity }) => {

    // an altered version of the activities card with less displayed information for the homepage
    return (
        <div className="activity-details">
            <img src={activity.image} alt='the activity' />
            <h4>Likes:</h4>
            <div className="likes">{activity.likes}</div>
            <div className="detail-list">
                <h4>{activity.title}</h4>
            </div>
        </div>
    )
}

export default HomeActivities;