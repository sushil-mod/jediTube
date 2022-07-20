import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSignupHandler } from '../../features/authentication/authSlice';
import './auth.css';

export function Signup() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userToken } = useSelector((store)=> store.authentication );

    const [ signupInput , setSignInput ] =useState({ email:"",password:"",firstName:"",lastName:"" });


    const signupInputHandler = (e)=>{
       
        setSignInput({...signupInput,[e.target.name]:e.target.value})
      }

     

    const signupSubmitHandler = (e,{ email,password,firstName,lastName }) => {
        e.preventDefault();
        
        dispatch( userSignupHandler({ email,password,firstName,lastName }) );
    }

    useEffect(()=>{
        if( userToken ){
           navigate( "/" ,{replace: true })
         }
      },[userToken]);

  return (
    <div className="flex-center calc-height" >
        <form className="form-auth flex-center flex-col bx-shadow text-color" onSubmit={(e)=>signupSubmitHandler(e,signupInput)}>
            <div className="form-logo wd-100">
                <Link to="/"> 
                    <div className="nav-logo flex-center flex-col">
                        <i className="fas fa-jedi nav-logo-icon"></i>
                        <span className="nav-logo-txt">Jedi Tube</span>
                    </div>
                </Link>
            </div>
            <div className="form-login">
                <h2 className="padd-top-md">Signup</h2>
            </div>
            <div className="form-input padd-md wd-100">
                <div className="input-container wd-100">

                    <div className="flex-space-btw ">
                        <div> 
                            <label className="padd-top-md" htmlFor="">First Name </label>
                            <input type="text" name='firstName' placeholder="Enter First Name" onChange={(e) => signupInputHandler(e) } />
                        </div>
                        <div> 
                            <label className="padd-top-md" htmlFor="">Last Name </label>
                            <input type="text" name='lastName' placeholder="Enter Last Name" onChange={(e) => signupInputHandler(e) }  />
                        </div>
                    </div>

                    <label className="padd-top-md" htmlFor="">Email Id</label>
                    <input type="email" name='email' placeholder="Enter Email Id" onChange={(e) => signupInputHandler(e) }  />

                    <label className="padd-top-md" htmlFor="">Password</label>
                    <input type="password" name='password' placeholder="Enter Password" onChange={(e) => signupInputHandler(e) }   />

                    <label className="padd-top-md" htmlFor="">Confirm Password</label>
                    <input type="password" name='confpassword' placeholder="Enter Password" onChange={(e) => signupInputHandler(e) }  />

                </div>
                <div className="flex-space-btw padd-top-md wd-100">
                    <span><input type="checkbox" /><span className="padd-left-sm">I aceept all terms & conditions</span> </span>
                </div>
            </div>

            <div className="form-btn ">
                <button className="btn login padd-sm" type='submit'>Create New Account</button>
            </div>
            <div className="form-next padd-md ">
                <span> <Link className='text-color' to="/login" >Already have an account<i className="fas fa-angle-right padd-left-sm"></i></Link></span>
            </div>
        </form>
    </div>
  )
}


