import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import useStuPayment from '../../hooks/useStuPayment';
import './SearchStudent.css'
import SingleSearchStudent from './SingleSearchStudent/SingleSearchStudent';


const SearchStudent = () => {
    const [allStuPayments] = useStuPayment([]);
    const [getStuPayments, setGetStuPayments] = useState([]);
    const [getSearchedStuClass, setGetSearchedStuClass] = useState([]);
    const [getSearchedStuSection, setGetSearchedStuSection] = useState([]);
    const [getSearchedStuMonth, setGetSearchedStuMonth] = useState([]);
    const [searchStuId, setSearchStuId] = useState([]);
    const [getSearchedStu, setGetSearchedStu] = useState([]);
    
    useEffect(()=>{
            setGetStuPayments(allStuPayments) 
    },[allStuPayments])

    const handleSearchStu = e=>{
    
        const selectedClass = e.target.value; 
        const searchedStuClass = getStuPayments?.filter(getStuPayment => getStuPayment?.stuClass === selectedClass)
        setGetSearchedStuClass(searchedStuClass)
    }
    const handleSearchSection = e=>{
    
        // if (getStuPayments.length) {
        const selectedSection = e.target.value; 
        console.log(getSearchedStuClass);
        console.log(typeof(selectedSection));
        const getSearchedSection = getSearchedStuClass?.filter(getSearchedStuClasses =>getSearchedStuClasses?.stuSection == selectedSection)
        console.log(getSearchedSection);

      
        // // const selectedSection1 = String(selectedSection) 
        setGetSearchedStuSection(getSearchedSection)
    // }
        
    }
    const handleSearchMonth = e=>{
        const selectedMonth = e.target.value; 
        const getSearchedStudent = getSearchedStuSection?.filter(getStuPayment => getStuPayment?.PaymentMonth === selectedMonth)
        setGetSearchedStuMonth(getSearchedStudent)
    }
    
    // Search With ID 
    const hangeGetStudentId = e=>{
        const searchId = e.target.value; 
        const getSearchedStudent = getStuPayments?.filter(getStuPayment => getStuPayment?.StudentId === searchId)
        setSearchStuId(getSearchedStudent)
    }



    useEffect(()=>{
        setGetSearchedStu(getSearchedStuClass)
    },[getSearchedStuClass])
    useEffect(()=>{
        setGetSearchedStu(getSearchedStuSection)
    },[getSearchedStuSection])
    useEffect(()=>{
        setGetSearchedStu(getSearchedStuMonth)
    },[getSearchedStuMonth])
//     useEffect(()=>{
//         setGetSearchedStu(searchStuId)
//     },[searchStuId])
//     <div className='AddStudentID-form-div'>
//     <input type="text" onChange={hangeGetStudentId} name='GetStudentId' placeholder='Search With Student Id' />
// </div>
    return (
        <div className='SearchStudent'>
        <div className="style-div">
            <div className="SearchStudent-content">
                <div className="SearchStudent-head mb-4">
                    <div className="SearchStudent-logo">
                        <NavLink to='/'><img src={logo} alt="" width='100%' /></NavLink>
                    </div>

                    <div className="SearchStudent-search">
                        <form className='d-flex gap-2' action="">
                        {/* <NavLink to='/'>Back Home</NavLink> */}
                            
                       
                        <div className='AddStudentID-form-div'>
                            <select onChange={handleSearchStu} name="stuClass" id="stuClass">
                                <option value="class">Select Class</option>
                                <option value="1">Class: 1</option>
                                <option value="2">Class: 2</option>
                                <option value="3">Class: 3</option>
                                <option value="4">Class: 4</option>
                                <option value="5">Class: 5</option>
                                <option value="6">Class: 6</option>
                                <option value="7">Class: 7</option>
                                <option value="8">Class: 8</option>
                                <option value="9">Class: 9</option>
                                <option value="10">Class: 10</option>
                            </select>
                        </div>
                        <div className='AddStudentID-form-div'>
                            <select onChange={handleSearchSection} name="stuSection" id="stuSection">
                                <option value="section">Select Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </div>
                        <div className='AddStudentID-form-div'>
                            <select onChange={handleSearchMonth} name="paymentMonth" id="paymentMonth">
                                <option value="Month">Select Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="SearchStudent-body">

                    {
                        getSearchedStu?.map(getSearchedStus=><SingleSearchStudent key={getSearchedStus?._id} getSearchedStus={getSearchedStus}></SingleSearchStudent>)
                    }

                </div>
            </div>

        </div>
    </div>
    );
};

export default SearchStudent;