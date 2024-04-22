// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Burger from './component/Burger';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chinese from './component/Chinese';
import Pizza from './component/Pizza';
import Biryani from './component/Biryani';
import North from './component/North';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <>
   

   <Router>
    
   <Header/>

    
  <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/burger">
          <Burger />
      </Route>
      <Route path="/chinese">
          <Chinese/>
      </Route>
      <Route path="/pizza">
          <Pizza/>
      </Route>
      <Route path="/biryani">
          <Biryani/>
      </Route>
      <Route path="/north">
          <North/>
      </Route>
  </Switch>
</Router> 
   </>
  );
}

export default App;
