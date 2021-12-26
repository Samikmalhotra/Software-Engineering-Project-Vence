import './App.css';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import Login from './pages/Login.jsx';
import SignupScreen from './pages/Signup';
import Shops from './pages/Shops';
import ShopScreen from './pages/ShopScreen';
import ShopScreenAdmin from './pages/ShopScreenAdmin';
import Transaction from './pages/Transaction'
import FinalTransaction from './pages/FinalTransaction';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path = 'login' element={<Login/>}/>
            <Route path = 'signup' element={<SignupScreen/>}/>
            <Route path = 'shops' element={<Shops/>}/>
            <Route path = 'shops/:shopId' element={<ShopScreen/>}/>
            <Route path = 'shops/:shopId/generateinvoice' element={<Transaction/>}/>
            <Route path = "shops/:shopId/transaction" element={<FinalTransaction/>}/>
            <Route path = "admin" element={<ShopScreenAdmin/>}/>

          </Routes>
          

        </Router>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default App;
