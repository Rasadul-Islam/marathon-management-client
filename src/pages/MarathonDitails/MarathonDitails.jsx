import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MarathonDitails = () => {
    const marathon = useLoaderData();
    const { title, marathonDitails, startRegistration, endRegistration, startMarathon, location, runningDistance, description, photoURL } = marathon || {};

    return (
        <div className="container card bg-gray-100 shadow-xl border-2 border-gray-500 mx-auto my-10">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                    <img className='rounded-xl md:rounded-tr-none md:rounded-bl-none w-11/12 h-72 md:w-96 mx-auto mt-5 md:mt-0' src={photoURL} alt={title} />
                </div>
                <div className='mt-5 flex flex-col justify-center gap-2 px-5'>
                    <h1 className='text-2xl lg:text-4xl text-center font-bold capitalize mb-5'>{title}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold text-xl lg:text-2xl'>Marathon Details: </span>{marathonDitails}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Location:</span> {location}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Running Distance:</span> {runningDistance}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Start Registration:</span> {startRegistration}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>End Registration:</span> {endRegistration}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Start Marathon:</span> {startMarathon}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Description:</span> {description}</h1>
                </div>
            </div>
            <Link to='/marathons' className='btn bg-lime-300 border-2 border-gray-400 font-bold text-lg w-2/4 mx-auto my-10'>
                Back
            </Link>
        </div>
    );
};

export default MarathonDitails;
