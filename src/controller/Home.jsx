import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Logout from './Logout';

function Home() {
  const navigate = useNavigate();
 
  const handleTeacherClick = () => {
    const role = sessionStorage.getItem('role');
    if (role === 'teacher') {navigate("/teacher")}
    else {toast.error("Please login as teacher to enter this page")}
  };
  const handleStudentClick = () => {
    const role = sessionStorage.getItem('role');
    if (role === 'student'||role==='teacher') {navigate("/student");}
    else {toast.error("Please login as teacher or student to enter this page");}
  };
  const handleParentClick = () => {
    const role = sessionStorage.getItem('role');
    if(role === 'parent'){navigate("/parent")}
    else {toast.error("Please login as parent to enter this page");}
  }
  
  return <div className='container2'>
    <div className='container3'>
        <h1 className='header'>
          Welcome to Educational platform
        </h1>
     
      <div className='container4'>
        <Button onClick={handleTeacherClick} className='box teacher'>
          Teacher
        </Button>
        <Button onClick={handleStudentClick} className='box student'>
          Student
        </Button>
        <Button onClick={handleParentClick} className='box parent'>
          Parent
        </Button>
        <div className='logout'><Logout/></div>
        </div>
        
        </div>
      </div>
      
      
}

export default Home;
