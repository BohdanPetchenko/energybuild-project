import React, { useState  } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import actionRegister from '../actions/action-register'





const RegisterForm = ({ onLogin }) => {

    const [userName, setUserName] = useState('')
    const [surname, setSurname] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    
    return (
        <Container className='container-wrap' style={{ width: '700px' }}>
            <h1 className="text-center">Registration</h1>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control value={userName} onChange={e => setUserName(e.target.value)} type="text" placeholder="Enter your name" />

                </Form.Group>
                <Form.Group controlId="formBasicSurname">
                    <Form.Label>Your surname</Form.Label>
                    <Form.Control value={surname} onChange={e => setSurname(e.target.value)} type="text" placeholder="Enter your surname" />

                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={login} onChange={e => setLogin(e.target.value)} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </Form.Group>

                <Form.Group controlId="formBasicPasswordAgain">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control value={confirm} onChange={e => setConfirm(e.target.value)} type="password" placeholder="Enter your password again" />
                </Form.Group>

                <Button variant="outline-secondary" onClick={e => {
                    onLogin && typeof onLogin === 'function' && onLogin(login, password, confirm, userName, surname)
                }}
                    disabled={!login || !password || !confirm || !userName || !surname}
                >Register</Button>
            </Form>
        </Container>
    )
}

const ConnectedRegisterForm = connect(null, { onLogin: actionRegister })(RegisterForm);
// const ConnectedLoginOut = connect(null, { onClick: actionLogout })(LoginOut);


const App = () =>
    <>
        
            <ConnectedRegisterForm />
            {/* <ConnectedLoginOut /> */}
        

    </>

export default App;

