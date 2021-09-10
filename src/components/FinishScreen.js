import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FinishScreen() {
    const {state} = useLocation();
    const{success} = state



    return (
        <div className="container">
        <div className="card mt-4 mb-4 pt-4 pb-4">
        {(success.status === "false") &&
            <div>
                <h4 className="text-center">Sorry King, QUeen is not on that planet</h4>
            </div>
        }
        {
            (success.status === "success") &&
            <div>
                <h4 className="text-center">Queen Found, yeah  Planet name: {success.planet_name}</h4>
            </div>
        }
        </div>
        </div>
    )
}
