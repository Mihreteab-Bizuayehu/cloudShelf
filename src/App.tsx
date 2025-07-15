import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Product from './components/Product'
import Cart from './components/Cart'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="wrappe-container">
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
