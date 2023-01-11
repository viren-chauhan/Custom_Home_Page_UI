import React, { useState } from 'react'
import {Link} from 'react-router-dom'


export default function Login()
{ 

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    function showdata(){
        let data = {email, password}

        fetch('http://asiaerpapi.mobiginie.com/api/v1/adminlogin',{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log("Responce" , resp)
            })
        })
        console.log(data);
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>
            <div className='bg-gray-100 flex justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4 my-8'>
                    <h2 className='text-4xl font-bold pt-6 pb-2'>Login</h2>
                    <p className='flex flex-col pb-4 py-2'>Login to manage your account</p>
                    <div className='flex flex-col py-2'>
                        <label className='font-bold'>Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border p-2 rounded' type="email" name="email" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-bold'>Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border p-2 rounded' type="password" />
                    </div>
                    <div className=' flex justify-between'>
                        <p className='flex items-center'><input className='mr-1 border border-orange-800' type="checkbox" />Remember </p>
                        <p><Link className='text-blue-900 underline' to='/forgot'>Forgot Password?</Link></p>
                    </div>
                    <button onClick={showdata} className='border w-16 my-5 py-1.5 rounded bg-orange-500 hover:bg-orange-400 text-white'>LOGIN</button>
                </form>
            </div>
        </div>
    )
}
