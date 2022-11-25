import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryItems = () => {
    const categoryItems = useLoaderData();
    console.log(categoryItems.items);
    return (
        <div>

        </div>
    );
};

export default CategoryItems;