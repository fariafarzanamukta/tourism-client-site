import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='about_container'>
            <div className="about">
                <div className="row d-flex banner align-items-center justify-content-center">

                    <div className="col-md-4 about-header">
                        <h1 className="title">
                            About Us
                        </h1>
                        <p className="text-white text-center mt-2">
                            Travelers should be aware of petty crimes such as pickpocketing in crowded areas. Crimes such as muggings, burglaries, assaults, and illegal drug trafficking constitute the majority of criminal activity in Bangladesh’s major cities, but there are no indications foreigners are being targeted because of their nationality. These crimes tend to be situational, based on time and location.
                        </p>
                        <button className="mt-3 about-btn">Read More</button>
                    </div>      </div>
            </div>
            <br /><br />
            <div className="container">
                <div className=" about-part d-flex align-items-center justify-content-center" >
                    <img src="https://www.amara-marketing.com/hubfs/adventure-couple-daylight-1319829.jpg" alt="" className="about-img" />
                    <p>Almost half of the total tourists who come to Bangladesh are from India. The remaining tourists mostly come from Asian countries. While 5% of the tourists come from the US, these figures include Bangladeshi origin US citizens. Only 7% of the tourists arrive from the rest of the world. However, in 2018, The Americas (i.e North and South America) spent $334 billion USD and Europe spent $570 billion USD on tourism. The total global expenditure behind tourism is $1.7 trillion USD. This means that The Americas and Europe together constitute of 53% of the global tourism market which Bangladesh is missing out on. However, if we look at the popular tourist destinations in Asia, the percentage of tourists from the “rest of the world” ranges from 20-71%.<br /><br />
                        <button className="about-btn">Click here</button>
                    </p>

                </div>

            </div>
            <br /><br /><br />
            <div>
                <h1>Why You Are Travel With Us</h1>
                <div className="container about-partThree">
                    <div className="tour">
                        <img src="https://www.pngitem.com/pimgs/m/270-2709251_bus-tour-guide-clipart-hd-png-download.png" alt="" />
                        <h6>100+ Our worldwide guide</h6>
                    </div>
                    <div className="tour">
                        <img src="https://www.rajpis.com/wp-content/uploads/2016/06/trust.png" alt="" />
                        <h6>100% trusted travel agency</h6>
                    </div>
                    <div className="tour">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb4aTS4Pk_WTPkyX8izMn7MdFQCP1GFpi8pg&usqp=CAU" alt="" />
                        <h6>10+ year of travel experience</h6>
                    </div>
                    <div className="tour">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgniX6ubzeeK8EjaNzC84VaFejEGQPPSwPIoaGiLt_9Kv_hIiWy0D524vzTL0CIzqFtCw&usqp=CAU" alt="" />
                        <h6>90% of our traveller happy</h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;