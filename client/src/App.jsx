
import {Routes , Route  } from 'react-router-dom'
import Index from './components'
import Login from './Login'
import { useEffect } from 'react'

function App() {

  

  useEffect(()=>{
    
  },[])

  return (
    <div className="w-100">
      
      <Routes >
            
            <Route path="/*" element={<Index/>} />
            <Route path="/login" element={<Login />} />
            
            
            
        </Routes>
    </div>
  )
}

export default App
