import React, { useReducer } from 'react';

const forminfo = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }


}

const Admission = () => {
    const [formdata, Setformdata] = useReducer(forminfo, {})
    const handlejoin = event => {
        const form = event.target;
        event.preventDefault();
        console.log(formdata);

        fetch('http://localhost:5000/admission', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your info added');
                    form.reset();
                }
            })

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
                            <input onChange={Setformdata} name='name' type="text " placeholder="your name" className="input input-bordered input-primary w-full max-w-xs" />

                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">What is Father Name?</span>

                            </label>
                            <input onChange={Setformdata} name='father' type="text " placeholder="father name" className="input input-bordered input-primary w-full max-w-xs" />

                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">What is Mother Name?</span>

                            </label>
                            <input onChange={Setformdata} name='mother' type="text " placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />

                        </div>

                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Age</span>

                            </label>

                            <input onChange={Setformdata} name='age' type="text " placeholder="age" className="input input-bordered input-primary w-full max-w-xs" />



                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Phone Number</span>

                            </label>

                            <input onChange={Setformdata} name='phone' type="text " placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />



                        </div>
                        <div className="form-control ml-24 w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Your Address</span>

                            </label>

                            <input onChange={Setformdata} name='address' type="text " placeholder="address" className="input input-bordered input-primary w-full max-w-xs" />



                        </div>

                        <input className='btn btn-primary my-4 mr-96 ml-4 px-32 py-5' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admission;