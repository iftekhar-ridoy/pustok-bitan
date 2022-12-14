import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assetes/Logo/logo.png';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import FooterCategory from './FooterCategory';


const Footer = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <footer className="mt-20 py-5 mb-5">
            <div className='divider py-5'></div>
            <div className='footer px-12'>
                <div className='my-auto'>
                    <Link to='/'>
                        <img className='w-80' src={logo} alt="" />
                    </Link>
                </div>
                <div>
                    <span className="footer-title">Categories</span>
                    {
                        categories?.map(category =>
                            <FooterCategory
                                key={category._id}
                                category={category}
                            ></FooterCategory>
                        )
                    }
                </div>
                <div>
                    <span className="footer-title">On Site</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/' className="link link-hover">About</Link>
                    <Link to='/' className="link link-hover">Blog</Link>
                    <Link to='/' className="link link-hover">Buyers</Link>
                    <Link to='/' className="link link-hover">Sellers</Link>
                    <Link to='/' className="link link-hover">Admin</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2 mt-10 px-12'>
                <p>Find Us: </p>
                <a href='https://www.facebook.com/iftekhar.ridoy07/'
                    target='_blank' rel="noopener noreferrer">
                    <FaFacebookSquare className='text-3xl text-blue-600'></FaFacebookSquare>
                </a>

                <a href='https://www.facebook.com/iftekhar.ridoy07/'
                    target='_blank' rel="noopener noreferrer">
                    <FaInstagramSquare className='text-3xl text-orange-600'></FaInstagramSquare>
                </a>

                <a href='https://www.linkedin.com/in/iftekhar-ridoy'
                    target='_blank' rel="noopener noreferrer">
                    <FaLinkedin className='text-3xl text-blue-600'></FaLinkedin>
                </a>

                <a href='https://github.com/iftekhar-ridoy'
                    target='_blank' rel="noopener noreferrer">
                    <FaGithubSquare className='text-3xl text-black'></FaGithubSquare>
                </a>
            </div>

            <div className='text-center mt-2 px-12'>
                <p>Copyright ?? 2022 - All right reserved by Md. Iftekharul Islam Ridoy</p>
            </div>

        </footer>
    );
};

export default Footer;