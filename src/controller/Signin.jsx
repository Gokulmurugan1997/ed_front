import React,{useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ApiRoutes from "../utils/Apiroutes";
import AxiosService from "../utils/Axiosservice";
import toast from "react-hot-toast";

function Signin() {
    let navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    let handleLogin = async (e) => {
        e.preventDefault();
        try {
            let formData = new FormData(e.target);
            let data = Object.fromEntries(formData);

            if (data.email && data.password) {
                let res = await AxiosService.post(ApiRoutes.SIGNUP.path, data);

                if (res.status === 200) {

                    toast.success(res.data.message);
                    navigate('/login');
                }
                
            } else {
                toast.error("Please input email, password and name");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };
  return (
    <div className="container1">
        <div className="login-img"></div>
        <div className="login_wrapper">
            <div className="login_header">
                <h1><b>Sign up</b></h1>
                
            </div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="data">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        className="input"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="data">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="data">Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="name"
                        name="name"
                        className="input"
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRole">
                    <Form.Label className="data">Role</Form.Label>
                    <Form.Select
                        type="role"
                        placeholder="role"
                        name="role"
                        className="input"
                        required
                    >
                        <option value="">Select a role</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                        <option value="parent">Parent</option>
                    </Form.Select>
                    
                </Form.Group>

                <div className="button">
                    <Button variant="primary" type="submit" className="data-2">
                        <b>Submit</b>
                    </Button>

                </div>
            </Form>
        </div>
    </div>
);
}

export default Signin