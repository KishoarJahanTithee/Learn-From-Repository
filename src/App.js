import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import TopServices from './Components/TopServices/TopServices';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Services from './Components/Services/Services';
import Trending from './Components/Trending/Trending';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
          <Router >
        <Header > </Header>
       <Switch >
        <Route path = "/home" >
        <Home> </Home> 
        </Route> 
        <Route path = "/services" >
        <Services> </Services> 
        </Route> 
        <Route path = "/trending" >
        <Trending> </Trending> 
        </Route> 
        <Route path = "/about" >
        <About > </About> 
        </Route> 
        <Route exact path = "/" >
        <Home> </Home> 
        </Route> 
        <Route exact path = "*" >
        <NotFound> </NotFound> 
        </Route> 
        </Switch> 
        </Router>
      

      <Footer></Footer>
    </div>
  );
}

export default App;
