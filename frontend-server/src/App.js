import './App.scss';
import CatNav from './components/CatNav';
import NavBar from "./components/NavBar";
import MainComp from './components/MainComp';
import { Routes, Route } from 'react-router-dom';
import ProdDetails from './components/ProdDetails';
import Cart from './components/CartComp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CatNav />
      <Routes>
        <Route path='/'>
          <Route index element={<MainComp/>}/>
          <Route path='/prodDet/:id' element={<ProdDetails/>}/>
          <Route path='/cart' element={<Cart />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
