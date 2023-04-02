import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useStuPayment from '../../hooks/useStuPayment';
import './ViewStudentById.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
  

const ViewStudentById = () => {
    const [allStudents] = useStuPayment([]);
    const [getAllStu, setgetAllStu] = useState([])
    const [searchStuId, setSearchStuId] = useState([]);
    const [stuTotalPayment, setStuTotalPayment] = useState([]);
    const [stuName, setStuName] = useState('Name With Your Id');
    const [stuCls, setStuCls] = useState('Class With Your Id');
    const [stuSec, setStuSec] = useState('Section With Your Id');

    useEffect(()=>{
        setgetAllStu(allStudents)
    },[allStudents])


    // console.log(allStudents);

// Search With ID 
const hangeGetStudentId = e=>{
    const searchId = e.target.value;
    const getSearchedStudent = getAllStu?.filter(getAllStus =>getAllStus?.StudentId === searchId)
    setSearchStuId(getSearchedStudent)
    const getDetails = getSearchedStudent[0];
    let i = 0;
    getSearchedStudent?.map(getSearchedStudents => console.log(getSearchedStudents.payment))
    if(getSearchedStudent.length){
        
        setStuName(getDetails.name);
        setStuCls(getDetails.stuClass);
        setStuSec(getDetails.stuSection);
    }
    else{
        
        setStuName('Searching Name')
        setStuCls('Searching Class')
        setStuSec('Searching Section')
    }
}
console.log(searchStuId);
const payment = 500;
const allmonth =searchStuId.map(searchStuId => (searchStuId.PaymentMonth));
    console.log(allmonth.length);
    
      
    return (
        <div className='ViewStudentById'>
            <div className="style-div">
            <div className="student-details-div">
                <div className="stuId d-flex gap-5">
                    <h5>Stydent Id:</h5>
                    <div className='AddStudentID-form-div'>
                        <input type="text" onChange={hangeGetStudentId} name='GetStudentId' placeholder='Search With Student Id' />
                    </div>
                </div>
                <p>Student Name: {stuName}</p>
                <p>Student Class: {stuCls}</p>
                <p>Student Section: {stuSec}</p>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Payment Date</TableCell>
                        <TableCell align="right">Month</TableCell>
                        <TableCell align="right">Payment</TableCell>
                        <TableCell align="right">Total Balance</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {searchStuId.map((searchStu, index) =>(
                        <TableRow
                        key={searchStu?._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {searchStu?.Tdate}
                        </TableCell>
                        <TableCell align="right">{searchStu?.PaymentMonth}</TableCell>
                        <TableCell align="right">{payment}</TableCell>
                        <TableCell align="right">{([searchStu]?.length)?( (index + 1) * 500): 0 }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <NavLink to='/'>
                <Button variant="contained" className='mt-3'>Back Home</Button>
            </NavLink>
        
            </div>
        </div>
    );
};

export default ViewStudentById;