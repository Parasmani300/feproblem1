import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './Pages/Home';
import Mission from './Pages/Mission';
import StoryLine from './Pages/StoryLine';

function App() {


  return (
    <Router>
      <Navigation />
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
          <Route path="/" >
              <Home />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
