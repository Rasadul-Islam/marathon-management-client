import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLottie from '../../assets/lottie/login.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const LogIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from= location?.state || '/'
    console.log(from)
    const { logInUser, logInWithGoogle } = useContext(AuthContext);

    // Handle Google Sign-In
    const handleGoogleLogIn= async()=>{
        try{
            await logInWithGoogle()
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "LogIn Successful",
                showConfirmButton: false,
                timer: 1000
              });
            navigate(from, {replace:true})            
        }
        catch(error){
            console.log(error)
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "LogIn Faild",
                showConfirmButton: false,
                timer: 1000
              });
        }
    }

    // Handle email and password LogIn
    const handleLogIn= async e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
            await logInUser(email, password)
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "LogIn Successful",
                showConfirmButton: false,
                timer: 1000
              });
            navigate(from, {replace:true})            
        }
        catch(error){
            console.log(error)
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "LogIn Faild",
                text:"Check your Email or Password and try again",
                showConfirmButton: false,
                timer: 2000
              });
        }
    }


    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-base-200 gap-0 p-10">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10 md:my-20">
                <form onSubmit={handleLogIn} className="">
                    <h1 className="text-2xl font-bold mb-5">LogIn:</h1>
                    {/* google logIn botton */}
                    <div className="form-control mt-6">
                        <button
                            onClick={handleGoogleLogIn}
                            className="btn bg-transparent font-semibold text-lg"
                        >
                            <img src="https://i.ibb.co.com/ZdHFgMk/png-clipart-google-google.png" alt="Google Logo" className='w-8 h-8 bg-transparent rounded-full' />
                            <h1>Sign in with Google</h1>
                        </button>
                        <h1 className='divider my-5'>Or</h1>
                    </div>
                    {/* email, password logIn form */}
                    <div className="form-control">
                        <label className="text-lg font-semibold mb-2">Email</label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="text-lg font-semibold mb-2">Password</label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="LogIn" className="btn bg-lime-300 border-2 border-gray-400 font-bold text-lg" />
                    </div>
                    <h1 className="mt-5">
                        Don't you have an account? <Link to="/register" className="font-bold">Register.</Link>
                    </h1>
                </form>
            </div>
            <div className="w-full md:w-96">
                <Lottie animationData={loginLottie}></Lottie>
            </div>
        </div>
    );
};

export default LogIn;
