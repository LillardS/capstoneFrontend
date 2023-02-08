import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import Places from './pages/Places';
import Activities from './pages/Activities';
import About from './pages/About';
import Contacts from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Header />
        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route 
              path='/Places'
              element={<Places />}
            />
            <Route 
              path='/Activities'
              element={<Activities />}
            />
            <Route 
              path='/About'
              element={<About />}
            />
            <Route 
              path='/Contacts'
              element={<Contacts />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
