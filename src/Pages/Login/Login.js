import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
// import useToken from '../../Hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signInUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');

        signInUser(data.email, data.password)
            .then(res => {
                toast.success('Login Successful');
                const user = res.user;
                console.log(user);
                // setLoginUserEmail(data.email);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message);
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 max-w-[350px] shadow-xl rounded-xl p-5'>
                <h2 className='text-xl mb-10 text-center'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text text-xs hover:underline">Forget Password?</span> </label>

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>

                    <input className='btn btn-success w-full mt-4' value='Login' type="submit" />


                </form>

                <p className='text-sm text-center mt-3'>New to Putok-Bitan? <Link to='/register' className='font-semibold text-green-600 hover:underline'>Create new account</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;