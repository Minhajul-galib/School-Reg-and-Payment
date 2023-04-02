import React, { useEffect, useState } from 'react';

const useStuPayment = () => {
    const [allStuPayments, setAllStuPayments] =useState([]);

    useEffect(()=>{
        fetch('https://school-reg-ibbl.vercel.app/stuPayment')
        .then(res=>res.json())
        .then(data=>setAllStuPayments(data));
        
    },[])

    return [allStuPayments]
};

export default useStuPayment;