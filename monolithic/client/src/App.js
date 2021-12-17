import './App.css';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path = '/login' component={Auth}/>
          </Switch>
          

        </Router>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
