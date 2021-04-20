import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="main-nav">
                <Link to="/">About</Link>
                <Link to="/work" className="nav-link">Work</Link>
                <Link to="/painting" className="nav-link">Painting</Link>
            </nav>
        )
    }
}

export default Navbar