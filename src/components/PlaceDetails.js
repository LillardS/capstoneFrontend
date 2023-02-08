const PlaceDetails = ({ place }) => {
    return (
        <div className="attraction-details">
            <img src={place.image} alt='the place' />
            <div className="likes">{place.likes}</div>
            <div className="detail-list">
                <h4>Name: {place.title}</h4>
                <h4>Hours: {place.hours}</h4>
                <h4>Address: {place.address}</h4>
            </div>
            <p className="description">{place.description}</p>
            <p className="createdAt">{place.createdAt}</p>
        </div>
    )
}

export default PlaceDetails;