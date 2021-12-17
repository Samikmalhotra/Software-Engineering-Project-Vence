import './App.css';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import Auth from './pages/Auth.jsx';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path = 'login' element={<Auth/>}/>
          </Routes>
          

        </Router>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
