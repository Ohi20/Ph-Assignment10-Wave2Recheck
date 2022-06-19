import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './Pages/Aboutme/Aboutme';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Requireauth from './Pages/Login/Requireauth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Checkout from './Pages/Services/Checkout';


function App() {
  return (
    <div className='px-5'>
       <Header></Header>
        
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/checkout" element={<Requireauth><Checkout/></Requireauth>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>

    </div>
  );
}

export default App;
