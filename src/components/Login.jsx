import React from 'react';
import './login.css';
const Login = () => {
    return (
        <>
             <div className=" logincontainer">
            <h1 className='win'>WIN </h1>   
            <h1 className='music'>MUSIC</h1>
            </div>
            
            <div className="wrapper">
        
        <div className="form-box login">
            
            <form action="#">
                <h2>Please Login </h2>
                <div className="input-box">
                    
                    <input type="email" required/>
                    <label >Email</label>
                </div>
                <div className="input-box">
                  
                    <input type="password" required/>
                    <label >Password</label>
                </div>
                <div className="remember-forgot">
                    <label >
                        <input type="checkbox"/>Remember me
                    </label>
                    <a href="/">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="login-register">
                    <p>Don't have an account?  -<a href="/signin" className="register-link"> Register</a></p>
                </div>
            </form>
        </div>
        </div>
            
           
        </>
    )
}



export default Login;