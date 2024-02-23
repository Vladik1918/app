import './App.css';
import CartDetails from './components/CartDetails';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
