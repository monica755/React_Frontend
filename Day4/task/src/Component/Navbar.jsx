import { Link } from "react-router-dom";
import logo from "../assets/vite.svg"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <div>
              <img src={logo} alt="logo"  />
        </div>
        <div className=" flex gap-10">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contacts"}>Contacts</Link>
          <Link to={"/Help"}>Help</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
