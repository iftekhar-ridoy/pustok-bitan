import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assetes/Logo/logo.png';
import { AuthContext } from '../../Context/AuthProvider';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiArrowDownSFill } from "react-icons/ri";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then(res => {
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between px-5 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='w-52' src={logo} alt="" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>


            <div className="navbar-end">

                <div className="form-control mr-2 hidden md:block">
                    <input type="text" placeholder="Search" className="input input-bordered w-full h-10" />
                </div>

                {
                    user && <p>
                        <Link>
                            <HiOutlineShoppingCart className='text-3xl'></HiOutlineShoppingCart>
                        </Link>
                    </p>
                }

                <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                        <div >
                            {
                                !user?.uid ?
                                    <p className='px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer '>Login</p>
                                    :
                                    <>
                                        {
                                            user?.photoURL ?
                                                <div className='flex items-center'>
                                                    <img className="ml-3 w-12 h-12 cursor-pointer rounded-full btn-circle avatar" src={user?.photoURL} alt='' />
                                                </div>
                                                :

                                                <div className='flex items-center'>
                                                    <p className='ml-3 px-2 py-1 font-semibold rounded outline outline-1 outline-green-600 hover:bg-green-600 hover:text-white cursor-pointer flex items-center'>{user?.displayName?.slice(0, 12)}
                                                        <RiArrowDownSFill className='ml-2'></RiArrowDownSFill></p>

                                                </div>
                                        }
                                    </>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/profile' className=''>{user?.displayName}</Link></li>
                                    <div className='divider my-0 py-0'></div>
                                    <li><Link to='/myOrders'>My Orders</Link></li>
                                    <li><Link to='/addProduct'>Add A Product</Link></li>
                                    <li><Link to='/myProducts'>My Products</Link></li>
                                    <li><Link to='/allBuyers'>All Buyers</Link></li>
                                    <li><Link to='/allSellers'>All Sellers</Link></li>

                                    <li><button onClick={handleLogout}>Logout</button></li>
                                </>
                                :
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                    <li><Link to='/register'>Register</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;