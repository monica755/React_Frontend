import {Route,Routes} from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import Courses from "./pages/Courses"
import Gallery from "./pages/Gallery"
import Help from "./pages/Help"
import Service from "./pages/Service"







const App = () => {
  return (
    <>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contacts" element={<Contacts/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/service" element={<Service/>}/>
        </Routes>
     </>
  )
}
export default App