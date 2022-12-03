import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
import './Navbar.css';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-nav text-white">
                <div className="flex-1">
                    <Link to='/'> <div className="btn btn-ghost normal-case text-xl ml-24">Cricket Coaching </div> </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal navbar pr-20 mr-20">
                        <Link to='/'>Home</Link>
                        <Link to='/faci'>Our Facilities</Link>
                        <Link to='/about'>About US</Link>
                        {
                            user?.uid ?
                                <button onClick={logout}>logout</button>
                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Signup</Link>
                                </>
                        }
                    </ul>
                </div>
            </div >
        </div >
    );
};

export default Navbar;