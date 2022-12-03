import React from 'react';

const Admission = () => {
    const handlejoin = event => {
        event.preventDefault();
    }
    return (
        <div>
            <div>
                <h1 className="text-center mb-8 mt-8 text-primary font-bolder text-5xl">Join Now</h1>
            </div>
            <div>
                <div className='lg: ml-96'>
                    <form onSubmit={handlejoin}>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">What is your Name?</span>

                            </label>
                            <input name='name' type="text " placeholder="your name" className="input input-bordered input-primary w-full max-w-xs" />

                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">What is Father Name?</span>

                            </label>
                            <input name='father' type="text " placeholder="father name" className="input input-bordered input-primary w-full max-w-xs" />

                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">What is Mother Name?</span>

                            </label>
                            <input name='mother' type="text " placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />

                        </div>

                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Age</span>

                            </label>

                            <input name='age' type="text " placeholder="age" className="input input-bordered input-primary w-full max-w-xs" />



                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Phone Number</span>

                            </label>

                            <input name='phone' type="text " placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />



                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Address</span>

                            </label>

                            <input name='address' type="text " placeholder="address" className="input input-bordered input-primary w-full max-w-xs" />



                        </div>

                        <input className='btn btn-primary my-4 mr-96 ml-4 px-32 py-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admission;