import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({ pack, index }) => {

    const { _id, title, Spot, duration, ammount, img, } = pack;
   
    return (
        <div className="container">
            <CardGroup className="m-4 package_card">
                <Card className="package_card">
                    <Card.Img className="package_img" variant="top" src={img} />
                    <Card.Body >
                        <Card.Title className="text-success">{title}</Card.Title>
                        <Card.Text>
                            <i className="fas fa-map-marker-alt"></i> {Spot}
                        </Card.Text>
                        <Card.Text>
                            From: {ammount}৳
                        </Card.Text>
                        <Card.Text>
                            <i className="far fa-clock"></i> {duration}
                        </Card.Text>

                    </Card.Body>
                    <Card.Footer>
                        <Link to={`/placeOrder/${_id}`}>
                            <button className="btn btn-success package_btn">Book Now ...</button>
                        </Link>
                    </Card.Footer>
                </Card>

            </CardGroup>

            <br /><br /> <br />


        </div>
    );
};

export default Package;