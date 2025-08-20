import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import Colors from './components/Colors.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Sketchbook from './components/Sketchbook.js';

class Main extends React.Component {

    state = {
        background: ""
    };

    changeBackground = (color) => {
        let background = color;
        // add state
        this.setState({background});
        document.body.style = `background: ${background};`;
    };

    render() {
        return (
            <div>
              <div className="App-box">
                <h1 className="content">Ford Atwater</h1>
                <BrowserRouter>
                  <Navbar />
                  <br />
                  <Route path="/colors" exact render={() => <Colors changeBackground={this.changeBackground}></Colors>} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/sketchbook" component={Sketchbook} />
                  <Route path="/" exact component={About} />
                </BrowserRouter>
              </div>
            </div>
          );
    }

}

export default Main