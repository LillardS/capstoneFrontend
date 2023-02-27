const HomePlaces = ({ place }) => {
    return (
        <div className="places-details">
            <img src={place.image} alt='the places' />
            <h4>Likes:</h4>
            <div className="likes">{place.likes}</div>
            <div className="detail-list">
                <h4>{place.title}</h4>
            </div>
        </div>
    )
}


export default HomePlaces;