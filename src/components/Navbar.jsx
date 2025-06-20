import { Link } from "react-router-dom";
import Card from "./Card";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <Link to="/" className="brand">
          <Logo />
        </Link>
        <ul>
          <ol>
            <Link to="/projects">
              <Card />
            </Link>
          </ol>
        </ul>
      </div>
    </nav>
  );
}
