import React, { useState } from 'react'

const App = () => {
  const [countNumber,setCountNumber]=useState(0)

  const handleIn =()=>{
    setCountNumber(countNumber+1)
  }

  const handleDe =()=>{

    setCountNumber(countNumber-1)
  }

  const handlereset =()=>{
    setCountNumber(0)
  }


  return (

    <>
    <h1>{countNumber}</h1>
    <button onClick={handleIn}>Increase</button>
    <button onClick={handleDe}>Decrease</button>
    <button onClick={handlereset}>ReSet</button>
    </>
  )
}

export default App