import './App.css';
import Finder from './components/Finder';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  

  return (
    <div className="container-fluid">
      <Navigation />
      <Finder />
      <Footer />
    </div>
  );
}

export default App;
