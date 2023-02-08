import React, { useState, useEffect } from "react";

const HomePlaces = ({ place }) => {

    const [places, setPlaces] = useState(null);
    const [randomPlaces, setRandomPlaces] = useState([]);
    // const randomize = useEffect(() => {

    //     const fetchPlaces = async () => {
    //         const response = await fetch('/Places');
    //         const json = await response.json();

    //         if (response.ok) {
    //             setPlaces(json);
    //         }
    //         while (randomPlaces < 3) {
    //             const randomPlace = Math.floor(Math.random() * places.length);
    //             if (!randomPlaces.includes(randomPlace)) {
    //                 randomPlaces.push(randomPlace);
    //             }
    //         }
    //         setRandomPlaces(randomPlaces);
    //     }

    //     fetchPlaces();
    // }, []);
    function shuffleArray(attractions){
        let i = attractions.length - 1;
        for (i; i > 0; i--) {
            const randomPlace = Math.floor(Math.random() * (i + 1));
            const randAttraction = attractions[i];
            attractions[i] = attractions[randomPlace];
            attractions[randomPlace] = randAttraction;
        }
        return attractions;
    }

    function RandomPlace({places}) {
        const shuffledPlaces = shuffleArray(places)
    
        {shuffledPlaces.map((place) =>{
    return (
        <div className="places-details">
            <img src={place.image} alt='the places' />
            <div className="likes">{place.likes}</div>
            <div className="detail-list">
                <h4>{place.title}</h4>
            </div>
        </div>
    )
})}
RandomPlaces.propTypes ={
    places: React.PropTypes.array,
}
}}

export default HomePlaces;