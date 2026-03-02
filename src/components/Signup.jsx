import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';


const Signup = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const termsAccepted = e.target.terms.checked;
        console.log(email, password);
        setSuccessMessage(false);
        setErrorMessage('');

        if (!termsAccepted) {
            setErrorMessage('You must accept the terms and conditions to sign up.');
            return;
        }

        //password validate
        const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

        if (pattern.test(password) === false) {
            setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccessMessage(true);
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message);
            });

    };
    return (


        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0  mt-12">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Please Signup!</h1>

                <form onSubmit={handleSignup}>
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <div className='relative'>
                        <input
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            className="input"
                            placeholder="Password" />
                        <button onClick={() => setShowPassword(!showPassword)}
                            className='absolute btn btn-xs right-6 top-2'>
                            {
                                showPassword ? <FaEye></FaEye> : <FaEyeSlash ></FaEyeSlash>

                            }
                        </button>
                    </div>
                    <div><a className="link link-hover">Forgot password?</a></div>

                    <label className="label">
                        <input name="terms" type="checkbox" className="checkbox" />
                        Accept terms and conditions
                    </label>
                    <br />
                    <button className="btn btn-neutral mt-4">Signup</button>
                </form>
                <p>Already have an account?.please <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                {
                    errorMessage && <p className='text-red-500 mt-4'>{errorMessage}</p>
                }
                {
                    successMessage && <p className='text-green-500 mt-4'>Signup successful!</p>
                }
            </div>
        </div>

    );
};

export default Signup;