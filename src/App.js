import './App.css';
import HeroBanner from './components/heroBanner/HeroBanner';
import Header from './components/header/Header';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
