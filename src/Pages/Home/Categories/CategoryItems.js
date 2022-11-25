import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';
import CategoryItemsCard from './CategoryItemsCard';

const CategoryItems = () => {
    const categoryItems = useLoaderData();
    const { title, items } = categoryItems;
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='text-3xl font-semibold mx-5 mb-5'>Category: {title}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5'>
                {
                    items?.map(item =>
                        <CategoryItemsCard
                            key={item.id}
                            item={item}
                        ></CategoryItemsCard>)
                }
            </div>
            <Categories></Categories>
        </div>
    );
};

export default CategoryItems;