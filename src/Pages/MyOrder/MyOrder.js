import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Card, CardGroup } from 'react-bootstrap';
import './MyOrder.css'

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrder, SetMyOrder] = useState()

    useEffect(() => {
        // console.log('Myorder');
        let value = user?.email;
        console.log(user?.email);
        fetch(`http://localhost:5000/Order/${value}`)
            .then(res => res.json())
            .then(data => SetMyOrder(data));
    }, [user])

    return (
        <div>
            <h1 className="text-success p-4">My Order : {myOrder?.length} </h1>

            <div className="container">
                <div className="myOderrr">
                    {
                        myOrder?.map((od) =>

                            <CardGroup className="m-4 myOderrr">
                                <Card className="">
                                    <Card.Img className="" variant="top" src={od?.img} />
                                    <Card.Body >
                                        <Card.Title className="text-success">{od?.title}</Card.Title>
                                        <Card.Text>
                                            <i className="fas fa-map-marker-alt"></i> {od?.visitting_Spot}
                                        </Card.Text>
                                        <Card.Title className="text-success">{od?.duration}</Card.Title>
                                        <Card.Title className="text-success">{od?.ammount}</Card.Title>


                                    </Card.Body>

                                </Card>

                            </CardGroup>
                        )
                    }
                </div>
            </div>



        </div>
    );
};

export default MyOrder;