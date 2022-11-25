import React, { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center'>Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map(category =>
                        <div
                            key={category._id}>

                            <Link to='/category/:id'>
                                <p className='flex items-center gap-2 font-semibold bg-slate-200 hover:bg-slate-700 hover:text-white m-5 p-5 rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
                                    {category.title}
                                    <BsArrowRight></BsArrowRight>
                                </p>
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;