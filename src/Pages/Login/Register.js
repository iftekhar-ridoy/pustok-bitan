import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { BiErrorCircle } from "react-icons/bi";
// import useToken from '../../Hooks/useToken';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signUpUser, updateUser, setUser, googleSignIn } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);

    // if (token) {
    //     navigate('/');
    // }

    const handleRegister = data => {
        console.log(data);
        setSignUpError('');


        signUpUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                // toast.success('user created successfully.')
                const userInfo = {
                    displayName: data.name,
                    role: data.selectRole
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.selectRole);
                        // navigate('/');
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err.message)
                setSignUpError(err.message)
            })
    }

    const saveUser = (name, email, selectRole) => {
        const user = {
            name,
            email,
            selectRole,
        };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('user created successfully.')
                navigate('/');
                // setCreatedUserEmail(email);
            })
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                const selectRole = 'Buyer';
                console.log(user);
                setUser(user);
                saveUser(user.displayName, user.email, selectRole);
                toast.success('Login Successful');
                navigate(from, { replace: true });
                // setLoginUserEmail(data.email);

            })
            .catch(err => {
                console.error(err.message)
                setSignUpError(err.message)

            })
    }



    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-full max-w-[700px] shadow-xl rounded-xl px-5 mx-5 py-10'>
                <h2 className='text-3xl font-semibold mb-10 text-center'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Name
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="text"
                                {...register("name", { required: "Name is required" })}
                                className="input input-bordered w-full " />

                            {errors.name &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Select Your Role
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <select
                                {...register("selectRole", { required: "Select Role is required" })}
                                className="select input-bordered w-full ">
                                <option>Buyer</option>
                                <option>Seller</option>
                            </select>

                            {errors.speciality &&
                                <p className='text-red-600 text-sm'>
                                    {errors.speciality?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Email
                                <span className="text-red-500 text-xl">*</span>
                            </label>
                            <input type="email"
                                {...register("email", { required: "Email Address is required" })}
                                className="input input-bordered w-full " />

                            {errors.email &&
                                <p className='text-red-600 flex items-center gap-2 text-sm'>
                                    <BiErrorCircle></BiErrorCircle>
                                    {errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label flex justify-start">
                                Password
                                <span className="text-red-500 text-xl">*</span>
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

                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                    <div className='flex justify-center'>
                        <input className='btn btn-success w-full max-w-sm mt-8' value='Register' type="submit" />
                    </div>
                </form>

                <p className='text-sm text-center mt-3'>Already Have an account? <Link to='/login' className='text-green-600 font-semibold hover:underline'>Login</Link> </p>
                <div className='divider'>OR</div>

                <div className='flex justify-center'>
                    <button onClick={handleGoogle} className='btn btn-outline w-full max-w-sm'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Register;