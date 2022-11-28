import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'
import img from '../../Assetes/NotFound/not found.png';

const BlankRoute = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-24'>
                <div className='p-3 grid grid-cols-1 md:grid-cols-2 max-w-3xl'>
                    <div className='flex  items-center p-10'>
                        <img src={img} className='w-fit' alt="blank" />
                    </div>
                    <div className='my-auto'>
                        <p className='text-3xl text-center my-3'>We can't seem to find the page you are looking for.</p>
                        <p className='text-center my-3'>Go back to <Link to='/' className='fw-bold text-green-800 font-bold flex items-center justify-center text-xl'> Putok Bitan (পুস্তক বিতান) <FaArrowRight className='ml-3'></FaArrowRight> </Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlankRoute;