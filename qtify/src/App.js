import Navbar from './components/navbar';
import HeroBackground from './components/hero';
import RenderCards from './components/showCards';
import Faq from './components/faq';
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <HeroBackground/>
      <RenderCards text={"Top Albums"} type="Albums"/>
      <hr/>
      <RenderCards text={"New Albums"} type="Albums"/>
      <hr/>
      <RenderCards text={"Songs"} type="Songs"/>
      <hr/>
      <Faq/>

    </>
  );
}

export default App;
