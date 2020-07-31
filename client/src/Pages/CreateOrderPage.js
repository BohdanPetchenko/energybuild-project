import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'

import actionCreateOrder from '../actions/action-create-order'



const CreateOrder = ({ onOrder }) => {

    const [nameOrganization, setNameOrganization] = useState('');
    const [addressOrganization, setAddressOrganization] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [orderWorks, setOrderWorks] = useState('');

    function getOrderWorks() {
        
        let result = document.getElementsByClassName('workCheckbox')
        let arrChecked = []
        if (result) {
            for (let i = 0; i < result.length; i++) {
                if (result[i].hasAttribute('checked')) {
                    
                    arrChecked.push(result[i].children[0].getAttribute('value'))
                }
            }
        }
        
        return arrChecked
    }

    return (
        <Container className='container-wrap' style={{ width: '700px' }}>
            <h1 className="text-center"> Create order</h1>
            <Form>
                <Form.Group controlId="formNameOrganization">
                    <Form.Label>Name organization</Form.Label>
                    <Form.Control value={nameOrganization} onChange={e => setNameOrganization(e.target.value)} type="text" placeholder="Enter name organization" />
                </Form.Group>

                <Form.Group controlId="formAddressOrganization">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={addressOrganization} onChange={e => setAddressOrganization(e.target.value)} type="text" placeholder="Enter address" />
                </Form.Group>

                <Form.Group controlId="formContactNumber">
                    <Form.Label>Contact number</Form.Label>
                    <Form.Control value={contactNumber} onChange={e => setContactNumber(e.target.value)} type="tel" placeholder="Enter contact number" />
                </Form.Group>

                <Form.Group id="formOrderWorks">
                    <Form.Label>Order works</Form.Label>
                    <Form.Check type="checkbox"
                        className="workCheckbox"
                        label="Laying the cable line"
                        value="1"
                        onChange={e => {
                            console.log(e)
                            e.currentTarget.parentElement.setAttribute('checked', "")
                            setOrderWorks(getOrderWorks())
                        }}
                    />
                    <Form.Check type="checkbox"
                        className="workCheckbox"
                        label="Equipment installation"
                        value="2"
                        onChange={e => {
                            e.currentTarget.parentElement.setAttribute('checked', "")
                            setOrderWorks(getOrderWorks())
                        }}
                    />
                    <Form.Check type="checkbox"
                        className="workCheckbox"
                        label="Designing electricity supply project"
                        value="3"
                        onChange={e => {
                            e.currentTarget.parentElement.setAttribute('checked', "")
                            setOrderWorks(getOrderWorks())
                        }}
                    />
                </Form.Group>

                <Button variant="outline-secondary" onClick={e => {
                    onOrder && typeof onOrder === 'function' && onOrder(nameOrganization, addressOrganization, contactNumber, [orderWorks])
                }}
                    disabled={!nameOrganization || !addressOrganization || !contactNumber}
                >Create order</Button>
            </Form>
        </Container>
    )

}

const ConnectedCreateOrderForm = connect(null, { onOrder: actionCreateOrder })(CreateOrder);


const App = () =>
    <>
        <ConnectedCreateOrderForm />
    </>

export default App;

