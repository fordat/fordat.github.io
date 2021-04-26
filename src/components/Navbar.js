import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-wrapper">
                <nav className="main-nav">
                    <Link to="/home" className="nav-link">Home</Link>
                    {/* <Link to="/work" className="nav-link">Work</Link> */}
                    <Link to="/painting" className="nav-link">Painting</Link>
                    <Link to="/" className="nav-link">About</Link>
                </nav>
            </div>
        )
    }
}

export default Navbar