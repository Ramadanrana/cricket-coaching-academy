import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/Authprovider';
import { useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signin, providerlogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handlesignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    const googleProvider = new GoogleAuthProvider();
    const handleclick = () => {
        providerlogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate('/');
            })
            .catch(error => console.error(error))




    }

    return (
        <div>
            <div className="hero mx-16">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mt-16">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesignin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <h1>or login using</h1>
                            <button onClick={handleclick} className='btn btn-primary'> <FaGoogle></FaGoogle> <span className='ml-2'>Google</span></button>
                            <h1>Not Signup yet? <Link to='/signup'><span className='text-primary'>Signup Now</span></Link></h1>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;