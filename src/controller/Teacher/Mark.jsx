import React, { useState } from "react";
import AxiosService from "../../utils/Axiosservice";
import Apiroutes from "../../utils/Apiroutes";
import { Button, Form, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Mark() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState({
    StudentEmail: "",
    TeacherEmail: "",
    English: "",
    Maths: "",
    History: "",
    Science: "",
    Geography: "",
  });

  const handleMarkChange = (e) => {
    const { name, value } = e.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [name]: value,
    }));
  };

  const calculateTotalMarks = () => {
    const { StudentEmail, TeacherEmail, ...subjects } = marks;
    return Object.values(subjects).reduce(
      (total, mark) => total + (parseInt(mark) || 0),
      0
    );
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = { ...marks };
      const res = await AxiosService.post(Apiroutes.STUDENTDETAILS.path, data);

      if (res.status === 200) {
        toast.success("Student details submitted successfully!");
        navigate("/home");
      } else {
        toast.error("Failed to submit student details.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error occurred.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="teacher-container">
      <Card className="mark-entry-card">
        <Card.Body>
          <h1 className="header text-center mb-4">Student Details</h1>

          <div className="marks-section">
            <h2 className="text-center">Enter Marks for 5 Subjects</h2>
            <Form>
              <Form.Group controlId="TeacherEmail" className="mb-3">
                <Form.Label>Teacher Email</Form.Label>
                <Form.Control
                  type="email"
                  name="TeacherEmail"
                  value={marks.TeacherEmail}
                  onChange={handleMarkChange}
                  placeholder="Enter Teacher's Email"
                
                />
              </Form.Group>

              <Form.Group controlId="StudentEmail" className="mb-3">
                <Form.Label>Student Email</Form.Label>
                <Form.Control
                  type="email"
                  name="StudentEmail"
                  value={marks.StudentEmail}
                  onChange={handleMarkChange}
                  placeholder="Enter Student's Email"
                />
              </Form.Group>

              <Form.Group controlId="English" className="mb-3">
                <Form.Label>English</Form.Label>
                <Form.Control
                  type="number"
                  name="English"
                  value={marks.English}
                  onChange={handleMarkChange}
                  placeholder="Enter Marks"
                />
              </Form.Group>

              <Form.Group controlId="Maths" className="mb-3">
                <Form.Label>Maths</Form.Label>
                <Form.Control
                  type="number"
                  name="Maths"
                  value={marks.Maths}
                  onChange={handleMarkChange}
                  placeholder="Enter Marks"
                />
              </Form.Group>

              <Form.Group controlId="History" className="mb-3">
                <Form.Label>History</Form.Label>
                <Form.Control
                  type="number"
                  name="History"
                  value={marks.History}
                  onChange={handleMarkChange}
                  placeholder="Enter Marks"
                />
              </Form.Group>

              <Form.Group controlId="Science" className="mb-3">
                <Form.Label>Science</Form.Label>
                <Form.Control
                  type="number"
                  name="Science"
                  value={marks.Science}
                  onChange={handleMarkChange}
                  placeholder="Enter Marks"
                />
              </Form.Group>

              <Form.Group controlId="Geography" className="mb-3">
                <Form.Label>Geography</Form.Label>
                <Form.Control
                  type="number"
                  name="Geography"
                  value={marks.Geography}
                  onChange={handleMarkChange}
                  placeholder="Enter Marks"
                />
              </Form.Group>

              <div className="d-flex justify-content-between mt-4">
                <Button
                  variant="primary"
                  onClick={handleClick}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>

                <Button variant="secondary" onClick={() => navigate("/teacher")}>
                  Back
                </Button>
              </div>
            </Form>

            <p className="mt-3 text-center">Total Marks: {calculateTotalMarks()}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Mark;
