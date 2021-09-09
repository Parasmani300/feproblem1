import React from 'react'

export default function Footer() {
    return (
        <div className="jumbotron bg-dark text-white" style={{bottom:0,marginTop:"18em"}}>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                        <h3>About Us</h3>
                        <p>We are group of scret agent finding Al Falcone. Help us in the mission</p>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <h3>Contact Us</h3>
                        <p>Reach us at abcd@efgh.com</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <h3>Our Social Link</h3>
                        <p>ShahBook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
