import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackages.css'



const AddPackages = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);


        axios.post(`http://localhost:5000/Packages`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })

    }



    return (
        <div className="add">
            <h1 className="addPackages_title  p-4"> Add packages</h1>

            <form className="container" onSubmit={handleSubmit(onSubmit)}>

                <input className="p-2 m-3 "  {...register("title")} placeholder="Title" />


                <input className="p-2 m-3" {...register("Spot", { required: true })} placeholder="Spot" />

                <input className="p-2 m-3" type="number"  {...register("ammount", { required: true })} placeholder="Amount" />

                <input className="p-2 m-3" {...register("duration", { required: true })} placeholder="Duration" />

                <input className="p-2 m-3" {...register("img", { required: true })} placeholder="img-Url" />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-success " type="submit" />

                <br />


            </form>
            <br /><br /><br />

        </div>
    );
};

export default AddPackages;