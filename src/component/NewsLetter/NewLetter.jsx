import React, { useState } from 'react';
import './newletter.css'

const NewLetter=()=>{
 
    const [email,setEmail]=useState('');
    const Subscribe=()=>{
            console.log(email);
    }

    return (
        <div className='newletter'>
            <h1>Get Exclusive Offer On Your </h1>
            <p>Subscribe to our newletter and stay update</p>
            <div>
                <input type='email' placeholder='Your Email Id' required onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <button onClick={Subscribe}>Subscribe</button>
            </div>
        </div>
    )
}

export default NewLetter;