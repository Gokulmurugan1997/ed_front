import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AxiosService from '../../utils/Axiosservice';
import Apiroutes from '../../utils/Apiroutes';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Attendance() {
  const [attendance, setAttendance] = useState({
    StudentEmail: '',
    totalClasses: 0,
    attendedClasses: 0,
  });
  const navigate = useNavigate()

  const handleAttendanceChange = (e) => {
    const { name, value } = e.target;
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [name]: value,
    }));
  };

  const calculateAttendancePercentage = () => {
    const { totalClasses, attendedClasses } = attendance;
    if (totalClasses > 0) {
      return ((attendedClasses / totalClasses) * 100).toFixed(2);
    }
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const attendancePercentage = calculateAttendancePercentage();

    try {
      const response = await AxiosService.post(Apiroutes.ATTENDANCE.path, {
        StudentEmail: attendance.StudentEmail,
        AttendancePercentage: attendancePercentage},
        {authenticate:Apiroutes.STUDENTDETAILS.authenticate}
      );

      if (response.status === 200) {
        toast.success('Attendance saved successfully');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error occurred.");
      if(error.response.data.message=="Token Expired"){
        navigate('/login')}
    }
  };

  return (
    <div className="attendance-container">
      <h1 className="header">Mark Attendance</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Email:</label>
          <input
            type="email"
            name="StudentEmail"
            value={attendance.StudentEmail}
            onChange={handleAttendanceChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Total Classes:</label>
          <input
            type="number"
            name="totalClasses"
            value={attendance.totalClasses}
            onChange={handleAttendanceChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Attended Classes:</label>
          <input
            type="number"
            name="attendedClasses"
            value={attendance.attendedClasses}
            onChange={handleAttendanceChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Attendance Percentage:</label>
          <input
            type="text"
            value={`${calculateAttendancePercentage()}%`}
            readOnly
          />
        </div>

        <Button type="submit">Save Attendance</Button>
        <Button onClick={()=>navigate('/teacher')}>Back</Button>
      </form>
    </div>
  );
}

export default Attendance;
