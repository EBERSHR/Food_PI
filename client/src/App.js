import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { getAllTypes, getRecipes } from './Redux/Actions';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Detalle from './Components/Detalle';
import Crear from './Components/Crear';

function App() {

  const dispatch = useDispatch();

  dispatch(getAllTypes());
  dispatch(getRecipes());

  return (
    <div className="App">
      <Router>
        <Route path="/" component={NavBar}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/detalle/:id" render={({ match }) => <Detalle id={match.params.id} />} ></Route>
        <Route exact path="/crear" component={Crear}></Route>
      </Router>
    </div>
  );
}

export default App;
