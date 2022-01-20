import React from "react";

function registerPage() {
    return <>

        <div style={{ "justifyContent": "space-around" }} className="container  d-flex ">
            <div className="m-2">

                <p className="my-1">Enter First Name</p>
                <input type="text" placeholder="Enter First Name" />
                
                <p className="my-1">Enter Last Name</p>
                <input type="text" placeholder="Enter Last Name" />

                <p className="my-1">Enter Email ID</p>
                <input className="input-group" type="email" placeholder="Enter Email" />
                <p className="my-1">Enter Phone Number</p>
                <input type="number" placeholder="Enter Phone 
            Number" />
            </div>

            <div className="m-2">
                <p className="my-1">Enter City</p>
                <input type="text" placeholder="Enter City" />
                <p className="my-1">Enter Pincode</p>
                <input type="number" placeholder="Pincode" />

                <p className="my-1">Choose a password</p>
                <input type="password" placeholder="Choose a Password" />
                <p className="my-1">Confirm your password</p>
                <input type="password" placeholder="Confirm your password" />
            </div>
        </div>
        <div className="my-4" style={{ "textAlign": "center" }} >

            <button type="button" className="btn-lg btn-primary">Register</button>
        </div>
   
    </>
}

export default registerPage;