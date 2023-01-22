import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Aboutme from './PortfolioContainer/Aboutme/Aboutme';
import Resume from './PortfolioContainer/Resume/Resume';
import Achievements from './PortfolioContainer/Achievements/Achievements';
import Contact from './PortfolioContainer/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Aboutme />
      <Resume />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
