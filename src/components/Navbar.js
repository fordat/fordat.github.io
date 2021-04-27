import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-wrapper">
                <nav className="main-nav">
                    <Link to="/colors" className="nav-link">Colors</Link>
                    {/* <Link to="/work" className="nav-link">Work</Link> */}
                    <Link to="/sketchbook" className="nav-link">Sketchbook</Link>
                    <Link to="/" className="nav-link">About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar