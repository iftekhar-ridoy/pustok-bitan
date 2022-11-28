import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Assetes/Delivery/delivery.gif';

const Delivery = () => {
    return (
        <div className='mx-auto mt-20 mb-10 py-10 bg-white p-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='p-5'>
                    <img src={img} alt="" />
                </div>
                <div className='flex flex-col items-center md:items-start my-auto'>
                    <h2 className='text-4xl font-bold text-center md:text-start'>Get Your Desired Book Now !</h2>
                    <p>Register Now and pay for the book you want</p>
                    <p>Get the fastest delivery service</p>
                    <div className='flex gap-5 items-center mt-5'>
                        <Link to='/login'>
                            <p className='w-14 px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer '>Login</p>
                        </Link>
                        <Link to='/register'>
                            <p className='underline cursor-pointer'>Register</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;