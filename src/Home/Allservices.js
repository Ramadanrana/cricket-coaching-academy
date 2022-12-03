import React from 'react';

const Allservices = ({ facility }) => {
    const { title, image, details } = facility;
    return (
        <div>
            <div className="card services w-80 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bolder text-3xl">
                        {title}

                    </h2>
                    <p>{details}</p>

                </div>
            </div>
        </div>
    );
};

export default Allservices;