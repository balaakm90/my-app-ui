import { useRef } from "react";
import './Login.css'
export const Login = (props) => {
    const username = useRef();
    const password = useRef();
    const handleForgotClick=(props)=>{
        alert('Forgot');
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
            <span className="forgot" onClick={()=>handleForgotClick()}>Forgot username/password?</span>
            <input className="btn_login" type="submit" value="Login" />
        </div>
    );
};