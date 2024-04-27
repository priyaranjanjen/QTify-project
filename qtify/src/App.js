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
      <RenderCards text={"Top Albums"}/>
      <RenderCards text={"New Albums"}/>
      <hr/>

    </>
  );
}

export default App;
