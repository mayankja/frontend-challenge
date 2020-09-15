import React from 'react';
import Constants from '../util/constants';

export default ({ availability, brand, id, model, pricePerDay, pricePerKm }) => {
    if (Constants[id]) return (
        <div className="container">
            <div className="row m-5 border">
                <div className="col p-5">
                    <h5 className="card-title">{brand} {` `} {model}</h5>
                    <p className="card-text">
                        id: {id} <br />
                        Availability (For Days): {availability.maxDuration} <br />
                        Availability (For KM): {availability.maxDistance} <br />
                        price/Day: {pricePerDay} <br />
                        price/Km: {pricePerKm} <br />
                        <br />
                        Total price (per Day): {availability.maxDuration * pricePerDay} <br />
                        Total price (per KM): {availability.maxDistance * pricePerKm}
                    </p>
                </div>
                <div className="col m-0 p-0">
                    <img src={Constants[id]} alt={`${brand} ${model}`} width="100%" height="100%"></img>
                </div>
            </div>
        </div>
    );
    else return null
}