import React from 'react';
import { Link } from 'react-router-dom';

const MarathonCard = ({ marathon }) => {

    const {_id, title, marathonDitails, startRegistration, endRegistration, startMarathon, location, runningDistance, description, photoURL } = marathon || {}
    const startRegDay = new Date(startRegistration).toLocaleDateString('en-GB')
    const endRegDay = new Date(endRegistration).toLocaleDateString('en-GB')
    const startMarathonDay = new Date(startMarathon).toLocaleDateString('en-GB')
    return (
        <div>
            <div className="card bg-gray-100 w-[360px] h-[500px] shadow-xl border-2 border-gray-500 mx-auto">
                <figure>
                    <img
                        src={photoURL}
                        alt={title}
                        className='w-80 h-52 mt-5 rounded-xl' />
                </figure>
                <div className='px-5 mt-2'>
                    <h1 className='text-xl font-bold mt-2 capitalize'>{title}</h1>
                    <h1 className='text-lg font-semibold mt-1'>Location: {location}</h1>
                    <h1 className='text-lg font-semibold mt-1'>
                        Registration Dates: <br />
                        <span className='pl-8'>Start - {startRegDay}</span><br />
                        <span className='pl-8'>End - {endRegDay}</span>
                    </h1>
                    <h1 className='text-lg  mt-1 overflow-hidden text-ellipsis whitespace-nowrap'
                    ><span className='font-semibold'>Description:</span> {description}
                    </h1>
                    <div className='w-full'>
                        <Link to={`/marathonDitails/${_id}`}
                            className='btn bg-lime-300 hover:bg-lime-400 border-2 border-gray-400 font-bold text-lg w-full mt-2' >See Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarathonCard;