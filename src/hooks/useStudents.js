import React, { useEffect, useState } from 'react';

const useStudents = () => {
    const [allStudents, setAllStudents] = useState([]);

    useEffect(()=>{
        fetch('https://school-reg-ibbl.vercel.app/students')
        .then(res=>res.json())
        .then(data=>setAllStudents(data));

    },[])

    return [allStudents]
};

export default useStudents;