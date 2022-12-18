import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-center mb-16 mt-8 text-primary font-bolder text-5xl">About US</h1>
            <div className="hero mx-12 my-16">
                <div className="hero-content story flex-col sm:flex-col lg:flex-row">
                    <img src={'https://live.staticflickr.com/65535/52487966806_7cb90a409d_c_d.jpg'} alt='' className="max-w-sm rounded-lg shadow-2xl   w-2/3" />
                    <div className='p-8 lg:w-96'>
                        <h1 className="text-5xl font-bold">Our Story</h1>
                        <p className="py-6">Our Player Success is our Success.Cricket is no less than a religion in Bangladesh.From chawls to plush housing societies. Cricket is an important element of Bangladesh lives.From a father’s memories to a youngster’s role model,the names of cricketers are taken in every house here.to know that many want to pursue cricket as their profession.After all, cricketers are one of the most successful sportspersons.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;