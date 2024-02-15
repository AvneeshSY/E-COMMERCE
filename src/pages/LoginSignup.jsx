import React from 'react';
import './css/loginsignup.css'
const LoginSinup=()=>{
    return(
        <div className='loginsignup'>
          <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-filds">
               <input type="text" placeholder='Enter your name' />
               <input type='email' placeholder='Enter email' />
               <input type='password' placeholder='Enter password'/>
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>Already have an account ?<span>Login here</span></p>
            <div className="loginsignup-agree">
                <input type='checkbox' name='' id=''/>
                <p>By continuing, i agree to the of use & privacy policy.</p>
            </div>
            </div>  
        </div>
    )
}

export default LoginSinup;