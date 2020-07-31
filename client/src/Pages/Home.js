import React, { Component } from 'react';
import CarouselBox from "../Components/CarouselBox"
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Main extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">
                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="img1"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est soluta voluptatem!</Card.Text>
                        </Card.Body>
                        <Button variant="primary">About team</Button>
                    </Card>

                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="img2"
                        />
                        <Card.Body>
                            <Card.Title>Engineers</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est soluta voluptatem!</Card.Text>
                        </Card.Body>
                        <Button variant="primary">About team</Button>
                    </Card>

                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="img3"
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum est soluta voluptatem!</Card.Text>
                        </Card.Body>
                        <Button variant="primary">About team</Button>
                    </Card>
                </CardDeck>
            </Container>
            
            </>
        )
    }
}
