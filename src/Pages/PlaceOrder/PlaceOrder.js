import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import "./PlaceOrder.css"


const PlaceOrder = ({ pack, index }) => {
    const { user } = useAuth();
    const { packageId } = useParams();
    const [placePackages, setPlacePackages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/Packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPlacePackages(data));
    }, [packageId])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post(`http://localhost:5000/Order`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    }


    return (
        <div>
            <div className="mt-4 container">
                <h2 className="text-primary">Place Order</h2>



                <div>
                    <div className="row">


                        <div className="col-md-6">
                            <div className="mt-4 pb-4">
                                <img src={placePackages?.img} alt="" />
                            </div>
                            <h2>{placePackages?.title}</h2>
                            <p><i className="fas fa-map-marker-alt"></i> {placePackages?.visitting_Spot} </p>
                            <p>
                                <strong></strong>  <i className="far fa-clock"></i>  {placePackages?.duration}  ||  {placePackages?.Tour_Type}
                            </p>
                            <p>
                                <strong> </strong> Person : {placePackages?.Max_Group_Size}  || Amount :  {placePackages?.ammount}
                            </p>

                            <Link to="/home">
                                <button className="btn btn-primary"> Go Back</button>
                            </Link>
                        </div>


                        <div className="col-md-6"><br />
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {errors.exampleRequired && <span>This field is required</span>}
                                <input defaultValue={user.email} {...register("email", { required: true })} /> <br /><br />
                                <input defaultValue={placePackages?.img} {...register("img", { required: true })} /> <br /><br />
                                <input defaultValue={placePackages?.title} {...register("title", { required: true })} /> <br /><br />
                                <input defaultValue={placePackages?.visitting_Spot} {...register("visitting_Spot", { required: true })} /> <br /><br />
                                <input defaultValue={placePackages?.duration} {...register("duration", { required: true })} /> <br /><br />
                                <input defaultValue={placePackages?.ammount} {...register("ammount", { required: true })} /> <br /><br />

                                <input className="btn btn-success" type="submit" />
                            </form>
                        </div>




                    </div>



                    <br />
                </div>



            </div>
        </div>
    );
};

export default PlaceOrder;