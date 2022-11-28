import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { BiErrorCircle } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hook/useTitle';
import useToken from '../../Hook/useToken';


const Login = () => {
    useTitle('Login');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { setUser, signInUser, googleSignIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signInUser(data.email, data.password)
            .then(res => {

                const user = res.user;
                console.log(user);
                setUser(user);
                toast.success('Login Successful');
                setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message);
            })
    }

    const saveUser = (name, email, role, image) => {
        const user = {
            name,
            email,
            role,
            image
        };
        fetch('https://pustok-bitan-server.vercel.app/users', {
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
                const role = 'Buyer';
                console.log(user);
                setUser(user);
                saveUser(user.displayName, user.email, role, user.photoURL);
                toast.success('Login Successful');
                navigate(from, { replace: true });
                setLoginUserEmail(user.email);
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message);
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 max-w-[350px] shadow-xl rounded-xl p-5'>
                <h2 className='text-3xl font-semibold mb-10 text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label flex justify-start">
                            Email
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.email &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            Password
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password &&
                            <p className='text-red-600 flex items-center gap-2 text-sm'>
                                <BiErrorCircle></BiErrorCircle>
                                {errors.password?.message}</p>}

                        <label className="label"> <span className="label-text text-xs hover:underline">Forget Password?</span> </label>

                    </div>

                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>

                    <input className='btn btn-success w-full mt-4' value='Login' type="submit" />


                </form>

                <p className='text-sm text-center mt-3'>New to Putok-Bitan? <Link to='/register' className='font-semibold text-green-600 hover:underline'>Create new account</Link> </p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;