import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex flex-col h-screen px-2 lg:px-8 py-2'>
      <BrowserRouter>
        <Navbar />
        <div className='basis-full'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
