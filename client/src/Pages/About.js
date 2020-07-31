import React, { Component } from 'react'
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container className='container-wrap'>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Frameworks</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first">
                                    <img src="https://theaecassociates.com/blog/wp-content/uploads/2016/12/3-Benefits-Of-Outsourcing-3D-CAD-Drawing-Services.jpg" alt="Img1"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet labore fuga iste facere aliquid ad, eligendi corporis dolorem quibusdam delectus.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://www.aimbigemployment.com.au/wp-content/uploads/2019/12/12-tips-on-how-to-behave-in-the-workplace.png" alt="Img2"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet labore fuga iste facere aliquid ad, eligendi corporis dolorem quibusdam delectus.</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://www.magicad.com/wp-content/uploads/2018/05/magicad-2019-autocad-01.png" alt="Img3"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet labore fuga iste facere aliquid ad, eligendi corporis dolorem quibusdam delectus.</p>
                                </Tab.Pane>                        
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
