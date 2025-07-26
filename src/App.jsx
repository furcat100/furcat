import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './routes/Home.jsx'


function App() {


  return (
   
   <div className='scroll-smooth' >
     <Routes> 

      <Route path="/" element={<Home />} />
      


    </Routes>
   </div>


  )
}

export default App
