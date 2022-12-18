import React from 'react';
import { useReducer } from 'react';
import { toast } from 'react-hot-toast';


const messageform = (state, event) => {

    return {
        ...state,
        [event.target.name]: event.target.value
    }

}

const Contact = () => {
    const [messageinfo, setMessageinfo] = useReducer(messageform, {})
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;


        console.log(messageinfo);

        fetch('http://localhost:5000/message', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageinfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your info added successfully');
                    form.reset();
                }
            })

    }
    return (
        <div>
            <h1 className="text-center mb-8 mt-8 text-primary font-bolder text-5xl">Send US a Message</h1>
            <div className='lg:ml-96'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control lg:ml-24 ml-8 lg:w-full lg:max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>

                        </label>
                        <div className='grid lg:grid-cols-2 gap-8 '>
                            <input onChange={setMessageinfo} name='firstname' type="text " placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs" />
                            <input onChange={setMessageinfo} name='lastname' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="form-control lg:ml-24 ml-8 lg:w-full lg:max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>

                        </label>

                        <input onChange={setMessageinfo} name='email' type="email " placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />



                    </div>
                    <div className="form-control lg:ml-24 ml-8 lg:w-full lg:max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Phone Number</span>

                        </label>

                        <input onChange={setMessageinfo} name='phone' type="text " placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />



                    </div>
                    <div className="form-control lg:ml-24 ml-8 lg:w-full lg:max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Message</span>

                        </label>

                        <textarea onChange={setMessageinfo} name='message' className="textarea textarea-primary mr-10 lg:mr-0" placeholder="Your Message"></textarea>



                    </div>
                    <input className='btn btn-primary my-4 mr-96 ml-8 lg:ml-4 px-32 py-5' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;