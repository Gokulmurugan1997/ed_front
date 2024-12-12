import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AxiosService from '../../utils/Axiosservice';
import Apiroutes from '../../utils/Apiroutes';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import { useNavigate } from 'react-router-dom';


function Timetable() {
  const navigate = useNavigate()
  const [StudentEmail, setStudentEmail] = useState('');
  const [timetable, setTimetable] = useState([
    { subject: 'Math', date: '', time: '' },
    { subject: 'Science', date: '', time: '' },
    { subject: 'English', date: '', time: '' },
    { subject: 'History', date: '', time: '' },
    { subject: 'Geography', date: '', time: '' },
  ]);

  const handleTimetableChange = (index, e) => {
    const { name, value } = e.target;
    const newTimetable = [...timetable];
    newTimetable[index][name] = value;
    setTimetable(newTimetable);
  };

  const handleEmailChange = (e) => {
    setStudentEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(timetable);
      const response = await AxiosService.post(Apiroutes.TIMETABLE.path, { 
        StudentEmail,
        timetable,
      });
      if (response.status === 200) {
        toast.success('Timetable saved successfully');
      }
    } catch (error) {
      toast.error('Error saving timetable: ' + error.message);
    }
  };

  return <>
    <div className="timetable-container">
      <h1 className="header text-center mb-4">Timetable</h1>

      <Form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <Form.Label>Student Email:</Form.Label>
          <Form.Control
            type="email"
            value={StudentEmail}
            onChange={handleEmailChange}
            placeholder="Enter student email"
            required
          />
        </div>

        {timetable.map((test, index) => (
          <div key={index} className="test-entry mb-4">
            <div className="form-group mb-3">
              <Form.Label>{test.subject} Date:</Form.Label>
              <DatePicker
                selected={test.date ? new Date(test.date) : null}
                onChange={(date) => handleTimetableChange(index, { target: { name: 'date', value: date } })}
                dateFormat="yyyy/MM/dd"
                className="form-control"
                required
                placeholderText="Select date"
              />
            </div>
            <div className="form-group mb-3">
              <Form.Label>{test.subject} Time:</Form.Label>
              <TimePicker
                value={test.time}
                onChange={(time) => handleTimetableChange(index, { target: { name: 'time', value: time } })}
                className="form-control"
                required
                clockIcon={null}
                clearIcon={null}
              />
            </div>
          </div>
        ))}

        <div className="text-center">
          <Button type="submit" variant="primary">Save Timetable</Button>
          <Button variant="primary" onClick={()=>navigate('/teacher')}>Back</Button>
        </div>
      </Form>
    </div>
    </>
}

export default Timetable;
