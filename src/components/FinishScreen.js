import React from 'react'

export default function FinishScreen({success}) {


    return (
        <div className="container">
        {success.status === false &&
            <div><h1>Sorry King, QUeen is not on that planet</h1></div>
        }
        {
            success.status &&
            <div>Queen Found, yeah  Planet name: {success.planet_name}</div>
        }
        </div>
    )
}
