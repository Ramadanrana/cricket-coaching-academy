import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
    const [shownav, setShownav] = useState(false)
    const { user, logout } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar  bg-nav text-white">
                <div className="flex-1">
                    <Link to='/'> <div className="btn btn-ghost normal-case cc text-xl ml-16"> <img className='w-8 h-8' src={'https://cdn-icons-png.flaticon.com/512/3933/3933746.png'} alt="" /> Cricket Coaching </div> </Link>

                </div>

                <div className="flex-none bignav">
                    <ul className="menu menu-horizontal navbar pr-15 mr-10">
                        <Link to='/'>Home</Link>
                        <Link to='/faci'>Our Facilities</Link>
                        <Link to='/about'>About US</Link>
                        <Link to='/contact'>Contact US</Link>
                        <Link to='/add'>Apply Now</Link>

                        {
                            user?.uid ?
                                <>
                                    <Link to='/message'>All Message</Link>
                                    <Link to='/dash'>Dashboard</Link>
                                    <button onClick={logout}>logout</button>
                                </>

                                : <>
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup'>Signup</Link>
                                </>
                        }
                    </ul>
                </div>
                <div className='hidden hamburger'>
                    <Link onClick={() => setShownav(!shownav)} href="#"><GiHamburgerMenu></GiHamburgerMenu></Link>
                </div>
            </div >
            <div>
                <ul className={shownav ? 'nava' : 'hidden'}>
                    <Link to='/'>Home</Link>
                    <Link to='/faci'>Our Facilities</Link>
                    <Link to='/about'>About US</Link>
                    <Link to='/contact'>Contact US</Link>
                    <Link to='/add'>Apply Now</Link>

                    {
                        user?.uid ?
                            <>
                                <Link to='/message'>All Message</Link>
                                <Link to='/dash'>Dashboard</Link>
                                <Link><button onClick={logout}>logout</button></Link>
                            </>

                            : <>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>Signup</Link>
                            </>
                    }
                </ul>

            </div>
        </div >
    );
};

export default Navbar;