import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AxiosService from '../utils/Axiosservice';
import Apiroutes from '../utils/Apiroutes';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Parent() {
  const [StudentEmail, setStudentEmail] = useState('');
  const [studentDetails, setStudentDetails] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setStudentEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AxiosService.get(Apiroutes.GETDETAILS.path, {
        params: { StudentEmail }
      });

      setStudentDetails(res.data);

      toast.success('Student details fetched successfully!');
    } catch (error) {
      toast.error('Error fetching student details: ' + error.message);
    }
  };

  return (
    <div className="container4">
      <h1 className="header">Parent</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Student Email:
            <input
              type="email"
              value={StudentEmail}
              onChange={handleEmailChange}
              placeholder="Enter student email"
              required
            />
          </label>
        </div>
        <div className='container3'>
        <div><Button type="submit">Submit</Button></div>
        <div><Button onClick={()=>navigate('/home')}>Back</Button></div>
        </div>
      </form>

      {studentDetails && (
        <div className="buttons-container">
          {studentDetails?.mark && (
            <Button
              onClick={() =>
                navigate('/parent/marks', { state: { marks: studentDetails?.mark } })
              }
            >
              View Marks
            </Button>
          )}
          {studentDetails?.Attendance && (
            <Button
              onClick={() =>
                navigate('/parent/attendance', { state: { attendance: studentDetails?.Attendance } })
              }
            >
              View Attendance
            </Button>
          )}
          {studentDetails?.timeTable?.timetable && (
            <Button
              onClick={() =>
                navigate('/parent/timetable', { state: { timetable: studentDetails?.timeTable?.timetable } })
              }
            >
              View Timetable
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default Parent;
