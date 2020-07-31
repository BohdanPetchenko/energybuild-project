import React, { useState, useEffect } from 'react';
import { Container, Table, Tab, Row, Col, Nav } from 'react-bootstrap'
import jwtDecode from 'jwt-decode';

import d from '../helpers/d'
import getGQL from '../helpers/get-gql'
import { history } from "../history/index";


function GetAllUsers({ getUserOrders }) {
    let userToken = localStorage.getItem('userToken')
    let decodeToken = jwtDecode(userToken)

    if (decodeToken.roles[0] !== "admin") {
        history.push('/')
    }

    const [allUsers, setAllUsers] = useState([])


    useEffect(() => {
        async function fetchData() {
            await getGQL('http://localhost:3000/graphql/protected', { Authorization: `Bearer ${localStorage.getItem('userToken')}` })
                (`query getAllUser{
                    getAllUsers{
                      id
                      userName
                      surname
                      email
                      role
                      orders{
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
                    }
                  }`
                ).then(data => setAllUsers(d`${data}.data.getAllUsers`))

        }
        fetchData()
    }, [])


    return (

        <Container className='container-wrap'>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">
                            {allUsers.map((user, index) => (
                                <Nav.Item key={index}>
                                    <Nav.Link eventKey={index}>
                                        {`${user.userName} ${user.surname}`}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col sm={9} >
                        <Tab.Content>
                            {allUsers.map((user, index) => (
                                <Tab.Pane key={index} eventKey={index}>
                                    <h6>Personal data</h6>
                                    <ul>
                                        <li >Name: {user.userName}</li>
                                        <li>Surname: {user.surname}</li>
                                        <li>Email: {user.email}</li>
                                        <li>Id: {user.id}</li>
                                        <li>Role: {user.role[0]}</li>
                                    </ul>

                                    <h6>{user.userName}s orders</h6>
                                    <Table striped bordered hover variant="dark" size="sm" >
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>ID</th>
                                                <th>Name organization</th>
                                                <th>Address organization</th>
                                                <th>Contact number</th>
                                                <th>Name works</th>
                                                <th>Foreman</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {user.orders.map((order, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        {index + 1}
                                                    </td>
                                                    <td>
                                                        {order.id}
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


                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container >
        </Container>
    )

}



export default GetAllUsers;
