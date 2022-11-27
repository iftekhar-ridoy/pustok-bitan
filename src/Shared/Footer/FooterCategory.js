import React from 'react';
import { Link } from 'react-router-dom';

const FooterCategory = ({ category }) => {
    const { title, _id } = category;
    return (

        <Link to={`/categories/${_id}`}>
            <p className='hover:underline'>
                {title}
            </p>
        </Link>

    );
};

export default FooterCategory;