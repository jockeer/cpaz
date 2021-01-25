
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//COMPONENTS
import Header from './components/layouts/Header'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router> 
  );
}

export default App;
