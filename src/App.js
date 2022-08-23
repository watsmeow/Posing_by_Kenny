import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Posing from './pages/Posing';
import Apparel from './pages/Apparel';
import PurchasePosing from './pages/PurchasePosing';

function App() {
  return (
    <div className="App">
      <Nav/>
      <PurchasePosing/>
      <Footer/>
    </div>
  );
}

export default App;
