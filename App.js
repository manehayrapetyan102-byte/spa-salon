// React.js_ը մեր Փոխարեն Պատրաստում է Դետալններ;
// Գլխավոր #root, 2ական > .App;

import './App.css';
import Header from './component/Header';
import Avocado from './component/Avocado';
import About from './component/About';
import Product from './component/Product';
import Blog from './component/Blog';
import Reviews from './component/Reviews';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {  
  return (
    <div className="App">
        <Header />
        <Avocado />
        <About />
        <Product />
        <Blog />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;