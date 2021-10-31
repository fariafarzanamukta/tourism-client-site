import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="row d-flex align-items-center justify-content-center">

                    <div className="col-md-4 contact-header">
                        <h1 className="contact_title title mt-4 pt-5">
                            Contact Us
                        </h1>
                        {/* <button className="mt-3 contact-btn">Read More</button> */}
                    </div>

                </div>
            </div>


            <div className="form-header">
                <h2 className="contact_title pb-4">Contact Form</h2>
                <div className="contact-form container align-items-center justify-content-center">

                    <br /><br />

                    <input type="text" name="firstname" placeholder="Enter Your First Name" className="contact-input " /><br /><br />
                    <input type="text" name="lastname" placeholder=" Enter Your Last Name" className="contact-input" /><br /><br />
                    <input type="text" name="email" placeholder="Enter Your Email" className="contact-input" /><br /><br />
                    <input type="contact no." name="contact no." placeholder="Enter Your Contact No." className="contact-input" /><br /><br />
                    <textarea rows='5' cols='25' placeholder="Enter Your Comment" className="contact-input" ></textarea><br /><br />

                    <input type="submit" name="submit" value="Submit" className="contact-submit" /><br /><br />
                    <input type="reset" name="reset" className="contact-reset" />
                </div>
            </div><br /><br /><br />
            <div className="container">
                <div className="subscribe  m-2">
                    <h1 className=" m-2">Subscribe To Our NewsTour </h1>
                    <h2 className=" m-2">For Latest Update</h2>
                    <br /><br />
                    <div className="subscribe-email">
                        <input className="p-2 m-2" type="email" name="" id="" placeholder="Enter Your Email" />
                        <button className="m-2">SUBSCRIBE</button>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Contact;