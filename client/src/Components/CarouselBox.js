import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel"
import electricityImg1 from "../assets/electricityImg1.jpg"
import electricityImg2 from "../assets/electricityImg2.jpg"
import electricityImg3 from "../assets/electricityImg3.jpg"


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ maxHeight: 800 }}
                        className="d-block w-100 h-50"
                        src={electricityImg1}
                        alt="electricityImg1"
                    />
                    <Carousel.Caption>
                        <h3>Power suply</h3>
                        <p>Lorem insput dolor</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{ maxHeight: 800 }}
                        className="d-block w-100"
                        src={electricityImg2}
                        alt="electricityImg2"
                    />
                    <Carousel.Caption>
                        <h3>Power suply</h3>
                        <p>Lorem insput dolor</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        style={{ maxHeight: 800 }}
                        className="d-block w-100 h-50"
                        src={electricityImg3}
                        alt="electricityImg3"
                    />
                    <Carousel.Caption>
                        <h3>Power suply</h3>
                        <p>Lorem insput dolor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
