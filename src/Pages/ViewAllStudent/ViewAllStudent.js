import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useStudents from '../../hooks/useStudents';
import Logo from '../Logo/Logo';
import './ViewAllStudent.css'
import ViewSingleStudent from './ViewSingleStudent/ViewSingleStudent';

const ViewAllStudent = () => {

    const [getStudent, setGetStudent] = useState([]); 

    const [allStudents] = useStudents([]);

    useEffect(()=>{
        setGetStudent(allStudents)
    },[allStudents])


    return (
        <div className='ViewAllStudent'>
            <div className="style-div">
                <div className="ViewAllStudent-content">
                    <div className="ViewAllStudent-head">
                        <div className="ViewAllStudent-logo">
                            <Logo></Logo>
                        </div>
                <NavLink className='all-btn mb-5' to='/'>Back Home</NavLink>

                    </div>
                    <div className="ViewAllStudent-body mt-5">
                        {
                            getStudent?.map(student=>
                                <ViewSingleStudent key={student?._id} student={student}></ViewSingleStudent>
                                )
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ViewAllStudent;