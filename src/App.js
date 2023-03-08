import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import axios from 'axios'

// pages and components
import Home from './pages/Home';
import Places from './pages/Places';
import Activities from './pages/Activities';
import About from './pages/About';
import Contacts from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  // sets the user to the user in the AuthContext
  const { user } = useAuthContext();

  const upload = async ()=>{
    const response = await axios.post(
      "https://capstone-backend-51b9.onrender.com"
    )
  }

  // html displayed on the index.html for the website, using components and routes
  return (
    <div className="App">
      <BrowserRouter>

        {/* nav and header displayed on every page */}
        <Navbar />
        <Header />

        {/* displays different components depending on what page you are on */}
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={<Navigate to="/Home" />}
            />
            <Route
              path='/Home'
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

            {/* If there is no user, show the /Login page. If you login (update the state with a user), navigate to the /Home page */}
            <Route
              path='user/Login'
              element={!user ? <Login /> : <Navigate to="/Home" />}
            />

            {/* If there is no user, show the /Signup page. If you signup (update the state with a user), navigate to the /Home page */}
            <Route
              path='user/Signup'
              element={!user ? <Signup /> : <Navigate to="/Home" />}
            />
          </Routes>
        </div>
     

        {/* footer displayed on every page */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
