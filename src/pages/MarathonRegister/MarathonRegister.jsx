import React, { useContext } from 'react';
import DatePicker from 'react-datepicker';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';

const MarathonRegister = () => {
    const marathon = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const { _id, title, marathonDitails, startRegistration, endRegistration, startMarathon, location, runningDistance, description, photoURL, apply_count } = marathon || {};
    const startMarathonDay = new Date(startMarathon).toLocaleDateString('en-GB')
    const handleRegister = ()=>{
        console.log("hi");
    }
    return (
        <div className='container mx-auto flex flex-col  items-center my-5'>
        <form onSubmit={handleRegister} className="card-body w-3/4 max-w-xl lg:max-w-5xl rounded-lg shadow-xl border-2 border-purple-200 shadow-purple-300 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className='flex lg:col-span-2 items-center '>
                <Link to={`/marathonDitails/${_id}`} className='text-3xl p-2 border-2 border-red'><IoMdArrowRoundBack /></Link>
                <h1 className='text-3xl font-bold text-center text-purple-400 mt-1 lg:col-span-2 mx-auto'>{title} -Marathon Register  </h1>
            </div>

            {/* Marathon Title */}
            <div className="flex flex-col mt-1">
                <label className="label text-xl">Marathon Title:</label>
                <input type="text" name='marathonTitle'  value={title} className="input input-bordered max-w-xs ml-16 capitalize" required readOnly/>
            </div>
            <div className="flex flex-col mt-1">
                <label className="label text-xl">User Email:</label>
                <input type="text" name='userEmail'  value={user.email} className="input input-bordered max-w-xs ml-16" required readOnly/>
            </div>
            <div className="flex flex-col mt-1">
                <label className="label text-xl">Marathon Start:</label>
                <input type="text" name='marathonStart'  value={startMarathonDay} className="input input-bordered max-w-xs ml-16" required readOnly/>
            </div>
            <div className="flex flex-col mt-1">
                <label className="label text-xl">Contact Number:</label>
                <input type="number" name='contactNumber'  placeholder='Contact Number' className="input input-bordered max-w-xs ml-16" required/>
            </div>
            <div className="flex flex-col mt-1">
                <label className="label text-xl">First Name:</label>
                <input type="text" name='firstName'  placeholder='First Name' className="input input-bordered max-w-xs ml-16 capitalize" required/>
            </div>
            <div className="flex flex-col mt-1">
                <label className="label text-xl">Last Name:</label>
                <input type="text" name='lastName'  placeholder='Last Name' className="input input-bordered max-w-xs ml-16 capitalize" required/>
            </div>
            <div className="flex flex-col mt-1">
                <label className="label text-xl">Age: </label>
                <input type="number" name='age'  placeholder='Age' className="input input-bordered max-w-xs ml-16" required/>
            </div>
            {/* submit button */}
            <div className="flex flex-col lg:col-span-2 mt-1 w-full max-w-lg mx-auto items-center">
                <input type="submit" className='btn bg-lime-300 border-2 border-gray-400 font-bold text-lg w-full' />
            </div>

        </form>
    </div>
    );
};

export default MarathonRegister;