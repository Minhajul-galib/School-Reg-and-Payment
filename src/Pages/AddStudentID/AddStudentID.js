import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AddStudentID.css'
import Swal from 'sweetalert2'
import useStudents from '../../hooks/useStudents';



const AddStudentID = () => {
    const [allStudents] = useStudents([]);
    const [oldStudent, setOldStudent] = useState([]);
    const [studentMainID, setStudentFieldId] = useState([]);
    const [student, setStudent] = useState([])


    useEffect(()=>{
        setOldStudent(allStudents)
    },[allStudents])



    const studentIdCheck = e=>{
        const studentIDget = e.target.value;
        const CheckFromOldId = oldStudent?.filter(oldStudents=>oldStudents?.StudentId === studentIDget)
        setStudentFieldId(CheckFromOldId.length)
    }

console.log(studentMainID);

    const handleAddStudent = e=>{
        e.preventDefault();

        const name = e.target.StudentName.value;
        const StudentId = e.target.StudentId.value;
        const stuClass = e.target.stuClass.value;
        const stuSection = e.target.stuSection.value;
        const student = {name, StudentId, stuClass, stuSection}
        console.log(student);
        if(name && StudentId){
            if(!studentMainID){
                fetch('https://school-reg-ibbl.vercel.app/students',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(student)
                })
                .then(res=>res.json())
                .then(data=>{
                    const newStudents = [...student];
                    setStudent(newStudents)
                })
                .catch(err=>console.log(err))
                e.target.reset();
                Swal.fire(
                    'Thank You!',
                    'Student Added Successfully',
                    'success'
                )
            }else{
                Swal.fire(
                    'OOPS!',
                    'This user id is already taken',
                    'error'
                  )
            }
    }else{
        Swal.fire(
            'OOPS!',
            'Did you complete the form?',
            'question'
          )
    }
    }


    return (
        <div className='AddStudentID'>
            <div className="style-div AddStudentID-div">
                <Logo></Logo>
                <NavLink className='all-btn mb-2' to='/'>Back Home</NavLink>

                <h4 className='mt-3 mb-4'>Add Student Details</h4>
                <div className="AddStudentID-content mb-4">
                    <form onSubmit={handleAddStudent}>
                        <div className='AddStudentID-form-div'>
                            <input type="text" name='StudentName' placeholder='Student Name' />
                        </div>
                        <div className='AddStudentID-form-div'>
                            <input onChange={studentIdCheck} type="text" name='StudentId' placeholder='Student ID' />
                        </div>
                        <div className='AddStudentID-form-div'>
                            <select name="stuClass" id="stuClass">
                                <option value="class">Select Class</option>
                                <option value="Play">Play</option>
                                <option value="Nursery">Nursery</option>
                                <option value="Prep-I">Prep-I</option>
                                <option value="Prep-II">Prep-II</option>
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
                            <select name="stuSection" id="stuSection">
                                <option value="section">Select Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                            </select>
                        </div>
                        <div className='AddStudentID-form-div'>
                            <input className='all-btn' type="submit" value='Add Student' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddStudentID;