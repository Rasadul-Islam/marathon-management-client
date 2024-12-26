import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from '../../context/AuthContext/AuthContext';


const AddMarathon = () => {
    const [startRegDate, setStartRegDate] = useState(new Date());
    const [endRegDate, setEndRegDate] = useState(new Date());
    const [marathonStartDate, setMarathonStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const userName = user?.displayName;
        const  userEmail= user.email;
        const title  = form.marathonTitle.value;
        const marathonDitails  = form.marathonDitails.value;
        const startRegistration  = startRegDate;
        const endRegistration = endRegDate;
        const startMarathon = marathonStartDate;
        const location  = form.location.value;
        const runningDistance = form.runningDistance.value;
        const description = form.description.value;
        const photoURL = form.photoURL.value;

        const addMarathonData ={title, marathonPublisher:{userName, userEmail, userPhoto: user.photoURL} , marathonDitails, startRegistration, endRegistration, startMarathon, location, runningDistance, description, photoURL }

        console.log(addMarathonData);
        
    }

    return (
        <div className='container mx-auto flex flex-col  items-center my-5'>
            <form onSubmit={handleSubmit} className="card-body w-3/4 max-w-xl lg:max-w-5xl rounded-lg shadow-xl border-2 border-purple-200 shadow-purple-300 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <h1 className='text-3xl font-bold text-center text-purple-400 mt-1 lg:col-span-2'>Add Marathons</h1>
                {/* Marathon Title */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Marathon Title:</label>
                    <input type="text" name='marathonTitle' placeholder="Marathon Title" className="input input-bordered max-w-xs ml-16" required />
                </div>
                {/* Marathon ditails */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Marathon Details :</label>
                    <textarea name='marathonDitails' className="textarea textarea-bordered max-w-xs ml-16" placeholder="Description"></textarea>
                </div>
                {/* Start Registration Date*/}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Start Registration Date :</label>
                    <DatePicker
                        className='input input-bordered max-w-xs ml-16'
                        selected={startRegDate} // Bind the selected date
                        onChange={date => setStartRegDate(date)} // Handle date change
                        dateFormat="dd/MM/yyyy"
                        name='startRegistrationDate'
                    />
                </div>
                {/* End Registration Date */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">End Registration Date :</label>
                    <DatePicker
                        className='input input-bordered max-w-xs ml-16'
                        selected={endRegDate} // Bind the selected date
                        onChange={date => setEndRegDate(date)} // Handle date change
                        dateFormat="dd/MM/yyyy"
                        name='endRegistrationDate'
                    />
                </div>
                {/* Marathon Start Date */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Marathon Start Date :</label>
                    <DatePicker
                        className='input input-bordered max-w-xs ml-16'
                        selected={marathonStartDate} // Bind the selected date
                        onChange={date => setMarathonStartDate(date)} // Handle date change
                        dateFormat="dd/MM/yyyy"
                        name='marathonStartDate'
                    />
                </div>
                {/* location */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Location :</label>
                    <textarea name='location' className="textarea textarea-bordered max-w-xs ml-16" placeholder="Location"></textarea>
                </div>
                {/* Running Distance */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl ">Running Distance :</label>
                    <select name='runningDistance' className="select select-bordered max-w-xs ml-16">
                        <option>3 k</option>
                        <option>10 k</option>
                        <option>25 k</option>
                    </select>
                </div>
                {/* description */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Description :</label>
                    <textarea name='description' className="textarea textarea-bordered max-w-xs ml-16" placeholder="Description"></textarea>
                </div>
                {/* Photo URL */}
                <div className="flex flex-col mt-1">
                    <label className="label text-xl">Photo URL:</label>
                    <input type="text" name='photoURL' placeholder="Marathon Image URL" className="input input-bordered max-w-xs ml-16" required />
                </div>

                {/* submit button */}
                <div className="flex flex-col lg:col-span-2 mt-1 w-full max-w-lg mx-auto items-center">
                    <input type="submit" className='btn bg-lime-300 border-2 border-gray-400 font-bold text-lg w-full' />
                </div>

            </form>
        </div>
    );
};

export default AddMarathon;