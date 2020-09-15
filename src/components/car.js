import React from 'react';
import Constants from '../util/constants';

export default ({ availability, brand, id, model, pricePerDay, pricePerKm }) => {
    if (Constants[id]) return (
        <div className="container">
            <div className="row m-5 border">
                <div className="col-5 p-5">
                    <h5 className="card-title">{brand} {` `} {model}</h5>
                    <p className="card-text">
                        id: {id} <br />
                        Availability (For Days): {availability.maxDuration} <br />
                        Availability (For KM): {availability.maxDistance} <br />
                        price/Day: {pricePerDay} <br />
                        price/Km: {pricePerKm} <br />
                        <br />
                        Total price (per Day): {availability.maxDuration * pricePerDay} <br />
                        Total price (per KM): {availability.maxDistance * pricePerKm} <br />
                        <br />
                        Discounted Price/Day after 1 day: {pricePerDay * 0.1} <br />
                        Discounted Price/Day after 4 day: {pricePerDay * 0.3} <br />
                        Discounted Price/Day after 10 day: {pricePerDay * 0.5}
                    </p>
                </div>
                <div className="col-7 m-0 p-0">
                    <img src={Constants[id]} alt={`${brand} ${model}`} width="100%" height="100%"></img>
                </div>
            </div>
        </div>
    );
    else return null
}