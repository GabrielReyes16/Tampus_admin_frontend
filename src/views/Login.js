import React, {useContext, useState} from "react";
import "../assets/css/login.css";
import AuthContext from "../context/AuthContext";


function Login() {


    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginUser(email, password)

        console.log(email)
        console.log(password)

    }
    return (
        <div className="App">
            <h2>Sign in/up Form</h2>
            <div id="container">
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-google-plus-g" />
                            </a>
                            <a href="#" className="social">
                                <i className="fab fa-linkedin-in" />
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name='email'
                        />
                        <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name='password'
                        />
                        <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>
                                To keep connected with us, please login with your personal info
                            </p>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start the journey with us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
