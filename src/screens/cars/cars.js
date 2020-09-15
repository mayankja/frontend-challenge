import React, { useState, useEffect } from 'react';
import Car from '../../components/car';
import { getCars } from '../../api';

export default () => {

    const [cars, setCars] = useState([]);
    const [params, setParams] = useState({});

    useEffect(() => {
        getCars(params)
            .then(cars => setCars(cars))
            .catch(err => console.log(err));
    }, [])

    let filteredCars = cars;

    return (
        <div>
            {filteredCars.map(car => <Car key={car.id} {...car} params={params} />)}
        </div>
    );
}