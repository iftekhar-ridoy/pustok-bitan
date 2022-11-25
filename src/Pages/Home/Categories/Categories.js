import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const { loading } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className=' mt-20 mb-10'>
            <h2 className='text-3xl text-center font-semibold mb-5'>Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    categories?.map(category =>
                        <CategoriesCard key={category._id}
                            category={category}
                        ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;