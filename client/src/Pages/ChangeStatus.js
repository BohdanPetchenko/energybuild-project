import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import actionChangeStatus from '../actions/action-change-order'





const ChangeStatus = ({ onChange }) => {

    const [orderId, setOrderId] = useState('')
    const [statusId, setStatusId] = useState('')

    return (
        <Container className='container-wrap' style={{ width: '700px' }}>
            <h1 className="text-center">Status changing</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>ID order</Form.Label>
                    <Form.Control value={orderId} onChange={e => setOrderId(e.target.value)} type="text" placeholder="Enter order ID" />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>ID status</Form.Label>
                    <Form.Control value={statusId} onChange={e => setStatusId(e.target.value)} type="text" placeholder="Enter status ID" />
                </Form.Group>

                <Button variant="outline-secondary" onClick={e => {
                    onChange && typeof onChange === 'function' && onChange(orderId, statusId)
                }}
                    disabled={!orderId || !statusId}
                >Change</Button>
            </Form>
        </Container>
    )
}

const ConnectedChangeStatus = connect(null, { onChange: actionChangeStatus })(ChangeStatus);



const App = () =>
    <>
        <ConnectedChangeStatus />

    </>

export default App;