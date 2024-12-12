import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ParentTimetable = () => {
  const location = useLocation();
  const timetable = location.state?.timetable;
  const navigate = useNavigate()
  return (
    <div className="timetable-container">
      <div className='container4'>
      <h3>Timetable</h3>
      <table className="details-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {timetable && timetable.length > 0 ? (
            timetable.map((classSchedule, index) => (
              <tr key={index}>
                <td>{classSchedule.date}</td>
                <td>{classSchedule.subject}</td>
                <td>{classSchedule.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No timetable available</td>
            </tr>
          )}
        </tbody>
      </table>
      <Button onClick={()=>navigate('/parent')}>Back</Button>
      </div>
    </div>
  );
};

export default ParentTimetable;
