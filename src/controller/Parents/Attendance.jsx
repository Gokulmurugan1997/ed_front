import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const ParentAttendance = () => {
  const location = useLocation();
  const attendance = location.state?.attendance;
const navigate = useNavigate()
  return (
    <div className="attendance-container">
      <h3>Attendance</h3>
      <table className="details-table">
        <thead>
          <tr>
            <th>Attendance Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendance && attendance.AttendancePercentage !== undefined ? (
            <tr>
              <td>{attendance.AttendancePercentage}%</td>
            </tr>
          ) : (
            <tr>
              <td>No attendance records available</td>
            </tr>
          )}
        </tbody>
      </table>
      <Button onClick={()=>navigate('/parent')}>Back</Button>
      </div>
  );
};

export default ParentAttendance;
