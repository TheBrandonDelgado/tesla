import './App.css';
import HeroBanner from './components/heroBanner/HeroBanner';
import Header from './components/header/Header';
import Products from './components/products/Products';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <Products />
    </div>
  );
}

export default App;
