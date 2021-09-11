import React from 'react'
import { useEffect, useState } from 'react';
// import FinishScreen from './FinishScreen';
import PlanetCard from './PlanetCard';
import {useHistory} from 'react-router-dom'

export default function Finder({token}) {
  const [planet,setPlanet] = useState(null);
  const [isPlanetLoaded,setisPlanetLoaded] = useState(false);
  const [vehicle,setVehicle] = useState(null);
  const [isVehicleLoaded,setisVehicleLoaded] = useState(false);
  const [planetVisted,setPlanetVisited] = useState([]);
  const [spaceShipTaken,setSpaceShipTaken] = useState([]);
  const [time,setTime] = useState(0);

  const history = useHistory();

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

  const operationFalcone = async() => {
      const falconFetcherRequest = {
        method:'POST',
        headers: {
          'accept':'application/json'
        },
        body:JSON.stringify({
            token:token.token,
            "planet_names":planetVisted,
            "vehicle_names":spaceShipTaken
        })
      }
      try {
          const falconFetcher = await fetch('https://findfalcone.herokuapp.com/find',falconFetcherRequest);
          if(falconFetcher.ok){
          const data = await falconFetcher.json();

          history.push({
              pathname:'/finish',
              state:{
                  success:data
              }
          });
          }
      } catch (error) {
        console.log(error);
      }
  }

  const readyToStart = () => {
    if(planetVisted.length === 4 && spaceShipTaken.length === 4)
        return false;
    return true;
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
            <h3 className="text-center"> Operation Falcone </h3>
            <div className="row">
                <div className="col-md-3">
                    <PlanetCard
                     originalPlanet={planet}
                      isPlanetLoaded={isPlanetLoaded} 
                      planet={planet} 
                      isVehicleLoaded={isVehicleLoaded} 
                      vehicle={vehicle} setVehicle={setVehicle} 
                      planetVisted={planetVisted} 
                      setPlanetVisited={setPlanetVisited} 
                      name={"planet1"} time={time} 
                      setTime={setTime} 
                      spaceShipTaken={spaceShipTaken} 
                      setSpaceShipTaken={setSpaceShipTaken}  />
                </div>
                <div className="col-md-3">
                    <PlanetCard 
                        originalPlanet={planet} 
                        isPlanetLoaded={isPlanetLoaded} 
                        planet={planetToVisit2} 
                        isVehicleLoaded={isVehicleLoaded} 
                        vehicle={vehicle} 
                        setVehicle={setVehicle} 
                        planetVisted={planetVisted} 
                        setPlanetVisited={setPlanetVisited} 
                        name={"planet2"} 
                        time={time} 
                        setTime={setTime} 
                        spaceShipTaken={spaceShipTaken} 
                        setSpaceShipTaken={setSpaceShipTaken} />
                </div>
                <div className="col-md-3">
                    <PlanetCard 
                        originalPlanet={planet} 
                        isPlanetLoaded={isPlanetLoaded} 
                        planet={planetToVisit3} 
                        isVehicleLoaded={isVehicleLoaded} 
                        vehicle={vehicle} setVehicle={setVehicle} 
                        planetVisted={planetVisted} 
                        setPlanetVisited={setPlanetVisited} 
                        name={"planet3"} 
                        time={time} 
                        setTime={setTime} 
                        spaceShipTaken={spaceShipTaken} 
                        setSpaceShipTaken={setSpaceShipTaken} />
                </div>
                <div className="col-md-3">
                    <PlanetCard 
                        originalPlanet={planet} 
                        isPlanetLoaded={isPlanetLoaded} 
                        planet={planetToVisit4} 
                        isVehicleLoaded={isVehicleLoaded} 
                        vehicle={vehicle} 
                        setVehicle={setVehicle} 
                        planetVisted={planetVisted} 
                        setPlanetVisited={setPlanetVisited} 
                        name={"planet4"} 
                        time={time} 
                        setTime={setTime} 
                        spaceShipTaken={spaceShipTaken} 
                        setSpaceShipTaken={setSpaceShipTaken} />
                </div>
            </div>
            <div className="row">
                <h3>Total Time Taken: {time}</h3>
            </div>
            <div className="col text-center mt-3">
                <button
                    className="text-center btn btn-primary"
                    disabled={readyToStart()}
                    onClick={() => operationFalcone()}>Start Seach
                </button>
            </div>
      </div>
    )
}
