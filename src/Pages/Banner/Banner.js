import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.jpg'
import banner2 from '../../images/banner/banner2.jpg'
import banner3 from '../../images/banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>




                        <div className="carousel text-white ">
                            <h5 >Tour With Al-Fath</h5>
                            <h1>Find Your Next <br /> Tour Destinations</h1>
                            
                        </div>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel text-dark">
                            <h5 className="text-danger">Tour With Al-Fath</h5>
                            <h1 className="text-white">Find Your Next <br /> Tour Destinations</h1>
                            
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="carousel text-white">
                            <h5 className="text-danger">Tour With Al-Fath</h5>
                            <h1>Find Your Next <br /> Tour Destinations</h1>
                            
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;