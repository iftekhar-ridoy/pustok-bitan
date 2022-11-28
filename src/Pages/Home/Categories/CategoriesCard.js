import React, { useContext } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loader from '../../../Shared/Loader/Loader';

const CategoriesCard = ({ category }) => {
    const { loading } = useContext(AuthContext);
    const { title, _id } = category;

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div className='mx-5'>
            <Link to={`/categories/${_id}`}>
                <p className='flex items-center gap-2 font-semibold bg-green-200 hover:bg-green-700 hover:text-white m-2 p-5 rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300'>
                    {title}
                    <BsArrowRight></BsArrowRight>
                </p>
            </Link>
        </div>
    );
};

export default CategoriesCard;