import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/heroBanner/HeroBanner';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
    </div>
  );
}

export default App;
