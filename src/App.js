import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage';
import Register from './Register';
import Login from './Login';
import Homeapp from './Homeapp'



function App() {
  return (

    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/homeapp" component={Homeapp} />
          
        </Switch>
      </Router>
    </div>

  );
}

export default App;