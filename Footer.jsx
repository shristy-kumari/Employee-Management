import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-dark text-center">
        <h4 className="text-white p-3 text-decoration-underline">
          aptron&copy;technoloynoida.com
        </h4>
        <div  className="footer" style={{marginTop:'-20px',paddingBottom:'10px'}}>
          <NavLink to="/" className="text-white px-2">Home</NavLink>
          <NavLink to="/about" className="text-white px-2">About</NavLink>
          <NavLink to="/contact" className="text-white">Contact</NavLink>
        </div>
      </div>
    </>
  );
}
