import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Teacher() {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(route);
  };

  return <>
    <div className='container2'>
      <h1 className="header">Teacher Dashboard</h1>
      <div className="container3">
        <Button onClick={() => handleRoute('/mark')} className='box'>Go to Mark Entry</Button>
        <Button onClick={() => handleRoute('/attendance')} className='box'>Go to Attendance Entry</Button>
        <Button onClick={() => handleRoute('/timetable')} className='box'>Go to Test Timetable</Button>
        <Button onClick={()=>navigate('/home')}>Back</Button>
      </div>
    </div>
    </>
}
export default Teacher;
