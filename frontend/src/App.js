import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages
import Home from './pages/Home'

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='mx-8 my-4'>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
