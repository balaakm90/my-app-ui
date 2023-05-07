import { useRef } from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { validateUserLogin } from "../../../Generic/Functions";
export const Login = (props) => {
    const username = useRef();
    const password = useRef();
    let navigate = useNavigate();
    const handleForgotClick = (props) => {
        alert('Forgot');
    };
    const handleLoginSubmit = () => {
        let inputObj = {
            username: username.current.value,
            password: password.current.value
        };
        if (validateUserLogin(inputObj)) {
            navigate('/Blog');
        }
        else {
            alert('Invalid login');
        }
    };
    return (
        <div className="login-form">
            <table>
                <tr>
                    <td>Username</td>
                    <input type="text" ref={username} placeholder="Enter username" />
                </tr>
                <tr>
                    <td>Password</td>
                    <input type="password" ref={password} placeholder="Enter password" />
                </tr>
            </table>
            <span className="forgot" onClick={() => handleForgotClick()}>Forgot username/password?</span>
            <input className="btn_login" type="submit" value="Login" onClick={() => { handleLoginSubmit() }} />
        </div>
    );
};