import React, { useState } from 'react'

export default function PlanetCard({originalPlanet,isPlanetLoaded,planet,isVehicleLoaded,vehicle,setVehicle,planetVisted,setPlanetVisited,name,time,setTime}) {
    const [planetValue,setPlanetValue] = useState('');
    const [spaceShip,loadSpaceShip] = useState(false);
    const [attack,setAttack] = useState(false);
    // const [time,setTime] = useState(0);
    

    const setupPlanet = (e) =>
    {
        if(e.value !== "none")
        {
            setPlanetVisited([...planetVisted,e.target.value]);
            loadSpaceShip(true);
            setAttack(true);
        }
        
    }

    const calculateScore = (vl) => {
        setVehicle([...vehicle.filter(v => v !== vl),{...vl,total_no:vl.total_no-1}]);
        const speed = vl.speed;
        const distance = originalPlanet.filter(pl => pl.name === planetVisted[planetVisted.length - 1])[0].distance;
        const tm = parseInt(distance)/parseInt(speed);

        setTime(time + tm);
    }
    
    return (
        <div className="card mb-4">
            <div className="card-body">
            <select className="form-control" value={planetValue} name={name} onChange={e => setPlanetValue(e.value)} onBlur={e => setupPlanet(e)} disabled={attack}>
            <option value="none">--- None Selected ---</option>
            {isPlanetLoaded && planet?.map((pl,idx) => {
                return <option key={idx} value={pl.name} >{pl.name}</option>
            })}
            </select>
            <br />
            {isVehicleLoaded && spaceShip &&  vehicle?.map((vl,idx) => {
                return(
                    <div key={idx}>
                        <input type="radio" value={vl.name} name={name} disabled={vl.total_no === 0} onBlur={() =>  calculateScore(vl)} /> {vl.name}({vl.total_no})
                    </div>
                )
            })}
            </div>
        </div>
    )
}
