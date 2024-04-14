import './App.scss';
import CatNav from './components/CatNav';
import NavBar from "./components/NavBar";
import MainComp from './components/MainComp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CatNav />
      <Routes>
        <Route path='/' element={<MainComp/>}/>
      </Routes>
    </div>
  );
}

export default App;
