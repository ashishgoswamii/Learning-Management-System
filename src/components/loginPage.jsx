import React from "react";

function loginPage() {
    return <>

        <div className="container" style={{"fontFamily":"Arial", "fontSize":"17px","textAlign":"center"}}>
                
            <p className="my-2" style={{ "fontSize":"25px"}}>Enter Email</p>
            <input type="email" placeholder="Enter Email"/>
            <p className="my-2" style={{ "fontSize":"25px"}}>Enter Password</p>
            <input type="password" placeholder="Enter Password" />
        
        <div className="my-4">
            <button className="btn-lg btn-primary">Login</button>
            </div>
        </div>
      
    </>
}

export default loginPage;