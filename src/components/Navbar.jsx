import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { isToken } = useContext(AuthContext);
  return (
    <nav className="flex justify-between items-center h-[4rem]">
      <div>
        <Link to="/home" className="font-bold text-2xl" id="logo">
          PHLOX
        </Link>
        <Link to="/home" className="font-semibold ms-5">
          Home
        </Link>
        <Link to="/shop" className="font-semibold ms-5">
          Shop
        </Link>
        <Link to="/about" className="font-semibold ms-5">
          About Us
        </Link>
        <Link to="/blog" className="font-semibold ms-5">
          Blog
        </Link>
        <Link to="/contact" className="font-semibold ms-5">
          Contact Us
        </Link>
      </div>
      <div>
        <Link to={isToken ? "/" : "/login"}>
          {isToken ? "Sign Out" : "Login"}
        </Link>
        <button className="font-semibold ms-5 me-2">Search</button>
        <button className="font-semibold">Cart</button>
      </div>
    </nav>
  );
}
