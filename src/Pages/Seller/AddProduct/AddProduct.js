import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiErrorCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostkey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddProduct = (data) => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const product = {
                        sellerName: user?.displayName,
                        sellerEmail: user?.email,
                        bookName: data.bookName,
                        bookCategory: data.bookCategory,
                        bookOrginalPrice: data.bookOrginalPrice,
                        bookResalePrice: data.bookResalePrice,
                        bookCondition: data.bookCondition,
                        sellerPhone: data.phone,
                        location: data.location,
                        purchaseYear: data.purchaseYear,
                        usageTime: data.usageTime,
                        image: imgData.data.url,
                        description: data.description,
                    }

                    // save doctors data to the database
                    fetch('http://localhost:5000/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`Book added successfully`);
                            navigate('/myProducts')
                        })


                }
            })

    }

    return (
        <div className='max-w-5xl mx-auto flex flex-col justify-center items-center'>
            <div className='w-full max-w-[700px] shadow-xl rounded-xl px-5 mx-5 py-10'>
                <h2 className='text-3xl font-semibold mb-10 text-center'>Add A Product</h2>

                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Book Name
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="text"
                                {...register("bookName", { required: "Book Name is required" })}
                                placeholder='a gift of fire'
                                className="input input-bordered w-full rounded-md"
                            />

                            {errors.bookName &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.bookName?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Book Category
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="text"
                                {...register("bookCategory", { required: "Category is required" })}
                                placeholder='CSE'
                                className="input input-bordered w-full rounded-md"
                            />

                            {errors.bookCategory &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.bookCategory?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Orginal Price
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="number"
                                {...register("bookOrginalPrice", { required: "Book's Orginal Price is required" })}
                                className="input input-bordered w-full rounded-md" />

                            {errors.bookOrginalPrice &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.bookOrginalPrice?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Resale Price
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="number"
                                {...register("bookResalePrice", { required: "Book's Resale Price is required" })}
                                className="input input-bordered w-full rounded-md " />

                            {errors.bookResalePrice &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.bookResalePrice?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Book Condition
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <select
                                {...register("bookCondition", { required: "Book Condition is required" })}
                                className="select input-bordered w-full rounded-md">
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>

                            {errors.bookCondition &&
                                <p className='text-red-600 text-sm'>
                                    {errors.bookCondition?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Phone
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="number"
                                {...register("phone", { required: "Phone Number is required" })}
                                className="input input-bordered w-full rounded-md" />

                            {errors.phone &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.phone?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Location
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="text"
                                {...register("location", { required: "Location is required" })}
                                className="input input-bordered w-full rounded-md" />

                            {errors.location &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.location?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Purchase Year
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="number"
                                {...register("purchaseYear", { required: "Purchase Year is required" })}
                                className="input input-bordered w-full rounded-md" />

                            {errors.purchaseYear &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.purchaseYear?.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Usage time (month)
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="number"
                                {...register("usageTime", {
                                    required: "Usage Time is required"
                                })}
                                placeholder='example: 10'
                                className="input input-bordered w-full rounded-md" />

                            {errors.usageTime &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.usageTime?.message}</p>}
                        </div>



                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Image
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="file"
                                {...register("image", { required: "Image is required" })}
                                className="input input-bordered w-full h-fit p-2 rounded-md"
                            />

                            {errors.image &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.image?.message}</p>}
                        </div>

                    </div>

                    <div className="form-control w-full mt-2">
                        <label className="label flex justify-start">
                            Description
                        </label>
                        <textarea
                            {...register("description", {
                                required: "Usage Time is required"
                            })}
                            className="textarea textarea-bordered text-base rounded-md" placeholder="any comments"></textarea>
                    </div>


                    <div className='flex justify-center'>
                        <input className='btn btn-success w-full max-w-sm mt-8 rounded-md' value='Submit' type="submit" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;