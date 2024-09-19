import React, { useState } from 'react'
import Function from './Function'
import Class from './Class'
import './Merge.css'

const Merge = () => {

    const[Click,setClick]=useState(false)
    const[Clickone,setClickone]=useState(false)
  return (
    <>
    <h1>Styling using Functional and Class Component</h1>
     <div className="main">
      <div className='main-one'>
    <button onClick={()=>setClick(!Click)}>To see styling in functional component</button>
    {Click? <Function/>:null}
    </div>
    <div className='main-one'>
    <button onClick={()=>setClickone(!Clickone)}>To see styling in Class component </button>
    {Clickone? <Class/>:null}
    </div>
   </div>
    
    </>
  )
}

export default Merge