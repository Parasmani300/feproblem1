import { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import StoryLine from './Pages/StoryLine';

function App() {
  const [key,setKey] = useState(0);

  useEffect(() => {
  }, [key])
  return (
    <Router key={key}>
      <Navigation />
      <div className="container" >
        <div className="row mb-2">
          <div className="col-10"></div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={() => setKey(key+1)}>
                <Link to="/home" style={{color:'white',textDecoration:"none"}}>Reset</Link>
              </button>
          </div>
        </div>
      </div>
      <Switch>
          <Route path="/mission" >
              <Mission />
          </Route>
          <Route path="/story" >
              <StoryLine />
          </Route>
          <Route path="/home" >
              <Home />
          </Route>
          <Route path="/finish" >
              <FinishScreen />
          </Route>
          <Route path="/" >
              <Home />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
