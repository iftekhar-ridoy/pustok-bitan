import React from 'react';

const Loader = () => {
    return (
        <div className='flex items-center justify-center my-5'>
            <div className="w-16 h-16 border-4 border-green-600 border-dashed border-t-transparent rounded-full animate-spin "></div>
        </div>
    );
};

export default Loader;