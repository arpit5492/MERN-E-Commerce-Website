import './App.scss';
import CatNav from './components/CatNav';
import NavBar from "./components/NavBar";
import MainComp from './components/MainComp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CatNav />
      <MainComp />
    </div>
  );
}

export default App;
