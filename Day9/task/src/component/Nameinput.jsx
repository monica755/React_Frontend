import { useState } from "react"

const Nameinput = () => {
 const [nameUser,setNameUser] = useState("")
 const handleChange = (event)=> {

    setNameUser(event.target.value)



  }


    return (
    <>
    <div>
         <input type="text" onChange={handleChange} placeholder="Enter the Name"  />
         <p>{nameUser}</p>
        
    </div>
    
    </>
  )
}

export default Nameinput