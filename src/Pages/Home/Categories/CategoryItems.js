import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyItemModal from './BuyItemModal';
import Categories from './Categories';
import CategoryItemsCard from './CategoryItemsCard';

const CategoryItems = () => {
    const categoryItems = useLoaderData();
    const { title, items } = categoryItems;
    const [itemInfo, setItemInfo] = useState('');
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='text-3xl font-semibold mx-5 mb-5'>Category: {title}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5'>
                {
                    items?.map(item =>
                        <CategoryItemsCard
                            key={item.id}
                            item={item}
                            setItemInfo={setItemInfo}
                        ></CategoryItemsCard>)
                }
            </div>
            {
                items &&
                <BuyItemModal
                    itemInfo={itemInfo}
                    setItemInfo={setItemInfo}
                ></BuyItemModal>
            }

            <Categories></Categories>
        </div>
    );
};

export default CategoryItems;