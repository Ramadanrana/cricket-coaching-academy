import React from 'react';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const first = form.first.value;
        const last = form.last.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(first, last, email, phone, message);
        form.reset();
    }
    return (
        <div>
            <h1 className="text-center mb-8 mt-8 text-primary font-bolder text-5xl">Send US a Message</h1>
            <div className='lg: ml-96'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control ml-24 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>

                        </label>
                        <div className='grid lg:grid-cols-2 gap-8 '>
                            <input name='first' type="text " placeholder="First Name" className="input input-bordered input-primary w-full max-w-xs" />
                            <input name='last' type="text" placeholder="Last Name" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>

                    </div>
                    <div className="form-control ml-24 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>

                        </label>

                        <input name='email' type="email " placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />



                    </div>
                    <div className="form-control ml-24 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Phone Number</span>

                        </label>

                        <input name='phone' type="text " placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs" />



                    </div>
                    <div className="form-control ml-24 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Message</span>

                        </label>

                        <textarea name='message' className="textarea textarea-primary" placeholder="Your Message"></textarea>



                    </div>
                    <input className='btn btn-primary my-4 mr-96 ml-4 px-32 py-5' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;