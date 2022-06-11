import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './Pages/Aboutme/Aboutme';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className='px-5'>
       <Header></Header>
        
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="*" element={<NotFound/>} />

      </Routes>

    </div>
  );
}

export default App;
