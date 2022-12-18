import React from 'react';
import { useQuery } from '@tanstack/react-query';

import Allservices from './Allservices';

const Facility = () => {



    const { data: facilities = [] } = useQuery({
        queryKey: ['cricket'],
        queryFn: () => fetch('http://localhost:5000/cricket')
            .then(res => res.json())
    })
    return (
        <div>
            <h1 className="text-center mb-16 mt-8 text-primary font-bolder text-5xl">Our Facilities</h1>
            <div className='grid gap-8 lg:grid-cols-3 lg:mx-16'>

                {
                    facilities.map(facility => <Allservices facility={facility}></Allservices>)
                }
            </div>
        </div>
    );
};

export default Facility;