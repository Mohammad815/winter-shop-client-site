import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/HomeSection/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
