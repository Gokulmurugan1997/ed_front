import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AxiosService from '../../utils/Axiosservice';
import Apiroutes from '../../utils/Apiroutes';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function Timetable() {
  const navigate = useNavigate();
  const [StudentEmail, setStudentEmail] = useState('');
  const [timetable, setTimetable] = useState([
    { subject: 'Math', date: '', time: '00:00' },
    { subject: 'Science', date: '', time: '00:00' },
    { subject: 'English', date: '', time: '00:00' },
    { subject: 'History', date: '', time: '00:00' },
    { subject: 'Geography', date: '', time: '00:00' },
  ]);

  const handleDateChange = (index, date) => {
    const newTimetable = [...timetable];
    newTimetable[index].date = date;
    setTimetable(newTimetable);
  };

  const handleTimeChange = (index, time) => {
    const newTimetable = [...timetable];
    newTimetable[index].time = time;
    setTimetable(newTimetable);
  };

  const handleEmailChange = (e) => {
    setStudentEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosService.post(Apiroutes.TIMETABLE.path, {
        StudentEmail,
        timetable,
        authenticate:Apiroutes.TIMETABLE.authenticate
      });
      if (response.status === 200) {
        toast.success('Timetable saved successfully');
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error occurred.");
      if(error.response.data.message=="Token Expired"){
        navigate('/login')}
    }
  };

  return (
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
                onChange={(date) => handleDateChange(index, date)}
                dateFormat="yyyy/MM/dd"
                className="form-control"
                required
                placeholderText="Select date"
              />
            </div>
            <div className="form-group mb-3">
              <Form.Label>{test.subject} Time:</Form.Label>
              <input
                type="time"
                value={test.time}
                onChange={(e) => handleTimeChange(index, e.target.value)}
                className="form-control"
                required
              />
            </div>
          </div>
        ))}
        <div className="text-center">
          <Button type="submit" variant="primary">
            Save Timetable
          </Button>
          <Button variant="primary" onClick={() => navigate('/teacher')}>
            Back
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Timetable;
