import React from 'react';
import { FaEnvelope, FaPhone, FaHome } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-neutral-content pl-36">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">International Coaches</a>
                    <a className="link link-hover">Own field</a>
                    <a className="link link-hover">Cricket Equipment</a>
                    <a className="link link-hover">National Mentor</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Contact US</span>
                    <div className='flex'><FaPhone></FaPhone><span className='ml-4'> 01567891123</span></div>
                    <div className='flex'><FaEnvelope></FaEnvelope><span className='ml-4'>ramadan.rana.ce@gmail.com</span></div>
                    <div className='flex'><FaHome></FaHome><span className='ml-4'>Mirpur field,Dhaka</span></div>

                </div>
            </footer >
        </div >
    );
};

export default Footer;