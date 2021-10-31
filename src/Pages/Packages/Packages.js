import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/Packages`)
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])


    return (
        <div id="packages">
            <h1 className="text-center p-4 packages_title">Current Hot Packages</h1>

            <div className="container packages_container">
                {
                    packages.map((pack, index) => <Package
                        key={pack.id}
                        pack={(pack )}
                    ></Package>)
                }
            </div>



        </div>
    );
};

export default Packages;