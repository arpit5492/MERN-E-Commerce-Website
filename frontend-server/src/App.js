import './App.scss';
import CatNav from './components/CatNav';
import NavBar from "./components/NavBar";
import MainComp from './components/MainComp';
import { Routes, Route } from 'react-router-dom';
import ProdDetails from './components/ProdDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CatNav />
      <Routes>
        <Route path='/' element={<MainComp/>}/>
        <Route path='/prodDet' element={<ProdDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
