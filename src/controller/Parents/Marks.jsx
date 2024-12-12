import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ParentMarks = () => {
  const location = useLocation();
  const marks = location.state?.marks;
  const navigate = useNavigate()

  return (
    <div className="container-parent">
      <h3 className='parent-header'>Marks</h3>
      <table className="details-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {marks && Object.keys(marks).length > 0 ? (
            Object.keys(marks).map((subject, index) => (
              <tr key={index}>
                <td>{subject}</td>
                <td>{marks[subject]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No marks available</td>
            </tr>
          )}
        </tbody>
        
      </table>
      <Button onClick={()=>navigate('/parent')}>Back</Button>
    </div>
  );
};

export default ParentMarks;
