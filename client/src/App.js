import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Buses from './pages/Buses';
import PageNotFound from './pages/PageNotFound';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <main className='container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/buses' element={<Buses />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>

    </>
  )
}

export default App;