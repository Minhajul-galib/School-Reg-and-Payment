import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useStudents from '../../hooks/useStudents';
import Logo from '../Logo/Logo';
import './StudentPayment.css';
import Swal from 'sweetalert2'
import useStuPayment from '../../hooks/useStuPayment';




const StudentPayment = () => {
    const [allStuPayments] = useStuPayment([]);
    const [studentPaymentReco, setStudentPaymentReco] = useState([]);
    const [stuPayRecoID, setStuPayRecoID] = useState([]);
    const [stuMonthChcek, setStuMonthChcek] = useState(0);

    const [allStudent] = useStudents([]);
    const [allStudents, setAllStudents]= useState();
    const [studentName, setStudentName]= useState('Your Name');
    const [studentMainID, setStudentMainId]= useState(false);
    const [studentClass, setStudentClass]= useState('Your Class No');
    const [studentSection, setStudentSection]= useState('Your Section');
    const [stuPayments, setStuPayments]=useState([]);
    const ref = useRef();
    useEffect(()=>{
        setAllStudents(allStudent)
    },[allStudent]);


    useEffect(()=>{
        setStudentPaymentReco(allStuPayments)
    },[allStuPayments])

    console.log(studentPaymentReco);



    const date = new Date();
    const getDate = String(date)
    const dateArray = getDate.split(" ");
    const mainDate= dateArray[2]+' '+dateArray[1]+' '+dateArray[3];

    const handleStudentId =e=>{
        const fieldStudentId = e.target.value;
        setStudentMainId(fieldStudentId);
        const getStudentWithID = allStudents?.filter(allStudent => allStudent.StudentId === fieldStudentId);
        const getStuWithId = getStudentWithID[0];
        
        
        // check Student Payment Record 
        const getStudentIDReco = studentPaymentReco?.filter(studentPaymentRecos => studentPaymentRecos.StudentId === fieldStudentId);
        setStuPayRecoID(getStudentIDReco);



        if (getStuWithId?.name && getStuWithId?.stuClass) {
            setStudentName(getStuWithId?.name);
            setStudentClass(getStuWithId?.stuClass);
            setStudentSection(getStuWithId?.stuSection);
        }else{
            setStudentName('Searching Name');
            setStudentClass('Searching Class No');
            setStudentSection('Searching Section');
        }
    } 

    const checkPaymentMonth =e=>{
        const studentMontPay = e.target.value;
        const checktuPayMonth = stuPayRecoID?.filter(getStudentIDRecos => getStudentIDRecos?.PaymentMonth === studentMontPay)
        setStuMonthChcek(checktuPayMonth.length)

    }

    const handleStudentPayment =e=>{
        e.preventDefault();
        const PaymentMonth = e.target.paymentMonth.value;
        const StuPaymentDetails = {StudentId:studentMainID, name:studentName, stuClass:studentClass, 
            stuSection: studentSection, PaymentMonth:PaymentMonth, Tdate:mainDate}

        if(studentMainID && studentName !=="Your Name" && PaymentMonth !== "Month"){
            if(!stuMonthChcek){
                fetch('https://school-reg-ibbl.vercel.app/stuPayment',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(StuPaymentDetails)
                })
                .then(res=>res.json())
                .then(data=>{
                    const newStuPaymentDetails = [...StuPaymentDetails];
                    setStuPayments(newStuPaymentDetails);
                    console.log(newStuPaymentDetails);
                })
                .catch(err=>console.log(err))

                e.target.reset();
                Swal.fire(
                    'Thank You!',
                    'Payment Successfully Send',
                    'success'
                )
            }
            else{
                Swal.fire(
                    'OOPS!',
                    'Fee of this month is already given',
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
        <div className='StudentPayment'>
            <div className="style-div AddStudentID-div">
                <Logo></Logo>
                <NavLink className='all-btn' to='/'>Back Home</NavLink>
                <h4 className='mb-5 mt-3'>Send Student Payment</h4>
                <div className="AddStudentID-content mb-4">
                    <form onSubmit={handleStudentPayment}>
                        <div className='AddStudentID-form-div'>
                            <input type="text" name='StudentId' onChange={handleStudentId} placeholder='Student ID' />
                        </div>
                        <div onChange={checkPaymentMonth} className='AddStudentID-form-div'>
                            <select name="paymentMonth" id="paymentMonth">
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
                        
                        <div className='AddStudentID-form-div'>
                            <p>{studentName}</p>
                        </div>
                        <div className='AddStudentID-form-div'>
                            <p>{studentClass}</p>
                        </div>
                        <div className='AddStudentID-form-div'>
                            <p>{studentSection}</p>
                        </div>
                        <div className='AddStudentID-form-div'>
                            <input className='all-btn' type="submit" value='Send Payment' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default StudentPayment;