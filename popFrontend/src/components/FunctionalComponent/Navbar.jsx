import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css";
const Navbar = () => {
  var [dropdown, showDropdown] = useState(true);

  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <div className="dropdown">
          <span
            className="link"
            onClick={() => showDropdown(!dropdown)}
            // onMouseClick={() => showDropdown(!dropdown)}
          >
            Hooks
          </span>
          {dropdown && (
            <ol>
              <li>
                <Link to="/use-state">useState</Link>
              </li>
              <li>
                <Link to="/use-effect">useEffect</Link>
              </li>
            </ol>
          )}
        </div>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/res">PropDrilling</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
