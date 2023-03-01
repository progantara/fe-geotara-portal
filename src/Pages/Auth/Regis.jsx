import React from 'react'
import PortalTemplate from '../../Component/Layout'

//Image Login
import BgLogin from '../../Assets/img/BgLogin.jpg'
import sitara from '../../Assets/img/sitara.png'

import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={BgLogin} alt="" />
            </div>
            <div className='bg-emerald-50 flex flex-col justify-center'>
                <form className='rounded-lg max-w-[520px] w-full mx-auto bg-emerald-200 p-4 shadow-lg bg-emerald-100/80'>
                    <div className='relative h-10 w-32'>
                        <img className='absolute h-25 w-20 -left-10 -top-10' src={sitara} alt=""></img>
                    </div>
                    <h2 className='text-emerald-800 text-opac ity-100 text-4xl font-bold text-center py-3'>LOGIN</h2>
                    <div className='mx-7 flex flex-col text-green-800 font-semibold'>
                        <label>Nama</label>
                        <input className='p-4 rounded-lg text-xs my-2' type="text" placeholder='Nama Lengkap' />
                    </div>
                    <div className='mx-7 flex flex-col text-green-800 font-semibold '>
                        <label>Email</label>
                        <input className='p-4 rounded-lg text-xs my-2' type="text" placeholder='john.doe@gmail.com' />
                    </div>
                    <div className='mx-7 flex flex-col text-green-800 font-semibold '>
                        <label>Username</label>
                        <input className='p-4 rounded-lg text-xs my-2' type="text" placeholder='Username' />
                    </div>
                    <div className='mx-7 flex flex-col text-green-800 font-semibold '>
                        <label>Password</label>
                        <input className='p-4 rounded-lg text-xs my-2' type="password" placeholder='password' />
                    </div>
                    <div className='mx-7 flex flex-col text-green-800 font-semibold '>
                        <label>Re - Password</label>
                        <input className='p-4 rounded-lg text-xs my-2' type="password" placeholder='Re - password' />
                    </div>
                    <div className='my-4'>
                        <Link
                            to="/Login"
                            class="mx-7 focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Daftar
                        </Link>
                    </div>
                    <div className='mt-4 mx-7 text-sm text-green-900 inline-block shadow-green-200/30'>
                        <span>Sudah Punya Akun? </span>
                        <Link
                            to="/Login"
                            class="font-bold"
                        >
                            Masuk!
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;