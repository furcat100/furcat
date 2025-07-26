import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './routes/Home.jsx'
import CatsViewPage from './routes/CatsViewPage .jsx'

function App() {


  return (
   
   <div>
     <Routes> 

      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<CatsViewPage />} />
      


    </Routes>
   </div>


  )
}

export default App
