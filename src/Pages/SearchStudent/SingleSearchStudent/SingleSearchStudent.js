import React from 'react';
import './SingleSearchStudent.css'
import student from '../../../assets/img/student.png'


const SingleSearchStudent = (props) => {
    const {StudentId, Tdate, stuClass, stuSection, name, PaymentMonth} = props?.getSearchedStus;
    return (
        <div className='SingleSearchStudent'>
            
            <div className="student-img">
                <img src={student} alt="" width='100%' />
                </div>
                <div className="student-content">
                    <div className="student-content-div1">
                        <p>Student Name:</p>
                        <p>Class:</p>
                        <p>Section:</p>
                        <p>Student ID:</p>
                        <p>Payment Of:</p>
                        <p>Payment Date:</p>
                    </div>
                    <div className="student-content-div2">
                        <p>{name}</p>
                        <p>{stuClass}</p>
                        <p>{stuSection}</p>
                        <p>{StudentId}</p>
                        <p>{PaymentMonth}</p>
                        <p>{Tdate}</p>
                    </div>
                    {/* <div className="student-content-div"> */}
                    {/* </div> */}
                </div>

        </div>
    );
};

export default SingleSearchStudent;