import React, { useState } from 'react'

const Textchange = () => {

  const [title,setTitle] = useState("Hello React")
 
  const [isActive,setIsActive] = useState(true)

  const changetext = ()=>{

      setTitle("Welcome to react")

  }

  const SHowText = ()=>{

    setIsActive(!isActive)

  }

  return (
    <>

    <h3>{title}</h3>
    <button onClick={changetext}>Click To change</button>
    
   
    </>
  )
}

export default Textchange