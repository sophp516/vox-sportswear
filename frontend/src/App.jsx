import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import MyCart from './pages/MyCart/MyCart.jsx';
import Products from './pages/Products/Products.jsx';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/mycart" element={<MyCart/>}/>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
