import React from 'react';
import './Home.css#';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <div className='my-8 mx-16 border rounded-xl cric h-96 '>
                <div className="hero cri  " style={{ backgroundImage: `url("https://live.staticflickr.com/65535/52539434014_7fe404a2fb_c_d.jpg")`, height: '90%' }}>
                    <div className="hero-overlay op h-96 bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md pb-16 ">
                            <h1 className="mb-5 text-blue-900 text-5xl font-fam font-bold pt-16">Join The Best <br /> Cricket Coaching <br /> In Dhaka</h1>
                            <p className="mb-5 text-xl">In order to be the National team player of bangladesh join ur Academy today.We focus to make your dreams true.We have International coaches and highclass facility which will help you to serv Bangladesh in future.</p>
                            <Link className='btn btn-primary' to='/signup'>Join Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero  mx-16 ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='mr-16'>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid gap-8 lg:grid-cols-3 mx-16'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;