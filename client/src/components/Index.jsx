import React, { useEffect } from 'react'
import Add from "./Add"
import Edit from "./Edit"
import Navbar from "./Navbar"
import Table from "./Table"
import {Routes , Route  } from 'react-router-dom'


const Index = () => {
  
  useEffect(()=>{
    const token = localStorage.getItem('token')
    fetch(import.meta.env.VITE_APP_API+'/authen',{
      method:'post',
      headers:{
        "Content-Type":'application/json',
        "Authorization":'Bearer '+token
      }
    }).then(res => res.json()).then((res)=>{
      if (res.msg == 'error') {
        localStorage.removeItem('token')
        window.location = '/login'
      }
    })
  })

  return (
    <div>
    
        <Navbar />
      
        <Routes >
            
            <Route path="/" element={<Table />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
            
            
            
        </Routes>
    </div>
  )
}

export default Index