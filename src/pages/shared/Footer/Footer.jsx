import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiRun } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black py-5'> 
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white flex justify-center'><GiRun />RunWay </h1>
                    <p className='mt-2 text-gray-200 text-base md:text-lg'>Empowering Marathoners to Connect, Compete, and Achieve Their Goals.</p>
                </div>
                <hr className='my-3' />
                <div className='grid grid-cols-2 md:grid-cols-3 justify-around gap-y-10 my-5 max-w-4xl mx-auto '>
                    <div className='text-center'>
                        <h1 className='font-bold text-gray-100 text-lg mb-5 '>Quick Links</h1>
                        <ul className='text-gray-200 flex flex-col gap-1'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/marathons'>Marathons</Link></li>
                            <li><Link to='#'>My Campaigns</Link></li>
                            <li><Link to='/dashboard'>Dashboard
                            </Link></li>
                            <li><Link to='/contact'>Contact Us
                            </Link></li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h1 className='font-bold text-gray-100 text-lg mb-5 '>About Us</h1>
                        <ul className='text-gray-200 flex flex-col gap-1'>
                            <li><a href='#'>About PullUp</a></li>
                            <li><a href='#'>How It Works</a></li>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className='text-center col-span-2 md:col-span-1'>
                        <h1 className='font-bold text-gray-100 text-lg mb-5 '>Stay Connected</h1>
                        <ul className='flex md:flex-col md:gap-2 text-4xl items-center justify-center gap-8'>
                            <li><Link to='/' className='text-[#6cabff] hover:text-blue-100'><FaFacebook /></Link></li>
                            <li><Link to='/' className='text-[#FF0000] hover:text-red-300' ><FaYoutube /></Link></li>
                            <li className="bg-gradient-to-b from-blue-500 via-red-500 to-yellow-500 rounded-xl"><Link to='/' className="text-white hover:text-gray-400"><FaInstagram /></Link></li>
                        </ul>
                    </div>
                </div>
                <p className='text-end text-black mt-10 border-t-2'>©2024 <Link to='/' className='hover:text-white'>RunWay.</Link> All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;