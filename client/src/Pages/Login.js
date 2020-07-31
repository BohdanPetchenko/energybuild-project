import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import actionLogin from '../actions/action-login'





const LoginForm = ({ onLogin }) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Container className='container-wrap' style={{ width: '700px' }}>
            <h1 className="text-center"> Log in</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={login} onChange={e => setLogin(e.target.value)} type="email" placeholder="Enter your email" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
                </Form.Group>

                <Button variant="outline-secondary" onClick={e => {
                    onLogin && typeof onLogin === 'function' && onLogin(login, password)
                }}
                    disabled={!login || !password}
                >Login</Button>
            </Form>
        </Container>
    )
}

const ConnectedLoginForm = connect(null, { onLogin: actionLogin })(LoginForm);



const App = () =>
    <>
        <ConnectedLoginForm />

    </>

export default App;

