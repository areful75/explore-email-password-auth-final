import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        setError('');
        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setSuccess(true);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            });
    }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0  mt-12">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Please Login!</h1>

                <form onSubmit={handleLogin} >
                    <label className="label">Email</label>
                    <input name="email" type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    
                        <input
                            name="password"
                            type= 'password'
                            className="input"
                            placeholder="Password" />

                    
                    <br />
                    <button className="btn btn-neutral mt-4">Signup</button>
                </form>
                <p>New to this website?Please <Link to='/signup' className='text-green-500 underline'> Signup</Link></p>
                {
                    error && <p className='text-red-500 mt-4'>{error}</p>
                }
                {
                    success && <p className='text-green-500 mt-4'>Login successful!</p>
                }
                
            </div>
        </div>
    );
};

export default Login;