import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { BiErrorCircle } from 'react-icons/bi';
import { AuthContext } from '../../Context/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleUpdate = () => {

    }
    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <div className='max-w-sm mx-auto flex flex-col items-center justify-center mb-5'>
                <img src={user.photoURL} className='h-32 w-32 rounded-full border-2 border-green-600 p-1 mb-3' alt="" />
                <p className='text-center'>{user.displayName}</p>
            </div>
            <form onSubmit={handleSubmit(handleUpdate)} className='max-w-[820px] mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    <div className="form-control w-full max-w-sm mx-auto">
                        <label className="label flex justify-start">
                            Name
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            defaultValue={user?.displayName}
                            className="input input-bordered w-full " />

                        {errors.name &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-sm mx-auto">
                        <label className="label flex justify-start">
                            Change Image
                        </label>
                        <input type="file"
                            {...register("image", { required: "Image is required" })}
                            className="input input-bordered w-full h-fit py-2 px-5"
                        />

                        {errors.image &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.image?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-sm mx-auto">
                        <label className="label flex justify-start">
                            Email
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            defaultValue={user?.email}
                            disabled
                            className="input input-bordered w-full " />

                        {errors.email &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-sm mx-auto">
                        <label className="label flex justify-start">
                            Phone Number
                        </label>
                        <input type="number"
                            {...register("phoneNumber", {
                                required: "Phone Number is required",
                            })}
                            className="input input-bordered w-full" />

                        {errors.phoneNumber &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.phoneNumber?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-sm mx-auto">
                        <label className="label flex justify-start">
                            Role
                        </label>
                        <input type="text"
                            {...register("role", {
                                required: "Role is required",
                            })}
                            className="input input-bordered w-full" />

                        {errors.role &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.role?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-sm mx-auto">
                        <label className="label flex justify-start">
                            Password
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must include atleast one upperCase letter, special-character and number' }
                            })}
                            className="input input-bordered w-full" />

                        {errors.password &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.password?.message}</p>}
                    </div>
                </div>

                <div className='flex justify-center'>
                    <input className='btn btn-success w-full max-w-sm mt-8' value='Update' type="submit" />
                </div>
            </form>

        </div>
    );
};

export default Profile;