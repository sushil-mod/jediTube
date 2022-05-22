import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './auth.css';
import { userLoginHandler } from '../../features/authentication/authSlice'

export function Login() {

  const [loginInput , setLoginInput]=useState({email:"",password:""});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { userToken } = useSelector((store)=> store.authentication )

  const loginInputHandler = (e)=>{
    console.log(e.target.name);
    setLoginInput({...loginInput,[e.target.name]:e.target.value})
  }

  const guestUserInput = {email:"",password:""}

  console.log(loginInput);
  console.log(location);

  const loginSubmitHandler = (e,{email,password}) => {
    e.preventDefault();
    // console.log( {email:email,password:password} +"hello");
    dispatch( userLoginHandler( {email,password} ) );

   
  }


 useEffect(()=>{
   if( userToken ){
      navigate( location?.state?.from?.pathname ,{replace: true })
    }
 },[userToken]);
  


  return (

    <div className="flex-center calc-height " >
        <form className="form-auth flex-center flex-col bx-shadow text-color" onSubmit={(e)=>loginSubmitHandler(e,loginInput)}>
            <div className="form-logo wd-100">
                <Link to="/"> 
                    <div className="nav-logo flex-center flex-col ">
                        <i className="fas fa-jedi nav-logo-icon"></i>
                        <span className="nav-logo-txt">Jedi Tube</span>
                    </div>
                </Link>
            </div>
            <div className="form-login">
                <h2 className="padd-top-md">Login</h2>
            </div>
            <div className="form-input padd-md wd-100" >
                <div className="input-container wd-100" >
                    <label className="padd-top-md" htmlFor="">Username</label>
                    <input type="email" name='email'  placeholder="Enter emailId" onChange={(e)=> loginInputHandler(e) } />

                    <label className="padd-top-md" htmlFor="">Password</label>
                    <input type="password" name='password'  placeholder="Enter Password" onChange={(e)=> loginInputHandler(e) } />
                </div>
                <div className="flex-space-btw padd-top-md wd-100">
                    <span><input type="checkbox" /><span className="padd-left-sm">Remember me</span> </span>
                    <Link className='text-color' to=""> Forgot Password ?</Link>
                </div>
            </div>

            <div className="form-btn ">
                <button className="btn login padd-sm margin-btm" type="submit">Login</button>
            </div>
            <div className="form-btn ">
                <button className="nav-login-btn">Login as guest</button>
            </div>
            <div className="form-next padd-md ">
                <span>
                    <Link className='text-color' to="/signup"> Create New Acoount<i className="fas fa-angle-right padd-left-sm"></i></Link></span>
            </div>
        </form>  
    </div>
  )
}

 
