import React from 'react'
import { useEffect, useState } from 'react';
import PlanetCard from './PlanetCard';

export default function Finder() {
  const [planet,setPlanet] = useState(null);
  const [isPlanetLoaded,setisPlanetLoaded] = useState(false);
  const [vehicle,setVehicle] = useState(null);
  const [isVehicleLoaded,setisVehicleLoaded] = useState(false);
  const [planetVisted,setPlanetVisited] = useState([]);
  const [time,setTime] = useState(0);

  const fetchPlanet = async() =>{
    try {
      const planetData = await fetch('https://findfalcone.herokuapp.com/vehicles');
      const data = await planetData.json();
      setisVehicleLoaded(true);
      setVehicle(data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchVehicle = async() =>{
    try {
      const planetData = await fetch('https://findfalcone.herokuapp.com/planets');
      const data = await planetData.json();
      setisPlanetLoaded(true);
     setPlanet(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      fetchPlanet();
      fetchVehicle();
  },[]);

  const planetToVisit2 = planet?.filter(plt => !planetVisted.slice(0,1).includes(plt.name));
  const planetToVisit3 = planet?.filter(plt => !planetVisted.slice(0,2).includes(plt.name));
  const planetToVisit4 = planet?.filter(plt => !planetVisted.slice(0,3).includes(plt.name));
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <PlanetCard originalPlanet={planet} isPlanetLoaded={isPlanetLoaded} planet={planet} isVehicleLoaded={isVehicleLoaded} vehicle={vehicle} setVehicle={setVehicle} planetVisted={planetVisted} setPlanetVisited={setPlanetVisited} name={"planet1"} time={time} setTime={setTime}  />
                </div>
                <div className="col-md-3">
                    <PlanetCard originalPlanet={planet} isPlanetLoaded={isPlanetLoaded} planet={planetToVisit2} isVehicleLoaded={isVehicleLoaded} vehicle={vehicle} setVehicle={setVehicle} planetVisted={planetVisted} setPlanetVisited={setPlanetVisited} name={"planet2"} time={time} setTime={setTime} />
                </div>
                <div className="col-md-3">
                    <PlanetCard originalPlanet={planet} isPlanetLoaded={isPlanetLoaded} planet={planetToVisit3} isVehicleLoaded={isVehicleLoaded} vehicle={vehicle} setVehicle={setVehicle} planetVisted={planetVisted} setPlanetVisited={setPlanetVisited} name={"planet3"} time={time} setTime={setTime} />
                </div>
                <div className="col-md-3">
                    <PlanetCard originalPlanet={planet} isPlanetLoaded={isPlanetLoaded} planet={planetToVisit4} isVehicleLoaded={isVehicleLoaded} vehicle={vehicle} setVehicle={setVehicle} planetVisted={planetVisted} setPlanetVisited={setPlanetVisited} name={"planet4"} time={time} setTime={setTime} />
                </div>
            </div>
            <div className="row">
                <h3>Total Time Taken: {time}</h3>
            </div>
            <div className="col text-center mt-3">
                <button className="text-center btn btn-primary">Start Seach</button>
            </div>
      </div>
    )
}
