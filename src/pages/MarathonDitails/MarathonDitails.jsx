import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const MarathonDitails = () => {
    const marathon = useLoaderData();
    const { _id, title, marathonDitails, startRegistration, endRegistration, startMarathon, location, runningDistance, description, photoURL, apply_count } = marathon || {};
    const startRegDay = new Date(startRegistration).toLocaleDateString('en-GB')
    const endRegDay = new Date(endRegistration).toLocaleDateString('en-GB')
    const startMarathonDay = new Date(startMarathon).toLocaleDateString('en-GB')
    

   const navigate = useNavigate()

    const registerButtonHandle = () => {
        const startRegDay = new Date(startRegistration).getTime()
        const endRegDay = new Date(endRegistration).getTime()
        const currentDate = new Date().getTime()
      console.log("click");
        if(startRegDay<currentDate && currentDate<endRegDay){
          navigate(`/marathon-register/${_id}`)
        }else{
          alert("Registration Not Valid")
        }

    }

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
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Start Registration:</span> {startRegDay}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>End Registration:</span> {endRegDay}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Start Marathon:</span> {startMarathonDay}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Description:</span> {description}</h1>
                    <h1 className='text-lg lg:text-xl'><span className='font-semibold'>Registration count :</span> {apply_count}</h1>
                </div>
            </div>
            <div className='flex gap-2 mx-auto'>
                <Link to='/marathons' className='btn  border-2 border-gray-400 font-bold text-lg my-10'>
                    <IoMdArrowRoundBack /> Back
                </Link>
                <button  onClick={registerButtonHandle} className='btn bg-lime-300 border-2 border-gray-400 font-bold text-lg  my-10'>
                    Register
                </button>
            </div>
        </div>
    );
};

export default MarathonDitails;
