import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import ApiRoutes from "../utils/Apiroutes";
import AxiosService from "../utils/Axiosservice";
import React, { useState } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState(""); // Initialize with an empty string

  const handleMail = async (e) => {
    e.preventDefault();

    // Validate if email is not empty
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await AxiosService.post(ApiRoutes.FORGETPASSWORD.path, { email });
      if (res.status === 200) {
        toast.success("Mail sent successfully");
      } else {
        toast.error("Mail not sent");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container1">
     <div className="cont">
      <div className="login_wrapper">
      <div className="login-img"></div>
        <div className="login_header">
          <h1><b>Forget Password</b></h1>
        </div>
        <Form onSubmit={handleMail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="data">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <div className="button">
            <Button 
              variant="primary" 
              type="submit" 
              className="data-2" 
              disabled={!email || !/\S+@\S+\.\S+/.test(email)} // Disable if email is invalid or empty
            >
              <b>Submit</b>
            </Button>
          </div>
        </Form>
      </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
