import React, { useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ApiRoutes from "../utils/Apiroutes";
import AxiosService from "../utils/Axiosservice";
import toast from "react-hot-toast";

function Login() {
    let navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    let handleLogin = useCallback(async (e) => {
        e.preventDefault();
        try {
            let formData = new FormData(e.target);
            let data = Object.fromEntries(formData);

            if (data.email && data.password) {
                let res = await AxiosService.post(ApiRoutes.LOGIN.path, data);

                if (res.status === 200) {
                    sessionStorage.setItem('token', res.data.token);
                    sessionStorage.setItem('role', res.data.role);
                    sessionStorage.setItem('name', res.data.name);
                    sessionStorage.setItem('userId', res.data.id);
                    sessionStorage.setItem('email',res.data.email)
                    toast.success(res.data.message);
                }
                navigate('/home');
            } else {
                toast.error("Please input email and password");
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    });

    return (
        <div className="container1"> 
        <div className="cont">
            <div className="login_wrapper">
                <div className="login-img"></div>
                <div className="login_header">
                <h1><b>Your Education Hub</b></h1>
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

                    <div className="button">
                        <Button variant="primary" type="submit" className="data-2">
                            <b>Submit</b>
                        </Button>
                        <br />
                        <p>
                            <Link to='/forgetpassword' className="link">
                                <i><b>Forget password?</b></i>
                            </Link>
                            </p>
                            <p>
                        New User?
                    </p>
                            <Link to='/signin' className="link"><b>Sign Up here</b></Link>
                        
                    </div>
                </Form>
            </div>
            </div>
        </div>
    );
}

export default Login;
