import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddMarathon = () => {
    const [startRegDate, setStartRegDate] = useState(new Date());
    const [endRegDate, setEndRegDate] = useState(new Date());
    const [marathonStartDate, setMarathonStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const userName = user?.displayName;
        const userEmail = user.email;
        const title = form.marathonTitle.value;
        const marathonDitails = form.marathonDitails.value;
        const startRegistration = form.startRegistrationDate.value;
        const endRegistration = form.endRegistrationDate.value;
        const startMarathon = form.marathonStartDate.value;
        const location = form.location.value;
        const runningDistance = form.runningDistance.value;
        const description = form.description.value;
        const photoURL = form.photoURL.value;

        const newMarathon = { title, userName, userEmail, marathonDitails, startRegistration, endRegistration, startMarathon, location, runningDistance, description, photoURL, apply_count: 0, }



        // send marathon data to the server
        fetch(`${import.meta.env.VITE_API_URL}/marathons`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMarathon)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your Marathon Successfully added!",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "There is some problem!",
                        icon: "error"
                    });
                }
            })


        // make post request by axios

        // const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/marathons`, newMarathon)

    }

    return (
        <div className='container mx-auto flex flex-col  items-center my-5'>
            <form onSubmit={handleSubmit} className="card-body w-3/4 max-w-xl lg:max-w-5xl rounded-lg shadow-xl border-2 border-purple-200 shadow-purple-300 grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className='flex lg:col-span-2 items-center '>
                    <Link to='/dashboard' className='text-3xl p-2'><IoMdArrowRoundBack /></Link>
                    <h1 className='text-3xl font-bold text-center text-purple-400 mt-1 lg:col-span-2 mx-auto'>Add Marathons</h1>
                </div>

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