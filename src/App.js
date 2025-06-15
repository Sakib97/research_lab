import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import People from './pages/People';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <NavigationBar></NavigationBar>
        </div>

        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/people" element={<People />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>

          </Routes>
        </div>

        <div>
          <Footer></Footer>
        </div>

      </div>
    </Router>

  );
}

export default App;
