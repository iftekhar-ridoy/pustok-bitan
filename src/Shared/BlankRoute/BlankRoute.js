import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'

const BlankRoute = () => {
    return (
        <div>
            <div className='flex justify-center my-44'>
                <div className='p-3 h-80'>
                    <p className='text-8xl font-bold text-red-600 text-center my-3'>Oops!</p>
                    <p className='font-semibold text-3xl text-center my-3'>Error Code: 404</p>
                    <p className='text-3xl text-center my-3'>We can't seem to find the page you are looking for.</p>
                    <p className='text-center my-3'>Go back to <Link to='/' className='fw-bold text-green-800 font-bold flex items-center justify-center text-xl'> Putok Bitan (পুস্তক বিতান) <FaArrowRight className='ml-3'></FaArrowRight> </Link></p>
                </div>
            </div>
        </div>
    );
};

export default BlankRoute;