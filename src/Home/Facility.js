import React, { useEffect, useState } from 'react';

import Allservices from './Allservices';

const Facility = () => {
    const [facilities, setFacilities] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setFacilities(data))
    }, [])
    return (
        <div>
            <h1 className="text-center mb-16 mt-8 text-primary font-bolder text-5xl">Our Facilities</h1>
            <div className='grid gap-8 lg:grid-cols-3 mx-16'>

                {
                    facilities.map(facility => <Allservices facility={facility}></Allservices>)
                }
            </div>
        </div>
    );
};

export default Facility;