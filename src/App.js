import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Shop from './page/Shop';
import Blog from './page/Blog';
import About from './page/About';
import Contact from './page/Contact'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './component/CartContect';
import Features from './page/Features';



function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
      
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
