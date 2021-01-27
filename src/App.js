
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/layouts/Footer';

//COMPONENTS
import Header from './components/layouts/Header'
import Home from './components/pages/Home'
import Modulo1 from './components/pages/modulos/Modulo1';
import Modulo2 from './components/pages/modulos/Modulo2';
import Modulo3 from './components/pages/modulos/Modulo3';
import Modulo4 from './components/pages/modulos/Modulo4';
import Modulo5 from './components/pages/modulos/Modulo5';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/modulo-1' component={Modulo1}/>
        <Route exact path='/modulo-2' component={Modulo2}/>
        <Route exact path='/modulo-3' component={Modulo3}/>
        <Route exact path='/modulo-4' component={Modulo4}/>
        <Route exact path='/modulo-5' component={Modulo5}/>
      </Switch>
      <Footer/>
    </Router> 
  );
}

export default App;
