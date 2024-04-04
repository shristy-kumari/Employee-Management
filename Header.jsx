import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <NavLink to={'/register'} className="btn btn-primary mx-2">
                  Register
                </NavLink>
                <NavLink to="/login" className="btn btn-success">
                  Login
                </NavLink>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
