import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assetes/Logo/logo.png';

const Navbar = () => {
    // const { user, logout } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     logout()
    //         .then(res => {
    //             navigate('/');
    //         })
    //         .catch(err => console.error(err))
    // }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>All Books</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Login</Link></li>
        {/* {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        } */}
    </>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
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
                <div className="form-control mr-1">
                    <input type="text" placeholder="Search book by name" className="input input-bordered w-full h-10" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" alt='' />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link>Profile</Link></li>
                        <li><Link>Dashboard</Link></li>
                        <li><Link>Logout</Link></li>
                    </ul>
                </div>
            </div>

            {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
        </div>
    );
};

export default Navbar;