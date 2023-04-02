import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <div className="style-div Home-div">
                <div className="center-div-home">
                <Logo></Logo>

                <div className="home-content">
                    <h2 className='pb-4'>School Fee Payment Platform</h2>
                    <div className="home-btn-div">
                        <NavLink className='all-btn' to='/AddStudentID'>Add Student ID</NavLink>
                        {/* <NavLink className='all-btn' to='/ViewAllStudent'>View All Student IDs</NavLink> */}
                        <NavLink className='all-btn' to='/SearchStudent'>Track Student Payment</NavLink>
                        <NavLink className='all-btn' to='/StudentPayment'>Make Payment</NavLink>
                        <NavLink className='all-btn' to='/ViewStudentById'>View Student By Id</NavLink>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;