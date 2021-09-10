import React from 'react'

export default function Mission() {
    return (
        <div className="container">
            <div className="card shadow p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <h4 className="card-title">Our Mission</h4>
                    <p className="card-text">
                        King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing, 
                        Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these 
                        planets.
                        <br />
                        Your coding problem is to help King Shan find Al Falcone

                    </p>
                    <h5 className="card-title">What you need to do</h5>
                    <p className="card-text">
                        You need to build a UI (mockups available at the end of this PDF) through which King Shan can 
                    </p>
                    <br />
                    <ul>
                        <li>select 4 planets to search (out of the total 6)</li>
                        <li>select which space vehicles to send to these planets</li>
                        <li>see how much time it will take for the vehicles to reach their targets &</li>
                        <li>show final result of success or failure</li>
                    </ul>
                    <h5 className="card-title">What we give you</h5>
                    <ul>
                        <li>
                        a planets API that list out the planets, and how far they are from Lengaburu 
                            <a href="https://findfalcone.herokuapp.com/planets"> (https://findfalcone.herokuapp.com/planets)</a> 
                        </li>
                        <li>
                            a vehicles API that lists the types of space vehicle at your disposal, 
                            how many of each type you have, the 
                            maximum distance a vehicle can go (range), and their speed 
                            <a href="https://findfalcone.herokuapp.com/vehicles">(https://findfalcone.herokuapp.com/vehicles)</a>
                        </li>
                        <li>
                             a FindFalcone API that returns whether you were successful in your search or not 
                            (we randomly assign a planet 
                            to Al Falcone) <a href="https://findfalcone.herokuapp.com/find">(https://findfalcone.herokuapp.com/find)</a>
                        </li>
                    </ul>
                    <h5 className="card-title">
                        API breifing
                    </h5>
                    <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        API used
                                    </th>
                                    <th>
                                        Request type
                                    </th>
                                    <th>
                                        Add. Info
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
