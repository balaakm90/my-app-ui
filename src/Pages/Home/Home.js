import './Home.css'
import Modal from '@material-ui/core/Modal';
import { useState, useEffect } from 'react';
import { Login } from './Components/Login';

export const Home = (props) => {
    const [open, setOpen] = useState(false);
    const handleLoginClick = (props) => {
        setOpen(true);
    };
    const handleClose = (props) => {
        setOpen(false);
    };
    return (
        <>
            <div className="home-body">
                <div className="home-body-left-container"></div>
                <div className="home-body-middle-container"></div>
                <div className="home-body-right-container">
                    <p className="login-text">New User? <span className="login-link" onClick={() => handleLoginClick()}>Click here to register</span></p>
                </div>
                <p>Home page</p>
            </div>
            <Modal className="modal-window" onClose={() => handleClose()} open={open}
                style={{
                    position: 'absolute',
                    border: '1px solid rgb(161, 160, 160)',
                    backgroundColor: 'white',
                    boxShadow: '2px solid black',
                    height: 300,
                    width: 350,
                    margin: 'auto'
                }} >
                <div className='modal-popup'>
                    <div className="modal-header">
                        <span className="login-header-content">Login</span>
                    </div>
                    <div className="modal-body">
                        <Login />
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </Modal>
        </>
    );
};