
import "../src/style.css";
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import ShopSection from './Components/ShopSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <ShopSection></ShopSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
