import Navbar from './components/navbar';
import HeroBackground from './components/hero';
// import Card from './components/card';
import RenderCards from './components/showCards';
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <HeroBackground/>
      <hr/>
      <RenderCards/>
    </>
  );
}

export default App;
