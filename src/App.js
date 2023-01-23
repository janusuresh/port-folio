import './App.css';
import Home from './PortfolioContainer/Home/Home';
import Aboutme from './PortfolioContainer/Aboutme/Aboutme';
import Resume from './PortfolioContainer/Resume/Resume';
import Achievements from './PortfolioContainer/Achievements/Achievements';
import Contact from './PortfolioContainer/Contact/Contact';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Janupritha S</title>
        <link
          rel="icon"
          href={require('../src/PortfolioContainer/Assesst/Janu_logo.png')}
        />
      </Helmet>
      <Home />
      <Aboutme />
      <Resume />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
