import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Event = ({ event }) => {
    const { title, duration, img, ammount } = event;
    return (
        <div className="container">
            <CardGroup className="m-4 event_card">
                <Card className="event_card">
                    <Card.Img className="event_img" variant="top" src={img} />
                    <Card.Body >
                        <Card.Title className="text-success">{title}</Card.Title>
                        <Card.Text>
                            <i className="far fa-clock"></i> {duration}
                        </Card.Text>
                        <Card.Text>
                            <i className="fas fa-money-check"></i> {ammount}
                        </Card.Text>

                    </Card.Body>

                </Card>

            </CardGroup>

            <br /><br /> <br />


        </div>
    );
};

export default Event;