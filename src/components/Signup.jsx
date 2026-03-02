import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';

const Signup = () => {
    const [errorMessage,setErrorMessage]=useState('');
    const [successMessage,setSuccessMessage]=useState(false);
    const handleSignup = (e) => {
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        setSuccessMessage(false);
        setErrorMessage('');

        //password validate
        const pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

        if(pattern.test(password)=== false){
            setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
            return;
        }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result);
            setSuccessMessage(true);
        })
            .catch(error=>{
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
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Signup</button>
        </form>
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