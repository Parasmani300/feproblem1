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
                <h4 className="text-center">Sorry King, Queen is not on these planet</h4>
            </div>
        }
        {
            (success.status === "success") &&
            <div style={{marginTop:"100px",marginBottom:"100px"}}>
                <h4 className="text-center">King Shah Happy, Queen found on Planet: {success.planet_name}</h4>
            </div>
        }
        </div>
        </div>
    )
}
