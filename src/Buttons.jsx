import React from 'react'
import { Link } from 'react-router-dom'

function Buttons() {
  return (
      <div style={{margin:'40px 100px 0',display:'flex',gap:'20px' }}>
      <Link to="/"  style={{color:'white',textDecoration:"none"}} >
      <button style={{padding:'.5rem',background:'#4d72be',border:'none',color:"white",cursor:'pointer'}} > 
      Add New person</button>
      </Link> 
        <Link to="/retrive" style={{color:'white',textDecoration:"none"}} > 
        <button style={{padding:'.5rem',background:'#4d72be',border:'none',color:"white",cursor:'pointer'}} > 
        
        Retrive Information
        </button></Link>
        
    </div>
  )
}

export default Buttons