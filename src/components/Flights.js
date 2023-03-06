const Flights = ({flight}) => {

    // for each flight recieved, it displays in this html format
    return (
        <div className="flights">
            <div className="departure-airport">
             <p>{flight.departure.airport.name}</p>
            </div>
            <div className="departure-airline">
                <p>{flight.airline.name}</p>
            </div>
            <div className="flight-number">
                <p>{flight.number}</p>
            </div>
            <div className="departure-time">
                <p>{flight.departure.scheduledTimeLocal.split(" ")[0]}</p>
                <p>{flight.departure.scheduledTimeLocal.split(" ")[1].split("-")[0]}</p>
            </div>
            <div className="arrival-time">
                <p>{flight.arrival.scheduledTimeLocal.split(" ")[0]}</p>
                <p>{flight.arrival.scheduledTimeLocal.split(" ")[1].split("-")[0]}</p>
            </div>
        </div>
    )
}

export default Flights;