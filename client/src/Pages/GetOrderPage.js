import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Container, Table } from 'react-bootstrap'
import jwtDecode from 'jwt-decode';

import actionGetOrdersPromise from '../actions/action-get-user-orders'
import d from '../helpers/d'
import getGQL from '../helpers/get-gql'



function GetOrders({ getUserOrders }) {
    
    const [userOrders, setUserOrders] = useState([])


    useEffect(() => {
        async function fetchData() {
            await getGQL('http://localhost:3000/graphql/protected', { Authorization: `Bearer ${localStorage.getItem('userToken')}` })
                (`query getOrd{
                            getOrders{
                                id
                                nameOrganization
                                addressOrganization
                                contactNumber
                                status{
                                    type
                                }
                                orderWorks{
                                    id
                                    nameWork
                                    foreman
                                    }
                                }
                            }`
                ).then(data => setUserOrders(d`${data}.data.getOrders`))

        }
        fetchData()
    }, [])

    
    return (

        <Container className='container-wrap' style={{ width: '1200px', marginTop: 15 }}>
            <h1>My orders</h1>
            <Table striped bordered hover variant="dark" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name organization</th>
                        <th>Address organization</th>
                        <th>Contact number</th>
                        <th>Name works</th>
                        <th>Foreman</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {userOrders.map((order, index) => (
                        <tr key={index}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {order.nameOrganization}
                            </td>
                            <td>
                                {order.addressOrganization}
                            </td>
                            <td>
                                {order.contactNumber}
                            </td>
                            <td>
                                <ul key={index}>
                                    {order.orderWorks.map((work, index) => <li key={index}>{work.nameWork}</li>)}
                                </ul>
                            </td>
                            <td>
                                <ul key={index}>
                                    {order.orderWorks.map((work, index) => <li key={index}>{work.foreman}</li>)}
                                </ul>
                            </td>
                            <td>
                                {order.status.type}
                            </td>
                        </tr>))

                    }
                </tbody>
            </Table>
        </Container>
    )
}



export default GetOrders;