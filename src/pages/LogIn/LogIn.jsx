import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginLottie from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext/AuthContext';


const LogIn = () => {


    const {logInUser} = useContext(AuthContext);

    const handleLogIn= e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        logInUser(email, password)
        .then (result =>{
            console.log("logIn", result.user)
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-base-200 gap-0 p-10 ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10 md:my-20">
                <form onSubmit={handleLogIn} className="">
                    <h1 className='text-2xl font-bold mb-5'>LogIn:</h1>
                    <div className="form-control">
                        <label className="text-lg font-semibold mb-2">Email</label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="text-lg font-semibold mb-2">Password</label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="LogIn" className='btn bg-lime-300 border-2 border-gray-400 font-bold text-lg' />
                    </div>
                    <h1 className='mt-5'>Don't you have an account? <Link to="/register" className='font-bold'>Register.</Link></h1>
                </form>
            </div>
            <div className='w-full md:w-96'>
                <Lottie animationData={loginLottie}></Lottie>
            </div>
        </div>
    );
};

export default LogIn;