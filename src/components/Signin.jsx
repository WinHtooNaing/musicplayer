import React from 'react';
import "./signin.css";
const Signin = () => {
    return (
        <>
             <div className=" logincontainer">
            <h1 className='win'>WIN </h1>   
            <h1 className='music'>MUSIC</h1>
            </div>
        <div className="wrapper1">
            <div class="form-box register">
            <h2>Please Register</h2>
            <form action="#">

                <div class="input-box">
                    
                    <input type="text" required/>
                    <label >Username</label>
                </div>
                <div class="input-box">
                    
                    <input type="text" required/>
                    <label >Phonenumber</label>
                </div>
                <div class="input-box">
                    
                    <input type="text" required/>
                    <label >Email</label>
                </div>
                <div class="input-box">
                   
                    <input type="text" required/>
                    <label >Password</label>
                </div>
                <div class="remember-forgot">
                    <label >
                        <input type="checkbox"/>I agree to the terms & conditions
                    </label>
                    
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="login-register">
                    <p>Already have an account?  -<a href="/login" class="login-link"> Login</a></p>
                </div>
            </form>
        </div>
        </div>
        
    
        </>
    )
}



export default Signin;