import { useEffect, useState } from 'react';
import './App.css';
import Finder from './components/Finder';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {

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
    <div className="container-fluid">
      <Navigation />
      <Finder token={token} />
      <Footer />
    </div>
  );
}

export default App;
