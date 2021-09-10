import { useEffect, useState } from 'react';
import Finder from '../components/Finder';

export default function Home() {
    const [token,setToken] = useState(null);
  
  useEffect(() => {
    const tokenOptions = {
      method:'POST',
      headers: {
        'accept':'application/json'
      }
    }

    const tokenMaker = async() => {
      try{
        const fetchToken = await fetch('https://findfalcone.herokuapp.com/token',tokenOptions)
        const data = await fetchToken.json();
        setToken(data);
      }catch(err)
      {
        console.log(err);
      }
      
    }

    tokenMaker();
    
  },[])

  return (
    <div>
      <Finder token={token} />
    </div>
  );
}
