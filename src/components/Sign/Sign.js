import { useState } from 'react'
import './sign.css'

const Sign = () => {
    const [show, setShow] = useState(false)
    return (
        <div className='sign_container'>
            <form className='sign'>
                <h2>Sign Up</h2>
                <div className='First_Name'>
                    <input type="text" placeholder='Enter First Name' />
                </div>
                <div className='Last_Name'>
                    <input type="text" placeholder='Enter Last Name' />
                </div>
                <div className='Email'>
                    <input type="email" placeholder='Enter Email' />
                </div>
                <div className='pass'>
                    <span onClick={() => setShow(!show)} className='eye'>('.')</span>
                    <input type={show ? 'text' : 'password'} placeholder='Enter Password' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Sign
