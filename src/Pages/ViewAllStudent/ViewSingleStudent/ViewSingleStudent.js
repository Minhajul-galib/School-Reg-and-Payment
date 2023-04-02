import React from 'react';
import student from '../../../assets/img/student.png';
import './ViewSingleStudent.css';



const ViewSingleStudent = (props) => {

    const {name, stuSection, stuClass, StudentId} = props?.student;


    return (
        <div className='ViewSingleStudent'>
            <div className="student-img">
                <img src={student} alt="" width='100%' />
            </div>
            <div className="student-content">
                <div className="student-content-div1">
                    <p>Student Name:</p>
                    <p>Student ID:</p>
                    <p>Class No:</p>
                    <p>Section:</p>
                </div>
                <div className="student-content-div2">
                    <p>{name}</p>
                    <p>{StudentId}</p>
                    <p>{stuClass}</p>
                    <p>{stuSection}</p>

                </div>
                {/* <div className="student-content-div"> */}
                {/* </div> */}
            </div>
            
        </div>
    );
};

export default ViewSingleStudent;