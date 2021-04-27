import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from './components/Navbar.js';
import Colors from './components/Colors.js';
import About from './components/About.js';
import Work from './components/Work.js';
import Sketchbook from './components/Sketchbook.js';

class Main extends React.Component {

    state = {
        background: ""
    };

    changeBackground = (color) => {

        let background = color;
        console.log("changed the background to " + background);
        
        // take a copy of the existing state
        let oldBackground = {...this.state.background};

        oldBackground = background;
        // add state
        this.setState({background: background});
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
                  <Route path="/work" component={Work} />
                  <Route path="/sketchbook" component={Sketchbook} />
                  <Route path="/" exact component={About} />
                </BrowserRouter>
              </div>
            </div>
          );
    }

}

export default Main