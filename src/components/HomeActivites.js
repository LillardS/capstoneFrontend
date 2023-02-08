const HomeActivities = ({ activity }) => {
    return (
        <div className="activity-details">
            <img src={activity.image} alt='the activity' />
            <div className="likes">{activity.likes}</div>
            <div className="detail-list">
                <h4>{activity.title}</h4>
            </div>
        </div>
    )
}

export default HomeActivities;