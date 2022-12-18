import React from 'react';
import './Home.css#';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className='lg:my-8 lg:mx-16 border lg:rounded-xl cric lg:h-96 '>
                <div className="hero cri  " style={{ backgroundImage: `url("https://live.staticflickr.com/65535/52539434014_7fe404a2fb_c_d.jpg")`, height: '90%' }}>
                    <div className="hero-overlay op h-96 bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md pb-16 ">
                            <h1 className="mb-5 text-blue-900 text-5xl font-fam font-bold pt-16">Join The Best <br /> Cricket Coaching <br /> In Dhaka</h1>
                            <p className="mb-5 text-xl">In order to be the National team player of bangladesh join ur Academy today.We focus to make your dreams true.We have International coaches and highclass facility which will help you to serv Bangladesh in future.</p>
                            <Link className='btn btn-primary sm:hidden addbtn' to='/add'>Join Now</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;