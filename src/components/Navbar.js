import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-wrapper">
                <nav className="main-nav">
                  <Link to="/projects" className="nav-link">Projects</Link>
                  <Link to="/colors" className="nav-link">Colors</Link>
                  <Link to="/sketchbook" className="nav-link">Sketchbook</Link>
                  <Link to="/" className="nav-link">About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar