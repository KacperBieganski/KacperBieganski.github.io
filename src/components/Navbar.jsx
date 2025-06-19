import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-content">
        <Link to="/" className="brand">
          Kacper Biegański
        </Link>
        <ul>
          <ol>
            <Link to="/projects">Projekty</Link>
          </ol>
        </ul>
      </div>
    </nav>
  );
}
