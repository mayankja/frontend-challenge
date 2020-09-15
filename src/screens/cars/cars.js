import React, { useState, useEffect } from 'react';
import Car from '../../components/car';
import { getCars } from '../../api';

export default () => {

    const [cars, setCars] = useState([]);
    const [params, setParams] = useState({});
    const [filterDuration, setFilterDuration] = useState(0);
    const [filterDistance, setFilterDistance] = useState(0);

    useEffect(() => {
        getCars(params)
            .then(cars => setCars(cars))
            .catch(err => console.log(err));
    }, [params])

    let filteredCars = cars;

    return (
        <div>
            <div className="mt-5 ml-5">
                <h3>
                    Filters:
                </h3>
                <div className="py-2">
                    Enter duration: {` `}
                    <select name="duration" id="duration" onChange={(e) => {
                        if (parseInt(e.target.value) >= 0) {
                            setParams({ duration: e.target.value });
                            setFilterDuration(parseInt(e.target.value));
                            setFilterDistance(0);
                        }
                    }} value={filterDuration}>
                        <option value={0} >Select duration (days)</option>
                        {Array.from({ length: 30 }, (v, i) => i + 1).map(day => <option key={`day${day}`} value={day} >{day}</option>)}
                    </select>
                </div>
                <div className="py-2">
                    Enter distance: {` `}
                    <select name="distance" id="distance" onChange={(e) => {
                        if (parseInt(e.target.value) >= 0) {
                            setParams({ distance: e.target.value });
                            setFilterDistance(parseInt(e.target.value));
                            setFilterDuration(0);
                        }
                    }} value={filterDistance} >
                        <option value={0} >Select distance (KM)</option>
                        {Array.from({ length: 30 }, (v, i) => i * 50).map(distance => distance ? <option key={`dis${distance}`} value={distance} >{distance}</option> : null)}
                    </select>
                </div>
            </div>
            {filteredCars.map(car => <Car key={car.id} {...car} params={params} />)}
        </div>
    );
}